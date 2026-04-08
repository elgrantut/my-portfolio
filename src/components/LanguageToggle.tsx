'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslations();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label={t.language.toggleLabel}
      title={t.language.toggleLabel}
    >
      <Languages className="h-5 w-5 text-foreground" />
      <span className="text-xs font-semibold text-foreground">
        {language === 'en' ? t.language.shortEn : t.language.shortEs}
      </span>
    </button>
  );
}
