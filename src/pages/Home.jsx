import { useEffect, useState } from "react";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Award,
  Bed,
  Brain,
  Check,
  CheckCircle2,
  Clock3,
  Droplets,
  GraduationCap,
  Heart,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircle,
  PersonStanding,
  Phone,
  Scan,
  ShieldPlus,
  UserCog,
  Star,
  Stethoscope,
  Syringe,
  TestTube,
  Wind,
  Users,
  Airplay,
} from "lucide-react";

import officeInside from "../assets/office_inside.png";

const heroWords = ["Care", "Should", "Feel", "Close", "to", "Home."];

const benefits = [
  {
    icon: Phone,
    label: "24/7 Helpline",
    text: "Urgent care coordination and emergency response.",
  },
  {
    icon: GraduationCap,
    label: "Clinical Experts",
    text: "MD, BAMS and licensed therapists with verified credentials.",
  },
  {
    icon: HeartPulse,
    label: "Comprehensive Care",
    text: "Doctor visits, diagnostics and rehab delivered at home.",
  },
];

const serviceCards = [
  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
    badge: "Elder Care",
    title: "Elder Care at Home",
    description:
      "Daily assistance, medication support and companionship for seniors.",
    icon: Users,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    badge: "Critical Care",
    title: "Critical Care Setup",
    description:
      "ICU-at-home with monitoring, ventilator support and specialist nurses.",
    icon: Activity,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    badge: "Physiotherapy",
    title: "Physiotherapy at Home",
    description: "Rehab and mobility support tailored to recovery goals.",
    icon: PersonStanding,
  },
];

const aboutItems = [
  {
    label: "Personalized Care Plans",
    description:
      "Tailored to medical history, lifestyle and family preferences.",
  },
  {
    label: "Experienced Professionals",
    description: "Doctors, nurses and therapists with verified qualifications.",
  },
  {
    label: "Reliable Support, Anytime",
    description: "24/7 helpline, WhatsApp coordination and rapid response.",
  },
  {
    label: "Flexible Options",
    description: "Hourly, daily, monthly and subscription plans.",
  },
  {
    label: "Quality Coordination",
    description: "One coordinator, regular updates and family counselling.",
  },
];

const plans = [
  {
    name: "STANDARD",
    tag: "Essential Care",
    price: "₹2,099",
    description: "Billed monthly • Cancel anytime",
    features: [
      "Doctor home visit — general physician, monthly once",
      "Nursing visit for vitals & wellness — 4 times",
      "Unlimited telecommunication",
      "Free pharmacy delivery & lab sample pickup",
      "Nutritionist diet plan",
      "Dedicated clinical manager (on-call support)",
      "22% discount on medicine",
      "25% discount on lab tests",
    ],
    action: "Choose Standard",
  },
  {
    name: "PREMIUM",
    tag: "Comprehensive",
    price: "₹3,499",
    description: "Best value • Dedicated coordinator",
    features: [
      "Doctor home visit — general physician, monthly twice",
      "Nursing visit for vitals & wellness — 8 times",
      "Unlimited telecommunication",
      "Free pharmacy delivery & lab sample pickup",
      "Nutritionist diet plan",
      "Annual full body checkup (free annually)",
      "22% discount on medicine",
      "30% discount on lab tests",
      "Psychologist counselling online (if needed)",
      "Dedicated clinical manager support (on-call)",
    ],
    action: "Choose Premium",
    highlight: true,
  },
];

const stats = [
  { value: "1,000+", label: "Patients served" },
  { value: "30+", label: "Professionals" },
  { value: "5,00+", label: "Home visits" },
  { value: "3+", label: "Years excellence" },
];

