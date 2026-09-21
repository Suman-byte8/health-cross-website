import { useState } from "react";
import { Play } from "lucide-react";
import PlaceholderMedia from "../common/PlaceholderMedia";
import { awarenessVideos } from "../../data/awarenessVideos";
import Modal from "../common/Modal";
import Slider from "../common/Slider";
import SectionHeading from "../common/SectionHeading";

const youtubeId = (url = "") => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
};

const thumbFor = (item) =>
  item.thumbnail || (youtubeId(item.video) ? `https://img.youtube.com/vi/${youtubeId(item.video)}/hqdefault.jpg` : null);

const AwarenessVideosSection = () => {
  const [active, setActive] = useState(null);

  // Hidden in production until videos are added; local dev shows empty slots
  // so the carousel layout can be reviewed.
  if (awarenessVideos.length === 0) {
    if (!import.meta.env.DEV) return null;
    return (
      <section id="awareness" className="bg-white py-10 lg:py-12">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          <SectionHeading eyebrow="HEALTH AWARENESS" title="Awareness videos" />
          <Slider className="mt-8">
            {[0, 1, 2].map((slot) => (
              <div key={slot} data-slide className="w-[260px] shrink-0 snap-start sm:w-[300px]">
                <PlaceholderMedia icon={Play} label="Awareness video — add it in data/awarenessVideos.jsx" aspect="aspect-video" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }

  const activeYoutube = active ? youtubeId(active.video) : null;

  return (
    <section id="awareness" className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading eyebrow="HEALTH AWARENESS" title="Awareness videos" />

        <Slider className="mt-8">
          {awarenessVideos.map((item, index) => {
            const thumb = thumbFor(item);
            return (
              <article
                key={index}
                data-slide
                className="w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0d7055]/40 hover:shadow-lg sm:w-[300px]"
              >
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  aria-label={`Play video: ${item.title}`}
                  className="group relative block aspect-video w-full bg-[#0a5243]"
                >
                  {thumb && (
                    <img src={thumb} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0d7055] shadow-lg transition group-hover:scale-110">
                      <Play className="h-5 w-5 fill-current" />
                    </span>
                  </span>
                </button>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 text-xs leading-5 text-[#1a1a1a]/60">{item.description}</p>
                  )}
                </div>
              </article>
            );
          })}
        </Slider>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
        labelledBy="awareness-modal-title"
        widthClass="max-w-2xl"
      >
        {active && (
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            {activeYoutube ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeYoutube}?autoplay=1&rel=0`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <video key={active.video} src={active.video} controls autoPlay className="h-full w-full">
                Your browser does not support embedded video.
              </video>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default AwarenessVideosSection;
