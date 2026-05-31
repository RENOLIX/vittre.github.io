import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Home, ShoppingBag, Briefcase, Check, Lock, Phone, Mail, ArrowRight, Wind, Layers, MoveUp, MapPin } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroSection />
      <SloganBanner />
      <AboutSection />
      <AllServicesSection />
      <WindowShowcase />
      <ServicesSection />
      <DevisSection />
      <AvisSection />
      <Footer />
    </div>
  );
}

const menuItems = [
  { label: "Services", ariaLabel: "Voir les services", link: "#services" },
  { label: "Méthode", ariaLabel: "Notre méthode", link: "#methode" },
  { label: "Avis", ariaLabel: "Avis clients", link: "#avis" },
  { label: "À propos", ariaLabel: "À propos de Sami", link: `${import.meta.env.BASE_URL}about` },
  { label: "Devis", ariaLabel: "Devis gratuit", link: "#devis" },
];

const socialItems = [
  { label: "Instagram", link: "#" },
  { label: "Facebook", link: "#" },
  { label: "Snapchat", link: "#" },
];

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Services</a>
            <a href="#methode" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Notre Méthode</a>
            <a href="#avis" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">Avis</a>
            <Link to="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">À propos</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+33609702019" className="text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer hidden md:block">
              +33 6 09 70 20 19
            </a>
            <a href="#devis" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer hidden md:block">
              Devis Gratuit
            </a>
            {/* Mobile StaggeredMenu */}
            <div className="md:hidden relative" style={{ height: "40px", width: "80px" }}>
              <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={false}
                menuButtonColor="#111"
                openMenuButtonColor="#111"
                changeMenuColorOnOpen={false}
                colors={["#2dd4bf", "#0f766e"]}
                accentColor="#2dd4bf"
                isFixed={true}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

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

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${import.meta.env.BASE_URL}images/hero/hero-mobile.jpg`}
          />
          <img
            src={`${import.meta.env.BASE_URL}images/hero/hero-desktop.png`}
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            France & Luxembourg · Intervention sous 48h
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
            Des vitres<br />
            <span className="text-teal-400">impeccables.</span>
          </h1>

          <p className="text-white/60 text-lg max-w-lg leading-relaxed mb-10">
            Nettoyage professionnel pour particuliers et professionnels. Résultat sans traces, garanti.
          </p>

          {/* Availability and CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-teal-400" />
              Disponible en France et au Luxembourg
            </div>
            <a href="#devis" className="text-center border border-white/20 text-white text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
              Devis gratuit
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { icon: <Check className="w-3.5 h-3.5" />, label: "Assurance incluse" },
              { icon: <Check className="w-3.5 h-3.5" />, label: "Sans engagement" },
              { icon: <Check className="w-3.5 h-3.5" />, label: "Tarif transparent" },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-white/50 text-xs">
                <span className="text-teal-400">{icon}</span>{label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function WindowShowcase() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="w-full h-80" style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/showcase/original-window-showcase.png)`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        </div>
      </div>
    </section>
  );
}
function SloganBanner() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-3xl md:text-4xl text-gray-900 leading-snug"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic", fontWeight: 300 }}
        >
          {'"Des vitres propres, c\'est une meilleure luminosité !'}
        </p>
        <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
        <p className="text-gray-500 text-sm mt-3 font-medium tracking-widest uppercase">Sami — LVTV Clean Service</p>
      </div>
    </section>
  );
}

const allServices = [
  {
    icon: <MoveUp className="w-6 h-6 text-teal-500" />,
    title: "Travail en hauteur",
    desc: "Interventions sur immeubles, façades et grandes surfaces vitrées en toute sécurité. Matériel professionnel adapté.",
    tags: ["Nacelle", "Échafaudage", "Rappel"],
  },
  {
    icon: <Home className="w-6 h-6 text-teal-500" />,
    title: "Maison & Appartement",
    desc: "Nettoyage de toutes vos vitres intérieures et extérieures. Résultat parfait, sans traces ni coulures.",
    tags: ["Intérieur", "Extérieur", "Encadrements"],
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-teal-500" />,
    title: "Vitrine de commerce",
    desc: "Une vitrine impeccable attire les clients. Nettoyage régulier de vos devantures et vitrines de boutique.",
    tags: ["Devantures", "Enseignes", "Contrat régulier"],
  },
  {
    icon: <Layers className="w-6 h-6 text-teal-500" />,
    title: "Baies vitrées",
    desc: "Nettoyage spécialisé de grandes baies vitrées, verrières et murs rideaux. Technique sans traces garantie.",
    tags: ["Grande surface", "Sans trace", "Intérieur/Extérieur"],
  },
  {
    icon: <Wind className="w-6 h-6 text-teal-500" />,
    title: "Store & Volet",
    desc: "Dépoussiérage et nettoyage en profondeur de vos stores, volets roulants et jalousies.",
    tags: ["Stores banne", "Volets roulants", "Jalousies"],
  },
  {
    icon: <Building2 className="w-6 h-6 text-teal-500" />,
    title: "Société & Bureau",
    desc: "Entretien régulier pour entreprises, bureaux et sociétés. Intervention possible hors heures d'ouverture.",
    tags: ["Contrat mensuel", "Hors horaires", "Discret"],
  },
];

