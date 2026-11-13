import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FOCUS_RING } from "./blogUtils";

const pageHref = (n) => (n <= 1 ? "/blogs" : `/blogs?page=${n}`);

const base = `inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border px-4 text-[14px] font-semibold transition-colors duration-200 ${FOCUS_RING}`;
const idle = "border-[#E2E8F0] bg-white text-[#122B39] hover:border-[#006B55]/40 hover:bg-[#EFF8F5]";

// Crawlable ?page=N links. Renders nothing while everything fits on one page.
const BlogPagination = ({ page, totalPages, onNavigate }) => {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Blog pages" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link to={pageHref(page - 1)} rel="prev" onClick={onNavigate} className={`${base} ${idle}`}>
          <ChevronLeft aria-hidden="true" className="h-4 w-4" /> Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} border-[#E2E8F0] text-[#A3B3C2]`}>
          <ChevronLeft aria-hidden="true" className="h-4 w-4" /> Previous
        </span>
      )}

      {pages.map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={`${base} border-[#006B55] bg-[#006B55] px-0 text-white`}>
            {n}
          </span>
        ) : (
          <Link
            key={n}
            to={pageHref(n)}
            onClick={onNavigate}
            aria-label={`Page ${n}`}
            className={`${base} px-0 ${idle}`}
          >
            {n}
          </Link>
        )
      )}

      {page < totalPages ? (
        <Link to={pageHref(page + 1)} rel="next" onClick={onNavigate} className={`${base} ${idle}`}>
          Next <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} border-[#E2E8F0] text-[#A3B3C2]`}>
          Next <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
};

export default BlogPagination;
