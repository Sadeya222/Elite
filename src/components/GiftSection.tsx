import { Container, Icon, SectionLabel } from "./ui";
import { assets, gift } from "../config/content";
import { useShop } from "../store/shop";

export default function GiftSection() {
  const { addVoucher } = useShop();
  return (
    <section className="bg-white">
      <Container>
        <div className="grid items-center gap-8 border-t border-neutral-200 py-10 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-[4px] bg-neutral-100">
            <img
              src={assets.voucherImage}
              alt="ELITE SPORT CARS CLUB Gutschein – Lamborghini fahren"
              className="h-auto w-full object-contain sm:min-h-[340px]"
            />
          </div>

          <div>
            <SectionLabel className="text-neutral-900">{gift.kicker}</SectionLabel>
            <h2 className="mt-2 font-display text-[26px] leading-[1.1] font-black sm:text-[34px]">
              {gift.title}
            </h2>
            <p className="mt-1 text-[15.5px] font-bold text-neutral-900">{gift.lead}</p>
            <p className="mt-3 max-w-[560px] text-[14.5px] leading-relaxed text-neutral-700">
              {gift.text}
            </p>

            <div className="mt-7 grid grid-cols-3 gap-y-6 sm:grid-cols-5">
              {gift.occasions.map((o) => (
                <div key={o.label} className="flex flex-col items-center gap-2 text-center">
                  <Icon name={o.icon} className="h-[30px] w-[30px] text-ink" />
                  <span className="text-[11.5px] font-medium text-neutral-800">{o.label}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addVoucher}
              className="group mt-8 inline-flex items-center gap-2 rounded-[4px] bg-brand px-5 py-3 font-display text-[12.5px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-dark"
            >
              Gutschein bestellen
              <Icon name="arrowRight" className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
