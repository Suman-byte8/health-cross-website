import { useState } from "react";
import { Stethoscope, ZoomIn } from "lucide-react";
import { medicalEquipment } from "../../data/medicalEquipment";
import PlaceholderMedia from "../common/PlaceholderMedia";
import Modal from "../common/Modal";
import SectionHeading from "../common/SectionHeading";

const MedicalEquipmentSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="medical-equipment" className="bg-[#f4f8f6] py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <SectionHeading
          eyebrow="MEDICAL EQUIPMENT"
          title="Hospital-grade care, at home"
          subtitle="A look at the equipment our clinical team brings into your home for monitoring, respiratory support and patient care."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {medicalEquipment.map((item) => (
            <article
              key={item.name}
              className="group flex w-[calc(50%-8px)] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:w-[calc(33.333%-10.667px)] lg:w-[calc(20%-12.8px)]"
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="relative block w-full text-left"
                aria-label={`View details for ${item.name}`}
              >
                {item.image ? (
                  // Photos come in mixed ratios. Every card uses the same 4:3
                  // frame: the full photo is centred (never cropped) over a
                  // blurred copy of itself that fills the leftover space.
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4f1]">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-xl"
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="relative h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <PlaceholderMedia icon={Stethoscope} label="Equipment photo coming soon" aspect="aspect-[4/3]" />
                )}
                <span className="absolute right-2.5 top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0d7055] opacity-0 shadow-sm transition group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>
              </button>
              <div className="flex flex-1 flex-col p-3">
                <span className="text-[10.5px] font-bold uppercase tracking-wide text-[#0d7055]">
                  {item.category}
                </span>
                <h3 className="mt-1 text-[14px] font-bold leading-tight">{item.name}</h3>
                <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-5 text-[#1a1a1a]/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        open={!!activeItem}
        onClose={() => setActiveItem(null)}
        title={activeItem?.name}
        labelledBy="equipment-modal-title"
        widthClass="max-w-lg"
      >
        {activeItem && (
          <div>
            {activeItem.image ? (
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="max-h-[60vh] w-full rounded-xl bg-white object-contain"
              />
            ) : (
              <PlaceholderMedia icon={Stethoscope} label="Equipment photo coming soon" aspect="aspect-[16/10]" />
            )}
            <div className="mt-4 text-xs font-bold uppercase tracking-wide text-[#0d7055]">
              {activeItem.category}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-[#1a1a1a]/70">
              {activeItem.description}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default MedicalEquipmentSection;
