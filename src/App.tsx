import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/about/page.tsx";
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

export function AppRoutes() {
  return (
    <>
      <PageSeo />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
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
