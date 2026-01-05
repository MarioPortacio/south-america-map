import { useState } from "react";
import { countries } from "../data/countries";
import { southAmericaPaths } from "../data/southAmericaPaths";
import CountryPanel from "./CountryPanel";
import type { Country } from "../types/Country";
import { regionColors } from "../data/regionColors";
import { mapCountriesByCode } from "../data/mapCountries";
import { countryColorClasses } from "../data/mapCountryColors";
import { regionTranslations } from "../i18n/regions";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { countriesTranslations } from "../i18n/i18ncountries";


type ColorMode = "region" | "country";

type SouthAmericaMapProps = {
  colorMode: ColorMode;
};


const SouthAmericaMap = ({ colorMode }: SouthAmericaMapProps) => {
  const { language } = useLanguage();
  //const country = countries[code];
  const t = translations[language];
  //const ct = countriesTranslations[country.code]?.[language];
  const [hovered, setHovered] = useState<Country | null>(null);
  const [selected, setSelected] = useState<Country | null>(null);

  return (
    <div className="flex justify-center mt-10 relative">
      <svg
        viewBox="0 100 400 550"
        className="w-[620px] sm:w-[420px] md:w-[520px] lg:w-[600px] h-auto"
      >
        {/* Países normales */}
        {southAmericaPaths
          .filter(({ code }) => hovered?.code !== code)
          .map(({ code, d }) => {
            const country = countries[code];
            if (!country) return null;

            const baseColor =
              colorMode === "region"
                ? regionColors[country.region]
                : countryColorClasses[
                    mapCountriesByCode[country.code]
                  ];

            return (
              <path
                key={code}
                d={d}
                className={`
                  cursor-pointer
                  stroke-white dark:stroke-slate-800
                  stroke-2
                  transition-transform duration-200 ease-out
                  ${baseColor}
                `}
                onMouseEnter={() => setHovered(country)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(country)}
              />
            );
          })}

        {/* País en hover (se renderiza al final → arriba) */}
        {hovered && (
          <path
            key={hovered.code}
            d={
              southAmericaPaths.find(
                p => p.code === hovered.code
              )?.d ?? ""
            }
            className={`
              cursor-pointer
              stroke-white dark:stroke-slate-800
              stroke-2
              transition-transform duration-200 ease-out
              ${
                colorMode === "region"
                  ? regionColors[hovered.region]
                  : countryColorClasses[
                      mapCountriesByCode[hovered.code]
                    ]
              }
              scale-110
              brightness-125
            `}
            style={{
              transformOrigin: "center",
              transformBox: "fill-box",
            }}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(hovered)}
          />
        )}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div
          className="absolute top-0 mt-[-40px]
                     bg-white dark:bg-slate-800
                     text-slate-900 dark:text-slate-100
                     px-4 py-2 rounded shadow
                     text-sm font-semibold pointer-events-none"
        >


          {/* {hovered.flag} {hovered.name} — {hovered.region} */}
          <div className="flex items-center gap-2">
          <img
            src={`/flags/${hovered.code}.png`}
            alt={hovered.name}
            className="w-5 h-4 rounded-sm"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          /> 
          
          {countriesTranslations[hovered.code]?.[language]?.name ?? hovered.name} — {t.region}: {regionTranslations[language][hovered.region]}

          </div>
          
        </div>
      )}

      {/* Overlay + Panel */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSelected(null)}
        >
          <CountryPanel
            country={selected}
            onClose={() => setSelected(null)}
          />
        </div>
      )}
    </div>
  );
};


export default SouthAmericaMap;
