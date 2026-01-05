import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border
                 bg-white dark:bg-slate-800
                 text-slate-700 dark:text-slate-200
                 border-slate-200 dark:border-slate-700
                 hover:bg-slate-100 dark:hover:bg-slate-700
                 transition"
    >
      <Globe size={18} />
      <span className="text-sm font-medium">
        {language === "es" ? "Translate to english" : "Traducir al español"}
      </span>
    </button>
  );
};

export default LanguageToggle;
