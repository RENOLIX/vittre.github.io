import { Link } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Clock, Phone, Mail } from "lucide-react";

function Logo() {
  return (
    <Link to="/" aria-label="LVTV Clean Service">
      <img
        src={`${import.meta.env.BASE_URL}images/brand/lvtv-clean-service-logo.png`}
        alt="LVTV Clean Service"
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
            <Link to="/about" className="text-sm text-gray-900 font-semibold cursor-pointer">À propos</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour
            </Link>
            <Link to="/" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero about */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #5eead4 0%, #2dd4bf 30%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-4">À propos</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">LVTV Clean Service</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            LVTV Clean Service est une société locale spécialisée dans le lavage de vitres. Notre activité a commencé par des demandes de petits artisans et de commerçants ayant un besoin d'entretien de vitrine régulier, pour ensuite élargir notre clientèle à des particuliers et des sociétés de tailles plus conséquentes.
          </p>
        </div>
      </section>

      {/* Présentation principale */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1719499757876-346424e8f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Équipe LVTV Clean Service"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Notre parcours</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LVTV Clean Service intervient en France pour le lavage de vitres des particuliers, commerçants, artisans et sociétés. Notre expérience terrain nous permet d'assurer un entretien régulier, soigné et adapté à chaque besoin.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
                En France
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                Disponible 7j/7, horaires flexibles
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                +33 6 09 70 20 19
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
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
                  <Check className="w-4 h-4 text-teal-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
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
            <a href="tel:+33609702019"
              className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> +33 6 09 70 20 19
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

      {/* Footer simple */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} LVTV Clean Service. Tous droits réservés.
      </footer>
    </div>
  );
}
