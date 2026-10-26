import React, { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

type LanguageContextType = {
  language: 'EN' | 'TR';
  setLanguage: (lang: 'EN' | 'TR') => void;
  t: typeof translations.EN;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'EN' | 'TR'>('EN');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}