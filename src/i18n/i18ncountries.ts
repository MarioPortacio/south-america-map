import type { CountryCode } from "../types/CountryCode";
import type { Language } from "../context/LanguageContext";

export type CountryTranslationFields = {
  food?: string;
  funFact?: string;
  landmark?: string;
  population?: string;
  currency?: string;
  language?: string;
  region?: string;
  name?: string;
};


export const countriesTranslations: Partial<
  Record<CountryCode, Record<Language, CountryTranslationFields>>
> = {
  ARG: {
    es: {
        name: "Argentina",
        population: "46 millones",
        currency: "Peso argentino",
        language: "Español",
        food: "Asado",
        landmark: "Cataratas de Iguazú",
        funFact: "Cuna del tango y Messi",
        region: "Cono Sur",
        
    },
    en: {
        name: "Argentina",
        population: "46 million",
        currency: "Argentine Peso",
        language: "Spanish",
        food: "Asado",
        landmark: "Iguazú Falls",
        funFact: "Home of tango and Messi",
        region: "Southern Cone",
    },
  },
  BRA: {
    es: {
        name: "Brasil",
        population: "203 millones",
        currency: "Real brasileño",
        language: "Portugués",
        food: "Feijoada",
        landmark: "Cristo Redentor",
        funFact: "Tiene la mayor parte de la Amazonía",
        region: "Amazónica",
      
    },
    en: {
        name: "Brazil",
        population: "203 million",
        currency: "Brazilian Real",
        language: "Portuguese",
        food: "Feijoada",
        landmark: "Christ the Redeemer",
        funFact: "Contains most of the Amazon rainforest",
        region: "Amazonica",
    },
  },
  BOL: {
    es: {
        name: "Bolivia",
        population: "12 millones",
        currency: "Boliviano",
        language: "Español / Quechua / Ayamara",
        food: "Salteñas",
        landmark: "Salar de Uyuni",
        funFact: "Tiene dos capitales",
        region: "Andina",
      
    },
    en: {
        name: "Bolivia",
        population: "12 million",
        currency: "Boliviano",
        language: "Spanish / Quechua / Aymara",
        food: "Salteñas",
        landmark: "Salar de Uyuni",
        funFact: "Has two capitals",
        region: "Andina",
    },
  },
  CHL: {
    es: {
        name: "Chile",
        population: "19 millones",
        currency: "Peso chileno",
        language: "Español",
        food: "Empanadas",
        landmark: "Torres del Paine",
        funFact: "Uno de los países más largos del mundo",
        region: "Cono Sur",
      
    },
    en: {
        name: "Chile",
        population: "19 million",
        currency: "Chilean Peso",
        language: "Spanish",
        food: "Empanadas",
        landmark: "Torres del Paine",
        funFact: "One of the longest countries in the world",
        region: "Southern Cone",
    },
  },
  COL: {
    es: {
        name: "Colombia",
        population: "52 millones",
        currency: "Peso colombiano",
        language: "Español",
        food: "Bandeja paisa",
        landmark: "Ciudad Perdida",
        funFact: "Uno de los países con mayor biodiversidad",
        region: "Andina",
      
    },
    en: {
        name: "Colombia",
        population: "52 million",
        currency: "Colombian Peso",
        language: "Spanish",
        food: "Bandeja paisa",
        landmark: "Ciudad Perdida",
        funFact: "One of the most biodiverse countries",
        region: "Andina",
    },
  },
  ECU: {
    es: {
        name: "Ecuador",
        population: "18 millones",
        currency: "Dólar estadounidense",
        language: "Español",
        food: "Hornado",
        landmark: "Islas Galápagos",
        funFact: "Lleva el nombre de la línea del Ecuador",
        region: "Andina",

    },
    en: {
        name: "Ecuador",
        population: "18 million",
        currency: "US Dollar",
        language: "Spanish",
        food: "Hornado",
        landmark: "Galápagos Islands",
        funFact: "Named after the Equator line",
        region: "Andina",
    },
  },
  GUY: {
    es: {
        name: "Guyana",
        population: "800 mil",
        currency: "Dólar guyanés",
        language: "Inglés",
        food: "Pepperpot",
        landmark: "Cascadas Kaieteur",
        funFact: "El único país de habla inglesa de América del Sur",
        region: "Caribe",

    },
    en: {
        name: "Guyana",
        population: "800 thousand",
        currency: "Guyanese Dollar",
        language: "English",
        food: "Pepperpot",
        landmark: "Kaieteur Falls",
        funFact: "Only English-speaking country in South America",
        region: "Caribbean",
    },
  },
  PRY: {
    es: {
        name: "Paraguay",
        population: "7 millones",
        currency: "Guaraní",
        language: "Español / Guaraní",
        food: "Sopa paraguaya",
        landmark: "Presa de Itaipú",
        funFact: "Nación bilingüe",
        region: "Cono Sur",

    },
    en: {
        name: "Paraguay",
        population: "7 million",
        currency: "Guaraní",
        language: "Spanish / Guaraní",
        food: "Sopa paraguaya",
        landmark: "Itaipú Dam",
        funFact: "Bilingual nation",
        region: "Southern Cone",
    },
  },
  PER: {
    es: {
        name: "Perú",
        population: "34 millones",
        currency: "Sol",
        language: "Español / Quechua",
        food: "Ceviche",
        landmark: "Machu Picchu",
        funFact: "Una de las mejores cocinas del mundo",
        region: "Andina",

    },
    en: {
        name: "Peru",
        population: "34 million",
        currency: "Sol",
        language: "Spanish / Quechua",
        food: "Ceviche",
        landmark: "Machu Picchu",
        funFact: "One of the world's top cuisines",
        region: "Andina",
    },
  },
  SUR: {
    es: {
        name: "Surinam",
        population: "600 mil",
        currency: "Dólar surinamense",
        language: "Holandés",
        food: "Pom",
        landmark: "Reserva Natural del Centro de Surinam",
        funFact: "Antigua colonia holandesa",
        region: "Caribe",

    },
    en: {
        name: "Suriname",
        population: "600 thousand",
        currency: "Surinamese Dollar",
        language: "Dutch",
        food: "Pom",
        landmark: "Central Suriname Nature Reserve",
        funFact: "Former Dutch colony",
        region: "Caribbean",
    },
  },
  URY: {
    es: {
        name: "Uruguay",
        population: "3.5 millones",
        currency: "Peso uruguayo",
        language: "Español",
        food: "Chivito",
        landmark: "Punta del Este",
        funFact: "Una de las democracias más estables de la región.",
        region: "Cono Sur",

    },
    en: {
        name: "Uruguay",
        population: "3.5 million",
        currency: "Uruguayan Peso",
        language: "Spanish",
        food: "Chivito",
        landmark: "Punta del Este",
        funFact: "One of the most stable democracies in the region",
        region: "Southern Cone",
    },
  },
  VEN: {
    es: {
        name: "Venezuela",
        population: "28 millones",
        currency: "Bolívar",
        language: "Español",
        food: "Arepas",
        landmark: "Salto Angel",
        funFact: "Tiene la cascada más alta del mundo.",
        region: "Caribe",

    },
    en: {
        name: "Venezuela",
        population: "28 million",
        currency: "Bolívar",
        language: "Spanish",
        food: "Arepas",
        landmark: "Angel Falls",
        funFact: "Has the world's highest waterfall",
        region: "Caribbean",
    },
  },
};
