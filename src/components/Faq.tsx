import { useState } from "react";
import { Container, Icon, SectionLabel } from "./ui";
import { faq } from "../config/content";

export default function Faq() {
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const half = Math.ceil(faq.items.length / 2);
  const columns = [faq.items.slice(0, half), faq.items.slice(half)];

  return (
    <section id="faq" className="bg-white">
      <Container>
        <div className="border-t border-neutral-200 py-10">
          <SectionLabel>{faq.kicker}</SectionLabel>
          <h2 className="mt-2 font-display text-[26px] leading-[1.1] font-black sm:text-[34px]">
            {faq.title}
          </h2>

          <div className="mt-7 grid gap-x-10 gap-y-1 md:grid-cols-2">
            {columns.map((col, ci) => (
              <div key={ci} className="divide-y divide-neutral-200">
                {col.map((item, ri) => {
                  const index = ci * half + ri;
                  const isOpen = open.includes(index);
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-3 text-left"
                      >
                        <span className="text-[13.5px] leading-snug font-medium text-neutral-900">
                          {item.q}
                        </span>
                        <Icon
                          name="plus"
                          className={`h-4 w-4 shrink-0 text-neutral-800 transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="min-h-0 pr-6 text-[13px] leading-relaxed text-neutral-600">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
