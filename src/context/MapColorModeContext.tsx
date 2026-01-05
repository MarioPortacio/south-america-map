import { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";


type ColorMode = "region" | "country";

interface MapColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const MapColorModeContext = createContext<MapColorModeContextType | undefined>(
  undefined
);

export const MapColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("region");

  const toggleColorMode = () => {
    setColorMode(prev => (prev === "region" ? "country" : "region"));
  };

  return (
    <MapColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </MapColorModeContext.Provider>
  );
};

export const useMapColorMode = () => {
  const context = useContext(MapColorModeContext);
  if (!context) {
    throw new Error(
      "useMapColorMode must be used within a MapColorModeProvider"
    );
  }
  return context;
};
