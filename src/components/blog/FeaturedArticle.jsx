import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CategoryBadge, PostDate } from "./BlogCard";
import { postPath } from "./blogUtils";

// Large editorial card for the newest post. Its image is usually the LCP
// element, so it is NOT lazy-loaded and gets fetchpriority="high".
const FeaturedArticle = ({ post }) => (
  <section aria-labelledby="featured-heading">
    <h2
      id="featured-heading"
      className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#073B56]"
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#F58232]" />
      Featured Story
    </h2>

    <article
      className={`group relative mt-4 grid overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(7,59,86,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[#006B55]/40 hover:shadow-[0_18px_44px_rgba(7,59,86,0.1)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-[#006B55] has-[a:focus-visible]:ring-offset-2 ${
        post.image ? "lg:grid-cols-[52fr_48fr]" : ""
      }`}
    >
      {post.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EFF8F5] lg:aspect-auto lg:min-h-[420px]">
          <img
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-11">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] text-[#556479]">
          {post.category && <CategoryBadge>{post.category}</CategoryBadge>}
          <PostDate date={post.date} />
        </div>

        <h3 className="ct-display mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-balance text-[#073B56] sm:text-[30px] lg:text-[34px]">
          <Link
            to={postPath(post)}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="mt-4 line-clamp-3 text-[16px] leading-7 text-[#556479]">{post.excerpt}</p>
        )}

        <span
          aria-hidden="true"
          className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#006B55]"
        >
          Read Full Story
          <ArrowRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  </section>
);

export default FeaturedArticle;
