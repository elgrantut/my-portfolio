'use client';

import { useEffect, type ReactNode } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { i18n, resolveLanguage } from '@/lib/i18n';
import { Language } from '@/types/i18n';

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const syncLanguage = (nextLanguage: string) => {
      const resolved = resolveLanguage(nextLanguage);
      document.documentElement.lang = resolved;
      localStorage.setItem('language', resolved);
    };

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'es' && i18n.language !== 'es') {
      void i18n.changeLanguage('es');
    } else {
      syncLanguage(i18n.resolvedLanguage ?? i18n.language);
    }

    i18n.on('languageChanged', syncLanguage);

    return () => {
      i18n.off('languageChanged', syncLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export function useLanguage() {
  const { i18n: instance } = useTranslation();
  const language: Language = resolveLanguage(
    instance.resolvedLanguage ?? instance.language,
  );

  return {
    language,
    setLanguage: (nextLanguage: Language) => {
      void instance.changeLanguage(nextLanguage);
    },
    toggleLanguage: () => {
      void instance.changeLanguage(language === 'en' ? 'es' : 'en');
    },
  };
}
