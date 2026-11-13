import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Building2, Check, MapPin, Search, X } from "lucide-react";
import { careCoordinators, doctors, specialties } from "../../data/doctors";

// Contact details already used across the site (HomeCtaSection,
// ContactSection). The directory only links into these existing channels;
// it does not book anything itself.
const WHATSAPP_NUMBER = "919732443744";
const PHONE_HREF = "tel:+917439036203";
const PHONE_DISPLAY = "74390 36203";
const whatsappHref = (message) =>
  "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

const ALL = "all";
const specialtyById = Object.fromEntries(specialties.map((s) => [s.id, s]));

// Chips are built from the data: "All" plus every specialty that has at
// least one listed doctor, in the order defined in doctors.jsx.
const filters = [
  { id: ALL, label: "All Specialists" },
  ...specialties.filter((s) => doctors.some((d) => d.specialty === s.id)),
];

const normalize = (value) =>
  value.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();

// One lowercase haystack per doctor: name, title and specialty (plus
// search-only aliases such as "paediatrics").
const searchText = new Map(
  doctors.map((d) => {
    const s = specialtyById[d.specialty];
    const parts = [
      d.name,
      d.designation,
      d.hospital,
      d.serviceArea,
      s?.label,
      ...(s?.aliases ?? []),
    ];
    return [d.name, normalize(parts.filter(Boolean).join(" "))];
  })
);

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B8F82] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const plural = (n) => (n === 1 ? "specialist" : "specialists");

// Reveals content once it scrolls into view. Falls back to "visible" where
// IntersectionObserver isn't available so nothing stays hidden.
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return [ref, inView];
}

