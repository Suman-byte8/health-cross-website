import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { videoTestimonials } from "../../data/videoTestimonials";
import { mediaVideos } from "../../data/mediaVideos";
import PlaceholderMedia from "../common/PlaceholderMedia";
import Modal from "../common/Modal";
import Slider from "../common/Slider";
import SectionHeading from "../common/SectionHeading";

const FILTER_LABELS = {
  testimonial: "Patient Testimonials",
  clip: "Clinic & Events",
};

// One reusable gallery consumes both patient testimonials and general video
// clips (hospital footage, events, activities) — new items can be added to
// either data file without any component changes. Placeholder entries (no
// real video supplied yet) stay in the data files as a checklist for the
// client, but only real videos are ever rendered here — no "coming soon"
// filler card is shown alongside actual content.
const rawVideos = [...videoTestimonials, ...mediaVideos];
const allVideos = rawVideos.filter((item) => item.video && !item.placeholder);
const availableTypes = [...new Set(allVideos.map((item) => item.type))];

const VideoTestimonialsSection = () => {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const visibleVideos = useMemo(
    () => (filter === "all" ? allVideos : allVideos.filter((v) => v.type === filter)),
    [filter]
  );

  if (allVideos.length === 0) return null;

  return (
    <section id="testimonials" className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading eyebrow="PATIENT STORIES" title="Video testimonials & clinic moments" />

        {availableTypes.length > 1 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["all", ...availableTypes].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  filter === key
                    ? "bg-[#0d7055] text-white"
                    : "bg-[#f4f8f6] text-[#1a1a1a]/70 hover:bg-[#e5f3ef]"
                }`}
              >
                {key === "all" ? "All Videos" : FILTER_LABELS[key] || key}
              </button>
            ))}
          </div>
        )}

        <Slider className="mt-6">
          {visibleVideos.map((item, index) => (
            <article
              key={index}
              data-slide
              className="w-[200px] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[230px] lg:w-[250px]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(item)}
                aria-label={`Play video: ${item.title}`}
                className="group relative block w-full"
              >
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderMedia label="Preview coming soon" aspect="aspect-[3/4]" />
                )}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow-lg transition group-hover:scale-110">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </span>
              </button>
              <div className="p-3.5">
                <h3 className="text-[13px] font-bold leading-tight">{item.title}</h3>
                {item.name && (
                  <div className="mt-1 text-xs font-semibold text-[#0d7055]">{item.name}</div>
                )}
                {item.description && (
                  <p className="mt-1 text-xs leading-5 text-[#1a1a1a]/60">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </Slider>
      </div>

      <Modal
        open={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        title={activeVideo?.title}
        labelledBy="video-modal-title"
        widthClass="max-w-2xl"
      >
        {activeVideo?.video && (
          <div className="aspect-video w-full overflow-hidden rounded-[14px] bg-black">
            <video
              key={activeVideo.video}
              src={activeVideo.video}
              controls
              preload="none"
              className="h-full w-full"
            >
              Your browser does not support embedded video.
            </video>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default VideoTestimonialsSection;
