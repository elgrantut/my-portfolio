'use client';

import { useTranslation } from 'react-i18next';
import { resolveLanguage, type Language, type TranslationDictionary } from '@/lib/i18n';

export function useTranslations() {
  const { i18n } = useTranslation();
  const language: Language = resolveLanguage(
    i18n.resolvedLanguage ?? i18n.language,
  );

  return i18n.getResourceBundle(
    language,
    'translation',
  ) as TranslationDictionary;
}
