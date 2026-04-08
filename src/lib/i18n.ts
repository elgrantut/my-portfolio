'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '@/data/i18n/en';
import { es } from '@/data/i18n/es';

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
}

export { i18n };
