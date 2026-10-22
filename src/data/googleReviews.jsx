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

// Real Google reviews supplied by the client. Text is reproduced as given,
// with only light punctuation/capitalization cleanup for readability — no
// wording added or reworded. Reviews over ~50 words are trimmed (cutting
// redundant clauses, not changing meaning) to keep the card layout from
// breaking; nothing is invented. Add further reviews here as the client
// supplies them.
export const googleReviews = [
  {
    name: "Dipwanita Chatterjee",
    rating: 5,
    text: "Dr. Iqbal is a truly genuine and compassionate doctor. He has been taking wonderful care of my elderly parents with immense patience, kindness, and dedication. He always listens carefully and never recommends unnecessary treatments. We are deeply grateful and highly recommend him.",
    date: "",
    source: "Google",
  },
  {
    name: "Kunal Singh",
    rating: 5,
    text: "We have been taking their services for a while now, mostly injections and some medications. Anupam Sasmal, and Health Cross overall, are always reasonable, accommodating, proactive, and helpful, especially given that they come to my house and gets it done.",
    date: "2 months ago",
    source: "Google",
  },
  {
    name: "Abhinoy Mondal",
    rating: 5,
    text: "I'm very happy this organisation is very helpful. Late night service. Thank you Health Cross. Keep grow up. All the best.",
    date: "",
    source: "Google",
  },
  {
    name: "Soumya Sarkar",
    rating: 5,
    text: "Compassionate service when we needed it most. Despite it being midnight, the team responded promptly — Dr. Kabir visited and provided excellent care. They followed up the next day with a BiPAP machine, training the family to use it. Special thanks to Dr. Ashik Ikbal and team. Highly recommended! ❤️",
    date: "",
    source: "Google",
  },
];
