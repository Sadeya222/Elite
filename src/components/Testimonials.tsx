import { Container, Icon, SectionLabel } from "./ui";
import { assets, testimonials } from "../config/content";

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-white">
      <Container>
        <div className="border-t border-neutral-200 py-10">
          <SectionLabel>{testimonials.kicker}</SectionLabel>
          <h2 className="mt-2 font-display text-[26px] leading-[1.1] font-black sm:text-[34px]">
            {testimonials.title}
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {testimonials.items.map((t, i) => (
              <figure key={t.name} className="flex items-start gap-4">
                <img
                  src={assets.testimonialAvatars[i % assets.testimonialAvatars.length]}
                  alt={t.name}
                  className="h-[58px] w-[58px] shrink-0 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-[13px] w-[13px] text-ink" />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-[13px] leading-snug text-neutral-700">
                    „{t.quote}“
                  </blockquote>
                  <figcaption className="mt-1.5 font-display text-[12.5px] font-bold text-ink">
                    {t.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
