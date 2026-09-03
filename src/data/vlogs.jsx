// Vlog / blog posts.
//
// The client has not yet supplied real write-ups. Rather than invent
// articles or medical advice, this ships with a single, clearly-labelled
// sample post that only describes the vlog feature itself — it exercises the
// listing and detail page templates end to end. Replace/remove it once real
// posts are supplied, following the same shape.
//
// CMS note: see CMS Integration Points documentation for the future "Vlogs"
// collection shape.
export const vlogs = [
  {
    slug: "sample-vlog-post",
    title: "Sample Vlog Post — Placeholder Content",
    excerpt:
      "This is placeholder content previewing the Vlogs layout. Replace it with a real write-up supplied by Health Cross Organization.",
    content: [
      "This sample post exists only to preview how the Vlogs section looks and behaves — the cover image, title, date, category, full article layout and related posts.",
      "It is not a real article and contains no medical advice. Health Cross Organization will publish real vlog write-ups here, which will replace this placeholder.",
    ],
    image: null,
    date: "",
    category: "Sample",
    author: "",
    placeholder: true,
  },
];
