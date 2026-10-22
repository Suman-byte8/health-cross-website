import { careCoordinators, doctors } from "../../data/doctors";
import SectionHeading from "../common/SectionHeading";

const initials = (name) =>
  name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const ClinicalTeamSection = () => {
  return (
    <section id="wellness" className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="OUR CLINICAL TEAM"
          title="Doctors who come home"
          subtitle="Verified qualifications only — no inflated titles."
        />

        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#0d7055]/40 hover:shadow-md"
            >
              <span
                className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f3ef] text-lg font-bold text-[#0d7055] ring-4 ring-[#f4f8f6]"
                aria-hidden="true"
              >
                {initials(doctor.name)}
              </span>
              <div>
                {doctor.roles.map((role) => (
                  <div
                    key={role}
                    className="text-[11px] font-bold uppercase leading-snug tracking-wide text-[#0d7055]"
                  >
                    {role}
                  </div>
                ))}
              </div>
              <h3 className="mt-1 font-bold text-sm leading-tight">{doctor.name}</h3>
              {doctor.degree && (
                <div className="mt-1.5 text-xs font-semibold text-[#1a1a1a]/55">
                  {doctor.degree}
                  {doctor.abbr ? ` (${doctor.abbr})` : ""}
                </div>
              )}
            </article>
          ))}
        </div>

        {careCoordinators.length > 0 && (
          <div className="mt-6 border-t border-gray-100 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {careCoordinators.map((person) => (
                <div
                  key={person.name}
                  className="flex items-center gap-3 rounded-xl border border-[#0d7055]/15 bg-[#f4f8f6] px-5 py-3"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0d7055] ring-2 ring-[#0d7055]/15"
                    aria-hidden="true"
                  >
                    {initials(person.name)}
                  </span>
                  <div className="text-left">
                    <div className="text-[11px] font-bold uppercase leading-snug tracking-wide text-[#0d7055]">
                      {person.role}
                    </div>
                    <div className="text-sm font-bold leading-tight">{person.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClinicalTeamSection;
