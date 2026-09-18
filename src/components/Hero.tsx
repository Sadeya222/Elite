import { Container, Icon } from "./ui";
import { assets, hero } from "../config/content";

export default function Hero() {
  return (
    <section
      id="erlebnis"
      className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-ink lg:min-h-[600px]"
    >
      {/* your own hero image */}
      <img
        src={assets.heroImage}
        alt="Lamborghini Huracán EVO"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
      />
      <div className="absolute inset-0 bg-black/45 lg:bg-black/10" />
      <div className="hero-fade absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute inset-y-0 left-0 w-[6px] bg-brand" />

      <Container className="relative">
        <div className="max-w-[720px] py-12 sm:py-14">
          <p className="label-caps text-white/90">{hero.kicker}</p>
          <h1 className="mt-2 font-display text-[30px] leading-[1.05] font-black text-white sm:text-[42px] lg:text-[50px]">
            {hero.title}
          </h1>
          <p className="mt-2 text-[17px] font-medium text-white/85 sm:text-[19px]">{hero.subtitle}</p>

          <div className="mt-5 flex items-end gap-4">
            <span className="relative pb-1 text-[26px] font-semibold text-white/85">
              {hero.oldPrice}
              <span className="absolute top-1/2 left-[-4px] h-[2.5px] w-[calc(100%+8px)] -translate-y-1/2 rotate-[-6deg] bg-white" />
            </span>
            <span className="font-display text-[46px] leading-none font-black text-white sm:text-[58px]">
              {hero.newPrice}
              <span className="align-super text-[20px]">*</span>
            </span>
          </div>

          <div className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-3">
            {hero.badges.map((b) => (
              <div key={b.label} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <Icon name={b.icon} className="h-[18px] w-[18px] text-white" />
                </span>
                <span className="text-[12.5px] leading-snug font-medium text-white/90">{b.label}</span>
              </div>
            ))}
          </div>

          <a
            href="#tour"
            className="group mt-6 inline-flex items-center gap-2 rounded-[4px] bg-brand px-5 py-3 font-display text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-brand-dark"
          >
            {hero.cta}
            <Icon
              name="arrowRight"
              className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
            />
          </a>

          <p className="mt-4 max-w-[560px] text-[11px] leading-snug text-white/70">
            <span className="text-brand">*</span> {hero.footnote}
          </p>
        </div>
      </Container>
    </section>
  );
}
