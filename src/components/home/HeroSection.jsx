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
    <section id="home" className="relative pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-br from-[#0d7055] to-[#0a5243] pb-24 pt-8 text-white lg:pt-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white ring-1 ring-white/20">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                Home Healthcare • Kolkata • Since 2023
              </div>

              <h1 className="mt-5 font-serif text-[36px] font-bold leading-tight tracking-tight sm:text-[44px] lg:text-[52px]">
                {heroWords.map((word, index) => (
                  <span
                    key={word}
                    className={`inline-block transition-all duration-500 ${
                      heroReady ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    } ${word === "Close" ? "text-[#ffd699]" : ""} ${word === "Home." ? "font-normal italic text-[#ffd699]" : ""}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>

              <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-white/80">
                Compassionate clinical care delivered at your doorstep — from
                elder care and critical support to physiotherapy, diagnostics and
                doctor visits across Kolkata.
              </p>
              <p className="mt-2 text-[15px] italic text-[#ffd699]">
                "Where healing meets home."
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#0d7055] shadow-lg transition hover:bg-[#e5f3ef]"
                >
                  Explore More <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919732443744"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <HeartHandshake className="h-4 w-4 text-[#ffd699]" /> Talk to Care Team
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/75">
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
                <p className="text-xs leading-tight text-white/70">
                  <span className="font-semibold text-white">Trusted by 1,000+ families</span>
                  <br />
                  Across Kolkata & suburbs
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 lg:h-[420px]">
                <img
                  src={officeInside}
                  alt="Elderly care at home"
                  className="h-[320px] w-full rounded-xl bg-white/5 object-contain lg:h-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick access card, overlapping the banner */}
      <div className="relative z-10 mx-auto -mt-14 max-w-[1180px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 shadow-xl lg:grid-cols-4">
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
