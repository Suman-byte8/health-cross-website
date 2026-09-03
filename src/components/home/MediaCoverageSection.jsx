import { useState } from "react";
import { Newspaper } from "lucide-react";
import { mediaCoverage } from "../../data/mediaCoverage";
import PlaceholderMedia, { PlaceholderBadge } from "../common/PlaceholderMedia";
import Modal from "../common/Modal";

const MediaCoverageSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="media-coverage" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-[24px] border border-gray-200 bg-white p-8 text-center shadow-sm lg:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f3ef] text-[#0d7055]">
            <Newspaper className="h-6 w-6" />
          </span>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              IN THE NEWS
            </div>
            <h2 className="mt-2 text-[26px] font-bold lg:text-[30px]">Media Coverage</h2>
            <p className="mt-2 max-w-md text-sm text-[#1a1a1a]/60">
              Coverage of Health Cross Organization from newspapers and news
              organizations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a5243]"
          >
            View Media Coverage
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Media Coverage"
        labelledBy="media-coverage-modal-title"
        widthClass="max-w-3xl"
      >
        <div className="mb-4">
          {mediaCoverage.some((m) => m.placeholder) && (
            <PlaceholderBadge>Sample layout — clippings pending</PlaceholderBadge>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {mediaCoverage.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[16px] border border-gray-200 bg-[#fafbf9]"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <PlaceholderMedia icon={Newspaper} label="Clipping image coming soon" />
              )}
              <div className="p-4">
                <div className="text-[11px] font-bold uppercase tracking-wide text-[#0d7055]">
                  {item.publication}
                </div>
                <h3 className="mt-1 text-sm font-bold leading-tight">{item.title}</h3>
                {item.date && (
                  <div className="mt-1 text-xs text-[#1a1a1a]/45">{item.date}</div>
                )}
                {item.description && (
                  <p className="mt-1.5 text-xs leading-5 text-[#1a1a1a]/60">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Modal>
    </section>
  );
};

export default MediaCoverageSection;
