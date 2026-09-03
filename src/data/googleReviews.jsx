// Google reputation data.
//
// `googleRatingSummary.rating` (4.8) reuses the figure already published on
// the homepage hero badge — it is not a new/invented number.
//
// `reviewCount` and `profileUrl` are intentionally left for the client to
// confirm/supply (their exact Google review count and their Google Business
// Profile short link). `profileUrl` falls back to a Google Maps search built
// from the organization's real, already-published name and address so the
// "View on Google" CTA still works until the client provides the exact link.
//
// CMS note: see CMS Integration Points documentation for the future
// "Google Reviews" collection shape.
export const googleRatingSummary = {
  rating: 4.8,
  outOf: 5,
  reviewCount: null, // TODO(client): confirm total Google review count
  profileUrl:
    "https://www.google.com/maps/search/?api=1&query=Health+Cross+Organization+68%2F44+Jessore+Road+Kolkata",
};

// Every entry below is a clearly-marked placeholder (placeholder: true).
// Replace name/text/date with the client's actual Google reviews — do not
// treat this sample copy as real testimonial content.
export const googleReviews = [
  {
    name: "Reviewer name to be supplied",
    rating: 5,
    text: "Placeholder — replace with an actual Google review supplied by the client.",
    date: "",
    source: "Google",
    placeholder: true,
  },
  {
    name: "Reviewer name to be supplied",
    rating: 5,
    text: "Placeholder — replace with an actual Google review supplied by the client.",
    date: "",
    source: "Google",
    placeholder: true,
  },
  {
    name: "Reviewer name to be supplied",
    rating: 5,
    text: "Placeholder — replace with an actual Google review supplied by the client.",
    date: "",
    source: "Google",
    placeholder: true,
  },
];
