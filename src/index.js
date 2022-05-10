import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FunctionEvent from "./function.js"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
    <FunctionEvent />
  </StrictMode>
);
