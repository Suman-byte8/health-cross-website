// Shared section heading: eyebrow label, title and a short accent bar,
// centred by default. Pass align="left" for left-aligned rows.
const SectionHeading = ({ eyebrow, title, subtitle, align = "center", as: Tag = "h2", className = "" }) => {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">{eyebrow}</div>
      )}
      <Tag className="mt-2 text-[26px] font-bold leading-tight tracking-tight text-[#1a1a1a] lg:text-[32px]">
        {title}
      </Tag>
      <span className={`mt-3 block h-1 w-12 rounded-full bg-[#0d7055] ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      {subtitle && <p className="mt-3 text-sm leading-6 text-[#1a1a1a]/60">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
