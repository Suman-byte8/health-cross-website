import { useEffect, useMemo, useRef, useState } from "react";
import { Play } from "lucide-react";
import { videoTestimonials } from "../../data/videoTestimonials";
import { mediaVideos } from "../../data/mediaVideos";
import PlaceholderMedia from "../common/PlaceholderMedia";
import Modal from "../common/Modal";
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
const testimonials = allVideos.filter((item) => item.type === "testimonial");
const availableTypes = [...new Set(allVideos.map((item) => item.type))];
const featuredTestimonial = testimonials[0];

const VideoTestimonialsSection = ({ onAutoPopupClose }) => {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);
  const [isAutoPopup, setIsAutoPopup] = useState(false);
  const manuallyOpenedVideo = useRef(false);

  useEffect(() => {
    if (!featuredTestimonial) return undefined;

    const timer = window.setTimeout(() => {
      if (manuallyOpenedVideo.current) return;
      setIsAutoPopup(true);
      setActiveVideo(featuredTestimonial);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  const openVideo = (item) => {
    manuallyOpenedVideo.current = true;
    setActiveVideo(item);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    if (isAutoPopup) onAutoPopupClose?.();
    setIsAutoPopup(false);
  };

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

        <div className="mx-auto mt-6 grid max-w-[880px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visibleVideos.map((item) => (
            <article
              key={item.video}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => openVideo(item)}
                aria-label={`Play video: ${item.title}`}
                className="group relative block w-full"
              >
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderMedia label="Preview coming soon" aspect="aspect-[9/16]" />
                )}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow-lg transition group-hover:scale-110">
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                </span>
              </button>
              <div className="p-3">
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
        </div>
      </div>

      <Modal
        open={!!activeVideo}
        onClose={closeVideo}
        title={activeVideo?.title}
        labelledBy="video-modal-title"
        widthClass="max-w-md"
        roundedClass="rounded-none"
      >
        {activeVideo?.video && (
          <>
            <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[14px] bg-black">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                controls
                autoPlay
                muted
                playsInline
                preload="none"
                className="h-full w-full"
              >
                Your browser does not support embedded video.
              </video>
            </div>
            {testimonials.length > 1 && (
              <div className="mt-5">
                <h4 className="mb-3 text-sm font-bold text-[#1a1a1a]">More patient stories</h4>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.video}
                      type="button"
                      onClick={() => openVideo(item)}
                      aria-label={`Play patient testimonial ${index + 1}`}
                      aria-pressed={activeVideo.video === item.video}
                      className={`group relative w-20 shrink-0 overflow-hidden rounded-lg border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d7055] ${
                        activeVideo.video === item.video
                          ? "border-[#0d7055]"
                          : "border-transparent hover:border-[#0d7055]/50"
                      }`}
                    >
                      <img
                        src={item.thumbnail}
                        alt=""
                        loading="lazy"
                        className="aspect-[9/16] w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white transition group-hover:bg-black/35">
                        <Play className="h-5 w-5 fill-current" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Modal>
    </section>
  );
};

export default VideoTestimonialsSection;
