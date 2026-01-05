import { motion } from "framer-motion";
import type { Country } from "../types/Country";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

import { countriesTranslations } from "../i18n/i18ncountries";


interface Props {
  country: Country;
  onClose: () => void;
}

const CountryPanel = ({ country, onClose }: Props) => {
  const { language } = useLanguage();
  const t = translations[language];
  const ct = countriesTranslations[country.code]?.[language];
  return (
    <motion.aside
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{ x: 400 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-full sm:w-[360px] h-full 
           bg-white dark:bg-slate-800
           text-slate-900 dark:text-slate-100
           shadow-xl p-6 overflow-y-auto z-50"
    >
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 mb-4"
      >
        ←{t.back}
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {country.flag} {ct?.name ?? country.name}
      </h2>

      <ul className="space-y-2 text-sm">
        <li><strong>{t.capital}:</strong> {country.capital}</li>
        <li><strong>{t.population}:</strong> {ct?.population ?? country.population}</li>
        <li><strong>{t.currency}:</strong> {ct?.currency ?? country.currency}</li>
        <li><strong>{t.language}:</strong> {ct?.language ?? country.language}</li>
        <li><strong>{t.food}:</strong> {ct?.food ?? country.food}</li>
        <li><strong>{t.landmark}:</strong> {ct?.landmark ?? country.landmark}</li>
        <li><strong>{t.region}:</strong> {ct?.region ?? country.region}</li>
        <li><strong>{t.funFact}:</strong> {ct?.funFact ?? country.funFact}</li>
        
      </ul>
    </motion.aside>
  );
};

export default CountryPanel;
