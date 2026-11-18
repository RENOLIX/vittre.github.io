import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Home, ShoppingBag, Briefcase, Check, Lock, Mail, ArrowRight, Wind, Layers, MapPin, ChevronDown } from "lucide-react";
import StaggeredMenu from "@/components/StaggeredMenu.tsx";
import { DevelopedBy, FloatingWhatsApp, PHONE_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from "@/components/WhatsApp.tsx";
import { ADDRESS, CITIES_54, CITIES_57, FACEBOOK_URL, FAQ } from "@/seo.ts";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <SloganBanner />
        <AboutSection />
        <AllServicesSection />
        <WindowShowcase />
        <ServicesSection />
        <ZonesSection />
        <DevisSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

const menuItems = [
  { label: "Services", ariaLabel: "Voir les services", link: "#services" },
  { label: "Méthode", ariaLabel: "Notre méthode", link: "#methode" },
  { label: "Zones", ariaLabel: "Zones d'intervention en Moselle", link: "#zones" },
  { label: "À propos", ariaLabel: "À propos de LVTV Clean Service", link: `${import.meta.env.BASE_URL}about` },
  { label: "Devis", ariaLabel: "Devis gratuit", link: "#devis" },
];

const socialItems = [
  { label: "Facebook", link: "https://www.facebook.com/p/LVTV-Clean-Service-61591446741505/" },
  { label: "Snapchat · Lvtvclean", link: "https://www.snapchat.com/add/lvtvclean" },
];

/** true tant que le hero est visible sous la barre de navigation */
function useOnHero(navHeight = 64) {
  const [onHero, setOnHero] = useState(true);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setOnHero(false);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      setOnHero(hero.getBoundingClientRect().bottom > navHeight);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navHeight]);
  return onHero;
}

