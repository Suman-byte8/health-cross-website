import HeroSection from "../components/home/HeroSection";
import QuickServicesSection from "../components/home/QuickServicesSection";
import BenefitsSection from "../components/home/BenefitsSection";
import WhyChooseUsBanner from "../components/home/WhyChooseUsBanner";
import OurTeamSection from "../components/home/OurTeamSection";
import ClinicalTeamSection from "../components/home/ClinicalTeamSection";
import MediaCoverageSection from "../components/home/MediaCoverageSection";
import VideoTestimonialsSection from "../components/home/VideoTestimonialsSection";
import StatsSection from "../components/home/StatsSection";
import GoogleReviewsSection from "../components/home/GoogleReviewsSection";
import MedicalEquipmentSection from "../components/home/MedicalEquipmentSection";
import AwarenessVideosSection from "../components/home/AwarenessVideosSection";
import LatestBlogsSection from "../components/home/LatestBlogsSection";
import HomeCtaSection from "../components/home/HomeCtaSection";
import Seo from "../components/common/Seo";

export default function Home() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <Seo
        title="Home Healthcare in Kolkata"
        description="Health Cross Organization delivers compassionate, expert home healthcare in Kolkata — doctor visits, nursing, critical care, physiotherapy and diagnostics at your doorstep."
        path="/"
      />
      <HeroSection />
      <QuickServicesSection />
      <BenefitsSection />
      <WhyChooseUsBanner />
      <OurTeamSection />
      <ClinicalTeamSection />
      <MediaCoverageSection />
      <VideoTestimonialsSection />
      <StatsSection />
      <GoogleReviewsSection />
      <MedicalEquipmentSection />
      <AwarenessVideosSection />
      <LatestBlogsSection />
      <HomeCtaSection />
    </div>
  );
}
