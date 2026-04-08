'use client';

import { useTranslations } from '@/hooks';

export default function SiteFooter() {
  const t = useTranslations();

  const toolsLinks = [
    {
      name: 'Next.js',
      href: 'https://nextjs.org',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com',
    },
    {
      name: 'Motion One',
      href: 'https://motion.dev',
    },
  ];

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground text-center">
          {t.footer.built.replace(
            '{{year}}',
            new Date().getFullYear().toString(),
          )}
          {toolsLinks.map((tool, index) => (
            <span key={tool.name}>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-500 transition-colors"
              >
                {tool.name}
              </a>
              {index < toolsLinks.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
