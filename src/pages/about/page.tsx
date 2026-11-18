import { Link } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Clock, Mail } from "lucide-react";
import { DevelopedBy, FloatingWhatsApp, PHONE_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from "@/components/WhatsApp.tsx";

function Logo() {
  return (
    <Link to="/" aria-label="LVTV Clean Service">
      <img
        src={`${import.meta.env.BASE_URL}images/brand/lvtv-logo.png`}
        alt="LVTV Clean Service – nettoyage de vitres en Moselle"
        width={108}
        height={48}
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}

const values = [
  { title: "Flexibilité", desc: "Disponible tôt le matin, en soirée ou le week-end selon vos besoins." },
  { title: "Tarifs arrangeants", desc: "Devis personnalisé adapté à votre budget, sans mauvaise surprise." },
  { title: "Qualité garantie", desc: "Résultat sans traces ni coulures, contrôle visuel systématique." },
  { title: "Produits éco", desc: "Produits biodégradables respectueux de l'environnement et de votre intérieur." },
];

const realizationItems = [
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}images/realisations/vitres-pergola-moselle.jpg`,
    title: "Baie vitrée chez un particulier",
    desc: "Nettoyage de véranda et baies vitrées en Moselle : un rendu net et lumineux.",
  },
  {
    type: "image",
    src: `${import.meta.env.BASE_URL}images/realisations/avant-apres-vitrine-moselle.jpg`,
    title: "Avant / après vitrine",
    desc: "Nettoyage de vitrine de commerce avec résultat visible.",
  },
  {
    type: "video",
    src: `${import.meta.env.BASE_URL}videos/realisation-nettoyage-vitres.mp4`,
    title: "Intervention en vidéo",
    desc: "Un exemple concret de nettoyage de vitres.",
  },
] as const;

function SnapchatIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/brand/snapchat-ghost.png`}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20"
        style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#services" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Services</Link>
            <Link to="/#methode" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Notre Méthode</Link>
            <Link to="/nettoyage-vitres-metz" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Metz</Link>
            <Link to="/about" className="text-sm text-gray-900 font-semibold cursor-pointer">À propos</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour
            </Link>
            <a href="/#devis" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
              Devis Gratuit
            </a>
          </div>
        </div>
      </nav>

      <main>
      {/* Hero about */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #5eead4 0%, #2dd4bf 30%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-700 uppercase mb-4">À propos · Laveur de vitres en Moselle</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">LVTV CLEAN SERVICE</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            LVTV CLEAN SERVICE est une entreprise locale basée en Moselle, spécialisée dans le lavage de vitres pour les particuliers et les professionnels. Née pour répondre aux besoins d'entretien régulier des vitrines de commerçants et d'artisans locaux, notre structure s'est rapidement développée. Aujourd'hui, nous mettons également notre expertise au service des particuliers, en intervenant avec réactivité sur l'ensemble des départements de la Moselle et de la Meurthe-et-Moselle          </p>
        </div>
      </section>

      {/* Présentation principale */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1719499757876-346424e8f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laveur de vitres de LVTV Clean Service en Moselle"
                loading="lazy"
                decoding="async"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">NOTRE PARCOURS</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Après plusieurs expériences professionnelles au Luxembourg, j'ai choisi de créer mon entreprise pour mettre mon savoir-faire au service d'une clientèle française. Travailler au sein de structures luxembourgeoises m'a inculqué le sens de l'exigence et de l'excellence. Aujourd'hui, j'ai à cœur de proposer des prestations de haute qualité afin de garantir la satisfaction totale de mes clients.            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                En Moselle et Meurthe et Moselle (57/54)
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                Disponible 7j/7, horaires flexibles
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal-700 transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-teal-700 shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                Lvtvcleanservice@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Nos engagements</h2>
            <p className="text-gray-500">Ce qui nous distingue au quotidien</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                  <Check className="w-4 h-4 text-teal-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest text-teal-700 uppercase mb-3">Réalisations</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Quelques réalisations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Quelques exemples réels de nettoyages de vitres réalisés pour des particuliers et professionnels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {realizationItems.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="aspect-[4/5] bg-gray-100">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      title="Vidéo d'un nettoyage de vitres par LVTV Clean Service"
                      aria-label="Vidéo d'un nettoyage de vitres par LVTV Clean Service"
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-400 mb-8">Devis gratuit, réponse rapide. N'hésitez pas à nous contacter !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal-400 hover:bg-teal-300 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <WhatsAppIcon className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
            <a href="mailto:Lvtvcleanservice@gmail.com"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <Mail className="w-4 h-4" /> Envoyer un email
            </a>
          </div>
          <a
            href="https://www.snapchat.com/add/lvtvclean"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <SnapchatIcon className="w-4 h-4 object-contain invert" /> Lvtvclean
          </a>
        </div>
      </section>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-xs text-gray-500 flex flex-col items-center gap-1">
        <p>© {new Date().getFullYear()} LVTV Clean Service. Tous droits réservés.</p>
        <DevelopedBy />
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
