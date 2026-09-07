import mediaCoverageCollage from "../assets/media_coverage/media_coverage.webp";
import entrepreneurHunt from "../assets/media_coverage/media_coverage_1.webp";
import hindustanBytes from "../assets/media_coverage/media_coverage_3.webp";
import inc91 from "../assets/media_coverage/media_coverage_4.webp";

// Media / press coverage shown in the Media Coverage modal.
//
// Images and publication names/headlines below are taken directly from the
// client-supplied clippings in src/assets/media_coverage/ — nothing here is
// invented. Dates were not visible in any of the clippings, so `date` is
// left blank rather than guessed.
//
// CMS note: see CMS Integration Points documentation for the future
// "Media Coverage" collection shape.
export const mediaCoverage = [
  {
    publication: "Featured In",
    title: "HealthCross Home Health Care",
    image: mediaCoverageCollage,
    date: "",
    description:
      "Featured across Dailyhunt, Sangbad Pratidin, INC91, Hindustan Bytes and Entrepreneur Hunt.",
  },
  {
    publication: "Entrepreneur Hunt",
    title: "Why Families Choose Health Cross",
    image: entrepreneurHunt,
    date: "",
    description:
      "On what sets Health Cross apart — doctor-led supervision, 24x7 emergency support, transparent pricing and an empathy-driven caregiving team.",
  },
  {
    publication: "Hindustan Bytes",
    title: "Care That Begins with Compassion — and a Doctor",
    image: hindustanBytes,
    date: "",
    description:
      "On Health Cross's doctor-supervised care model for home patients across Kolkata.",
  },
  {
    publication: "INC91",
    title: "Health Cross Home Health Care",
    image: inc91,
    date: "",
    description:
      "On the founding story of Health Cross and the doctors behind it.",
  },
];
