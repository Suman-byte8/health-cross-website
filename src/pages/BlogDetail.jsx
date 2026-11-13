import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronRight, Clock, User } from "lucide-react";
import { blogs } from "../data/blogs";
import logo from "../assets/logo.webp";
import Seo from "../components/common/Seo";
import { CategoryBadge, PostDate } from "../components/blog/BlogCard";
import ShareArticle from "../components/blog/ShareArticle";
import RelatedArticles from "../components/blog/RelatedArticles";
import BlogConsultationCTA from "../components/blog/BlogConsultationCTA";
import JsonLd from "../components/blog/JsonLd";
import {
  FOCUS_RING,
  SITE_NAME,
  absoluteUrl,
  contentBlocks,
  postPath,
  readingMinutes,
  relatedPosts,
  toIsoDate,
} from "../components/blog/blogUtils";

const crumbLink = `rounded transition-colors hover:text-[#006B55] ${FOCUS_RING}`;

const Block = ({ block }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="ct-display mt-12 scroll-mt-28 text-[25px] font-bold leading-snug tracking-[-0.015em] text-[#073B56] md:text-[28px]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={block.id}
          className="ct-display mt-9 scroll-mt-28 text-[20px] font-bold leading-snug text-[#122B39] md:text-[22px]"
        >
          {block.text}
        </h3>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List
          className={`mt-6 space-y-2.5 pl-6 marker:text-[#006B55] ${block.type === "ul" ? "list-disc" : "list-decimal"}`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    default:
      return <p className="mt-6 first:mt-0">{block.text}</p>;
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-[#F8FAFC] text-[#122B39]">
        <Seo title="Article not found" description="This article may have moved or the link is incorrect." path={`/blogs/${slug}`} />
        <div className="mx-auto max-w-[720px] px-5 py-20 text-center sm:px-8">
          <h1 className="ct-display text-[28px] font-bold text-[#073B56]">Article not found</h1>
          <p className="mt-3 text-[15px] text-[#556479]">
            This article may have moved or the link is incorrect.
          </p>
          <Link
            to="/blogs"
            className={`mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#006B55] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#08765C] ${FOCUS_RING}`}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const blocks = contentBlocks(post);
  const toc = blocks.filter((b) => b.type === "h2");
  const minutes = readingMinutes(blocks);
  const related = relatedPosts(post, blogs);
  const url = absoluteUrl(postPath(post));
  const published = toIsoDate(post.date);
  const modified = toIsoDate(post.updated) ?? published;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      ...(post.image && { image: [absoluteUrl(post.image)] }),
      ...(published && { datePublished: published, dateModified: modified }),
      articleSection: post.category,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      // Only a verified, named author is credited; otherwise the
      // organisation that published the post is.
      author: post.author
        ? { "@type": "Person", name: post.author }
        : { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: absoluteUrl(logo) },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Health Insights", item: absoluteUrl("/blogs") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#122B39]">
      <Seo
        title={post.seoTitle ?? post.title}
        description={post.seoDescription ?? post.excerpt}
        path={postPath(post)}
        image={post.image}
        type="article"
      />
      <JsonLd data={structuredData} />

      <article>
        <header className="border-b border-[#E3EEEA] bg-gradient-to-b from-white to-[#EFF8F5]/70">
          <div className="mx-auto max-w-[880px] px-5 pb-10 pt-8 sm:px-8 md:pb-12 md:pt-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-[#556479]">
                <li>
                  <Link to="/" className={crumbLink}>Home</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li>
                  <Link to="/blogs" className={crumbLink}>Health Insights</Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li aria-current="page" className="font-medium text-[#122B39]">{post.title}</li>
              </ol>
            </nav>

            {post.category && (
              <div className="mt-7">
                <CategoryBadge>{post.category}</CategoryBadge>
              </div>
            )}

            <h1 className="ct-display mt-4 text-[30px] font-bold leading-[1.14] tracking-[-0.025em] text-balance text-[#073B56] sm:text-[38px] lg:text-[44px]">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-[#556479]">
              {post.date && (
                <span className="flex items-center gap-1.5">
                  <Calendar aria-hidden="true" className="h-4 w-4" /> <PostDate date={post.date} />
                </span>
              )}
              {post.updated && (
                <span>
                  Updated <PostDate date={post.updated} />
                </span>
              )}
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User aria-hidden="true" className="h-4 w-4" /> {post.author}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock aria-hidden="true" className="h-4 w-4" /> {minutes} min read
              </span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mx-auto max-w-[1040px] px-5 pt-8 sm:px-8 md:pt-10">
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              width={post.imageWidth}
              height={post.imageHeight}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-[20px] border border-[#E2E8F0] bg-[#EFF8F5]"
            />
          </div>
        )}

        <div className="mx-auto max-w-[760px] px-5 pb-14 pt-10 sm:px-8 md:pb-16 md:pt-12">
          {toc.length >= 3 && (
            <nav
              aria-labelledby="toc-heading"
              className="mb-10 rounded-[16px] border border-[#E2E8F0] bg-white p-5 sm:p-6"
            >
              <h2 id="toc-heading" className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#556479]">
                In this article
              </h2>
              <ol className="mt-3 space-y-1">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={`inline-flex min-h-9 items-center rounded text-[15px] font-medium text-[#006B55] hover:underline ${FOCUS_RING}`}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="text-[17px] leading-[1.8] text-[#273C4B] md:text-[18px]">
            {blocks.map((block, index) => (
              <Block key={block.id ?? index} block={block} />
            ))}
          </div>

          <footer className="mt-12 flex flex-col gap-6 border-t border-[#E2E8F0] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <ShareArticle title={post.title} url={url} />
            <Link
              to="/blogs"
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full text-[14.5px] font-semibold text-[#006B55] transition-colors hover:text-[#073B56] ${FOCUS_RING}`}
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to All Articles
            </Link>
          </footer>
        </div>
      </article>

      <RelatedArticles posts={related} category={post.category} />

      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-16 lg:px-10">
        <BlogConsultationCTA />
      </div>
    </div>
  );
}