function AllServicesSection() {
  return (
    <section id="services" className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">Prestations</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Tous mes services</h2>
          <p className="text-gray-500">Particulier ou professionnel, j'interviens sur tout type de chantier.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allServices.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map(t => (
                  <span key={t} className="text-xs bg-teal-50 text-teal-600 font-medium px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="methode" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Des solutions adaptées à vos besoins
          </h2>
          <p className="text-gray-500">Que vous soyez un particulier ou une entreprise, nous avons l'expertise.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm overflow-hidden">
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-teal-50 opacity-60" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pour les Particuliers</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Appartements, maisons, vérandas. Retrouvez la lumière naturelle dans votre intérieur avec notre service discret et minutieux.
              </p>
              <ul className="space-y-2.5">
                {["Vitres intérieures et extérieures", "Nettoyage des encadrements", "Produits éco-responsables"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-teal-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative bg-gray-900 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-teal-900 opacity-30 translate-x-10 -translate-y-10" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pour les Professionnels</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bureaux, vitrines de magasins, façades vitrées. Une image impeccable pour votre entreprise avec des contrats d'entretien réguliers.
              </p>
              <ul className="space-y-2.5">
                {["Contrats d'entretien flexibles", "Intervention hors heures d'ouverture", "Équipe certifiée et assurée", "Devis sur mesure"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sami laveur de vitres"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:to-white/0" />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">À propos</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Bonjour, je suis <span className="text-teal-500">Sami</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                Laveur de vitres professionnel entre la <strong className="text-gray-700">France</strong> et le <strong className="text-gray-700">Luxembourg</strong>, j'interviens sur différents chantiers : maisons, villas, commerces, et sociétés.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                Je suis <strong className="text-gray-700">flexible au niveau des horaires</strong> et toujours arrangeant concernant mes tarifs pour m'adapter à chaque client.
              </p>
              <div className="flex flex-col gap-2 mb-7">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                  <a href="tel:+33609702019" className="hover:text-teal-600 transition-colors">+33 6 09 70 20 19</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  <a href="mailto:sami.djennane.pro@gmail.com" className="hover:text-teal-600 transition-colors">sami.djennane.pro@gmail.com</a>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer w-fit"
              >
                Lire plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PropertyType = "Appartement" | "Maison" | "Boutique" | "Bureaux";

const propertyTypes: { label: PropertyType; icon: React.ReactNode }[] = [
  { label: "Appartement", icon: <Building2 className="w-6 h-6" /> },
  { label: "Maison", icon: <Home className="w-6 h-6" /> },
  { label: "Boutique", icon: <ShoppingBag className="w-6 h-6" /> },
  { label: "Bureaux", icon: <Briefcase className="w-6 h-6" /> },
];

function DevisSection() {
  const [selected, setSelected] = useState<PropertyType>("Appartement");
  const [windows, setWindows] = useState("1 à 5 fenêtres");
  const [frequency, setFrequency] = useState("Intervention unique");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Bonjour LVTV Clean Service,",
      "",
      "Je souhaite demander un devis pour un nettoyage de vitres.",
      "",
      "Informations client :",
      `- Nom : ${lastName}`,
      `- Prénom : ${firstName}`,
      `- Téléphone : ${phoneNumber}`,
      `- Adresse : ${address}`,
      `- Ville : ${city}`,
      `- Code postal : ${postalCode}`,
      `- Département : ${department}`,
      "",
      "Détails de la demande :",
      `- Type de bien : ${selected}`,
      `- Nombre de fenêtres : ${windows}`,
      `- Fréquence souhaitée : ${frequency}`,
      "",
      "Merci de me recontacter pour un devis.",
    ].join("\n");

    window.open(
      `https://wa.me/33609702019?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="devis" className="px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Estimez votre nettoyage</h2>
            <p className="text-gray-500 text-sm">Remplissez le formulaire, votre demande s'ouvrira sur WhatsApp.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-5 mb-7">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="first-name">Prénom</label>
                <input id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre prénom" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="last-name">Nom</label>
                <input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre nom" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="address">Adresse</label>
                <input id="address" value={address} onChange={(e) => setAddress(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Rue, numéro, complément" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="city">Ville</label>
                <input id="city" value={city} onChange={(e) => setCity(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre ville" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="postal-code">Code postal</label>
                <input id="postal-code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required inputMode="numeric"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="75000" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="department">Département</label>
                <input id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Ex : Moselle, Nord, Luxembourg" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="phone-number">Numéro de téléphone</label>
                <input id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required type="tel"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="06 00 00 00 00" />
              </div>
            </div>
            <div className="mb-7">
              <p className="text-sm font-medium text-gray-700 mb-3">Type de bien</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {propertyTypes.map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelected(label)}
                    className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                      selected === label
                        ? "border-teal-400 bg-teal-50 text-teal-600"
                        : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {icon}{label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Nombre de fenêtres (approx.)</label>
                <select value={windows} onChange={(e) => setWindows(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer appearance-auto">
                  <option>1 à 5 fenêtres</option>
                  <option>6 à 10 fenêtres</option>
                  <option>11 à 20 fenêtres</option>
                  <option>Plus de 20 fenêtres</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Fréquence souhaitée</label>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer appearance-auto">
                  <option>Intervention unique</option>
                  <option>Mensuelle</option>
                  <option>Bimensuelle</option>
                  <option>Trimestrielle</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Lock className="w-4 h-4" /> Données sécurisées
              </span>
              <button type="submit" className="w-full sm:w-auto bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                Demander mon devis sur WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Sophie M.", location: "Paris 16e", rating: 5, text: "Service impeccable, vitres parfaitement propres sans la moindre trace. L'équipe est ponctuelle et très professionnelle. Je recommande vivement !", avatar: "SM" },
  { name: "Thomas R.", location: "Lyon", rating: 5, text: "Contrat annuel pour nos bureaux. Résultat irréprochable à chaque intervention. Nos clients remarquent la différence, c'est la meilleure publicité.", avatar: "TR" },
  { name: "Claire D.", location: "Bordeaux", rating: 5, text: "Ils sont intervenus sur ma véranda en moins de 48h comme promis. Travail soigné, produits sans odeur. Je suis bluffée par le résultat !", avatar: "CD" },
  { name: "Marc L.", location: "Toulouse", rating: 5, text: "Nettoyage de nos panneaux solaires — efficacité retrouvée immédiatement. Rapport qualité-prix excellent et équipe très agréable.", avatar: "ML" },
  { name: "Isabelle F.", location: "Nantes", rating: 4, text: "Très bonne prestation, vitres intérieures et extérieures nickel. Je les rappellerai pour la prochaine session sans hésiter.", avatar: "IF" },
  { name: "Antoine P.", location: "Marseille", rating: 5, text: "Façade vitrée de notre boutique transformée ! Les passants s'en sont rendu compte. Sérieux, rapide et le tarif est juste.", avatar: "AP" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvisSection() {
  return (
    <section id="avis" className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">Témoignages clients</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Ce que disent nos clients</h2>
          <p className="text-gray-500 max-w-md mx-auto">Des clients satisfaits à travers la France et le Luxembourg.</p>
        </div>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-4xl font-extrabold text-gray-900">4.9</span>
          <div>
            <StarRating count={5} />
            <p className="text-xs text-gray-400 mt-1">Basé sur 847 avis vérifiés</p>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
          {reviews.map((review) => (
            <div key={review.name} className="flex-none w-80 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow" style={{ scrollSnapAlign: "start" }}>
              <StarRating count={review.rating} />
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{`"${review.text}"`}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold shrink-0">{review.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100 px-6 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              L'excellence du nettoyage de vitres en France et au Luxembourg. Transparence, professionnalisme et respect de l'environnement.
            </p>
            <div className="mt-4 space-y-1.5">
              <a href="tel:+33609702019" className="flex items-center gap-2 text-xs text-gray-500 hover:text-teal-600 transition-colors">
                <Phone className="w-3.5 h-3.5" /> +33 6 09 70 20 19
              </a>
              <a href="mailto:sami.djennane.pro@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-teal-600 transition-colors">
                <Mail className="w-3.5 h-3.5" /> sami.djennane.pro@gmail.com
              </a>
              <p className="text-xs text-gray-400 pl-5">Snapchat : lvtv57</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {["Travail en hauteur", "Maison & Appartement", "Vitrine de commerce", "Baies vitrées", "Store & Volet"].map((item) => (
                <li key={item}><a href="#services" className="hover:text-gray-900 transition-colors cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Entreprise</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-gray-900 transition-colors cursor-pointer">À propos de Sami</Link></li>
              {["Notre méthode", "Contact"].map((item) => (
                <li key={item}><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Légal</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {["Mentions légales", "CGV", "Politique de confidentialité"].map((item) => (
                <li key={item}><a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
          <p className="text-xs text-gray-400">© {year} LVTV Clean Service — Sami Djennane. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
