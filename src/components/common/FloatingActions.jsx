import { MessageCircle, Phone } from "lucide-react";

// Fixed WhatsApp (all screens) and call (mobile only) buttons, bottom-right.
const FloatingActions = () => (
  <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:right-6">
    <a
      href="tel:+917439036203"
      aria-label="Call Health Cross"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d7055] text-white shadow-lg transition hover:scale-105 hover:bg-[#0a5243] lg:hidden"
    >
      <Phone className="h-5 w-5" />
    </a>
    <a
      href="https://wa.me/919732443744"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Health Cross"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1eb855]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingActions;
