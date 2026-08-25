import { useState } from "react";
import { Clock3, Heart, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919732443744";

const SERVICES = [
  "Elder Care",
  "Critical Care",
  "Physiotherapy",
  "Nursing",
  "Doctor Visit",
  "Diagnostics",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const lines = [
      "Hello Health Cross, I would like a callback.",
      "",
      "Name: " + form.name,
      "Phone: " + form.phone,
      "Service Needed: " + form.service,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const heroWhatsApp =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent("Hello Health Cross, I need home healthcare support");

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-3 text-sm outline-none focus:border-[#0d7055] focus:ring-2 focus:ring-[#e5f3ef] transition";

  return (
    <section id="contact" className="py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#e5f3ef] via-white to-[#fff8e1] border border-gray-200 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-[#0d7055]">
                <Heart className="h-3.5 w-3.5" /> Elderly Care Focus
              </div>

              <h2 className="mt-4 text-[28px] font-bold lg:text-[36px] leading-tight tracking-tight">
                Care Should Feel{" "}
                <span className="font-serif italic font-normal text-[#0d7055]">
                  Close to Home.
                </span>
              </h2>

              <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#1a1a1a]/65">
                Whether it is a doctor visit, nursing support or a full ICU
                setup, we bring hospital-quality care with the warmth of home.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+917439036203" className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0a5243] transition">
                  <Phone className="h-4 w-4" /> Call Now 74390 36203
                </a>

                <a href={heroWhatsApp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1eb855] transition">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-[#1a1a1a]/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> 68/44 Jessore Rd, Kolkata
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> 24/7 Coordination
                </span>
              </div>
            </div>

            <div className="rounded-[20px] border border-gray-200 bg-white p-5 shadow-lg">
              <div className="flex items-center gap-2 text-[15px] font-bold text-[#1a1a1a]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f3ef] text-[#25D366]">
                  <MessageCircle className="h-4 w-4" />
                </span>
                Request a Callback
              </div>

              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className={inputClass}
                  required
                />

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {SERVICES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1eb855] transition"
                >
                  <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                </button>

                <p className="text-[11px] text-center text-[#1a1a1a]/40">
                  We respect privacy. No spam, only care coordination.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;