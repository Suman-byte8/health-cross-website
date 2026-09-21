import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import { statsData } from "../../data/homeData";
import PlaceholderMedia from "../common/PlaceholderMedia";

// Group photo is picked up automatically from src/assets/team/ (png, jpg,
// webp). In production the section stays hidden until a photo exists; while
// developing locally an empty slot is shown so the layout can be reviewed.
const modules = import.meta.glob("../../assets/team/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});
const groupPhoto = Object.values(modules)[0];

const professionals = statsData.find((stat) => stat.label === "Professionals");

const OurTeamSection = () => {
  if (!groupPhoto && !import.meta.env.DEV) return null;

  return (
    <section id="our-team" className="bg-[#f4f8f6] py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
            {groupPhoto ? (
              <img
                src={groupPhoto}
                alt="The Health Cross Organization team"
                loading="lazy"
                className="w-full rounded-xl object-cover"
              />
            ) : (
              <PlaceholderMedia icon={Users} label="Group photo — add it to src/assets/team/" aspect="aspect-[4/3]" />
            )}
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">OUR TEAM</div>
            <h2 className="mt-2 text-[26px] font-bold leading-tight tracking-tight lg:text-[32px]">
              The people behind your care
            </h2>
            <span className="mt-3 block h-1 w-12 rounded-full bg-[#0d7055]" aria-hidden="true" />
            <p className="mt-4 text-sm leading-6 text-[#1a1a1a]/65">
              Doctors, nurses and therapists with verified qualifications.
            </p>

            {professionals && (
              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055]">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xl font-bold leading-none text-[#0d7055]">{professionals.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#1a1a1a]/55">
                    {professionals.label}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6">
              <Link
                to="/#wellness"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0d7055] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a5243]"
              >
                Clinical Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
