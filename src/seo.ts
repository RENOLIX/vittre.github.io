/**
 * Données SEO centralisées : utilisées par le pré-rendu (scripts/prerender.mjs)
 * pour écrire le <head> de chaque page, et côté navigateur pour mettre à jour
 * le titre lors de la navigation interne.
 */

export const SITE_URL = "https://lvtvcleanservice.fr";
export const BUSINESS_NAME = "LVTV Clean Service";
export const PHONE_E164 = "+33609702019";
export const EMAIL = "Lvtvcleanservice@gmail.com";
export const OG_IMAGE = `${SITE_URL}/images/brand/og-image.jpg`;
export const FACEBOOK_URL = "https://www.facebook.com/p/LVTV-Clean-Service-61591446741505/";
export const SNAPCHAT_URL = "https://www.snapchat.com/add/lvtvclean";
export const LEGAL = {
  owner: "Sami Djennane",
  status: "Entrepreneur individuel",
  siren: "105 131 684",
  siret: "105 131 684 00018",
  ape: "81.22Z – Autres activités de nettoyage des bâtiments et nettoyage industriel",
  registeredOffice: "47 rue Vivienne, 75002 Paris",
};
export const ADDRESS = {
  street: "13 Rue du Vieil Amnéville",
  postalCode: "57360",
  city: "Amnéville",
};

export const CITIES_57 = [
  "Amnéville", "Metz", "Thionville", "Montigny-lès-Metz", "Forbach", "Sarreguemines", "Yutz",
  "Hayange", "Saint-Avold", "Sarrebourg", "Woippy", "Creutzwald", "Florange",
  "Fameck", "Maizières-lès-Metz", "Marly", "Hagondange", "Talange",
  "Boulay-Moselle", "Bitche",
];

export const CITIES_54 = [
  "Nancy", "Vandœuvre-lès-Nancy", "Lunéville", "Toul", "Pont-à-Mousson", "Longwy",
  "Villers-lès-Nancy", "Laxou", "Jarny", "Briey", "Villerupt", "Saint-Max",
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Dans quelles villes intervenez-vous pour le nettoyage de vitres ?",
    a: "LVTV Clean Service intervient dans toute la Moselle (57) et la Meurthe-et-Moselle (54) : Metz, Thionville, Forbach, Sarreguemines, Saint-Avold, Sarrebourg, Nancy, Lunéville, Toul, Pont-à-Mousson, Longwy et leurs environs.",
  },
  {
    q: "Travaillez-vous pour les particuliers et les professionnels ?",
    a: "Oui. Nous nettoyons les vitres des maisons, appartements, vérandas et baies vitrées pour les particuliers, ainsi que les vitrines de commerce, bureaux et façades vitrées pour les professionnels.",
  },
  {
    q: "Le nettoyage de vitres donne-t-il droit à un crédit d'impôt ?",
    a: "Oui, pour les particuliers : le lavage de vitres à domicile relève des services à la personne et ouvre droit à un crédit d'impôt de 50 % des sommes versées, dans la limite de 12 000 € de dépenses par an (plafond majoré selon la situation du foyer). Une attestation fiscale annuelle vous est remise. Les prestations pour les professionnels n'y ouvrent pas droit.",
  },
  {
    q: "Comment obtenir un devis pour le lavage de mes vitres ?",
    a: "Remplissez le formulaire de devis du site puis envoyez-le par WhatsApp ou par email, ou écrivez-nous directement sur WhatsApp au +33 6 09 70 20 19. Le devis est gratuit et sans engagement.",
  },
  {
    q: "Proposez-vous un entretien régulier des vitres ?",
    a: "Oui, nous proposons des interventions uniques ou des contrats d'entretien mensuels, bimensuels ou trimestriels, particulièrement adaptés aux vitrines de commerce et aux bureaux.",
  },
  {
    q: "Pouvez-vous intervenir en dehors des heures d'ouverture ?",
    a: "Oui. Nous sommes disponibles 7j/7 avec des horaires flexibles : tôt le matin, en soirée ou le week-end, afin de ne pas gêner l'activité de votre commerce ou de votre entreprise.",
  },
  {
    q: "Quels produits utilisez-vous pour nettoyer les vitres ?",
    a: "Nous utilisons des produits biodégradables, respectueux de l'environnement et de votre intérieur, pour un résultat sans traces ni coulures sur les vitres, encadrements et rebords.",
  },
  {
    q: "Nettoyez-vous aussi les stores, volets et vérandas ?",
    a: "Oui. En plus des vitres intérieures et extérieures, nous nettoyons les baies vitrées, vérandas, pergolas vitrées, stores, volets roulants et jalousies.",
  },
];

export const METZ_QUARTIERS = [
  "Centre-ville", "Nouvelle Ville", "Sablon", "Queuleu", "Plantières", "Bellecroix",
  "Borny", "Grigy", "Technopôle", "Magny", "Devant-les-Ponts", "Patrotte – Metz-Nord",
];

export const METZ_COMMUNES = [
  "Montigny-lès-Metz", "Woippy", "Marly", "Saint-Julien-lès-Metz", "Le Ban-Saint-Martin",
  "Longeville-lès-Metz", "Moulins-lès-Metz", "Scy-Chazelles", "Augny", "Ars-sur-Moselle",
  "Maizières-lès-Metz", "Peltre",
];

