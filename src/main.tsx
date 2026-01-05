import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext";
import { MapColorModeProvider } from "./context/MapColorModeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <MapColorModeProvider>
        <App />
      </MapColorModeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
