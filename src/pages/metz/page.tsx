import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Check, ChevronDown, Clock, Home, Layers, MapPin, ShoppingBag } from "lucide-react";
import { FloatingWhatsApp, PHONE_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from "@/components/WhatsApp.tsx";
import { Footer } from "@/pages/Index.tsx";
import { METZ_COMMUNES, METZ_FAQ, METZ_QUARTIERS } from "@/seo.ts";

const base = import.meta.env.BASE_URL;

const services = [
  {
    icon: <Home className="w-6 h-6 text-teal-700" />,
    title: "Appartements et maisons à Metz",
    desc: "Vitres intérieures et extérieures, encadrements et rebords, des immeubles de la Nouvelle Ville aux maisons de Queuleu ou Plantières.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-teal-700" />,
    title: "Vitrines de commerces",
    desc: "Entretien régulier des devantures du centre-ville de Metz, tôt le matin ou après la fermeture pour ne pas gêner votre clientèle.",
  },
  {
    icon: <Layers className="w-6 h-6 text-teal-700" />,
    title: "Baies vitrées et vérandas",
    desc: "Grandes surfaces vitrées, vérandas et pergolas : un résultat net et sans traces, à l'intérieur comme à l'extérieur.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-teal-700" />,
    title: "Bureaux et entreprises",
    desc: "Contrats d'entretien mensuels ou trimestriels pour les bureaux et sociétés de Metz Métropole, du Technopôle à Metz-Nord.",
  },
];

function Logo() {
  return (
    <Link to="/" aria-label="LVTV Clean Service – accueil">
      <img
        src={`${base}images/brand/lvtv-logo.png`}
        alt="LVTV Clean Service – nettoyage de vitres en Moselle"
        width={108}
        height={48}
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}

export default function MetzPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/20"
        style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Accueil
            </Link>
            <a href="/#devis" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Devis Gratuit
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* En-tête */}
        <section className="pt-32 pb-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="text-xs text-gray-500 mb-6">
              <Link to="/" className="hover:text-gray-600">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">Nettoyage de vitres à Metz</span>
            </nav>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4">
              <MapPin className="w-4 h-4" /> Metz &amp; Metz Métropole (57)
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Nettoyage de vitres à Metz
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
              LVTV Clean Service est un laveur de vitres professionnel basé à Amnéville, à une vingtaine de minutes de Metz.
              Nous nettoyons les vitres des particuliers, commerces et entreprises dans tous les quartiers de Metz et les communes
              de Metz Métropole, avec un résultat sans traces et un devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" /> Devis WhatsApp · {PHONE_DISPLAY}
              </a>
              <a href="/#devis" className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Remplir le formulaire de devis
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
              {["50 % de crédit d'impôt (particuliers)", "Intervention sous 48h", "Devis gratuit et sans engagement", "Disponible 7j/7"].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-teal-700" />{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">Nos prestations de lavage de vitres à Metz</h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Particulier ou professionnel, nous adaptons l'intervention à votre logement ou à votre local, ponctuellement ou en entretien régulier.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
            <figure className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img
                src={`${base}images/realisations/vitres-pergola-moselle.jpg`}
                alt="Véranda aux vitres nettoyées par LVTV Clean Service en Moselle"
                width={1000}
                height={1333}
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-gray-500">Véranda et baies vitrées chez un particulier en Moselle.</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img
                src={`${base}images/realisations/avant-apres-vitrine-moselle.jpg`}
                alt="Avant et après le nettoyage d'une vitrine de commerce"
                width={1000}
                height={1320}
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-gray-500">Vitrine de commerce : avant / après nettoyage.</figcaption>
            </figure>
          </div>
        </section>

        {/* Zones */}
        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Quartiers de Metz et communes desservis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Quartiers de Metz", items: METZ_QUARTIERS },
                { title: "Metz Métropole et alentours", items: METZ_COMMUNES },
              ].map((g) => (
                <div key={g.title} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-5">
                    <MapPin className="w-5 h-5 text-teal-700" /> {g.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((c) => (
                      <li key={c} className="text-xs bg-teal-50 text-teal-700 font-medium px-3 py-1.5 rounded-full">{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-8">
              <Clock className="w-4 h-4 text-teal-700" /> Aussi à Thionville, Amnéville et dans toute la Moselle :{" "}
              <a href="/#zones" className="font-semibold text-teal-700 hover:text-teal-800">voir toutes nos zones</a>
            </p>
          </div>
        </section>

        {/* FAQ Metz */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Nettoyage de vitres à Metz : vos questions</h2>
            <div className="space-y-3">
              {METZ_FAQ.map(({ q, a }) => (
                <details key={q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm open:shadow-md transition-shadow">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-sm md:text-base">{q}</h3>
                    <ChevronDown className="w-5 h-5 shrink-0 text-teal-700 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Besoin d'un laveur de vitres à Metz ?</h2>
            <p className="text-gray-400 mb-8">Envoyez-nous une photo de vos vitres sur WhatsApp : devis gratuit et réponse rapide.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
