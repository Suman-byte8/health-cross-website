import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FOCUS_RING } from "./blogUtils";

// Compact editorial hero for /blogs. Holds the page's only H1.
const BlogHero = () => (
  <section
    aria-labelledby="blog-hero-title"
    className="relative isolate overflow-hidden border-b border-[#E3EEEA] bg-gradient-to-b from-white to-[#EFF8F5]"
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#08765C]/10 blur-3xl"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-72 rounded-full bg-[#F58232]/[0.07] blur-3xl"
    />

    <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-[#556479]">
          <li>
            <Link to="/" className={`rounded transition-colors hover:text-[#006B55] ${FOCUS_RING}`}>
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li aria-current="page" className="font-medium text-[#122B39]">
            Health Insights
          </li>
        </ol>
      </nav>

      <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em] text-[#006B55]">
        Health Cross Knowledge Hub
      </p>
      <span aria-hidden="true" className="mt-2.5 block h-[3px] w-10 rounded-full bg-[#006B55]" />

      <h1
        id="blog-hero-title"
        className="ct-display mt-5 max-w-[780px] text-[32px] font-bold leading-[1.12] tracking-[-0.025em] text-balance text-[#073B56] sm:text-[40px] lg:text-[48px]"
      >
        Insights for Better Health &amp; Everyday Care
      </h1>
      <p className="mt-4 max-w-[660px] text-[16px] leading-7 text-[#556479] md:text-[17px] md:leading-8">
        Explore practical healthcare insights, home nursing advice, elderly care guidance, medical
        updates, and stories from the Health Cross community.
      </p>
    </div>
  </section>
);

export default BlogHero;
