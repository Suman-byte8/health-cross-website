import { benefitsData } from "../../data/homeData";

const BenefitsSection = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {benefitsData.map((benefit, index) => {
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
  );
};

export default BenefitsSection;