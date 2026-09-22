import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { liveActivityAreas, liveActivityMessages, liveActivityNames } from "../../data/liveActivity";

const pick = (list) => list[Math.floor(Math.random() * list.length)];

const buildText = (message) =>
  message.type === "person"
    ? `We served ${pick(liveActivityNames)}, ${pick(liveActivityAreas)}`
    : message.text;

// Small "live" tab fixed to the bottom-left corner that cycles through
// recent-activity messages. Can be dismissed for the rest of the visit.
const LiveActivityBar = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(() => buildText(liveActivityMessages[0]));
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return undefined;
    let hideTimer;
    const showTimer = setTimeout(() => setVisible(true), 2500);
    const cycle = setInterval(() => {
      setVisible(false);
      hideTimer = setTimeout(() => {
        const next = (index + 1) % liveActivityMessages.length;
        setIndex(next);
        setText(buildText(liveActivityMessages[next]));
        setVisible(true);
      }, 500);
    }, 6000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(cycle);
    };
  }, [index, dismissed]);

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-5 left-4 z-40 flex max-w-[calc(100vw-96px)] items-center gap-2.5 rounded-full border border-gray-200 bg-white py-2 pl-3 pr-2 shadow-lg transition-all duration-500 sm:left-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0d7055]">Live</span>
      <span className="truncate text-xs font-semibold text-[#1a1a1a]">{text}</span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#1a1a1a]/40 transition hover:bg-gray-100 hover:text-[#1a1a1a]"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default LiveActivityBar;