const serviceGrid = [
  { icon: Stethoscope, title: 'Doctor Home Visit', desc: 'Medical consultation at your doorstep.' },
  { icon: HeartPulse, title: '24×7 Nursing Care', desc: 'Round-the-clock professional nursing support.' },
  { icon: UserCog, title: '24×7 Medical Attendant', desc: 'Continuous care by trained medical staff.' },
  { icon: Wind, title: 'Portable Oxygen Support', desc: 'Oxygen therapy anywhere, anytime.' },
  { icon: Airplay, title: 'CPAP / BiPAP & Ventilation', desc: 'Advanced breathing assistance for critical care.' },
  { icon: Activity, title: '24×7 Critical Care Technologist', desc: 'Expert critical care monitoring round the clock.' },
  { icon: Heart, title: 'ECG & Holter at Home', desc: 'Convenient heart monitoring from your home.' },
  { icon: Scan, title: 'NCV / EMG', desc: 'Fast and accurate nerve and muscle testing at home.' },
  { icon: Brain, title: 'EEG', desc: 'Safe and accurate brain wave monitoring at home.' },
  { icon: Droplets, title: 'Uroflowmetry', desc: 'Quick and simple urinary flow testing at home.' },
  { icon: TestTube, title: 'Home Blood Collection', desc: 'Hassle-free blood tests done at your home.' },
  { icon: Bed, title: 'Hospital Bed Support', desc: 'Easy and reliable hospital bed setup at home.' },
  { icon: PersonStanding, title: 'Physiotherapy', desc: 'Expert therapy to improve mobility and recovery at home.' },
  { icon: Ambulance, title: 'Ambulance Service', desc: 'Quick and safe patient transport.' },
  { icon: Scan, title: 'Portable X-Ray', desc: 'Home X-ray service for quick and accurate diagnosis.' },
  { icon: Syringe, title: 'Injection Pushing', desc: 'Safe and sterile injections at home by professionals.' },
]

