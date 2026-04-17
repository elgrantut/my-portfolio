import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import { Toaster } from 'sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const getBaseUrl = () => {
  // Vercel preview deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Production
  return 'https://masanche.dev';
};

const siteUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Matias Sanchez | Frontend Developer & Web Designer',
  description:
    'Frontend developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications with focus on performance, accessibility, and beautiful interfaces.',
  keywords: [
    'Frontend Developer',
    'Web Designer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Development',
    'UI/UX',
    'JavaScript',
    'Portfolio',
  ],
  authors: [{ name: 'Matias Sanchez', url: 'https://masanche.dev' }],
  creator: 'Matias Sanchez',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_AR',
    url: 'https://masanche.dev',
    siteName: 'Matias Sanchez Portfolio',
    title: 'Matias Sanchez | Frontend Developer & Web Designer',
    description:
      'Frontend developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications with focus on performance, accessibility, and beautiful interfaces.',
    images: [
      {
        url: '/images/og.webp',
        width: 1200,
        height: 630,
        alt: 'Matias Sanchez - Frontend Developer & Web Designer',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matias Sanchez | Frontend Developer & Web Designer',
    description:
      'Frontend developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications.',
    images: ['/images/og.webp'],
    creator: '@tuTwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <div className="grain-overlay" />
            <Header />
            {children}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
