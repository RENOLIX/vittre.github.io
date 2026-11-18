import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FloatingWhatsApp, PHONE_DISPLAY } from "@/components/WhatsApp.tsx";
import { Footer } from "@/pages/Index.tsx";
import { ADDRESS, BUSINESS_NAME, EMAIL, LEGAL, SITE_URL } from "@/seo.ts";

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="LVTV Clean Service – accueil">
            <img
              src={`${import.meta.env.BASE_URL}images/brand/lvtv-logo.webp`}
              alt="LVTV Clean Service"
              width={108}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Accueil
          </Link>
        </div>
      </nav>

      <main className="px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">Mentions légales</h1>

          <Section title="Éditeur du site">
            <p>
              Le site {SITE_URL.replace("https://", "")} est édité par <strong>{LEGAL.owner}</strong>, {LEGAL.status.toLowerCase()},
              exerçant sous le nom commercial <strong>{BUSINESS_NAME}</strong>.
            </p>
            <ul className="space-y-1">
              <li>SIREN : {LEGAL.siren}</li>
              <li>SIRET : {LEGAL.siret}</li>
              <li>Code APE : {LEGAL.ape}</li>
              <li>Siège : {LEGAL.registeredOffice}</li>
              <li>Établissement d'exploitation : {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}</li>
              <li>Téléphone / WhatsApp : {PHONE_DISPLAY}</li>
              <li>Email : <a href={`mailto:${EMAIL}`} className="text-teal-700 hover:text-teal-800">{EMAIL}</a></li>
            </ul>
            <p>Directeur de la publication : {LEGAL.owner}.</p>
          </Section>

          <Section title="Hébergement">
            <p>
              Le site est hébergé par GitHub, Inc. (service GitHub Pages), 88 Colton Street, San Francisco, CA 94107, États-Unis —{" "}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">github.com</a>.
            </p>
          </Section>

          <Section title="Conception du site">
            <p>
              Site conçu et développé par{" "}
              <a href="https://sitemagique.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">SITEMAGIQUE</a>.
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              Les textes, photos, logos et éléments graphiques de ce site sont la propriété de {BUSINESS_NAME} ou utilisés avec autorisation.
              Toute reproduction sans accord préalable est interdite.
            </p>
          </Section>

          <Section title="Crédit d'impôt">
            <p>
              Les informations sur le crédit d'impôt de 50 % (article 199 sexdecies du Code général des impôts) sont données à titre indicatif,
              selon la réglementation en vigueur. Elles concernent uniquement les services à la personne rendus au domicile des particuliers.
              Les conditions exactes sont disponibles sur{" "}
              <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">impots.gouv.fr</a>.
            </p>
          </Section>

          <h2 id="confidentialite" className="text-3xl font-extrabold text-gray-900 mt-16 mb-10 scroll-mt-24">Politique de confidentialité</h2>

          <Section title="Données collectées">
            <p>
              Lorsque vous demandez un devis, nous recueillons les informations que vous saisissez : nom, prénom, adresse, ville, code postal,
              département, numéro de téléphone et détails de votre demande. Ces données servent uniquement à vous répondre et à établir votre devis.
            </p>
            <p>
              Selon le mode d'envoi choisi, votre demande nous parvient par WhatsApp (service de Meta) ou par email via le service de formulaire
              Formspark. Nous ne vendons ni ne cédons vos données à des tiers.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Les données liées à une demande de devis sont conservées le temps nécessaire au traitement de la demande et à la relation
              commerciale, puis supprimées, sauf obligation légale de conservation (par exemple pour la facturation).
            </p>
          </Section>

          <Section title="Mesure d'audience et publicité">
            <p>
              Le site utilise la balise Google (Google Ads) pour mesurer l'efficacité de nos annonces. Ce service peut déposer des cookies sur
              votre appareil. Vous pouvez les refuser ou les supprimer à tout moment depuis les paramètres de votre navigateur.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation et d'opposition sur vos données. Pour l'exercer, écrivez-nous à{" "}
              <a href={`mailto:${EMAIL}`} className="text-teal-700 hover:text-teal-800">{EMAIL}</a>.
            </p>
            <p>
              Vous pouvez également adresser une réclamation à la CNIL :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800">cnil.fr</a>.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
