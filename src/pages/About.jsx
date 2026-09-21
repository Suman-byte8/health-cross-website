import AboutSection from "../components/home/AboutSection";
import Seo from "../components/common/Seo";
import PageHeader from "../components/common/PageHeader";

export default function About() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <Seo
        title="About Us"
        description="Learn about Health Cross Organization — Kolkata's trusted home healthcare provider, combining clinical rigor with compassionate, personalized care."
        path="/about"
      />
      <PageHeader
        title="About Us"
        description="Kolkata's trusted home healthcare provider, combining clinical rigor with compassionate, personalized care."
        crumbs={[{ label: "About Us" }]}
      />
      <AboutSection />
    </div>
  );
}
