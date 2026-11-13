import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import Seo from "../components/common/Seo";
import BlogHero from "../components/blog/BlogHero";
import FeaturedArticle from "../components/blog/FeaturedArticle";
import BlogSearch from "../components/blog/BlogSearch";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter";
import ArticleGrid from "../components/blog/ArticleGrid";
import BlogPagination from "../components/blog/BlogPagination";
import BlogConsultationCTA from "../components/blog/BlogConsultationCTA";
import JsonLd from "../components/blog/JsonLd";
import {
  ALL_CATEGORIES,
  FOCUS_RING,
  PAGE_SIZE,
  SITE_NAME,
  absoluteUrl,
  blogCategories,
  clampPage,
  filterPosts,
  postPath,
} from "../components/blog/blogUtils";

const categories = blogCategories(blogs);
const articles = (n) => (n === 1 ? "article" : "articles");

const scrollToLatest = () =>
  document.getElementById("latest-articles")?.scrollIntoView({ block: "start" });

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [query, setQuery] = useState("");

  const trimmed = query.trim();
  const isFiltering = category !== ALL_CATEGORIES || trimmed !== "";
  const featured = blogs[0];

  // Default view: everything except the featured post. While searching or
  // filtering: matches across ALL posts (featured included).
  const pool = isFiltering ? filterPosts(blogs, { category, query }) : blogs.slice(1);
  const totalPages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const page = clampPage(searchParams.get("page"), totalPages);
  const pageItems = pool.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const showFeatured = Boolean(featured) && !isFiltering && page === 1;

  const resetPage = () => {
    if (searchParams.has("page")) setSearchParams({}, { replace: true });
  };
  const changeCategory = (value) => {
    setCategory(value);
    resetPage();
  };
  const changeQuery = (value) => {
    setQuery(value);
    resetPage();
  };
  const clearAll = () => {
    setCategory(ALL_CATEGORIES);
    setQuery("");
    resetPage();
  };

  const countText = isFiltering
    ? `${pool.length} ${articles(pool.length)}` +
      (category !== ALL_CATEGORIES ? ` in ${category}` : "") +
      (trimmed ? ` matching “${trimmed}”` : "")
    : `${pool.length} more ${articles(pool.length)}`;

  const listingUrl = absoluteUrl("/blogs");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Health Insights & Home Care Blog",
      url: listingUrl,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/") },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogs.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(postPath(post)),
          name: post.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Health Insights", item: listingUrl },
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#122B39]">
      <Seo
        title="Health Insights & Home Care Blog"
        description="Practical home healthcare insights from Health Cross Organization, Kolkata — home nursing advice, elderly care guidance, medical updates and stories from our community."
        path={page > 1 ? `/blogs?page=${page}` : "/blogs"}
        image={featured?.image}
      />
      <JsonLd data={structuredData} />

      <BlogHero />

      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 md:pb-20 md:pt-14 lg:px-10">
        {blogs.length === 0 ? (
          <p className="rounded-[16px] border border-[#E2E8F0] bg-white px-6 py-12 text-center text-[15px] text-[#556479]">
            New articles are on the way. Please check back soon.
          </p>
        ) : (
          <>
            {showFeatured && <FeaturedArticle post={featured} />}

            <section
              id="latest-articles"
              aria-labelledby="latest-heading"
              className={`scroll-mt-28 ${showFeatured ? "mt-14 md:mt-20" : ""}`}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2
                    id="latest-heading"
                    className="ct-display text-[26px] font-bold tracking-[-0.02em] text-[#073B56] sm:text-[30px]"
                  >
                    Latest from Health Cross
                  </h2>
                  <p className="mt-2 text-[15px] leading-6 text-[#556479]">
                    Helpful information, expert insights, and stories about everyday healthcare.
                  </p>
                </div>
                <BlogSearch value={query} onChange={changeQuery} />
              </div>

              <div className="mt-6 flex flex-col gap-3 border-b border-[#E2E8F0] pb-5 md:flex-row md:items-center md:justify-between md:gap-6">
                <BlogCategoryFilter
                  categories={categories}
                  total={blogs.length}
                  active={category}
                  onChange={changeCategory}
                />
                <p aria-live="polite" className="shrink-0 text-[13.5px] text-[#556479]">
                  {countText}
                </p>
              </div>

              <div className="mt-8">
                {pageItems.length > 0 ? (
                  <ArticleGrid
                    posts={pageItems}
                    animationKey={`${category}|${page}|${isFiltering}`}
                  />
                ) : isFiltering ? (
                  <div className="rounded-[16px] border border-dashed border-[#CBD5E1] bg-white px-6 py-12 text-center">
                    <p className="ct-display text-[18px] font-bold text-[#073B56]">
                      No matching articles found.
                    </p>
                    <p className="mt-2 text-[15px] text-[#556479]">
                      Try another keyword or explore all articles.
                    </p>
                    <button
                      type="button"
                      onClick={clearAll}
                      className={`mt-5 inline-flex min-h-11 items-center rounded-full bg-[#006B55] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#08765C] ${FOCUS_RING}`}
                    >
                      Explore all articles
                    </button>
                  </div>
                ) : (
                  <p className="rounded-[16px] border border-[#E2E8F0] bg-white px-6 py-10 text-center text-[15px] text-[#556479]">
                    More articles are on the way.
                  </p>
                )}
              </div>

              <BlogPagination page={page} totalPages={totalPages} onNavigate={scrollToLatest} />
            </section>
          </>
        )}

        <div className="mt-16 md:mt-20">
          <BlogConsultationCTA />
        </div>
      </div>
    </div>
  );
}
