import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import QuickServicesSection from "../components/home/QuickServicesSection";
import BenefitsSection from "../components/home/BenefitsSection";
import WhyChooseUsBanner from "../components/home/WhyChooseUsBanner";
import ClinicalTeamSection from "../components/home/ClinicalTeamSection";
import MediaCoveragePopup from "../components/home/MediaCoveragePopup";
import VideoTestimonialsSection from "../components/home/VideoTestimonialsSection";
import StatsSection from "../components/home/StatsSection";
import GoogleReviewsSection from "../components/home/GoogleReviewsSection";
import MedicalEquipmentSection from "../components/home/MedicalEquipmentSection";
// Awareness videos: hidden on the home page for now (per client request) —
// re-add the import and the <AwarenessVideosSection /> line below once
// there's content to show.
// import AwarenessVideosSection from "../components/home/AwarenessVideosSection";
import HomeCtaSection from "../components/home/HomeCtaSection";
import Seo from "../components/common/Seo";

export default function Home() {
  const [mediaCoverageOpen, setMediaCoverageOpen] = useState(false);

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
      <ClinicalTeamSection />
      <VideoTestimonialsSection onAutoPopupClose={() => setMediaCoverageOpen(true)} />
      <MediaCoveragePopup
        open={mediaCoverageOpen}
        onClose={() => setMediaCoverageOpen(false)}
      />
      <StatsSection />
      <GoogleReviewsSection />
      <MedicalEquipmentSection />
      {/* <AwarenessVideosSection /> */}
      <HomeCtaSection />
    </div>
  );
}
