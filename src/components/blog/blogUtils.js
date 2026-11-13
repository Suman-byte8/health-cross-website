// Shared helpers for the blog listing (/blogs) and article (/blogs/:slug)
// pages. Everything here works off the real posts in src/data/blogs.jsx.

export const SITE_NAME = "Health Cross Organization";
export const ALL_CATEGORIES = "all";
export const PAGE_SIZE = 9;

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B55] focus-visible:ring-offset-2";

export const postPath = (post) => `/blogs/${post.slug}`;

export const absoluteUrl = (path) =>
  typeof window === "undefined" ? path : new URL(path, window.location.origin).href;

export const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// "October 22, 2026" -> "2026-10-22", built from local date parts so the
// day never shifts with the visitor's timezone.
export function toIsoDate(dateString) {
  const time = Date.parse(dateString ?? "");
  if (Number.isNaN(time)) return undefined;
  const d = new Date(time);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Post content is an array whose items are either a plain string (a
// paragraph) or a block object: { type: "h2" | "h3", text },
// { type: "ul" | "ol", items: [...] } or { type: "p", text }.
// Headings get a stable id for the table of contents.
export function contentBlocks(post) {
  const raw = Array.isArray(post.content) ? post.content : post.content ? [post.content] : [];
  const seen = new Map();
  return raw.map((item) => {
    const block = typeof item === "string" ? { type: "p", text: item } : item;
    if (block.type !== "h2" && block.type !== "h3") return block;
    const base = slugify(block.text) || "section";
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return { ...block, id: block.id ?? (n ? `${base}-${n + 1}` : base) };
  });
}

export function readingMinutes(blocks) {
  const text = blocks.map((b) => b.text ?? (b.items ?? []).join(" ")).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Categories that actually have published posts, in first-seen order.
export function blogCategories(posts) {
  const counts = new Map();
  for (const post of posts) {
    if (post.category) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts].map(([name, count]) => ({ name, count }));
}

const normalize = (value = "") =>
  value.toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();

// Case-insensitive; every word typed must appear in the title, excerpt or
// category. Runs over the full post list, never just the current page.
export function filterPosts(posts, { category, query }) {
  const tokens = normalize(query).split(" ").filter(Boolean);
  return posts.filter((post) => {
    if (category !== ALL_CATEGORIES && post.category !== category) return false;
    const haystack = normalize(`${post.title} ${post.excerpt} ${post.category}`);
    return tokens.every((t) => haystack.includes(t));
  });
}

// Same-category posts first, then the newest of the rest.
export function relatedPosts(post, posts, limit = 3) {
  const others = posts.filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, limit);
}

export function clampPage(raw, totalPages) {
  const n = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(n, totalPages);
}
