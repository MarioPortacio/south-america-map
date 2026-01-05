import SouthAmericaMap from "./components/SouthAmericaMap";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import "./App.css";

function App() {

  const [colorMode, setColorMode] =
    useState<"region" | "country">("region");

  const { language } = useLanguage();
  const t = translations[language];


  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <head>
        <title>{t.appTitle}</title>
      </head>
      <header className="py-6 relative">
        <h1 className="text-4xl font-bold text-center">
          {/* South America Interactive Map */}
          {t.appTitle}
          
        </h1>

        <p className="text-center text-slate-500 dark:text-slate-400 mt-2">
          {/* Hover over a country to preview. Click to see details. */}
          {t.see}
        </p>

        <div className="absolute top-6 right-6">
          
          <ThemeToggle
            colorMode={colorMode}
            setColorMode={setColorMode}
          />
        </div>
        <div className="absolute top-6 left-6">
          <LanguageToggle
            
            />
        </div>
        
      </header>

      <main>
        
        <SouthAmericaMap colorMode={colorMode} />
        
      </main>

      <footer className="absolute bottom-6 left-10">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {/* Created by Mario Miguel Portacio Aparicio */}
            {t.created}
          </p>
        </footer>
    </div>
  );
}

export default App;
