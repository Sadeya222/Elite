import { Container } from "./ui";
import { noCatch } from "../config/content";

export default function NoCatch() {
  return (
    <section className="bg-white">
      <Container>
        <div className="border-t border-neutral-200 py-10">
          <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
            <div className="flex gap-4">
              <span className="mt-1 h-full w-[3px] shrink-0 bg-brand sm:h-auto sm:min-h-[70px]" />
              <p className="font-display text-[15px] font-bold text-brand">{noCatch.priceLine}</p>
            </div>
            <div>
              <h2 className="font-display text-[28px] leading-[1.08] font-black sm:text-[36px]">
                {noCatch.title}
              </h2>
              <p className="mt-2 text-[15.5px] font-bold text-neutral-900">{noCatch.lead}</p>
              <p className="mt-2 max-w-[820px] text-[14.5px] leading-relaxed text-neutral-700">
                {noCatch.text}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
