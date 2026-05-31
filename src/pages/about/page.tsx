import { Link } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Clock, Phone, Mail, Star } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full border-2 border-teal-400 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
      </div>
      <span className="font-semibold text-gray-900 text-lg tracking-tight">Éclat Pur</span>
    </div>
  );
}

const photos = [
  {
    url: "https://images.unsplash.com/photo-1746905205773-3ea50c8cd808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Nettoyage professionnel",
  },
  {
    url: "https://images.unsplash.com/photo-1775654063422-54e0a71578ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Travail en hauteur",
  },
  {
    url: "https://images.unsplash.com/photo-1561236478-a10a7659d498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Façades vitrées",
  },
  {
    url: "https://images.unsplash.com/photo-1758836113725-a1b082c622bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Interventions extérieures",
  },
  {
    url: "https://hercules-cdn.com/file_EGMErUI60sMocOPnTHEpPRVQ",
    label: "Résultat garanti",
  },
  {
    url: "https://images.unsplash.com/photo-1775695941175-fc9739087598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    label: "Vitres impeccables",
  },
];

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "200+", label: "Clients satisfaits" },
  { value: "2", label: "Pays couverts" },
  { value: "48h", label: "Délai d'intervention" },
];

const values = [
  { title: "Flexibilité", desc: "Disponible tôt le matin, en soirée ou le week-end selon vos besoins." },
  { title: "Tarifs arrangeants", desc: "Devis personnalisé adapté à votre budget, sans mauvaise surprise." },
  { title: "Qualité garantie", desc: "Résultat sans traces ni coulures, contrôle visuel systématique." },
  { title: "Produits éco", desc: "Produits biodégradables respectueux de l'environnement et de votre intérieur." },
];

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
            <Link to="/#avis" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Avis</Link>
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Bonjour, je suis <span className="text-teal-400">Sami</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Laveur de vitres professionnel entre la France et le Luxembourg, passionné par un travail bien fait.
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
                alt="Sami laveur de vitres"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4.9/5 — 200+ clients</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Mon parcours</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Je m'appelle <strong>Sami</strong>, laveur de vitres professionnel opérant entre la <strong>France</strong> et le <strong>Luxembourg</strong>. Fort de plusieurs années d'expérience, j'interviens sur tous types de chantiers : maisons individuelles, villas, commerces, bureaux et sociétés.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mon engagement : un résultat impeccable à chaque passage. Je suis <strong>flexible au niveau des horaires</strong> et toujours <strong>arrangeant concernant mes tarifs</strong> pour m'adapter à chaque situation.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
                France & Luxembourg
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
                sami.djennane.pro@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-teal-400 mb-1">{s.value}</p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Mes engagements</h2>
            <p className="text-gray-500">Ce qui me distingue au quotidien</p>
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

      {/* Galerie photos */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Mes réalisations</h2>
            <p className="text-gray-500">Quelques exemples de chantiers réalisés</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src={p.url}
                  alt={p.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 px-3 py-1.5 rounded-lg">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Contactez-moi</h2>
          <p className="text-gray-400 mb-8">Devis gratuit, réponse rapide. N'hésitez pas à me contacter !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33609702019"
              className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> +33 6 09 70 20 19
            </a>
            <a href="mailto:sami.djennane.pro@gmail.com"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              <Mail className="w-4 h-4" /> Envoyer un email
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">Snapchat : <span className="text-gray-300 font-medium">lvtv57</span></p>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Éclat Pur — Sami Djennane. Tous droits réservés.
      </footer>
    </div>
  );
}
