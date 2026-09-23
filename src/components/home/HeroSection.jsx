import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  HeartHandshake,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";
import officeInside from "../../assets/office_inside.png";
import { heroWords } from "../../data/homeData";
import HeroBanner from "./HeroBanner";

// Quick-access tiles that overlap the bottom edge of the banner.
const quickActions = [
  { icon: Phone, label: "Call Now", hint: "74390 36203", href: "tel:+917439036203" },
  { icon: MessageCircle, label: "WhatsApp Us", hint: "97324 43744", href: "https://wa.me/919732443744", external: true },
  { icon: LayoutGrid, label: "Explore More", hint: "Our services", to: "/services" },
  { icon: Users, label: "Clinical Team", hint: "Meet our doctors", to: "/#wellness" },
];

const HeroSection = () => {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative bg-white pb-10">
      <HeroBanner />
      {/* Intro */}
      {/* Banner */}
      <div className="pb-8 pt-10 text-[#1a1a1a] lg:pt-12">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e5f3ef] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#0d7055] ring-1 ring-[#0d7055]/15">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Home Healthcare • Kolkata • Since 2023
              </div>

              <h1 className="mt-5 font-serif text-[36px] font-bold leading-tight text-[#1a1a1a] tracking-tight sm:text-[44px] lg:text-[52px]">
                {heroWords.map((word, index) => (
                  <span
                    key={word}
                    className={`inline-block transition-all duration-500 ${
                      heroReady ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    } ${word === "Close" ? "text-[#0d7055]" : ""} ${word === "Home." ? "font-normal italic text-[#0d7055]" : ""}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>

              <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-[#1a1a1a]/70">
                Compassionate clinical care delivered at your doorstep — from
                elder care and critical support to physiotherapy, diagnostics and
                doctor visits across Kolkata.
              </p>
              <p className="mt-2 text-[15px] italic text-[#0d7055]">
                "Where healing meets home."
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0d7055] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0a5243]"
                >
                  Explore More <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919732443744"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0d7055]/25 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#0d7055]/5"
                >
                  <HeartHandshake className="h-4 w-4 text-[#0d7055]" /> Talk to Care Team
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#1a1a1a]/60">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> Response in ~30 mins
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Jessore Road, Kolkata
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-[#d4a574] text-[#d4a574]" /> 4.8 Google Rating
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
                  <span className="font-semibold text-[#1a1a1a]">Trusted by 1,000+ families</span>
                  <br />
                  Across Kolkata & suburbs
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl border border-gray-200 bg-[#f4f8f6] p-2 shadow-sm lg:ml-auto lg:mr-0">
                <img
                  src={officeInside}
                  alt="Elderly care at home"
                  className="h-full w-full rounded-xl object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick access card */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 shadow-md lg:grid-cols-4">
          {quickActions.map(({ icon: Icon, label, hint, href, to, external }) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055] transition group-hover:bg-[#0d7055] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-[#1a1a1a]">{label}</span>
                  <span className="block truncate text-xs text-[#1a1a1a]/55">{hint}</span>
                </span>
              </>
            );
            const cls = "group flex items-center gap-3 bg-white p-4 transition hover:bg-[#f4f8f6] sm:p-5";
            return to ? (
              <Link key={label} to={to} className={cls}>{inner}</Link>
            ) : (
              <a
                key={label}
                href={href}
                className={cls}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
