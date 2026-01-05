import type { RegionKey } from "./Region";
import type { CountryCode } from "./CountryCode";

export interface Country {
  code: CountryCode;
  name: string;
  capital: string;
  population: string;
  currency: string;
  language: string;
  food: string;
  landmark: string;
  funFact: string;
  flag: string;
  region: RegionKey;
}

