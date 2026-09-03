import AboutSection from "../components/home/AboutSection";
import Seo from "../components/common/Seo";

export default function About() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo
        title="About Us"
        description="Learn about Health Cross Organization — Kolkata's trusted home healthcare provider, combining clinical rigor with compassionate, personalized care."
        path="/about"
      />
      <div className="py-4 lg:py-6">
        <AboutSection />
      </div>
    </div>
  );
}
