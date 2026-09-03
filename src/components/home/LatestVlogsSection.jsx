import { Link } from "react-router-dom";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { vlogs } from "../../data/vlogs";
import PlaceholderMedia from "../common/PlaceholderMedia";

const LatestVlogsSection = () => {
  const latest = vlogs.slice(0, 3);

  return (
    <section id="blog" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              FROM THE VLOG
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">Latest Vlogs</h2>
          </div>
          <Link
            to="/vlogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055] transition hover:gap-3"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {latest.length === 0 ? (
          <div className="mt-6 rounded-[20px] border border-dashed border-gray-200 bg-white p-10 text-center text-sm text-[#1a1a1a]/50">
            New vlog posts are coming soon.
          </div>
        ) : (
          <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
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
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#0d7055]">
                    {post.date ? (
                      <span className="flex items-center gap-1.5 text-[#1a1a1a]/45">
                        <Calendar className="h-3.5 w-3.5" /> {post.date}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="flex items-center gap-1.5 transition group-hover:gap-2.5">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestVlogsSection;
