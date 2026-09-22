import { ArrowRight } from "lucide-react";
import { serviceGridData } from "../../data/homeData";
import SectionHeading from "../common/SectionHeading";

const ServicesGrid = () => {
  return (
    <section id="services-grid" className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="16 HOME SERVICES"
          title="Everything you need, at home"
          subtitle={'Tap "Contact Now" to check availability in your area — we respond within 30 minutes.'}
        />

        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {serviceGridData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#0d7055]/40 hover:shadow-lg"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#e5f3ef] text-[#0d7055]">
                  <Icon className="h-7 w-7" />
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
