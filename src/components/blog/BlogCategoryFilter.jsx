import { Check } from "lucide-react";
import { ALL_CATEGORIES, FOCUS_RING } from "./blogUtils";

// Pill filters built from categories that actually have posts. Scrolls
// sideways on phones, wraps on wider screens. The active pill shows a check
// (not just a colour change) and exposes aria-pressed.
const BlogCategoryFilter = ({ categories, total, active, onChange }) => {
  const options = [{ name: ALL_CATEGORIES, label: "All Articles", count: total }, ...categories];

  return (
    <div
      role="group"
      aria-label="Filter articles by category"
      className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 py-1 sm:-mx-8 sm:px-8 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      {options.map((option) => {
        const selected = option.name === active;
        return (
          <button
            key={option.name}
            type="button"
            aria-pressed={selected}
            onClick={(event) => {
              onChange(option.name);
              event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
            }}
            className={`group/pill inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-[14px] font-medium transition-[background-color,border-color,color] duration-200 ${FOCUS_RING} ${
              selected
                ? "border-[#006B55] bg-[#006B55] text-white"
                : "border-[#E2E8F0] bg-white text-[#122B39] hover:border-[#006B55]/40 hover:bg-[#EFF8F5]"
            }`}
          >
            <span aria-hidden="true" className="flex h-3.5 w-3.5 items-center justify-center">
              {selected ? (
                <Check className="h-3.5 w-3.5" strokeWidth={2.75} />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-[#A3B3C2] transition-colors group-hover/pill:bg-[#006B55]" />
              )}
            </span>
            {option.label ?? option.name}
            <span className={`text-[12px] ${selected ? "text-white/80" : "text-[#556479]"}`}>
              {option.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BlogCategoryFilter;