export const METZ_FAQ: { q: string; a: string }[] = [
  {
    q: "Intervenez-vous dans tous les quartiers de Metz ?",
    a: "Oui. Nous nettoyons les vitres dans tous les quartiers de Metz (Centre-ville, Nouvelle Ville, Sablon, Queuleu, Plantières, Borny, Magny, Devant-les-Ponts…) et dans les communes de Metz Métropole comme Montigny-lès-Metz, Woippy ou Marly.",
  },
  {
    q: "Sous quel délai pouvez-vous nettoyer mes vitres à Metz ?",
    a: "Basés à Amnéville, à une vingtaine de minutes de Metz, nous pouvons généralement intervenir sous 48h après validation du devis.",
  },
  {
    q: "Nettoyez-vous les vitrines des commerces du centre de Metz ?",
    a: "Oui. Nous entretenons les vitrines et devantures de commerces, y compris tôt le matin ou après la fermeture, avec des passages ponctuels ou réguliers selon vos besoins.",
  },
  {
    q: "Comment obtenir un devis pour un nettoyage de vitres à Metz ?",
    a: "Écrivez-nous sur WhatsApp au +33 6 09 70 20 19 ou remplissez le formulaire de devis du site. Le devis est gratuit et sans engagement.",
  },
];

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const PAGES: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "Nettoyage Vitres Moselle | Lavage de Vitres – LVTV Clean Service",
    description:
      "Nettoyage et lavage de vitres en Moselle (57) et Meurthe-et-Moselle (54) : maisons, vitrines, bureaux. 50 % de crédit d'impôt pour les particuliers, devis gratuit.",
  },
  "/about": {
    path: "/about",
    title: "Laveur de Vitres en Moselle – À propos | LVTV Clean Service",
    description:
      "LVTV Clean Service, entreprise locale de lavage de vitres en Moselle : produits éco, disponible 7j/7 en Moselle et Meurthe-et-Moselle. Découvrez nos réalisations.",
  },
  "/nettoyage-vitres-metz": {
    path: "/nettoyage-vitres-metz",
    title: "Nettoyage Vitres Metz | Laveur de Vitres à Metz – LVTV Clean Service",
    description:
      "Nettoyage de vitres à Metz et Metz Métropole : appartements, maisons, vitrines, bureaux. Laveur de vitres basé à Amnéville, intervention sous 48h, devis gratuit.",
  },
  "/mentions-legales": {
    path: "/mentions-legales",
    title: "Mentions légales et confidentialité | LVTV Clean Service",
    description: "Mentions légales et politique de confidentialité du site LVTV Clean Service, nettoyage de vitres en Moselle.",
  },
  "/404": {
    path: "/404",
    title: "Page introuvable | LVTV Clean Service",
    description: "Cette page n'existe pas. Retrouvez nos services de nettoyage de vitres en Moselle.",
    noindex: true,
  },
};

const business = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: "LVTV Clean",
  legalName: "Sami Djennane (LVTV Clean Service)",
  taxID: "10513168400018",
  identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: "10513168400018" },
  description:
    "Entreprise de nettoyage et lavage de vitres en Moselle et Meurthe-et-Moselle pour particuliers et professionnels : vitres, vitrines, baies vitrées, vérandas, stores et volets.",
  url: `${SITE_URL}/`,
  telephone: PHONE_E164,
  email: EMAIL,
  image: OG_IMAGE,
  logo: `${SITE_URL}/images/brand/icon-512.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    addressLocality: ADDRESS.city,
    addressRegion: "Moselle",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.2612285, longitude: 6.1304408 },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Moselle" },
    { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle" },
    ...[...CITIES_57, ...CITIES_54].map((name) => ({ "@type": "City", name })),
  ],
  knowsLanguage: "fr",
  sameAs: [FACEBOOK_URL, SNAPCHAT_URL],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    contactType: "customer service",
    areaServed: "FR",
    availableLanguage: "French",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de nettoyage de vitres",
    itemListElement: [
      "Nettoyage de vitres de maison et d'appartement",
      "Nettoyage de vitrine de commerce",
      "Nettoyage de baies vitrées et vérandas",
      "Nettoyage de stores et volets",
      "Nettoyage de vitres de bureaux et sociétés",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, serviceType: "Nettoyage de vitres", areaServed: "Moselle" },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: BUSINESS_NAME,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export function jsonLdFor(path: string) {
  const page = PAGES[path];
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const graph: Record<string, unknown>[] = [business, website];
  graph.push({
    "@type": path === "/about" ? "AboutPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    primaryImageOfPage: OG_IMAGE,
  });
  if (path === "/") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  if (path === "/nettoyage-vitres-metz") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: METZ_FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: path === "/about" ? "À propos" : path === "/mentions-legales" ? "Mentions légales" : "Nettoyage de vitres à Metz",
          item: url,
        },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Balises <head> propres à une page (titre, description, canonical, Open Graph, JSON-LD). */
export function headTagsFor(path: string) {
  const page = PAGES[path];
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="robots" content="${page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}" />`,
  ];
  if (!page.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<link rel="alternate" hreflang="fr-FR" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:locale" content="fr_FR" />`,
      `<meta property="og:site_name" content="${BUSINESS_NAME}" />`,
      `<meta property="og:title" content="${esc(page.title)}" />`,
      `<meta property="og:description" content="${esc(page.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${OG_IMAGE}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="Nettoyage de vitres en Moselle – LVTV Clean Service" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(page.title)}" />`,
      `<meta name="twitter:description" content="${esc(page.description)}" />`,
      `<meta name="twitter:image" content="${OG_IMAGE}" />`,
      `<script type="application/ld+json">${JSON.stringify(jsonLdFor(path)).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return tags.join("\n    ");
}
