import { ExternalLink, Quote, Star } from "lucide-react";
import { googleRatingSummary, googleReviews } from "../../data/googleReviews";

const StarRow = ({ count = 5, className = "h-4 w-4" }) => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`${className} ${index < count ? "fill-[#CDAE72] text-[#CDAE72]" : "text-gray-300"}`}
      />
    ))}
  </div>
);

const GoogleReviewsSection = () => {
  const { rating, outOf, reviewCount, profileUrl } = googleRatingSummary;

  return (
    <section id="google-reviews" className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Trust bar */}
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e5f3ef] text-[#0d7055] text-xl font-bold">
                G
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#1a1a1a]">{rating.toFixed(1)}</span>
                  <span className="text-sm text-[#1a1a1a]/50">/ {outOf}</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <StarRow count={Math.round(rating)} />
                  <span className="text-xs font-semibold text-[#1a1a1a]/60">
                    {reviewCount
                      ? `${reviewCount} Google reviews`
                      : "Google reviews"}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0d7055] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a5243] shrink-0"
            >
              View all reviews on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <h2 className="mb-5 mt-8 text-lg font-bold text-[#1a1a1a]">
          What patients & families say
        </h2>
      </div>

      {/* Featured reviews — full screen width */}
      <div className="reviews-marquee marquee-hover-pause relative overflow-hidden">
        <div
          className="marquee-track flex w-max py-1"
          style={{ animationDuration: `${Math.max(googleReviews.length * 7, 30)}s` }}
        >
          {/* Two identical copies; the track slides by -50% so the loop is seamless */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {googleReviews.map((review, index) => (
                <div key={index} className="shrink-0 pr-5">
                  <article className="flex h-full w-[280px] flex-col rounded-xl border border-gray-200 bg-[#fafbf9] p-5 sm:w-[320px]">
                    <Quote className="h-5 w-5 text-[#0d7055]/40" aria-hidden="true" />
                    <p
                      className="mt-2 flex-1 line-clamp-4 text-sm leading-6 text-[#1a1a1a]/75"
                      title={review.text}
                    >
                      {review.text}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-2">
                      <div>
                        <div className="text-sm font-bold text-[#1a1a1a]">{review.name}</div>
                        {review.date && (
                          <div className="text-xs text-[#1a1a1a]/45">{review.date}</div>
                        )}
                      </div>
                      <StarRow count={review.rating} className="h-3.5 w-3.5" />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Blurred, fading edges */}
        <div className="marquee-edge marquee-edge-left" aria-hidden="true" />
        <div className="marquee-edge marquee-edge-right" aria-hidden="true" />
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
