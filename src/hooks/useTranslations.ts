'use client';

import { useTranslation } from 'react-i18next';
import { Language, TranslationDictionary } from '@/types/i18n';
import { resolveLanguage } from '@/i18n/config';

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
