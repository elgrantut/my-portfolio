'use client';

import { useTranslation } from 'react-i18next';
import type { Language, TranslationDictionary } from '@/lib/i18n';

export function useTranslations() {
  const { i18n } = useTranslation();
  const language: Language =
    (i18n.resolvedLanguage ?? i18n.language) === 'es' ? 'es' : 'en';

  return i18n.getResourceBundle(
    language,
    'translation',
  ) as TranslationDictionary;
}
