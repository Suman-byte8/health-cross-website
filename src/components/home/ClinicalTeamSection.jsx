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
              <div className="mt-1 text-xs font-semibold text-[#0d7055]">
                {doctor.specialization}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeamSection;
