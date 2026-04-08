'use client';

import { useEffect, type ReactNode } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { i18n } from '@/lib/i18n';
import type { Language } from '@/data/i18n/types';

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const syncLanguage = (nextLanguage: string) => {
      const resolvedLanguage = nextLanguage === 'es' ? 'es' : 'en';
      document.documentElement.lang = resolvedLanguage;
      localStorage.setItem('language', resolvedLanguage);
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
  const language: Language =
    (instance.resolvedLanguage ?? instance.language) === 'es' ? 'es' : 'en';

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
