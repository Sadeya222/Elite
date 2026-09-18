import { useEffect, useState } from "react";
import { Container, Icon, SectionLabel } from "./ui";
import { orderForm } from "../config/content";
import { formatEuro, useShop } from "../store/shop";

const field =
  "h-11 w-full rounded-[3px] border border-neutral-300 bg-white px-3 text-[13.5px] text-ink outline-none transition-colors placeholder:text-neutral-400 focus:border-ink";

export default function OrderForm() {
  const { items, total, count, inc, dec, remove, clear, user, addVoucher } = useShop();
  const [form, setForm] = useState({ first: "", last: "", email: "", payment: "PayPal", agree: false });
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<{ ref: string; total: number; email: string; payment: string } | null>(
    null,
  );

  // Prefill from a logged-in user.
  useEffect(() => {
    if (user) {
      const [first, ...rest] = user.name.split(" ");
      setForm((f) => ({
        ...f,
        first: f.first || first || "",
        last: f.last || rest.join(" "),
        email: f.email || user.email,
      }));
    }
  }, [user]);

  const set =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      setError("Dein Warenkorb ist leer. Bitte wähle zuerst ein Ticket oder einen Gutschein.");
      return;
    }
    if (!form.first || !form.last || !form.email) {
      setError("Bitte fülle alle Felder aus.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    if (!form.agree) {
      setError("Bitte stimme den AGB und der Datenschutzerklärung zu.");
      return;
    }
    setError(null);
    setOrder({
      ref: `ESCC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      total,
      email: form.email,
      payment: form.payment,
    });
    clear();
    setForm((f) => ({ ...f, agree: false }));
  };

  return (
    <section id="bestellen" className="bg-panel">
      <Container>
        <div className="py-12">
          <div className="relative mx-auto max-w-[880px] rounded-[5px] border border-neutral-200 bg-white p-6 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.45)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <SectionLabel className="text-neutral-500">{orderForm.kicker}</SectionLabel>
              <span className="rounded-full border border-neutral-300 px-4 py-1.5 font-display text-[13px] font-semibold text-neutral-900">
                {formatEuro(order ? order.total : total)}
              </span>
            </div>
            <h2 className="mt-2 font-display text-[25px] leading-tight font-black sm:text-[30px]">
              {order ? "Bestellung bestätigt" : "Kasse"}
            </h2>

            {order ? (
              <div className="mt-7 rounded-[4px] border border-neutral-200 bg-panel p-6">
                <div className="flex items-start gap-3">
                  <Icon name="checkCircle" className="mt-0.5 h-7 w-7 shrink-0 text-brand" />
                  <div>
                    <p className="font-display text-[15px] font-bold">
                      Danke, {form.first || "Fahrer"}! Deine Bestellung ist eingegangen.
                    </p>
                    <p className="mt-1 text-[13px] text-neutral-600">
                      Bestellnummer <span className="font-semibold text-ink">{order.ref}</span> · Summe{" "}
                      {formatEuro(order.total)} · Zahlung per {order.payment}. Eine Bestätigung geht an{" "}
                      {order.email}.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOrder(null)}
                  className="mt-5 text-[12.5px] font-semibold text-brand underline underline-offset-4"
                >
                  Weitere Bestellung starten
                </button>
              </div>
            ) : (
              <>
                {/* cart summary */}
                <div className="mt-6 rounded-[4px] border border-neutral-200">
                  <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5">
                    <span className="label-caps text-neutral-500">Deine Auswahl</span>
                    <span className="text-[12px] text-neutral-500">{count} Artikel</span>
                  </div>
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center gap-3 px-4 py-8 text-center">
                      <Icon name="cart" className="h-8 w-8 text-neutral-300" />
                      <p className="text-[13px] text-neutral-600">
                        Dein Warenkorb ist noch leer. Wähle oben eine Stadt oder füge einen Gutschein hinzu.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <a
                          href="#tour"
                          className="rounded-[3px] border border-neutral-300 px-4 py-2 text-[12px] font-semibold text-ink hover:border-ink"
                        >
                          Stadt wählen
                        </a>
                        <button
                          type="button"
                          onClick={addVoucher}
                          className="rounded-[3px] bg-ink px-4 py-2 text-[12px] font-semibold text-white hover:bg-neutral-800"
                        >
                          Gutschein hinzufügen
                        </button>
                      </div>
                    </div>
                  ) : (
                    <ul className="divide-y divide-neutral-100">
                      {items.map((item) => (
                        <li key={item.id} className="flex items-center gap-3 px-4 py-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-panel">
                            <Icon
                              name={item.type === "ticket" ? "ticketSolid" : "gift"}
                              className="h-[18px] w-[18px] text-ink"
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-display text-[13px] font-bold">{item.title}</p>
                            {item.subtitle && (
                              <p className="truncate text-[11px] text-neutral-500">{item.subtitle}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              aria-label="Weniger"
                              onClick={() => dec(item.id)}
                              className="flex h-6 w-6 items-center justify-center rounded border border-neutral-300 hover:border-ink"
                            >
                              <Icon name="plus" className="h-3 w-3 rotate-45" />
                            </button>
                            <span className="w-5 text-center text-[12.5px] font-semibold tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              aria-label="Mehr"
                              onClick={() => inc(item.id)}
                              className="flex h-6 w-6 items-center justify-center rounded border border-neutral-300 hover:border-ink"
                            >
                              <Icon name="plus" className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="w-[70px] text-right font-display text-[13px] font-bold">
                            {formatEuro(item.qty * item.unitPrice)}
                          </span>
                          <button
                            type="button"
                            aria-label="Entfernen"
                            onClick={() => remove(item.id)}
                            className="p-1 text-neutral-400 hover:text-brand"
                          >
                            <Icon name="plus" className="h-4 w-4 rotate-45" />
                          </button>
                        </li>
                      ))}
                      <li className="flex items-center justify-between px-4 py-3">
                        <span className="font-display text-[13px] font-bold">Gesamt</span>
                        <span className="font-display text-[17px] font-black">{formatEuro(total)}</span>
                      </li>
                    </ul>
                  )}
                </div>

                <form onSubmit={submit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[11.5px] font-medium text-neutral-700">Vorname</span>
                      <input className={field} value={form.first} onChange={set("first")} placeholder="Max" autoComplete="given-name" />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[11.5px] font-medium text-neutral-700">Nachname</span>
                      <input className={field} value={form.last} onChange={set("last")} placeholder="Mustermann" autoComplete="family-name" />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-[11.5px] font-medium text-neutral-700">E-Mail-Adresse</span>
                    <input type="email" className={field} value={form.email} onChange={set("email")} placeholder="max@beispiel.de" autoComplete="email" />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[11.5px] font-medium text-neutral-700">Zahlungsart</span>
                    <select className={field} value={form.payment} onChange={set("payment")}>
                      {orderForm.paymentMethods.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => setForm((f) => ({ ...f, agree: e.target.checked }))}
                      className="mt-0.5 h-4 w-4 accent-brand"
                    />
                    <span className="text-[12.5px] leading-snug text-neutral-700">{orderForm.agreement}</span>
                  </label>

                  {error && <p className="text-[12.5px] font-medium text-brand">{error}</p>}

                  <button
                    type="submit"
                    className="h-12 w-full rounded-[4px] bg-brand font-display text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={items.length === 0}
                  >
                    {items.length === 0
                      ? "Warenkorb ist leer"
                      : `${orderForm.cta} · ${formatEuro(total)}`}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
