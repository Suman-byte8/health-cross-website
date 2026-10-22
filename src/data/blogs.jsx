import becauseEveryPatientCover from "../assets/blogg/because-every-patient-has-a-story.webp";
import everyLifeHasAStoryCover from "../assets/blogg/every-life-has-a-story.png";

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
  {
    slug: "every-life-has-a-story",
    title: "Every Life Has a Story. We're Here to Care for It.",
    excerpt:
      "Behind every patient is a person. Behind every person is a family. And behind every family is a story worth caring for. At Healthcross, we're honoured to be a part of yours.",
    content: [
      "Some stories begin with a mother's gentle touch.",
      "Some are filled with a father's sacrifices.",
      "Some are written in the laughter of children, and some in the quiet courage of growing old.",
      "But every story has one thing in common — the need to be cared for.",
      "And yet, life moves fast. Hospitals feel overwhelming. Families live apart. And sometimes, the people who spent their entire lives caring for us are the ones who need us the most.",
      "That's where Healthcross comes in.",
      "We believe that healing feels different when you're home. When you're surrounded by familiar faces, sleeping in your own bed, and finding comfort in the little things that make life yours.",
      "From skilled nursing and critical care to elderly care, doctor visits, diagnostic services, and medicine delivery, we bring professional healthcare closer to the people who matter most.",
      "But what we truly deliver goes beyond healthcare.",
      "It's a daughter's peace of mind while she's at work.",
      "It's a son's relief knowing his parents are in caring hands.",
      "It's the dignity of an elderly person who can age with comfort.",
      "It's the hope a family holds when someone they love is fighting to get better.",
      "We cannot promise that life will always be easy. We cannot take away every difficult moment.",
      "But we can promise to care with professionalism, compassion, and respect for every life we touch.",
      "Because behind every patient is a person.",
      "Behind every person is a family.",
      "And behind every family is a story worth caring for.",
      "At Healthcross, we're honoured to be a part of yours.",
      "HEALTHCROSS — Your Health Partner",
    ],
    image: everyLifeHasAStoryCover,
    date: "October 22, 2026",
    category: "Our Story",
    author: "",
  },
];
