import { Icon } from "./ui";
import { useShop } from "../store/shop";

export default function Toast() {
  const { toast } = useShop();

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-5 left-1/2 z-[90] -translate-x-1/2 transition-all duration-300 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {toast && (
        <div className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-white shadow-xl">
          <Icon name="checkCircle" className="h-5 w-5 text-brand" />
          <span className="text-[13px] font-medium">{toast}</span>
        </div>
      )}
    </div>
  );
}
