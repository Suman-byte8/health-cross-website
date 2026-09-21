import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Green banner at the top of every inner page: breadcrumb, title and an
// optional one-line description.
const PageHeader = ({ title, eyebrow, description, crumbs = [] }) => (
  <div className="bg-gradient-to-br from-[#0d7055] to-[#0a5243] text-white">
    <div className="mx-auto max-w-[1180px] px-4 py-9 sm:px-6 lg:py-12">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
        <Link to="/" className="transition hover:text-white">Home</Link>
        {crumbs.map((crumb) => (
          <span key={crumb.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            {crumb.to ? (
              <Link to={crumb.to} className="transition hover:text-white">{crumb.label}</Link>
            ) : (
              <span className="text-white">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      {eyebrow && (
        <div className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#ffd699]">{eyebrow}</div>
      )}
      <h1 className={`${eyebrow ? "mt-2" : "mt-4"} text-[28px] font-bold leading-tight tracking-tight lg:text-[38px]`}>
        {title}
      </h1>
      <span className="mt-3 block h-1 w-12 rounded-full bg-[#ffd699]" aria-hidden="true" />
      {description && <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">{description}</p>}
    </div>
  </div>
);

export default PageHeader;
