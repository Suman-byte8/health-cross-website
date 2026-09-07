// Patient video testimonials.
//
// Two real patient review videos supplied by the client (hosted on
// Cloudinary). Thumbnails reuse Cloudinary's built-in video-to-image
// transformation (same public ID, .jpg + so_5 = frame at 5s, since the
// opening frame is a plain white title card) rather than a fabricated
// preview image. No patient name was supplied for these clips, so
// `name`/`description` stay empty — the UI already hides those fields when
// blank rather than inventing anything.
//
// CMS note: see CMS Integration Points documentation for the future
// "Video Testimonials" collection shape.
export const videoTestimonials = [
  {
    type: "testimonial",
    title: "Patient Video Testimonial",
    thumbnail:
      "https://res.cloudinary.com/u6essrxt/video/upload/so_5/v1788768128/health_cross_review_1.jpg",
    video:
      "https://res.cloudinary.com/u6essrxt/video/upload/v1788768128/health_cross_review_1.mp4",
    name: "",
    description: "",
  },
  {
    type: "testimonial",
    title: "Patient Video Testimonial",
    thumbnail:
      "https://res.cloudinary.com/u6essrxt/video/upload/so_5/v1788768257/health_cross_review_2.jpg",
    video:
      "https://res.cloudinary.com/u6essrxt/video/upload/v1788768257/health_cross_review_2.mp4",
    name: "",
    description: "",
  },
];
