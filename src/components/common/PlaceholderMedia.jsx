import { ImageIcon } from "lucide-react";

/**
 * Neutral placeholder tile shown wherever real client-supplied media
 * (equipment photos, press clippings, video thumbnails, vlog covers) is not
 * yet available. Never renders a fabricated stock photo — only an icon and a
 * short label — so nothing on the page can be mistaken for real content.
 */
export const PlaceholderMedia = ({
  icon: Icon = ImageIcon,
  label = "Image to be added",
  className = "",
  aspect = "aspect-[4/3]",
}) => (
  <div
    className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-[16px] border border-dashed border-[#0d7055]/25 bg-[#f4f8f6] text-center ${className}`}
  >
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0d7055] shadow-sm">
      <Icon className="h-5 w-5" />
    </span>
    <span className="px-4 text-[11px] font-medium text-[#1a1a1a]/45">{label}</span>
  </div>
);

/** Small tag marking sample/placeholder content that awaits client-supplied material. */
export const PlaceholderBadge = ({ children = "Sample content" }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-[#fff3d6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#8a6a1f]">
    {children}
  </span>
);

export default PlaceholderMedia;
