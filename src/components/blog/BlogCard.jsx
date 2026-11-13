import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { postPath, toIsoDate } from "./blogUtils";

export const CategoryBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-[#EFF8F5] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#006B55]">
    {children}
  </span>
);

export const PostDate = ({ date }) => {
  const iso = toIsoDate(date);
  if (!date) return null;
  return iso ? <time dateTime={iso}>{date}</time> : <span>{date}</span>;
};

// Whole card is clickable via the title link's stretched ::after, so there
// is exactly one link per card for screen readers and keyboard users.
const BlogCard = ({ post, headingLevel = "h3" }) => {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white shadow-[0_4px_18px_rgba(7,59,86,0.05)] transition-[transform,border-color,box-shadow] duration-[250ms] ease-out hover:border-[#006B55]/45 hover:shadow-[0_14px_32px_rgba(7,59,86,0.09)] motion-safe:hover:-translate-y-[3px] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-[#006B55] has-[a:focus-visible]:ring-offset-2">
      {post.image && (
        <div className="aspect-video overflow-hidden bg-[#EFF8F5]">
          <img
            src={post.image}
            alt={post.imageAlt ?? post.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-[#556479]">
          {post.category && <CategoryBadge>{post.category}</CategoryBadge>}
          <PostDate date={post.date} />
        </div>

        <Heading className="ct-display mt-3.5 text-[18px] font-bold leading-snug text-[#122B39]">
          <Link
            to={postPath(post)}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {post.title}
          </Link>
        </Heading>

        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-[14.5px] leading-6 text-[#556479]">{post.excerpt}</p>
        )}

        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-[#006B55]"
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
