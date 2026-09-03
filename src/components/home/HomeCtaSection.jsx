import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Heart, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919732443744";
const whatsappHref =
  "https://wa.me/" +
  WHATSAPP_NUMBER +
  "?text=" +
  encodeURIComponent("Hello Health Cross, I need home healthcare support");

// Compact closing call-to-action for the homepage. The full contact form
// lives on its own page at /contact — this only reuses the promo copy that
// already existed in ContactSection so nothing new is invented here.
const HomeCtaSection = () => {
  return (
    <section id="contact" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#e5f3ef] via-white to-[#fff8e1] border border-gray-200 p-8 text-center lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-[#0d7055]">
            <Heart className="h-3.5 w-3.5" /> Elderly Care Focus
          </div>

          <h2 className="mx-auto mt-4 max-w-xl text-[28px] font-bold lg:text-[36px] leading-tight tracking-tight">
            Care Should Feel{" "}
            <span className="font-serif italic font-normal text-[#0d7055]">
              Close to Home.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[520px] text-sm leading-6 text-[#1a1a1a]/65">
            Whether it is a doctor visit, nursing support or a full ICU
            setup, we bring hospital-quality care with the warmth of home.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917439036203"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0a5243] transition"
            >
              <Phone className="h-4 w-4" /> Call Now 74390 36203
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1eb855] transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#0d7055]/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] hover:bg-[#0d7055]/5 transition"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-[#1a1a1a]/60">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> 68/44 Jessore Rd, Kolkata
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" /> 24/7 Coordination
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtaSection;
