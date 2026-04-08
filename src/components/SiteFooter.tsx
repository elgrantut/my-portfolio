'use client';

import { useTranslations } from '@/hooks/useTranslations';

export default function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Portfolio.{' '}
            {t.footer.rightsReserved}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.footer.builtWith}{' '}
            <span className="text-emerald-500">Next.js</span>, Tailwind CSS &
            Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
