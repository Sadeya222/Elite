import Modal from "./Modal";
import { legal } from "../config/content";
import { useShop } from "../store/shop";

export default function LegalModal() {
  const { legalPage, closeLegal } = useShop();
  const content = legalPage ? legal[legalPage] : null;

  return (
    <Modal open={!!content} onClose={closeLegal} title={content?.title ?? ""} maxWidth="max-w-[620px]">
      <div className="space-y-3">
        {content?.body.map((p, i) => (
          <p key={i} className="text-[13px] leading-relaxed text-neutral-700">
            {p}
          </p>
        ))}
      </div>
    </Modal>
  );
}
