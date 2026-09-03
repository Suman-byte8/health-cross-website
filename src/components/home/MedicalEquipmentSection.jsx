import { useState } from "react";
import { Stethoscope, ZoomIn } from "lucide-react";
import { medicalEquipment } from "../../data/medicalEquipment";
import PlaceholderMedia, { PlaceholderBadge } from "../common/PlaceholderMedia";
import Modal from "../common/Modal";

const MedicalEquipmentSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="medical-equipment" className="py-8 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d7055]">
              MEDICAL EQUIPMENT
            </div>
            <h2 className="mt-2 text-[28px] font-bold lg:text-[34px]">
              Hospital-grade care, at home
            </h2>
          </div>
          <PlaceholderBadge>Photos to be supplied by client</PlaceholderBadge>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-[#1a1a1a]/60">
          Equipment photographs and detailed specifications will be added by
          our clinical team. The layout below is ready for those images.
        </p>

        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {medicalEquipment.map((item, index) => (
            <article
              key={index}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="relative block w-full text-left"
                aria-label={`View details for ${item.name}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderMedia icon={Stethoscope} label="Equipment photo coming soon" />
                )}
                <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0d7055] opacity-0 shadow-sm transition group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </button>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#0d7055]">
                  {item.category}
                </span>
                <h3 className="mt-1 text-[15px] font-bold leading-tight">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#1a1a1a]/60 flex-1">
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
                className="w-full rounded-[16px] object-cover"
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
