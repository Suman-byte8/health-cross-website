import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, FileText, Share2, User } from "lucide-react";
import { vlogs } from "../data/vlogs";
import PlaceholderMedia from "../components/common/PlaceholderMedia";
import Seo from "../components/common/Seo";

export default function VlogDetail() {
  const { slug } = useParams();
  const post = vlogs.find((v) => v.slug === slug);

  if (!post) {
    return (
      <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px] min-h-[60vh]">
        <div className="mx-auto max-w-[720px] px-4 py-16 text-center sm:px-6">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p className="mt-2 text-sm text-[#1a1a1a]/60">
            This vlog post may have been removed or the link is incorrect.
          </p>
          <Link
            to="/vlogs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a5243]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Vlogs
          </Link>
        </div>
      </div>
    );
  }

  const related = vlogs.filter((v) => v.slug !== post.slug).slice(0, 3);

  const handleShare = async () => {
    const shareData = { title: post.title, text: post.excerpt, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled — no action needed
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo title={post.title} description={post.excerpt} path={`/vlogs/${post.slug}`} />

      <article className="mx-auto max-w-[820px] px-4 py-10 sm:px-6 lg:py-14">
        <Link
          to="/vlogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Vlogs
        </Link>

        <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[#e5f3ef] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0d7055]">
          {post.category}
        </span>
        <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight lg:text-[38px]">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#1a1a1a]/50">
          {post.date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
          )}
          {post.author && (
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" /> {post.author}
            </span>
          )}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 font-semibold text-[#0d7055] transition hover:underline"
          >
            <Share2 className="h-3.5 w-3.5" /> Share
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-[20px]">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full object-cover" />
          ) : (
            <PlaceholderMedia icon={FileText} label="Cover image coming soon" aspect="aspect-[16/9]" />
          )}
        </div>

        <div className="prose-vlog mt-8 space-y-4 text-[15px] leading-7 text-[#1a1a1a]/80">
          {(Array.isArray(post.content) ? post.content : [post.content]).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <div className="border-t border-gray-200 bg-white py-10 lg:py-14">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
            <h2 className="text-lg font-bold">Related Vlogs</h2>
            <div className="mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/vlogs/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-[#fafbf9] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderMedia icon={FileText} label="Cover image coming soon" aspect="aspect-[16/10]" />
                  )}
                  <div className="p-4">
                    <h3 className="text-[14px] font-bold leading-tight">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