const team = [
  {
    name: "Dr. Ashik Ikbal",
    role: "MD",
    label: "General Physician • Home Visits",
    image: "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Inayet Kabir",
    role: "BAMS",
    label: "Ayurvedic & Wellness Care",
    image: "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Selim Aktar",
    role: "BAMS",
    label: "Ayurvedic & Wellness Care",
    image: "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Neha Sultana",
    // role: "MBBS",
    // label: "Women & Family Health",
    image: "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Neha Shabnam",
    // role: "BDS",
    // label: "Oral & General Wellness",
    image: "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
];

// const galleryItems = [
//   "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1000&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1586776802477-3680284edb4e?q=80&w=1000&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1000&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
// ];

export default function HealthCross() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      {/* Hero Section */}
      <section id="home" className="pt-[88px] pb-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#0d7055] shadow-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Home Healthcare • Kolkata • Since 2023
              </div>

              <h1 className="font-serif font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-tight tracking-tight mt-5 text-[#1a1a1a]">
                {heroWords.map((word, index) => (
                  <span
                    key={word}
                    className={`inline-block transition-all duration-500 ${
                      heroReady
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    } ${word === "Close" ? "text-[#0d7055]" : ""} ${word === "Home." ? "italic font-normal text-[#0d7055]" : ""}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>

              <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-[#1a1a1a]/70">
                Compassionate clinical care delivered at your doorstep — from
                elder care and critical support to physiotherapy, diagnostics
                and doctor visits across Kolkata.
              </p>
              <p className="mt-2 text-[15px] italic text-[#0d7055]">
                "Where healing meets home."
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#services-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0a5243]"
                >
                  Explore More <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919732443744"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0d7055]/15 bg-white px-7 py-3.5 text-sm font-semibold transition hover:bg-[#0d7055]/5"
                >
                  <HeartHandshake className="h-4 w-4 text-[#0d7055]" /> Talk to
                  Care Team
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 text-xs text-[#1a1a1a]/60">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> Response in ~30 mins
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Jessore Road, Kolkata
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-[#d4a574] fill-[#d4a574]" />{" "}
                  4.8 Google Rating
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[33, 32, 31].map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/100?img=${id}`}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-xs leading-tight text-[#1a1a1a]/60">
                  <span className="font-semibold text-[#1a1a1a]">
                    Trusted by 1,000+ families
                  </span>
                  <br />
                  Across Kolkata & suburbs
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-[440px]">
              <div className="relative overflow-hidden rounded-[20px] h-[360px] lg:h-full shadow-2xl">
                <img
                  src={officeInside}
                  alt="Elderly care at home"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d7055]/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.label}
                  className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d7055] text-white shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{benefit.label}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#1a1a1a]/65">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Care Services Section */}
      <section id="care-services" className="py-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              <span className="h-[2px] w-6 bg-[#0d7055]" /> CARE SERVICES
            </div>
            <h2 className="mt-2 text-[28px] font-bold tracking-tight lg:text-[34px]">
              Care built around home
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {serviceCards.map((card) => {
              const BadgeIcon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.badge}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur text-[#1a1a1a]">
                      <BadgeIcon className="h-3.5 w-3.5 text-[#0d7055]" />{" "}
                      {card.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[17px] font-bold">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-5 text-[#1a1a1a]/65">
                      {card.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] transition group-hover:gap-3"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 lg:py-14">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2 bg-white rounded-[24px] border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-[20px] h-[360px] lg:h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=900&auto=format&fit=crop"
                  alt="Care team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7055] text-white">
                      <Award className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold">
                        6+ Years Excellence
                      </div>
                      <div className="text-xs text-[#1a1a1a]/60">
                        Kolkata's trusted home healthcare
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-10">
              <div className="text-xs font-bold tracking-[0.14em] text-[#0d7055] flex items-center gap-2">
                <span className="h-6 w-[2px] bg-[#0d7055]" /> ABOUT HEALTH CROSS
              </div>
              <h2 className="mt-3 text-[26px] font-bold tracking-tight lg:text-[32px]">
                What Makes Us Different
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#1a1a1a]/65">
                At Health Cross Organization, care is not a service — it's a
                relationship. We combine clinical rigor with human warmth to
                keep families together, safe and supported at home.
              </p>
              <ul className="mt-6 space-y-3.5">
                {aboutItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="flex gap-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055] shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-semibold text-sm">{item.label}</div>
                      <div className="text-sm leading-5 text-[#1a1a1a]/60">
                        {item.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#consultation"
                  className="rounded-full bg-[#0d7055] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a5243] transition"
                >
                  Book Consultation
                </a>
                <a
                  href="tel:+919732443744"
                  className="rounded-full border border-[#0d7055]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#0d7055]/5 transition"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="subscription" className="py-8 lg:py-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              <span className="h-[2px] w-6 bg-[#0d7055]" /> SUBSCRIPTION PLANS{" "}
              <span className="h-[2px] w-6 bg-[#0d7055]" />
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[36px]">
              Care that fits your life
            </h2>
            <p className="mt-2 text-sm text-[#1a1a1a]/60">
              Transparent, verified pricing. No hidden fees. Pause or upgrade
              anytime.
            </p>
          </div>

          <div className="mx-auto mt-8 grid gap-6 max-w-[860px] md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[20px] p-6 lg:p-7 shadow-sm transition hover:shadow-xl ${plan.highlight ? "bg-[#0d7055] text-white scale-105 hover:scale-[1.08]" : "bg-white border border-gray-200 hover:scale-[1.02]"}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-white/80" : "text-[#1a1a1a]/50"}`}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${plan.highlight ? "bg-white/20 text-white" : "bg-[#e5f3ef] text-[#0d7055]"}`}
                  >
                    {plan.tag}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-white/70" : "text-[#1a1a1a]/50"}`}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`mt-1 text-xs ${plan.highlight ? "text-white/60" : "text-[#1a1a1a]/50"}`}
                >
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${plan.highlight ? "text-white" : "text-[#0d7055]"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919732443744"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition hover:opacity-90 ${plan.highlight ? "bg-white text-[#0d7055]" : "bg-[#0d7055] text-white"}`}
                >
                  {plan.action}
                </a>
                <p
                  className={`mt-2.5 text-center text-[11px] ${plan.highlight ? "text-white/50" : "text-[#1a1a1a]/40"}`}
                >
                  {plan.name === "STANDARD"
                    ? "Ideal for routine monitoring & seniors living independently"
                    : "Recommended for post-discharge & ongoing care needs"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="wellness" className="py-8 lg:py-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              OUR CLINICAL TEAM
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">
              Doctors who come home
            </h2>
            <p className="mt-2 text-sm text-[#1a1a1a]/60">
              Verified qualifications only — no inflated titles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[20px] border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-3 h-20 w-20 rounded-full border-4 border-gray-100 object-cover"
                />
                <div className="font-bold text-sm leading-tight">
                  {member.name}
                </div>
                <div className="mt-1 text-xs font-semibold text-[#0d7055]">
                  {member.role}
                </div>
                <div className="mt-1 text-[11px] text-[#1a1a1a]/60">
                  {member.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-8">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              GALLERY
            </div>
            <h2 className="mt-2 text-[24px] font-bold lg:text-[30px]">
              Care in action
            </h2>
          </div>
          <div className="grid auto-rows-[160px] gap-3 lg:auto-rows-[200px] grid-cols-2 md:grid-cols-3">
            {galleryItems.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-[18px] cursor-pointer ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0d7055]/0 transition group-hover:bg-[#0d7055]/10" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-8">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[24px] bg-[#0d7055] p-6 lg:p-10 text-white">
            <div className="grid gap-6 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-emerald-300 text-[30px] font-bold lg:text-[42px] tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-white/70 font-semibold">
                    {stat.label}
                  </div>
                  <div className="mx-auto mt-3 h-[2px] w-8 bg-[#ffd699]" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[11px] text-white/40">
              Figures based on internal records up to Dec 2024 • Verified on
              request.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              16 HOME SERVICES
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">
              Everything you need, at home
            </h2>
            <p className="mt-2 text-sm text-[#1a1a1a]/60">
              Tap "Contact Now" to check availability in your area — we respond
              within 30 minutes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceGrid.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-[18px] border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5f3ef] text-[#0d7055]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-[13.5px] font-bold leading-tight">
                    {item.title}
                  </div>
                  <div className="mt-1 text-xs text-[#1a1a1a]/60 flex-1">
                    {item.desc}
                  </div>
                  <a
                    href="https://wa.me/919732443744"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0d7055] transition hover:gap-2"
                  >
                    Contact Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#e5f3ef] via-white to-[#fff8e1] border border-gray-200 p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-[#0d7055]">
                  <Heart className="h-3.5 w-3.5" /> Elderly Care Focus
                </div>
                <h2 className="mt-4 text-[28px] font-bold lg:text-[36px] leading-tight tracking-tight">
                  Care Should Feel{" "}
                  <span className="font-serif italic font-normal text-[#0d7055]">
                    Close to Home.
                  </span>
                </h2>
                <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#1a1a1a]/65">
                  Whether it's a doctor visit, nursing support or a full ICU
                  setup — we bring hospital-quality care with the warmth of
                  home.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+917439036203"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0a5243] transition"
                  >
                    <Phone className="h-4 w-4" /> Call Now — 74390 36203
                  </a>
                  <a
                    href="https://wa.me/919732443744?text=Hello%20Health%20Cross,%20I%20need%20home%20healthcare%20support"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1eb855] transition"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#1a1a1a]/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> 68/44 Jessore Rd, Kolkata
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" /> 24/7 Coordination
                  </span>
                </div>
              </div>

              <div className="rounded-[20px] border border-gray-200 bg-white p-5 shadow-lg">
                <div className="flex items-center gap-2 text-[15px] font-bold text-[#1a1a1a]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055]">
                    <Phone className="h-4 w-4" />
                  </span>
                  Request a Callback
                </div>
                <form
                  className="mt-4 space-y-3"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm outline-none focus:border-[#0d7055] focus:ring-2 focus:ring-[#e5f3ef] transition"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm outline-none focus:border-[#0d7055] focus:ring-2 focus:ring-[#e5f3ef] transition"
                    required
                  />
                  <select className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm outline-none focus:border-[#0d7055] focus:ring-2 focus:ring-[#e5f3ef] transition">
                    {[
                      "Elder Care",
                      "Critical Care",
                      "Physiotherapy",
                      "Nursing",
                      "Doctor Visit",
                      "Diagnostics",
                    ].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <button className="w-full rounded-full bg-[#0d7055] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a5243] transition">
                    Request Callback
                  </button>
                  <p className="text-[11px] text-center text-[#1a1a1a]/40">
                    We respect privacy. No spam — only care coordination.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
