import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/about/page.tsx";
import MetzPage from "./pages/metz/page.tsx";
import LegalPage from "./pages/legal/page.tsx";
import CreditImpotPage from "./pages/credit/page.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import NotFound from "./pages/NotFound.tsx";
import { PAGES } from "./seo.ts";

/** Met à jour le titre et la description lors de la navigation interne. */
function PageSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const key = pathname.replace(/\/+$/, "") || "/";
    const page = PAGES[key] ?? PAGES["/404"];
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
  }, [pathname]);
  return null;
}

/**
 * Changement de page : on repart tout en haut (ou sur la section visée par un lien "#ancre").
 * Le bouton "retour" du navigateur garde sa position habituelle.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  useLayoutEffect(() => {
    if (navigationType === "POP") return;
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <PageSeo />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/nettoyage-vitres-metz" element={<MetzPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/nettoyage-vitres-credit-impot" element={<CreditImpotPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
