import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }
  return context;
};

