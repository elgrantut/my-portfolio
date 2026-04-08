import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/contact-schema';
import type { RateLimitEntry } from '@/types/api';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const DEDUPE_WINDOW_MS = 300_000;

const rateLimitStore = new Map<string, RateLimitEntry>();
const dedupeStore = new Map<string, number>();

function normalizeIp(ip: string | null): string {
  if (!ip) return 'unknown';
  return ip.split(',')[0]?.trim() || 'unknown';
}

function getClientIp(request: NextRequest): string {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const xRealIp = request.headers.get('x-real-ip');
  return normalizeIp(xForwardedFor ?? xRealIp);
}

function cleanupStores(now: number) {
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  for (const [key, expiresAt] of dedupeStore.entries()) {
    if (expiresAt <= now) {
      dedupeStore.delete(key);
    }
  }
}

function consumeRateLimit(ip: string, now: number): boolean {
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return true;
}

function createSubmissionHash(email: string, message: string): string {
  return createHash('sha256')
    .update(`${email.toLowerCase()}|${message.toLowerCase()}`)
    .digest('hex');
}

function checkAndStoreDuplicate(hash: string, now: number): boolean {
  const existing = dedupeStore.get(hash);
  if (existing && existing > now) {
    return false;
  }

  dedupeStore.set(hash, now + DEDUPE_WINDOW_MS);
  return true;
}

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');

  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const now = Date.now();
  cleanupStores(now);

  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { message: 'Invalid request origin.' },
      { status: 403 },
    );
  }

  const ip = getClientIp(request);
  if (!consumeRateLimit(ip, now)) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again in a minute.' },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid request body.' },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== 'object') {
    return NextResponse.json(
      { message: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const maybeHoneypot = (payload as { website?: unknown }).website;
  if (typeof maybeHoneypot === 'string' && maybeHoneypot.trim()) {
    return NextResponse.json(
      { message: 'Invalid submission.' },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please check the form fields and try again.' },
      { status: 400 },
    );
  }

  const duplicateKey = createSubmissionHash(
    parsed.data.email,
    parsed.data.message,
  );
  if (!checkAndStoreDuplicate(duplicateKey, now)) {
    return NextResponse.json(
      {
        message:
          'This message was already sent recently. Please wait a few minutes.',
      },
      { status: 429 },
    );
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL
  ) {
    return NextResponse.json(
      { message: 'Contact service is not configured.' },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const text = [
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    '',
    'Message:',
    parsed.data.message,
  ].join('\n');

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: [process.env.CONTACT_TO_EMAIL],
    replyTo: parsed.data.email,
    subject: `New portfolio contact - ${parsed.data.name}`,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { message: 'Could not send your message right now. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { message: 'Message sent successfully.' },
    { status: 200 },
  );
}
