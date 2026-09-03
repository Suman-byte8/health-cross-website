import { Link } from "react-router-dom";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { vlogs } from "../data/vlogs";
import PlaceholderMedia from "../components/common/PlaceholderMedia";
import Seo from "../components/common/Seo";

export default function Vlogs() {
  const [featured, ...rest] = vlogs;

  return (
    <div className="bg-[#fafbf9] text-[#1a1a1a] pt-[88px]">
      <Seo
        title="Vlogs"
        description="Vlogs and updates from Health Cross Organization — home healthcare news, care tips and clinic stories from Kolkata."
        path="/vlogs"
      />

      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:py-14">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
            HEALTH CROSS VLOG
          </div>
          <h1 className="mt-2 text-[30px] font-bold tracking-tight lg:text-[38px]">
            Vlogs & Updates
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#1a1a1a]/60">
            Stories, updates and care tips from Health Cross Organization.
          </p>
        </div>

        {vlogs.length === 0 ? (
          <div className="mt-10 rounded-[20px] border border-dashed border-gray-200 bg-white p-12 text-center text-sm text-[#1a1a1a]/50">
            New vlog posts are coming soon.
          </div>
        ) : (
          <>
            {/* Featured / latest vlog */}
            <Link
              to={`/vlogs/${featured.slug}`}
              className="group mt-8 grid gap-6 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm transition hover:shadow-lg lg:grid-cols-2"
            >
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full lg:aspect-auto"
                />
              ) : (
                <PlaceholderMedia
                  icon={FileText}
                  label="Cover image coming soon"
                  aspect="aspect-[16/10] lg:aspect-auto lg:h-full"
                  className="lg:h-full"
                />
              )}
              <div className="flex flex-col justify-center p-6 lg:p-8">
                <span className="inline-flex w-fit items-center rounded-full bg-[#e5f3ef] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0d7055]">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-xl font-bold leading-snug lg:text-2xl">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#1a1a1a]/60">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[#1a1a1a]/45">
                  {featured.date && (
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featured.date}
                    </span>
                  )}
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] transition group-hover:gap-3">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>

            {/* Remaining posts */}
            {rest.length > 0 && (
              <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/vlogs/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <PlaceholderMedia icon={FileText} label="Cover image coming soon" aspect="aspect-[16/10]" />
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="inline-flex w-fit items-center rounded-full bg-[#e5f3ef] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0d7055]">
                        {post.category}
                      </span>
                      <h3 className="mt-2 text-[15px] font-bold leading-tight">{post.title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-[#1a1a1a]/60 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#0d7055] transition group-hover:gap-2.5">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-10">
          <Link to="/" className="text-sm font-semibold text-[#0d7055] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
