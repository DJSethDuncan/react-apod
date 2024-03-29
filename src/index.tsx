import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { App } from "./components/App";

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("No root element found");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
