import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { serviceCardsData } from "../../data/homeData";

const CareServicesSection = () => {
  return (
    <section id="care-services" className="py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="mb-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
            <span className="h-[2px] w-6 bg-[#0d7055]" /> CARE SERVICES
          </div>
          <h2 className="mt-2 text-[28px] font-bold tracking-tight lg:text-[34px]">
            Care built around home
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#1a1a1a]/60">
            Three focused programs, each delivered by trained clinicians and
            coordinated through a single point of contact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {serviceCardsData.map((card) => {
            const BadgeIcon = card.icon;
            return (
              <article
                key={card.title}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Increased image area size to aspect-[3/4] to fit the full height of portrait images */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f4f8f6]">
                  <img
                    src={card.image}
                    alt={card.badge}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur text-[#1a1a1a] shadow-sm">
                    <BadgeIcon className="h-3.5 w-3.5 text-[#0d7055]" />{" "}
                    {card.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[17px] font-bold">{card.title}</h3>
                  <div className="flex-1">
                    <p className="mt-1.5 text-sm leading-5 text-[#1a1a1a]/65">
                      {card.description}
                    </p>

                    {card.highlights && (
                      <ul className="mt-3.5 space-y-1.5 border-t border-gray-100 pt-3.5">
                        {card.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-[#1a1a1a]/60">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0d7055]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] transition group-hover:gap-3"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[18px] border border-dashed border-[#0d7055]/25 bg-[#f4f8f6] px-5 py-4">
          <p className="text-sm text-[#1a1a1a]/70">
            Looking for something specific? We offer 16 home healthcare services in total.
          </p>
          <a
            href="#services-grid"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] transition hover:gap-3"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareServicesSection;
