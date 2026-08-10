import HeroSection from "../components/home/HeroSection";
import BenefitsSection from "../components/home/BenefitsSection";
import CareServicesSection from "../components/home/CareServicesSection";
import AboutSection from "../components/home/AboutSection";
import PricingSection from "../components/home/PricingSection";
import TeamSection from "../components/home/TeamSection";
import StatsSection from "../components/home/StatsSection";
import ServicesGrid from "../components/home/ServicesGrid";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <HeroSection />
      <BenefitsSection />
      <CareServicesSection />
      <AboutSection />
      <PricingSection />
      <TeamSection />
      <StatsSection />
      <ServicesGrid />
      <ContactSection />
    </div>
  );
}
