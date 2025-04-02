import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/MediaQuery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import customFetch from "./utils/customFetch.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
