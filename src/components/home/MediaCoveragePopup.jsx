import { Newspaper } from "lucide-react";
import { mediaCoverage } from "../../data/mediaCoverage";
import PlaceholderMedia from "../common/PlaceholderMedia";
import Modal from "../common/Modal";

const MediaCoveragePopup = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Media Coverage"
      labelledBy="media-coverage-modal-title"
      widthClass="max-w-3xl"
      roundedClass="rounded-none"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {mediaCoverage.map((item, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-[#fafbf9]"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-top"
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
  );
};

export default MediaCoveragePopup;
