import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";


type ColorMode = "region" | "country";

type ThemeToggleProps = {
  colorMode: ColorMode;
  setColorMode: React.Dispatch<React.SetStateAction<ColorMode>>;
};

const ThemeToggle = ({ colorMode, setColorMode }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useDarkMode();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-3">
      

      {/* Color mode toggle */}
      <button
        onClick={() =>
          setColorMode(prev => (prev === "region" ? "country" : "region"))
        }
        className="px-3 py-2 rounded-lg text-sm font-medium
                   bg-slate-200 dark:bg-slate-700
                   text-slate-800 dark:text-slate-100
                   hover:bg-slate-300 dark:hover:bg-slate-600
                   transition"
        aria-label="Toggle map color mode"
      >
        <span>
          {colorMode === "region"
            ? `🎨 ${t.colorByCountry}`
            : `🗺️ ${t.colorByRegion}`}
        </span>
      </button>



      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border 
                   bg-white dark:bg-slate-800
                   text-slate-700 dark:text-slate-200
                   border-slate-200 dark:border-slate-700
                   hover:bg-slate-100 dark:hover:bg-slate-700
                   transition"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        <span className="text-sm">
          {theme === "dark" 
          ? `${t.lightMode}` 
          : `${t.darkMode}`}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;



