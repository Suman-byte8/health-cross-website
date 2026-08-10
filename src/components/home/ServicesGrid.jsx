import { ArrowRight } from "lucide-react";
import { serviceGridData } from "../../data/homeData";

const ServicesGrid = () => {
  return (
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
          {serviceGridData.map((item) => {
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
  );
};

export default ServicesGrid;
