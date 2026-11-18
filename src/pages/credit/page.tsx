import { Link } from "react-router-dom";
import { ArrowLeft, Check, ChevronDown, FileCheck, Home, Users, Wallet, X } from "lucide-react";
import { FloatingWhatsApp, PHONE_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from "@/components/WhatsApp.tsx";
import { Footer } from "@/pages/Index.tsx";
import { CREDIT_FAQ } from "@/seo.ts";

const examples = [
  { label: "Nettoyage ponctuel d'un appartement", price: 100 },
  { label: "Maison avec baies vitrées", price: 220 },
  { label: "Entretien trimestriel sur un an (4 passages)", price: 600 },
];

const euro = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export default function CreditImpotPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/20"
        style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="LVTV Clean Service – accueil">
            <img
              src={`${import.meta.env.BASE_URL}images/brand/lvtv-logo.webp`}
              alt="LVTV Clean Service – nettoyage de vitres en Moselle"
              width={108}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
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
        <section className="pt-32 pb-16 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="text-xs text-gray-400 mb-6">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Crédit d'impôt 50 %</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-3 py-1 text-xs font-extrabold text-gray-950 mb-5">
              -50 % · Services à la personne
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Nettoyage de vitres avec 50 % de crédit d'impôt
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
              Particuliers en Moselle et Meurthe-et-Moselle : le lavage de vos vitres à domicile est déductible des impôts.
              La moitié de ce que vous payez à LVTV Clean Service vous revient sous forme de crédit d'impôt, que vous soyez imposable ou non.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" /> Devis WhatsApp · {PHONE_DISPLAY}
              </a>
              <a href="/#devis" className="inline-flex items-center justify-center border border-white/25 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Remplir le formulaire de devis
              </a>
            </div>
          </div>
        </section>

        {/* Exemples chiffrés */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">Combien coûte vraiment votre nettoyage de vitres ?</h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
              Exemples indicatifs : le prix réel de votre prestation est fixé sur devis, puis le crédit d'impôt divise votre coût par deux.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <caption className="sr-only">Exemples de coût après crédit d'impôt de 50 %</caption>
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold">Prestation</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-right">Prix payé</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-right">Crédit d'impôt</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-right">Coût réel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {examples.map((e) => (
                    <tr key={e.label}>
                      <th scope="row" className="px-5 py-4 text-left font-medium text-gray-900">{e.label}</th>
                      <td className="px-5 py-4 text-right text-gray-600">{euro(e.price)}</td>
                      <td className="px-5 py-4 text-right text-teal-700">− {euro(e.price / 2)}</td>
                      <td className="px-5 py-4 text-right text-lg font-extrabold text-gray-900">{euro(e.price / 2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Qui peut bénéficier du crédit d'impôt ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-5">
                  <Check className="w-5 h-5 text-teal-700" /> Éligible
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Les particuliers, imposables ou non imposables",
                    "Le nettoyage des vitres de votre résidence principale ou secondaire",
                    "Appartements, maisons, vérandas, baies vitrées, encadrements",
                    "Interventions ponctuelles comme contrats d'entretien réguliers",
                  ].map((t) => (
                    <li key={t} className="flex gap-2"><Check className="w-4 h-4 shrink-0 mt-0.5 text-teal-700" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-5">
                  <X className="w-5 h-5 text-red-700" /> Non éligible
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Les vitrines de commerces et devantures",
                    "Les bureaux, locaux professionnels et sociétés",
                    "Les dépenses au-delà du plafond annuel",
                  ].map((t) => (
                    <li key={t} className="flex gap-2"><X className="w-4 h-4 shrink-0 mt-0.5 text-red-700" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Comment ça marche ?</h2>
            <ol className="grid md:grid-cols-4 gap-5">
              {[
                { icon: <Home className="w-5 h-5 text-teal-700" />, title: "1. Devis gratuit", desc: "Nous évaluons vos vitres et vous envoyons un devis gratuit et sans engagement." },
                { icon: <Users className="w-5 h-5 text-teal-700" />, title: "2. Intervention", desc: "Nous nettoyons vos vitres à domicile, intérieur et extérieur, sans traces." },
                { icon: <FileCheck className="w-5 h-5 text-teal-700" />, title: "3. Attestation fiscale", desc: "Vous recevez une attestation annuelle récapitulant les sommes payées." },
                { icon: <Wallet className="w-5 h-5 text-teal-700" />, title: "4. Déclaration", desc: "Vous reportez le montant en case 7DB : 50 % vous reviennent en crédit d'impôt." },
              ].map((s) => (
                <li key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-6 text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Plafond :</strong> les dépenses sont retenues dans la limite de 12 000 € par an et par foyer
              (soit 6 000 € de crédit d'impôt), majorée de 1 500 € par enfant à charge ou membre du foyer de plus de 65 ans, dans la limite de 15 000 €,
              et portée à 20 000 € en cas d'invalidité. <strong className="text-gray-900">Avance immédiate :</strong> selon votre situation, le service
              de l'Urssaf peut déduire le crédit d'impôt dès le paiement ; demandez-nous si vous pouvez en bénéficier.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Crédit d'impôt et lavage de vitres : vos questions</h2>
            <div className="space-y-3">
              {CREDIT_FAQ.map(({ q, a }) => (
                <details key={q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm open:shadow-md transition-shadow">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-sm md:text-base">{q}</h3>
                    <ChevronDown className="w-5 h-5 shrink-0 text-teal-700 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-gray-500">
              Informations données à titre indicatif selon la réglementation en vigueur (article 199 sexdecies du Code général des impôts).
              Conditions détaillées sur{" "}
              <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">impots.gouv.fr</a>{" "}
              et{" "}
              <a href="https://www.urssaf.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">urssaf.fr</a>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Des vitres propres pour moitié prix</h2>
            <p className="text-gray-300 mb-8">
              Nettoyage de vitres à Metz, Thionville, Amnéville, Nancy et dans toute la Moselle. Devis gratuit sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" /> {PHONE_DISPLAY}
              </a>
              <Link to="/nettoyage-vitres-metz" className="inline-flex items-center justify-center border border-white/25 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Nettoyage de vitres à Metz
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
