import CareServicesSection from "../components/home/CareServicesSection";
import ServicesGrid from "../components/home/ServicesGrid";
import Seo from "../components/common/Seo";

export default function Services() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo
        title="Our Services"
        description="Explore Health Cross Organization's home healthcare services in Kolkata — elder care, critical care, physiotherapy, nursing, diagnostics and more, delivered at your doorstep."
        path="/services"
      />
      <div className="py-4 lg:py-6">
        <CareServicesSection />
        <ServicesGrid />
      </div>
    </div>
  );
}
