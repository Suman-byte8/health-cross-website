import { teamData } from "../../data/homeData";

const TeamSection = () => {
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

        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="rounded-[20px] border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-3 h-20 w-20 rounded-full border-4 border-gray-100 object-cover"
              />
              <div className="font-bold text-sm leading-tight">
                {member.name}
              </div>
              {member.role && (
                <div className="mt-1 text-xs font-semibold text-[#0d7055]">
                  {member.role}
                </div>
              )}
              {member.label && (
                <div className="mt-1 text-[11px] text-[#1a1a1a]/60">
                  {member.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
