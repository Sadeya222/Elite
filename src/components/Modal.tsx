import { useEffect, type ReactNode } from "react";
import { Icon } from "./ui";

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = "max-w-[520px]",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:items-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/55" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative z-[81] my-8 w-full ${maxWidth} rounded-[6px] bg-white shadow-2xl`}
      >
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="font-display text-[18px] font-black">{title}</h2>
          <button type="button" aria-label="Schließen" onClick={onClose} className="p-1 text-neutral-500 hover:text-ink">
            <Icon name="plus" className="h-5 w-5 rotate-45" />
          </button>
        </header>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}
