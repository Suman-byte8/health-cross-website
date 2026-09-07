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
// wording added, removed, or reworded. Add further reviews here as the
// client supplies them.
export const googleReviews = [
  {
    name: "Dipwanita Chatterjee",
    rating: 5,
    text: "Dr. Iqbal is a truly genuine and compassionate doctor. He has been taking wonderful care of my elderly parents with immense patience, kindness, and dedication. He always listens carefully, explains everything in simple terms, and never recommends unnecessary treatments. His genuine concern for his patients is evident in every interaction. We are deeply grateful for his care and highly recommend him.",
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
    name: "Subrajyoti Ghosh",
    rating: 5,
    text: "Dr Iqbal, Dr. Kabir are very responsible, prompt in acting on medical reports. They are truly compassionate. Their caring nature and dedication make treatment highly reliable and trustworthy. Highly recommended.",
    date: "",
    source: "Google",
  },
  {
    name: "Arpita Ghosal",
    rating: 5,
    text: "Every helping hand in healthcare brings a little more comfort to someone in need. Dr Iqbal and Kabir are such a humble person I had ever met, they had taken care of my parents like their own. Their service for the Senior citizen is really very satisfying, any service regarding health I can fully rely on them.",
    date: "",
    source: "Google",
  },
];
