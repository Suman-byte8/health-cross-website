// Additional video clips (hospital/clinic footage, events, activities, other
// approved media) shown alongside patient testimonials in the same gallery.
// Shares the exact shape of videoTestimonials so both feed one reusable
// gallery component — the client can add more items later without any
// component changes.
//
// CMS note: see CMS Integration Points documentation for the future
// "Video Clips" collection shape.
export const mediaVideos = [
  {
    type: "clip",
    title: "Clinic video to be added",
    thumbnail: null,
    video: null,
    name: "",
    description: "",
    placeholder: true,
  },
];