const DoctorCard = ({ doctor }) => {
  const label = specialtyById[doctor.specialty]?.label ?? "Clinical Team";
  const enquiry = whatsappHref(
    `Hello Health Cross, I would like to enquire about a consultation with ${doctor.name}` +
      (doctor.designation ? ` (${doctor.designation}).` : ".")
  );

  return (
    <article className="group flex h-full flex-col rounded-[18px] border border-[#DFEAE6] bg-white p-6 shadow-[0_6px_24px_rgba(0,60,45,0.035)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:border-[#006B57]/35 hover:shadow-[0_16px_40px_rgba(0,60,45,0.07)] focus-within:border-[#006B57]/35 motion-safe:hover:-translate-y-[3px] md:p-7">
      <p className="text-[11.5px] font-semibold uppercase leading-snug tracking-[0.14em] text-[#006B57]">
        {label}
      </p>
      <span
        aria-hidden="true"
        className="mt-3 block h-[2px] w-8 rounded-full bg-[#006B57]/25 transition-[width,background-color] duration-300 ease-out group-hover:w-14 group-hover:bg-[#0B8F82]"
      />

      <h4 className="ct-display mt-5 text-[20px] font-semibold leading-[1.25] tracking-[-0.01em] text-balance text-[#152B28] md:text-[21px]">
        {doctor.name}
      </h4>

      {doctor.designation && (
        <p className="mt-2 text-[15px] leading-6 text-[#3E524D]">{doctor.designation}</p>
      )}

      {doctor.qualifications?.length > 0 && (
        <p className="mt-2.5 text-[13px] font-medium leading-5 tracking-[0.02em] text-[#5F726D]">
          <span className="sr-only">Qualifications: </span>
          {doctor.qualifications.join(", ")}
        </p>
      )}

      {(doctor.hospital || doctor.serviceArea) && (
        <ul className="mt-4 space-y-1.5 text-[13.5px] leading-5 text-[#3E524D]">
          {doctor.hospital && (
            <li className="flex items-start gap-2">
              <Building2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#006B57]/70" />
              <span>
                <span className="sr-only">Hospital: </span>
                {doctor.hospital}
              </span>
            </li>
          )}
          {doctor.serviceArea && (
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#006B57]/70" />
              <span>{doctor.serviceArea}</span>
            </li>
          )}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <div className="border-t border-[#DFEAE6] pt-3">
          <a
            href={enquiry}
            target="_blank"
            rel="noreferrer"
            className={`group/link -ml-1 inline-flex min-h-11 items-center gap-1.5 rounded-md px-1 text-[14px] font-semibold text-[#006B57] transition-colors duration-200 hover:text-[#064D43] ${FOCUS}`}
          >
            Enquire about a consultation
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5"
            />
            <span className="sr-only">
              {" "}with {doctor.name} on WhatsApp (opens in a new tab)
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

const ClinicalTeamSection = () => {
  const [activeId, setActiveId] = useState(ALL);
  const [query, setQuery] = useState("");
  const [hasFiltered, setHasFiltered] = useState(false);
  const [headerRef, headerIn] = useInView();
  const [gridRef, gridIn] = useInView();
  const searchId = useId();

  const activeFilter = filters.find((f) => f.id === activeId) ?? filters[0];
  const tokens = normalize(query).split(" ").filter(Boolean);
  const visible = doctors.filter(
    (d) =>
      (activeId === ALL || d.specialty === activeId) &&
      tokens.every((t) => searchText.get(d.name).includes(t))
  );

  const trimmedQuery = query.trim();
  const countText =
    `Showing ${visible.length} ${plural(visible.length)}` +
    (activeId !== ALL ? ` in ${activeFilter.label}` : "") +
    (trimmedQuery ? ` matching “${trimmedQuery}”` : "");

  const selectFilter = (id, event) => {
    setActiveId(id);
    setHasFiltered(true);
    // Keep the chosen chip fully visible in the mobile scroller.
    event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  // Slower, wider stagger for the first scroll-in; snappier on filter change.
  const step = hasFiltered ? 30 : 60;
  const duration = hasFiltered ? "220ms" : "420ms";

  return (
    <section
      id="wellness"
      aria-labelledby="clinical-team-heading"
      className="relative overflow-hidden bg-[#F8FAF9] py-[56px] md:py-[84px] lg:py-[104px]"
    >
      {/* Layered background: white header band + soft mint glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-white via-white/90 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[520px] w-[min(980px,140vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(232,245,240,0.95),rgba(232,245,240,0))]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">
        {/* ── Editorial header ─────────────────────────────── */}
        <header
          ref={headerRef}
          className={`ct-reveal mx-auto max-w-[750px] text-center ${headerIn ? "is-in" : ""}`}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#006B57]">
            Our Medical Specialists
          </p>
          <h2
            id="clinical-team-heading"
            className="ct-display mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-balance text-[#152B28] sm:text-[40px] lg:text-[48px]"
          >
            The Right Expertise. The <span className="text-[#006B57]">Right Care</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#5F726D] md:text-[16px]">
            Meet the medical professionals supporting Health Cross&rsquo;s commitment to
            accessible, personalized healthcare and specialist consultations.
          </p>
          <div aria-hidden="true" className="mt-8 flex items-center justify-center gap-1.5">
            <span className="h-[2px] w-10 rounded-full bg-[#006B57]" />
            <span className="h-[2px] w-2 rounded-full bg-[#0B8F82]/50" />
          </div>
        </header>

        {/* ── Specialty filters ────────────────────────────── */}
        <div
          role="group"
          aria-label="Filter specialists by specialty"
          className="ct-chip-scroller hide-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 py-1.5 md:mx-0 md:mt-12 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
        >
          {filters.map((filter) => {
            const active = filter.id === activeId;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={(event) => selectFilter(filter.id, event)}
                className={`group/chip inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-[13.5px] font-medium transition-[background-color,border-color,color,box-shadow] duration-200 ease-out ${FOCUS} ${
                  active
                    ? "border-[#006B57] bg-[#006B57] text-white shadow-[0_6px_18px_rgba(0,107,87,0.18)]"
                    : "border-[#DFEAE6] bg-[#F8FAF9] text-[#152B28] hover:border-[#0B8F82]/45 hover:bg-[#E8F5F0]"
                }`}
              >
                {/* Fixed-size marker: a check when active, a dot otherwise,
                    so state isn't conveyed by colour alone and chip widths
                    never change on selection. */}
                <span aria-hidden="true" className="flex h-3.5 w-3.5 items-center justify-center">
                  {active ? (
                    <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A7BCB5] transition-colors duration-200 group-hover/chip:bg-[#0B8F82]" />
                  )}
                </span>
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* ── Directory toolbar ────────────────────────────── */}
        <div className="mt-10 flex flex-col gap-4 border-b border-[#DFEAE6] pb-5 sm:flex-row sm:items-end sm:justify-between md:mt-12">
          <div>
            <h3 className="ct-display text-[18px] font-semibold text-[#152B28]">Our Specialists</h3>
            <p className="mt-1 text-[13.5px] text-[#5F726D]" aria-live="polite">
              {countText}
            </p>
          </div>

          <div className="relative w-full sm:w-[290px]">
            <label htmlFor={searchId} className="sr-only">
              Search specialists by name or specialty
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5F726D]"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name or specialty"
              autoComplete="off"
              spellCheck="false"
              className="h-11 w-full rounded-full border border-[#DFEAE6] bg-white pl-10 pr-11 text-[14px] text-[#152B28] transition-[border-color,box-shadow] duration-200 placeholder:text-[#7A8C87] hover:border-[#0B8F82]/35 focus:border-[#0B8F82] focus:outline-none focus:ring-2 focus:ring-[#0B8F82]/20 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className={`absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#5F726D] transition-colors hover:bg-[#E8F5F0] hover:text-[#152B28] ${FOCUS}`}
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* ── Doctor cards ─────────────────────────────────── */}
        <div ref={gridRef} className="mt-8 min-h-[220px]">
          {visible.length > 0 ? (
            <ul
              key={activeId}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 min-[75rem]:grid-cols-3 min-[75rem]:gap-6"
            >
              {visible.map((doctor, index) => (
                <li
                  key={doctor.name}
                  className={gridIn ? "ct-card-in" : "ct-card-wait"}
                  style={{
                    "--ct-delay": `${Math.min(index, 8) * step}ms`,
                    "--ct-dur": duration,
                  }}
                >
                  <DoctorCard doctor={doctor} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="ct-fade rounded-[18px] border border-dashed border-[#CFDFDA] bg-white px-6 py-12 text-center">
              <p className="ct-display text-[18px] font-semibold text-[#152B28]">
                No specialists match your search
              </p>
              <p className="mx-auto mt-2 max-w-[420px] text-[14px] leading-6 text-[#5F726D]">
                Try a different name or specialty
                {activeId !== ALL ? ", or search across all specialists" : ""}.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className={`inline-flex min-h-11 items-center rounded-full border border-[#DFEAE6] bg-[#F8FAF9] px-5 text-[14px] font-semibold text-[#152B28] transition-colors hover:border-[#0B8F82]/45 hover:bg-[#E8F5F0] ${FOCUS}`}
                >
                  Clear search
                </button>
                {activeId !== ALL && (
                  <button
                    type="button"
                    onClick={() => setActiveId(ALL)}
                    className={`inline-flex min-h-11 items-center rounded-full bg-[#006B57] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#064D43] ${FOCUS}`}
                  >
                    Search all specialists
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Clinical coordination (not a specialty filter) ── */}
        {careCoordinators.length > 0 && (
          <div className="relative mt-12 overflow-hidden rounded-[18px] border border-[#006B57]/10 bg-[#E8F5F0] px-6 py-6 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-[#006B57] md:mt-14 md:flex md:items-center md:gap-10 md:px-9 md:py-7">
            <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#006B57] md:w-[200px] md:shrink-0">
              Clinical Coordination
            </h3>
            <span aria-hidden="true" className="hidden h-11 w-px shrink-0 bg-[#006B57]/20 md:block" />
            <ul className="mt-3 flex flex-wrap gap-x-12 gap-y-4 md:mt-0">
              {careCoordinators.map((person) => (
                <li key={person.name}>
                  <h4 className="ct-display text-[19px] font-semibold leading-tight text-[#152B28]">
                    {person.name}
                  </h4>
                  <p className="mt-1 text-[14px] text-[#3E524D]">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Consultation CTA ─────────────────────────────── */}
        <div className="relative mt-6 overflow-hidden rounded-[24px] bg-[#064D43] px-6 py-10 sm:px-10 md:mt-8 md:px-12 md:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_100%_0%,rgba(11,143,130,0.42),rgba(11,143,130,0)_58%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-24 h-[380px] w-[380px] rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-8 h-[240px] w-[240px] rounded-full border border-white/[0.06]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
            <div className="max-w-[580px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#9FD8C6]">
                Here to Help
              </p>
              <h3 className="ct-display mt-3 text-[27px] font-bold leading-[1.15] tracking-[-0.02em] text-balance text-white sm:text-[32px] lg:text-[36px]">
                Expert Medical Guidance, Closer to Home.
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#CFE9E0]">
                Looking for specialist advice or healthcare support? Connect with the Health
                Cross team to enquire about available consultation options.
              </p>
            </div>

            <div className="lg:shrink-0">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref(
                    "Hello Health Cross, I would like to request a specialist consultation."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[14.5px] font-semibold text-[#064D43] transition-colors duration-200 hover:bg-[#E8F5F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#064D43]"
                >
                  Request a Consultation
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover/cta:translate-x-0.5"
                  />
                  <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#064D43]"
                >
                  Contact Health Cross
                </Link>
              </div>
              <p className="mt-4 text-[13px] text-[#A9D3C6]">
                Requests open in WhatsApp. Prefer to talk? Call{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#064D43]"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalTeamSection;
