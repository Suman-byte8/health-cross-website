import becauseEveryPatientCover from "../assets/blogg/because-every-patient-has-a-story.webp";

// Blog / blog posts.
//
// Real write-ups are added here as the client supplies them — each becomes
// its own page at /blogs/<slug> via the existing Blogs/BlogDetail templates,
// and appears on the /blogs listing plus the homepage's Latest Blogs teaser.
//
// CMS note: see CMS Integration Points documentation for the future "Blogs"
// collection shape.
export const blogs = [
  {
    slug: "because-every-patient-has-a-story",
    title: "Because Every Patient Has a Story",
    excerpt:
      "Behind every patient is a family waiting, a loved one worrying, and a person hoping to feel better. At Healthcross, we never forget that.",
    content: [
      "Behind every patient is a family waiting, a loved one worrying, and a person hoping to feel better.",
      "At Healthcross, we never forget that.",
      "For us, healthcare is not simply about medicines, reports, or procedures. It is about being there when someone feels vulnerable, frightened, or uncertain. It is about answering the call, arriving when needed, listening patiently, and making people feel that they are not alone.",
      "Through our Hospital at Your Doorstep service, we bring trusted healthcare closer to you—because sometimes, the most meaningful care is the care that comes to you.",
      "We believe every patient deserves to be treated with kindness, dignity, patience, and respect—not because they are a customer, but because they are a person.",
      "And every time someone chooses Healthcross, they place their trust in our hands.",
      "That trust is not just our responsibility. It is our promise.",
    ],
    image: becauseEveryPatientCover,
    date: "September 16, 2026",
    category: "Our Story",
    author: "",
  },
];
