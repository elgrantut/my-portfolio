'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en } from '@/data/i18n/en';
import { es } from '@/data/i18n/es';
import type { Language, Translations } from '@/data/i18n/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const savedLanguage = localStorage.getItem('language');
  return savedLanguage === 'es' ? 'es' : 'en';
}

function getTranslations(language: Language): Translations {
  return language === 'es' ? es : en;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((prev) => (prev === 'en' ? 'es' : 'en')),
      translations: getTranslations(language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
