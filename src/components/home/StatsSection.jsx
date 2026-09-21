import { statsData } from "../../data/homeData";

// One-line stats strip: all four figures sit in a single row on every screen
// size, separated by thin dividers.
const StatsSection = () => {
  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a5243] via-[#0d7055] to-[#0a5243] shadow-md">
          <div className="grid grid-cols-4 divide-x divide-white/20">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-1 py-5 text-center sm:px-4 sm:py-7 lg:flex-row lg:gap-4 lg:py-8"
              >
                <div className="text-[20px] font-bold leading-none tracking-tight text-[#ffd699] sm:text-[30px] lg:text-[40px]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[9px] font-semibold uppercase leading-tight tracking-wider text-white/80 sm:text-[11px] lg:mt-0 lg:text-left lg:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] text-[#1a1a1a]/45">
          Figures based on internal records up to Dec 2024 • Verified on
          request.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
