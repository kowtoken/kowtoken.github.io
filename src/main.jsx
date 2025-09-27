import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// 🔧 Απενεργοποιούμε το browser scroll restoration (fix για refresh)
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
