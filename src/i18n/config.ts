'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';
import type { Language } from '@/types/i18n';

export const supportedLanguages: Language[] = ['en', 'es'];

export function resolveLanguage(raw: string | undefined): Language {
  return raw === 'es' ? 'es' : 'en';
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });
} else {
  // Keep bundles in sync during HMR so server/client don't render stale keys.
  i18n.addResourceBundle('en', 'translation', en, true, true);
  i18n.addResourceBundle('es', 'translation', es, true, true);
}

export { i18n };
