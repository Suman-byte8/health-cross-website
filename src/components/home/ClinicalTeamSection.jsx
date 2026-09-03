import { doctors } from "../../data/doctors";

const ClinicalTeamSection = () => {
  return (
    <section id="wellness" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
            OUR CLINICAL TEAM
          </div>
          <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">
            Doctors who come home
          </h2>
          <p className="mt-2 text-sm text-[#1a1a1a]/60">
            Verified qualifications only — no inflated titles.
          </p>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="rounded-[20px] border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-md"
            >
              <span className="mx-auto mb-3 block h-[2px] w-8 bg-[#0d7055]" aria-hidden="true" />
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
