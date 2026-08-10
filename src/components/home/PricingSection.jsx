import { CheckCircle2 } from "lucide-react";
import { plansData } from "../../data/homeData";

const PricingSection = () => {
  return (
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
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[20px] p-6 lg:p-7 shadow-sm transition hover:shadow-xl ${
                plan.highlight
                  ? "bg-[#0d7055] text-white scale-105 hover:scale-[1.08]"
                  : "bg-white border border-gray-200 hover:scale-[1.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    plan.highlight ? "text-white/80" : "text-[#1a1a1a]/50"
                  }`}
                >
                  {plan.name}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    plan.highlight
                      ? "bg-white/20 text-white"
                      : "bg-[#e5f3ef] text-[#0d7055]"
                  }`}
                >
                  {plan.tag}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-white/70" : "text-[#1a1a1a]/50"
                  }`}
                >
                  /mo
                </span>
              </div>
              <p
                className={`mt-1 text-xs ${
                  plan.highlight ? "text-white/60" : "text-[#1a1a1a]/50"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <CheckCircle2
                      className={`h-4 w-4 shrink-0 ${
                        plan.highlight ? "text-white" : "text-[#0d7055]"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919732443744"
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition hover:opacity-90 ${
                  plan.highlight
                    ? "bg-white text-[#0d7055]"
                    : "bg-[#0d7055] text-white"
                }`}
              >
                {plan.action}
              </a>
              <p
                className={`mt-2.5 text-center text-[11px] ${
                  plan.highlight ? "text-white/50" : "text-[#1a1a1a]/40"
                }`}
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
  );
};

export default PricingSection;
