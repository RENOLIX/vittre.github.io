import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DefaultProviders } from "./components/providers/default";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <DefaultProviders>
      <App />
    </DefaultProviders>
  </React.StrictMode>
);

// La page a été pré-rendue au build pour ce chemin : on "hydrate" le HTML existant.
// Sinon (dev, ou page servie via 404.html pour un autre chemin) : rendu classique.
const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
if (root.dataset.prerendered && normalize(root.dataset.prerendered) === normalize(window.location.pathname)) {
  ReactDOM.hydrateRoot(root, app);
} else {
  root.innerHTML = "";
  ReactDOM.createRoot(root).render(app);
}