function Navbar() {
  const onHero = useOnHero();
  const linkClass = `text-sm transition-colors duration-500 cursor-pointer ${
    onHero ? "text-white/85 hover:text-white" : "text-gray-700 hover:text-gray-900"
  }`;
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
          onHero ? "border-white/10" : "border-white/20 shadow-sm shadow-black/[0.03]"
        }`}
        style={{
          backgroundColor: onHero ? "rgba(10,15,20,0.18)" : "rgba(255,255,255,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo white={onHero} />
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className={linkClass}>Services</a>
            <a href="#methode" className={linkClass}>Notre Méthode</a>
            <a href="#zones" className={linkClass}>Zones</a>
            <Link to="/about" className={linkClass}>À propos</Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nous contacter sur WhatsApp"
              className={`${linkClass} hidden md:flex items-center gap-1.5`}
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#devis"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-500 cursor-pointer hidden md:block ${
                onHero ? "bg-white text-gray-900 hover:bg-white/90" : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
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
                menuButtonColor={onHero ? "#fff" : "#111"}
                openMenuButtonColor="#111"
                changeMenuColorOnOpen={true}
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

function Logo({ white = false }: { white?: boolean }) {
  const src = `${import.meta.env.BASE_URL}images/brand/lvtv-logo.png`;
  return (
    <Link to="/" aria-label="LVTV Clean Service – accueil" className="relative block">
      {/* Logo bleu (original) */}
      <img
        src={src}
        alt="LVTV Clean Service – nettoyage de vitres en Moselle"
        width={108}
        height={48}
        className={`h-12 w-auto object-contain transition-opacity duration-500 ease-in-out ${white ? "opacity-0" : "opacity-100"}`}
      />
      {/* Version blanche superposée : fondu enchaîné fluide entre les deux */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        width={108}
        height={48}
        className={`absolute inset-0 h-12 w-auto object-contain brightness-0 invert transition-opacity duration-500 ease-in-out ${white ? "opacity-100" : "opacity-0"}`}
      />
    </Link>
  );
}

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

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${import.meta.env.BASE_URL}images/hero/hero-mobile-opt.jpg`}
            width={900}
            height={1256}
          />
          <img
            src={`${import.meta.env.BASE_URL}images/hero/hero-desktop.jpg`}
            alt="Laveurs de vitres professionnels nettoyant une façade vitrée en Moselle"
            width={1672}
            height={941}
            fetchPriority="high"
            decoding="async"
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
            Moselle (57) · Meurthe-et-Moselle (54) · Intervention sous 48h
          </div>

          {/* Headline */}
          <h1 className="text-white mb-6">
            <span className="block text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
              Nettoyage de vitres en Moselle
            </span>
            <span className="block text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Des vitres<br />
              <span className="text-teal-400">impeccables.</span>
            </span>
          </h1>

          <p className="text-white/60 text-lg max-w-lg leading-relaxed mb-10">
            Lavage de vitres professionnel pour particuliers et professionnels à Metz, Thionville, Forbach, Sarreguemines, Nancy et dans toute la Moselle. Résultat sans traces, garanti.
          </p>

          {/* Availability and CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-teal-400" />
              Moselle &amp; Meurthe-et-Moselle
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
          <div
            role="img"
            aria-label="Vitres propres et lumineuses après un nettoyage par LVTV Clean Service"
            className="hidden h-80 w-full md:block"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}images/showcase/lvtv-showcase-desktop.jpg)`,
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            role="img"
            aria-label="Vitres propres et lumineuses après un nettoyage par LVTV Clean Service"
            className="h-80 w-full md:hidden"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}images/showcase/lvtv-showcase-mobile-opt.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
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
        <p className="text-gray-500 text-sm mt-3 font-medium tracking-widest uppercase">LVTV Clean Service</p>
      </div>
    </section>
  );
}

const allServices = [
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Nos services de nettoyage de vitres</h2>
          <p className="text-gray-500">Particulier ou professionnel, nous intervenons sur tout type de chantier en Moselle et Meurthe-et-Moselle.</p>
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
                alt="Laveur de vitres LVTV Clean Service en intervention en Moselle"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:to-white/0" />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">À propos</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">LVTV Clean Service</h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                LVTV Clean Service est une société locale basée en Moselle, spécialisée dans le lavage de vitres. Notre activité a commencé par des demandes de petits artisans et de commerçants ayant un besoin d'entretien de vitrine régulier, pour ensuite élargir notre clientèle à des particuliers et des sociétés de tailles plus conséquentes.
              </p>
              <div className="flex flex-col gap-2 mb-7">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <WhatsAppIcon className="w-4 h-4 text-teal-500 shrink-0" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">{PHONE_DISPLAY}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                  <a href="mailto:Lvtvcleanservice@gmail.com" className="hover:text-teal-600 transition-colors">Lvtvcleanservice@gmail.com</a>
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
  const [emailStatus, setEmailStatus] = useState<"idle" | "submitting">("idle");
  // L'adresse d'envoi et les champs cachés ne sont ajoutés qu'une fois la page chargée :
  // dans le HTML pré-rendu, ce motif est pris à tort pour du hameçonnage par certains antivirus (Avast).
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const formsparkEndpoint =
    "https://submit-form.com/64a2c6b4-6028-4af3-9269-a0f959613084";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const deliveryMethod =
      submitter instanceof HTMLButtonElement ? submitter.value : "whatsapp";

    if (deliveryMethod === "email") {
      setEmailStatus("submitting");
      return;
    }

    event.preventDefault();
    setEmailStatus("idle");
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
            <p className="text-gray-500 text-sm">Remplissez le formulaire puis envoyez votre demande par WhatsApp ou par email.</p>
          </div>
          <form action={hydrated ? formsparkEndpoint : undefined} method="POST" onSubmit={handleSubmit}>
            {hydrated && (
              <>
                <input type="hidden" name="_redirect" value="https://lvtvcleanservice.fr/#devis" />
                <input
                  type="hidden"
                  name="_email.subject"
                  value={`Nouvelle demande de devis - ${firstName} ${lastName}`}
                />
                <input type="hidden" name="Type de bien" value={selected} />
                <input type="hidden" name="Message complet" value={message} />
              </>
            )}
            <div className="grid sm:grid-cols-2 gap-5 mb-7">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="first-name">Prénom</label>
                <input id="first-name" name="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre prénom" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="last-name">Nom</label>
                <input id="last-name" name="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre nom" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="address">Adresse</label>
                <input id="address" name="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Rue, numéro, complément" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="city">Ville</label>
                <input id="city" name="Ville" value={city} onChange={(e) => setCity(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Votre ville" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="postal-code">Code postal</label>
                <input id="postal-code" name="Code postal" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required inputMode="numeric"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="75000" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="department">Département</label>
                <input id="department" name="Département" value={department} onChange={(e) => setDepartment(e.target.value)} required
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Ex : Moselle, Nord, Gironde" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2" htmlFor="phone-number">Numéro de téléphone</label>
                <input id="phone-number" name="Téléphone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required type="tel"
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
                <select name="Nombre de fenêtres" value={windows} onChange={(e) => setWindows(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer appearance-auto">
                  <option>1 à 5 fenêtres</option>
                  <option>6 à 10 fenêtres</option>
                  <option>11 à 20 fenêtres</option>
                  <option>Plus de 20 fenêtres</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Fréquence souhaitée</label>
                <select name="Fréquence souhaitée" value={frequency} onChange={(e) => setFrequency(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer appearance-auto">
                  <option>Intervention unique</option>
                  <option>Mensuelle</option>
                  <option>Bimensuelle</option>
                  <option>Trimestrielle</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Lock className="w-4 h-4" /> Données sécurisées
              </span>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button
                  type="submit"
                  name="deliveryMethod"
                  value="whatsapp"
                  className="w-full sm:w-auto bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Demander mon devis sur WhatsApp
                </button>
                <button
                  type="submit"
                  name="deliveryMethod"
                  value="email"
                  disabled={emailStatus === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  {emailStatus === "submitting" ? "Envoi en cours..." : "Demander mon devis par mail"}
                </button>
              </div>
            </div>
            {emailStatus === "submitting" && (
              <p className="mt-4 text-center text-sm font-medium text-teal-600">
                Envoi vers le formulaire sécurisé...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ZonesSection() {
  const groups = [
    { title: "Moselle (57)", cities: CITIES_57 },
    { title: "Meurthe-et-Moselle (54)", cities: CITIES_54 },
  ];
  return (
    <section id="zones" className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">Zones d'intervention</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Lavage de vitres en Moselle et Meurthe-et-Moselle
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Basés à Amnéville, en Moselle, nous nettoyons les vitres des particuliers, commerces et entreprises de Metz à Nancy, en passant par Thionville, Forbach et Sarreguemines.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-5">
                <MapPin className="w-5 h-5 text-teal-500" /> Nettoyage de vitres en {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.cities.map((c) =>
                  c === "Metz" ? (
                    <li key={c}>
                      <Link to="/nettoyage-vitres-metz" className="block text-xs bg-teal-500 text-white font-semibold px-3 py-1.5 rounded-full hover:bg-teal-600 transition-colors">
                        Metz →
                      </Link>
                    </li>
                  ) : (
                    <li key={c} className="text-xs bg-teal-50 text-teal-700 font-medium px-3 py-1.5 rounded-full">{c}</li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          Votre commune n'est pas dans la liste ?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:text-teal-700">
            Écrivez-nous sur WhatsApp
          </a>
          , nous étudions chaque demande.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="px-6 py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-500 uppercase mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Questions fréquentes sur le nettoyage de vitres</h2>
        </div>
        <div className="space-y-3">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm open:shadow-md transition-shadow">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm md:text-base">{q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-teal-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100 px-6 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Nettoyage et lavage de vitres en Moselle et Meurthe-et-Moselle. Transparence, professionnalisme et respect de l'environnement.
            </p>
            <div className="mt-4 space-y-1.5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-500 hover:text-teal-600 transition-colors">
                <WhatsAppIcon className="w-3.5 h-3.5" /> {PHONE_DISPLAY}
              </a>
              <a href="mailto:Lvtvcleanservice@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-teal-600 transition-colors">
                <Mail className="w-3.5 h-3.5" /> Lvtvcleanservice@gmail.com
              </a>
              <p className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.city}
              </p>
              <a
                href="https://www.snapchat.com/add/lvtvclean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-900 transition-colors"
              >
                <SnapchatIcon className="w-3.5 h-3.5 object-contain" /> Lvtvclean
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              {["Maison & Appartement", "Vitrine de commerce", "Baies vitrées", "Store & Volet"].map((item) => (
                <li key={item}><a href="/#services" className="hover:text-gray-900 transition-colors cursor-pointer">{item}</a></li>
              ))}
              <li><Link to="/nettoyage-vitres-metz" className="hover:text-gray-900 transition-colors cursor-pointer">Nettoyage de vitres à Metz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Entreprise</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-gray-900 transition-colors cursor-pointer">À propos</Link></li>
              {[
                { label: "Notre méthode", href: "/#methode" },
                { label: "Zones d'intervention", href: "/#zones" },
                { label: "FAQ", href: "/#faq" },
                { label: "Devis gratuit", href: "/#devis" },
              ].map((item) => (
                <li key={item.label}><a href={item.href} className="hover:text-gray-900 transition-colors cursor-pointer">{item.label}</a></li>
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
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-xs text-gray-400">© {year} LVTV Clean Service. Tous droits réservés.</p>
            <DevelopedBy />
          </div>
          <div className="flex items-center gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" aria-label="LVTV Clean Service sur Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.snapchat.com/add/lvtvclean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Snapchat Lvtvclean"
            >
              <SnapchatIcon className="w-5 h-5 object-contain opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
