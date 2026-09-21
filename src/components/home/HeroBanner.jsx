import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";

// Banner images are picked up automatically from src/assets/banners/
// (png, jpg, webp), sorted by file name — e.g. banner-1.webp, banner-2.webp.
// Recommended size 1920×600. With no images the banner simply isn't rendered.
const modules = import.meta.glob("../../assets/banners/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const banners = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const count = banners.length;

  useEffect(() => {
    if (count < 2) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [count]);

  if (count === 0) return null;

  const go = (step) => setIndex((i) => (i + step + count) % count);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-[#e5f3ef]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {banners.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Health Cross Organization — home healthcare in Kolkata"
              loading={i === 0 ? "eager" : "lazy"}
              className="h-[220px] w-full shrink-0 object-cover object-center sm:h-[300px] lg:h-[400px] xl:h-[460px]"
            />
          ))}
        </div>

        {/* Text overlay — kept as live HTML so it stays crisp and responsive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a5243]/85 via-[#0a5243]/45 to-transparent sm:from-[#0a5243]/80 sm:via-[#0a5243]/30" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-10 lg:px-[max(3.5rem,calc((100vw-1180px)/2+1.5rem))]">
          <div className="max-w-[300px] text-white sm:max-w-[420px] lg:max-w-[520px]">
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ffd699] sm:text-xs">
              Home Healthcare • Kolkata
            </div>
            <div className="mt-1.5 font-serif text-[22px] font-bold leading-tight sm:mt-2 sm:text-[30px] lg:text-[40px]">
              Where healing <span className="font-normal italic text-[#ffd699]">meets home.</span>
            </div>
            <p className="mt-2 hidden text-sm leading-6 text-white/85 sm:block">
              Doctor visits, nursing, critical care, physiotherapy and diagnostics at your doorstep.
            </p>
            <div className="pointer-events-auto mt-3 flex flex-wrap gap-2 sm:mt-4">
              <a
                href="tel:+917439036203"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-[#0d7055] shadow transition hover:bg-[#e5f3ef] sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <Phone className="h-3.5 w-3.5" /> Call Now 74390 36203
              </a>
              <a
                href="https://wa.me/919732443744"
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1.5 rounded-lg border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous banner"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow transition hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next banner"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow transition hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {banners.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to banner ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
