import { useId } from "react";
import { Search, X } from "lucide-react";
import { FOCUS_RING } from "./blogUtils";

const BlogSearch = ({ value, onChange }) => {
  const id = useId();
  return (
    <div role="search" className="relative w-full md:w-[320px]">
      <label htmlFor={id} className="sr-only">
        Search health articles
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#556479]"
      />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search health articles..."
        autoComplete="off"
        className="h-12 w-full rounded-full border border-[#E2E8F0] bg-white pl-11 pr-12 text-[15px] text-[#122B39] shadow-[0_2px_10px_rgba(7,59,86,0.04)] transition-[border-color,box-shadow] duration-200 placeholder:text-[#7B8A9C] hover:border-[#006B55]/35 focus:border-[#006B55] focus:outline-none focus:ring-2 focus:ring-[#006B55]/20 [&::-webkit-search-cancel-button]:appearance-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#556479] transition-colors hover:bg-[#EFF8F5] hover:text-[#122B39] ${FOCUS_RING}`}
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default BlogSearch;
