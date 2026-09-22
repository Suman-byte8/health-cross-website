import { Link } from "react-router-dom";
import { serviceGridData } from "../../data/homeData";
import SectionHeading from "../common/SectionHeading";

// Compact icon-tile overview of the services already listed on /services.
const QuickServicesSection = () => (
  <section className="bg-white py-10 lg:py-12">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <SectionHeading eyebrow="16 HOME SERVICES" title="Everything you need, at home" />
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {serviceGridData.map(({ icon: Icon, title }) => (
          <Link
            key={title}
            to="/services#services-grid"
            className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 text-center transition hover:border-[#0d7055] hover:shadow-md"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full sm:h-[72px] sm:w-[72px] bg-[#e5f3ef] text-[#0d7055] transition group-hover:bg-[#0d7055] group-hover:text-white">
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>
            <span className="mt-3 text-[13px] font-semibold leading-tight text-[#1a1a1a]">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default QuickServicesSection;
