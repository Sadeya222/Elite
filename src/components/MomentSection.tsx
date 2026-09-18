import PhonePlayer from "./PhonePlayer";
import { Container, Icon, SectionLabel } from "./ui";
import { momentSection } from "../config/content";

export default function MomentSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid items-start gap-8 py-10 lg:grid-cols-[330px_1fr] lg:gap-10">
          <PhonePlayer />

          <div>
            <SectionLabel>{momentSection.kicker}</SectionLabel>
            <h2 className="mt-2 font-display text-[28px] leading-[1.08] font-black sm:text-[36px]">
              {momentSection.title}
            </h2>
            <p className="mt-3 max-w-[560px] text-[14.5px] leading-relaxed text-neutral-700">
              {momentSection.text}
            </p>

            <div className="mt-6 grid gap-5 rounded-[3px] bg-panel p-5 md:grid-cols-2">
              <ul className="space-y-3">
                {momentSection.checklist.map((c) => (
                  <li key={c} className="flex items-center gap-2.5">
                    <Icon name="checkCircle" className="h-[19px] w-[19px] shrink-0 text-ink" />
                    <span className="text-[14px] font-medium text-neutral-900">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="divide-y divide-neutral-200 rounded-[3px] bg-white">
                {momentSection.bannerItems.map((b) => (
                  <div key={b.text} className="flex items-start gap-3 px-4 py-3">
                    <Icon name={b.icon} className="mt-0.5 h-[26px] w-[26px] shrink-0 text-ink" />
                    <p className="text-[13px] leading-snug text-neutral-800">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
