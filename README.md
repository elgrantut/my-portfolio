# My Portfolio

Personal portfolio built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and Motion. The homepage is composed from section components, project detail pages are generated from static data, and the contact flow uses Zod, TanStack Form, and a Next.js route backed by Resend.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Motion
- TanStack Form
- Zod
- Resend

## Getting Started

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
bun dev
bun run lint
bun run build
```

## Project Structure

- `src/app/`: App Router entrypoints, layout, homepage, dynamic project pages, and API routes.
- `src/components/sections/`: Homepage section components such as Hero, About, Work, Skills, and Contact.
- `src/components/ui/`: Shared UI primitives.
- `src/data/`: Static content for projects, skills, and contact links.
- `src/context/`: Client-side theme state and provider.
- `src/lib/`: Shared utilities and validation schemas.

## Contact Flow

The contact form is split across three layers:

- Client form state in `src/components/ContactForm.tsx`
- Shared validation schema in `src/lib/contact-schema.ts`
- Server delivery route in `src/app/api/contact/route.ts`

### Environment Variables

Create `.env.local` with:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

Notes:

- `CONTACT_FROM_EMAIL` must use a sender allowed by your Resend account.
- The route returns `500` when any of these variables are missing.
- Keep `new Resend(process.env.RESEND_API_KEY)` inside the request handler after env checks.

### Validation Rules

The shared Zod schema enforces:

- `name`: trimmed string, 2 to 80 characters
- `email`: trimmed valid email
- `message`: trimmed string, 10 to 1200 characters

The client validates on change and blur, then re-validates on submit before sending the request.

### Anti-Abuse Behavior

The contact flow currently includes both client-side and server-side protections:

- Hidden `website` honeypot field on the client and server
- Client-side submit cooldown of 30 seconds
- Server-side IP rate limit of 3 requests per minute
- Server-side duplicate submission cooldown of 5 minutes based on email plus message hash
- Origin and host validation before processing the request

The rate limit and dedupe stores are in-memory `Map` instances. That is acceptable for local development or a single instance, but it will not scale across multiple instances without shared storage.

### Request Lifecycle

1. The user submits the TanStack Form.
2. The client blocks obvious spam through the honeypot field and short local cooldown.
3. The API route validates origin, rate limit, request body, honeypot field, and Zod schema.
4. If the request is valid, the route sends a plain-text email through Resend.
5. The UI surfaces success or failure with Sonner toasts.

### Local Verification

To verify the contact flow locally:

1. Set the Resend environment variables in `.env.local`.
2. Run `bun dev`.
3. Submit the form from the contact section.
4. Confirm the success toast appears and the email arrives at `CONTACT_TO_EMAIL`.
5. Repeat submissions to verify cooldown and rate-limit behavior.

## Notes for Development

- This repo uses Bun for local commands.
- There is no automated test suite yet.
- `next/image` is configured with `images.unoptimized = true` in `next.config.ts`.
- Dynamic route `params` are promise-based in this codebase and should be awaited.
- If you touch framework APIs, check the relevant Next 16 docs in `node_modules/next/dist/docs/` first.
