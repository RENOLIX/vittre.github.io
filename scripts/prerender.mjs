// Pré-rendu statique : génère un vrai HTML (contenu + balises SEO) pour chaque page,
// afin que Google lise le contenu sans devoir exécuter le JavaScript.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = pathToFileURL(path.join(root, "dist-server", "entry-server.js")).href;
const { render, headTagsFor } = await import(serverEntry);

const template = readFileSync(path.join(dist, "index.html"), "utf-8");
if (!template.includes("<!--seo-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html : marqueurs <!--seo-head--> / <!--app-html--> introuvables");
}

const routes = [
  { url: "/", seo: "/", file: "index.html" },
  { url: "/about", seo: "/about", file: "about.html" },
  { url: "/nettoyage-vitres-metz", seo: "/nettoyage-vitres-metz", file: "nettoyage-vitres-metz.html" },
  { url: "/__404__", seo: "/404", file: "404.html" },
];

for (const { url, seo, file } of routes) {
  let html = template
    .replace("<!--seo-head-->", headTagsFor(seo))
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-prerendered="${seo === "/404" ? "" : url}">${render(url)}</div>`);
  // L'image du hero n'existe que sur l'accueil : pas de préchargement ailleurs.
  if (url !== "/") html = html.replace(/\s*<link rel="preload" as="image"[^>]*>/g, "");
  writeFileSync(path.join(dist, file), html);
  console.log(`prerender: ${url} -> dist/${file} (${(html.length / 1024).toFixed(1)} KB)`);
}

rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
