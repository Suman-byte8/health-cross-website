import BlogCard from "./BlogCard";

// 1 / 2 / 3 columns. `animationKey` re-mounts the list so results fade in
// after a filter or page change (disabled for reduced motion in index.css).
const ArticleGrid = ({ posts, animationKey, headingLevel = "h3" }) => (
  <ul
    key={animationKey}
    className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
  >
    {posts.map((post, index) => (
      <li key={post.slug} className="blog-in" style={{ "--blog-delay": `${Math.min(index, 8) * 40}ms` }}>
        <BlogCard post={post} headingLevel={headingLevel} />
      </li>
    ))}
  </ul>
);

export default ArticleGrid;
