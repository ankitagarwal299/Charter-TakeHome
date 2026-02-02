import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import styles
import "./assets/styles/variables.css";
import "./assets/styles/global.css";
import "./assets/styles/components.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
