import { Container, Icon, SectionLabel } from "./ui";
import { tour } from "../config/content";
import { useShop } from "../store/shop";

export default function TourCities() {
  const { addTicket, stock } = useShop();

  return (
    <section id="tour" className="bg-white">
      <Container>
        <div className="border-t border-neutral-200 py-10">
          <SectionLabel>{tour.kicker}</SectionLabel>
          <h2 className="mt-2 font-display text-[28px] leading-[1.08] font-black sm:text-[36px]">
            {tour.title}
          </h2>
          <p className="mt-3 max-w-[820px] text-[14.5px] leading-relaxed text-neutral-700">
            {tour.text}
          </p>

          <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {tour.cities.map((c) => {
              const remaining = stock[c.city] ?? 0;
              const soldOut = remaining <= 0;
              const low = remaining > 0 && remaining <= 5;
              return (
                <button
                  key={c.city}
                  type="button"
                  disabled={soldOut}
                  onClick={() => addTicket(c.city, c.dates)}
                  className={`group flex items-center justify-between rounded-[3px] border px-4 py-2.5 text-left transition-all ${
                    soldOut
                      ? "cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-60"
                      : "border-neutral-200 bg-white hover:border-ink hover:shadow-[0_6px_18px_-10px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  <span>
                    <span className="block font-display text-[13px] font-bold text-neutral-900">
                      {c.city}
                    </span>
                    <span className="block text-[11.5px] text-neutral-500">{c.dates}</span>
                    <span
                      className={`mt-0.5 block text-[10.5px] font-semibold ${
                        soldOut ? "text-neutral-400" : low ? "text-brand" : "text-emerald-600"
                      }`}
                    >
                      {soldOut
                        ? "Ausverkauft"
                        : low
                          ? `Nur noch ${remaining} Tickets!`
                          : `${remaining} Tickets verfügbar`}
                    </span>
                  </span>
                  {soldOut ? (
                    <span className="text-[10px] font-bold tracking-wide text-neutral-400 uppercase">
                      Voll
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-brand uppercase">
                      <Icon
                        name="cart"
                        className="h-4 w-4 transition-transform group-hover:scale-110"
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
