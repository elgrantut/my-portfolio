'use client';

import { useTranslation } from 'react-i18next';
import { resolveLanguage } from '@/lib/i18n';
import { Language, TranslationDictionary } from '@/types/i18n';

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
