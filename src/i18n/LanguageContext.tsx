import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { en } from './translations/en';
import { es } from './translations/es';
import { fr } from './translations/fr';

export type Language = 'en' | 'es' | 'fr';

const translations = { en, es, fr } as const;

type TranslationKeys = typeof en;

type NestedKeyOf<T, Prefix extends string = ''> = T extends object
  ? { [K in keyof T & string]: NestedKeyOf<T[K], Prefix extends '' ? K : `${Prefix}.${K}`> }[keyof T & string]
  : Prefix;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: { code: Language; label: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGES = [
  { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
  { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
  { code: 'fr' as Language, label: 'Français', flag: '🇫🇷' },
];

function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return path;
    current = current[key];
  }
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const navigate = useNavigate();
  const langFromUrl = (params.lang as Language) || 'en';
  const [language, setLanguageState] = useState<Language>(
    ['en', 'es', 'fr'].includes(langFromUrl) ? langFromUrl : 'en'
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    if (['en', 'es', 'fr'].includes(pathParts[0])) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    navigate('/' + pathParts.join('/'));
  }, [navigate]);

  const t = useCallback((key: string): string => {
    const value = getNestedValue(translations[language], key);
    if (value === key) {
      // Fallback to English
      return getNestedValue(translations.en, key);
    }
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within a LanguageProvider');
  return context;
}
