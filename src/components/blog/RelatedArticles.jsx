import ArticleGrid from "./ArticleGrid";

// Same-category posts first (see relatedPosts in blogUtils). The heading
// only says "Related" when every post shown really shares the category.
const RelatedArticles = ({ posts, category }) => {
  if (posts.length === 0) return null;
  const allRelated = posts.every((p) => p.category === category);

  return (
    <section aria-labelledby="related-heading" className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 md:py-16 lg:px-10">
        <h2
          id="related-heading"
          className="ct-display text-[24px] font-bold tracking-[-0.02em] text-[#073B56] sm:text-[28px]"
        >
          {allRelated ? "Related Articles" : "More from Health Cross"}
        </h2>
        <div className="mt-7">
          <ArticleGrid posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
