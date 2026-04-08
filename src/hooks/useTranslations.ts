'use client';

import { useLanguage } from '@/context/LanguageContext';

export function useTranslations() {
  const { translations } = useLanguage();
  return translations;
}
