import ContactSection from "../components/home/ContactSection";
import Seo from "../components/common/Seo";

export default function Contact() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo
        title="Contact Us"
        description="Get in touch with Health Cross Organization for home healthcare in Kolkata — call, WhatsApp, or request a callback."
        path="/contact"
      />
      <div className="py-4 lg:py-6">
        <ContactSection />
      </div>
    </div>
  );
}
