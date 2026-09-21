import ContactSection from "../components/home/ContactSection";
import Seo from "../components/common/Seo";
import PageHeader from "../components/common/PageHeader";

export default function Contact() {
  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a]">
      <Seo
        title="Contact Us"
        description="Get in touch with Health Cross Organization for home healthcare in Kolkata — call, WhatsApp, or request a callback."
        path="/contact"
      />
      <PageHeader
        title="Contact Us"
        description="Call, WhatsApp, or request a callback."
        crumbs={[{ label: "Contact Us" }]}
      />
      <ContactSection />
    </div>
  );
}
