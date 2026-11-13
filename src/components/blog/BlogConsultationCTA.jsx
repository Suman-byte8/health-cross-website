import { useId } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ringOnNavy =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073B56]";

// Closing CTA for the blog pages. Links only to existing pages.
const BlogConsultationCTA = () => {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden rounded-[20px] bg-[#073B56] px-6 py-10 sm:px-10 md:px-12 md:py-12 lg:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_100%_at_100%_0%,rgba(8,118,92,0.45),rgba(8,118,92,0)_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-20 h-[340px] w-[340px] rounded-full border border-white/[0.07]"
      />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-[620px]">
          <p className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#9FE0CC]">
            <span aria-hidden="true" className="h-[2px] w-6 rounded-full bg-[#F58232]" />
            Healthcare at Your Doorstep
          </p>
          <h2
            id={headingId}
            className="ct-display mt-3 text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-balance text-white sm:text-[32px]"
          >
            Need Professional Healthcare Support at Home?
          </h2>
          <p className="mt-4 text-[15.5px] leading-7 text-[#CFE9E0]">
            From home nursing and elderly care to specialized healthcare assistance, Health Cross is
            here to help you explore care options for your loved ones.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Link
            to="/services"
            className={`group/cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-[#073B56] transition-colors duration-200 hover:bg-[#EFF8F5] ${ringOnNavy}`}
          >
            Explore Our Services
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover/cta:translate-x-0.5"
            />
          </Link>
          <Link
            to="/contact"
            className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/55 hover:bg-white/10 ${ringOnNavy}`}
          >
            Contact Health Cross
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogConsultationCTA;
