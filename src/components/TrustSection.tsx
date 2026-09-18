import { Container, Icon, SectionLabel } from "./ui";
import { trust } from "../config/content";

export default function TrustSection() {
  return (
    <section className="bg-white">
      <Container>
        <div className="border-t border-neutral-200 py-9">
          <SectionLabel className="text-center">{trust.kicker}</SectionLabel>
          <div className="mt-6 grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
            {trust.items.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2.5 px-2 text-center">
                <Icon name={t.icon} className="h-[30px] w-[30px] text-ink" />
                <span className="max-w-[120px] text-[11.5px] leading-snug font-medium text-neutral-800">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
