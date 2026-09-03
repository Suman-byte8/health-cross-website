import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Accessible modal wrapper reused across Media Coverage, Medical Equipment
 * lightbox and Video player dialogs.
 *
 * - Closes on ESC and on backdrop click.
 * - Locks body scroll while open.
 * - Moves focus into the dialog when it opens.
 */
const Modal = ({ open, onClose, title, children, labelledBy, widthClass = "max-w-2xl" }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1f18]/60 backdrop-blur-sm p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative w-full ${widthClass} max-h-[88vh] overflow-y-auto rounded-[20px] bg-white shadow-2xl outline-none`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100 bg-white/95 px-5 py-4 backdrop-blur">
          {title ? (
            <h3 id={labelledBy} className="text-base font-bold text-[#1a1a1a]">
              {title}
            </h3>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4f8f6] text-[#1a1a1a] transition hover:bg-[#e5f3ef]"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
