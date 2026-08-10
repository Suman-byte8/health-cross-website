import { useEffect, useState } from "react";
import { ArrowRight, HeartHandshake, MapPin, Star, Clock3 } from "lucide-react";
import officeInside from "../../assets/office_inside.png";
import { heroWords } from "../../data/homeData";

const HeroSection = () => {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
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
              elder care and critical support to physiotherapy, diagnostics and
              doctor visits across Kolkata.
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
  );
};

export default HeroSection;
