import { doctors } from "../../data/doctors";
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
              <h3 className="font-bold text-sm leading-tight">{doctor.name}</h3>
              {doctor.degree && (
                <span className="mt-2 inline-flex items-center rounded-full bg-[#e5f3ef] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#0d7055]">
                  {doctor.degree}
                </span>
              )}
              <div className={doctor.degree ? "mt-1.5" : "mt-1"}>
                {doctor.roles.map((role) => (
                  <div key={role} className="text-xs font-semibold leading-snug text-[#1a1a1a]/70">
                    {role}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeamSection;
