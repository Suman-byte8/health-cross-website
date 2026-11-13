import { Activity, FlaskConical, HeartHandshake, Stethoscope } from "lucide-react";

// Lightweight hero illustration: inline SVG + CSS keyframes only (no images,
// no animation library). Animations live in index.css (.hero-*) and switch
// off under prefers-reduced-motion. Tags name services already listed in the
// hero copy.
const tags = [
  { icon: HeartHandshake, label: "Elder Care", pos: "left-[4%] top-[9%]", delay: "0s" },
  { icon: Stethoscope, label: "Doctor Visits", pos: "right-[4%] top-[15%]", delay: "0.8s" },
  { icon: Activity, label: "Physiotherapy", pos: "left-[3%] top-[50%]", delay: "1.6s" },
  { icon: FlaskConical, label: "Diagnostics", pos: "right-[3%] top-[56%]", delay: "2.4s" },
];

const HeroCareAnimation = () => (
  <div
    role="img"
    aria-label="Illustration of home healthcare: elder care, doctor visits, physiotherapy and diagnostics at home"
    className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-[#e5f3ef] via-white to-[#fff6ec] shadow-sm lg:ml-auto lg:mr-0"
  >
    <svg aria-hidden="true" viewBox="0 0 420 315" className="absolute inset-0 h-full w-full">
      {/* Ripple rings behind the house */}
      {[0, 1.2, 2.4].map((delay) => (
        <circle
          key={delay}
          className="hero-ring"
          style={{ animationDelay: `${delay}s` }}
          cx="210"
          cy="150"
          r="74"
          fill="none"
          stroke="#0d7055"
          strokeOpacity="0.22"
          strokeWidth="2"
        />
      ))}
      <circle cx="210" cy="150" r="74" fill="#0d7055" fillOpacity="0.06" />

      {/* House */}
      <path
        d="M146 142 L210 88 L274 142"
        fill="none"
        stroke="#0d7055"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="164" y="128" width="92" height="82" rx="14" fill="#fff" stroke="#0d7055" strokeWidth="6" />

      {/* Medical cross (brand orange) with a gentle beat */}
      <g className="hero-cross">
        <rect x="199" y="146" width="22" height="48" rx="5" fill="#F58232" />
        <rect x="186" y="159" width="48" height="22" rx="5" fill="#F58232" />
      </g>

      {/* Heartbeat line: faint track + animated trace */}
      <path
        d="M24 256 H150 l10 -18 l12 36 l11 -50 l12 42 l9 -10 H396"
        fill="none"
        stroke="#0d7055"
        strokeOpacity="0.14"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hero-ecg"
        pathLength="100"
        d="M24 256 H150 l10 -18 l12 36 l11 -50 l12 42 l9 -10 H396"
        fill="none"
        stroke="#0d7055"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {tags.map(({ icon: Icon, label, pos, delay }) => (
      <span
        key={label}
        aria-hidden="true"
        className={`hero-float absolute ${pos} inline-flex items-center gap-1.5 rounded-full border border-[#0d7055]/15 bg-white/95 px-2.5 py-1.5 text-[10.5px] font-semibold text-[#1a1a1a] shadow-sm sm:px-3 sm:text-xs`}
        style={{ "--hero-delay": delay }}
      >
        <Icon className="h-3.5 w-3.5 text-[#0d7055]" />
        {label}
      </span>
    ))}
  </div>
);

export default HeroCareAnimation;
