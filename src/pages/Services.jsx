import CareServicesSection from "../components/home/CareServicesSection";
import ServicesGrid from "../components/home/ServicesGrid";
import Seo from "../components/common/Seo";
import PageHeader from "../components/common/PageHeader";

export default function Services() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <Seo
        title="Our Services"
        description="Explore Health Cross Organization's home healthcare services in Kolkata — elder care, critical care, physiotherapy, nursing, diagnostics and more, delivered at your doorstep."
        path="/services"
      />
      <PageHeader
        title="Our Services"
        description="Elder care, critical care, physiotherapy, nursing, diagnostics and more, delivered at your doorstep."
        crumbs={[{ label: "Our Services" }]}
      />
      <CareServicesSection />
      <ServicesGrid />
    </div>
  );
}
