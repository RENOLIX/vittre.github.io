import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App.tsx";
import { DefaultProviders } from "./components/providers/default";
import { headTagsFor } from "./seo.ts";

/** Rendu HTML statique d'une route, utilisé au build par scripts/prerender.mjs */
export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <DefaultProviders>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </DefaultProviders>
    </React.StrictMode>,
  );
}

export { headTagsFor };
