export const mapCountries = [
  { code: "COL", color: "blue" },
  { code: "PER", color: "green" },
  { code: "BRA", color: "yellow" },
  { code: "ARG", color: "sky" },
  { code: "CHL", color: "red" },
  { code: "BOL", color: "emerald" },
  { code: "PRY", color: "lime" },
  { code: "URY", color: "indigo" },
  { code: "VEN", color: "orange" },
  { code: "ECU", color: "teal" },
  { code: "GUY", color: "purple" },
  { code: "SUR", color: "pink" },
];

export const mapCountriesByCode = Object.fromEntries(
  mapCountries.map(c => [c.code, c.color])
);

