import { statsData } from "../../data/homeData";

const StatsSection = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0d7055] p-6 lg:p-10 text-white">
          <div className="grid gap-6 lg:grid-cols-4">
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-emerald-300 text-[30px] font-bold lg:text-[42px] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/70 font-semibold">
                  {stat.label}
                </div>
                <div className="mx-auto mt-3 h-[2px] w-8 bg-[#ffd699]" />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-white/40">
            Figures based on internal records up to Dec 2024 • Verified on
            request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
