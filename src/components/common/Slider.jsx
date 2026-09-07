import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightweight, dependency-free horizontal slider. Wraps whatever slide
 * elements are passed as children in a native CSS scroll-snap track, with
 * arrow buttons that scroll by one card at a time. Arrows auto-hide once a
 * side has nothing left to scroll to, and disappear entirely when the
 * content already fits (e.g. only one or two slides).
 */
const Slider = ({ children, className = "" }) => {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [scrollable, setScrollable] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    setScrollable(el.scrollWidth > el.clientWidth + 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges, children]);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-slide]");
    const amount = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {scrollable && (
        <>
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0d7055] shadow-lg transition hover:bg-[#e5f3ef] disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0d7055] shadow-lg transition hover:bg-[#e5f3ef] disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
