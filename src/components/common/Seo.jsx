import { useEffect } from "react";

const SITE_NAME = "Health Cross Organization";

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertOgMeta(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Lightweight per-page SEO helper. The project has no existing SEO/head
 * library, so this avoids adding a new dependency: it just keeps
 * document.title, the meta description and canonical URL in sync with the
 * current route on mount/update.
 */
const Seo = ({ title, description, path = "", image, type = "website" }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    upsertMeta("description", description);
    upsertOgMeta("og:title", title ? `${title} | ${SITE_NAME}` : SITE_NAME);
    upsertOgMeta("og:description", description);
    upsertOgMeta("og:type", type);

    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${path}`;
      upsertCanonical(url);
      upsertOgMeta("og:url", url);
      if (image) upsertOgMeta("og:image", new URL(image, window.location.origin).href);
    }
  }, [title, description, path, image, type]);

  return null;
};

export default Seo;
