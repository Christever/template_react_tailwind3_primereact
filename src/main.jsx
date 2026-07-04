import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

import "@/styles/index.css";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

import "@/styles/App.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
