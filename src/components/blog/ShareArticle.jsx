import { useEffect, useRef, useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";
import { FOCUS_RING } from "./blogUtils";

const pill = `inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-4 text-[13.5px] font-semibold text-[#122B39] transition-colors duration-200 hover:border-[#006B55]/40 hover:text-[#006B55] ${FOCUS_RING}`;

const ShareArticle = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const canNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function";
  const enc = encodeURIComponent;
  const networks = [
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — nothing to do.
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      // Share sheet dismissed.
    }
  };

  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#556479]">Share this article</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {canNativeShare && (
          <button type="button" onClick={nativeShare} className={pill}>
            <Share2 aria-hidden="true" className="h-4 w-4" /> Share…
          </button>
        )}
        {networks.map((n) => (
          <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" className={pill}>
            {n.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
        <button type="button" onClick={copyLink} className={pill}>
          {copied ? (
            <Check aria-hidden="true" className="h-4 w-4 text-[#006B55]" />
          ) : (
            <Link2 aria-hidden="true" className="h-4 w-4" />
          )}
          {copied ? "Link copied" : "Copy link"}
        </button>
        <span aria-live="polite" className="sr-only">
          {copied ? "Link copied to clipboard" : ""}
        </span>
      </div>
    </div>
  );
};

export default ShareArticle;
