import { useMemo, useState } from "react";
import { Clapperboard, Play } from "lucide-react";
import { videoTestimonials } from "../../data/videoTestimonials";
import { mediaVideos } from "../../data/mediaVideos";
import PlaceholderMedia, { PlaceholderBadge } from "../common/PlaceholderMedia";
import Modal from "../common/Modal";

const FILTERS = [
  { key: "all", label: "All Videos" },
  { key: "testimonial", label: "Patient Testimonials" },
  { key: "clip", label: "Clinic & Events" },
];

// One reusable gallery consumes both patient testimonials and general video
// clips (hospital footage, events, activities) — new items can be added to
// either data file without any component changes.
const allVideos = [...videoTestimonials, ...mediaVideos];

const VideoTestimonialsSection = () => {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const visibleVideos = useMemo(
    () => (filter === "all" ? allVideos : allVideos.filter((v) => v.type === filter)),
    [filter]
  );

  return (
    <section id="testimonials" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              PATIENT STORIES
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">
              Video testimonials & clinic moments
            </h2>
          </div>
          <PlaceholderBadge>Videos to be supplied by client</PlaceholderBadge>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === item.key
                  ? "bg-[#0d7055] text-white"
                  : "bg-[#f4f8f6] text-[#1a1a1a]/70 hover:bg-[#e5f3ef]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleVideos.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => item.video && setActiveVideo(item)}
                disabled={!item.video}
                aria-label={item.video ? `Play video: ${item.title}` : `${item.title} — video coming soon`}
                className="group relative block w-full disabled:cursor-not-allowed"
              >
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderMedia icon={Clapperboard} label="Video coming soon" aspect="aspect-video" />
                )}
                {item.video && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow-lg transition group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </span>
                )}
              </button>
              <div className="p-4">
                <h3 className="text-[14px] font-bold leading-tight">{item.title}</h3>
                {item.name && (
                  <div className="mt-1 text-xs font-semibold text-[#0d7055]">{item.name}</div>
                )}
                {item.description && (
                  <p className="mt-1 text-xs leading-5 text-[#1a1a1a]/60">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
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
