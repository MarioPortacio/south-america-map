import type { RegionKey } from "../types/Region";

export const regionTranslations: Record<
  "es" | "en",
  Record<RegionKey, string>
> = {
  es: {
    andina: "Andina",
    caribe: "Caribe",
    conoSur: "Cono Sur",
    amazonica: "Amazónica",
  },
  en: {
    andina: "Andean",
    caribe: "Caribbean",
    conoSur: "Southern Cone",
    amazonica: "Amazonian",
  },
};
