import { useEffect } from "react";
import { Icon } from "./ui";
import { formatEuro, useShop } from "../store/shop";

export default function CartDrawer() {
  const { cartOpen, closeCart, items, inc, dec, remove, total, count } = useShop();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    if (cartOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cartOpen, closeCart]);

  const checkout = () => {
    closeCart();
    setTimeout(() => {
      document.getElementById("bestellen")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          cartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Warenkorb"
        aria-modal="true"
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-[400px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-[16px] font-black">
            <Icon name="cart" className="h-5 w-5" />
            Warenkorb
            <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-white">
              {count}
            </span>
          </h2>
          <button type="button" aria-label="Schließen" onClick={closeCart} className="p-1 text-neutral-500 hover:text-ink">
            <Icon name="plus" className="h-5 w-5 rotate-45" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <Icon name="cart" className="h-10 w-10 text-neutral-300" />
              <p className="text-[14px] font-medium text-neutral-600">Dein Warenkorb ist leer.</p>
              <button
                type="button"
                onClick={checkout}
                className="text-[12.5px] font-semibold text-brand underline underline-offset-4"
              >
                Weiter stöbern
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-[4px] border border-neutral-200 p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-panel text-ink">
                    <Icon name={item.type === "ticket" ? "ticketSolid" : "gift"} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-[13.5px] font-bold">{item.title}</p>
                    {item.subtitle && (
                      <p className="truncate text-[11.5px] text-neutral-500">{item.subtitle}</p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Weniger"
                          onClick={() => dec(item.id)}
                          className="flex h-6 w-6 items-center justify-center rounded border border-neutral-300 text-ink hover:border-ink"
                        >
                          <Icon name="plus" className="h-3 w-3 rotate-45" />
                        </button>
                        <span className="w-5 text-center text-[13px] font-semibold tabular-nums">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Mehr"
                          onClick={() => inc(item.id)}
                          className="flex h-6 w-6 items-center justify-center rounded border border-neutral-300 text-ink hover:border-ink"
                        >
                          <Icon name="plus" className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-display text-[13px] font-bold">
                        {formatEuro(item.qty * item.unitPrice)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Entfernen"
                    onClick={() => remove(item.id)}
                    className="self-start p-1 text-neutral-400 hover:text-brand"
                  >
                    <Icon name="plus" className="h-4 w-4 rotate-45" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-neutral-200 px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-neutral-600">Zwischensumme</span>
              <span className="font-display text-[18px] font-black">{formatEuro(total)}</span>
            </div>
            <p className="mt-1 text-[11px] text-neutral-400">inkl. MwSt. · zzgl. evtl. Vor-Ort-Service</p>
            <button
              type="button"
              onClick={checkout}
              className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-brand font-display text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-dark"
            >
              Zur Kasse
              <Icon name="arrowRight" className="h-[18px] w-[18px]" />
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
