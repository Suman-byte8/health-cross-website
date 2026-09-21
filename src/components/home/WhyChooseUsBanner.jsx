import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutItemsData } from "../../data/homeData";

// Full-width banner. The image is picked up automatically from
// src/assets/why-choose-us/ (png, jpg, webp) — recommended 1920x640.
// With no image in the folder the banner is not rendered.
const modules = import.meta.glob("../../assets/why-choose-us/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const image = Object.values(modules)[0];

const WhyChooseUsBanner = () => {
  if (!image) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#0a5243]">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="block h-auto w-full md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0a5243]/90 via-[#0a5243]/70 to-[#0a5243]/25 md:block" />

      <div className="relative mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-[560px] text-white">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffd699]">
            ABOUT HEALTH CROSS
          </div>
          <h2 className="mt-2 text-[28px] font-bold leading-tight lg:text-[38px]">
            What Makes Us Different
          </h2>
          <span className="mt-3 block h-1 w-12 rounded-full bg-[#ffd699]" aria-hidden="true" />
          <p className="mt-4 text-sm leading-6 text-white/85">
            At Health Cross Organization, care is not a service — it's a
            relationship. We combine clinical rigor with human warmth to keep
            families together, safe and supported at home.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {aboutItemsData.slice(0, 4).map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-3.5 py-3 text-sm font-semibold ring-1 ring-white/20 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0d7055]">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0d7055] shadow-lg transition hover:bg-[#e5f3ef]"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsBanner;
