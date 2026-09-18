import { Container, Icon, SectionLabel } from "./ui";
import { steps } from "../config/content";

export default function Steps() {
  return (
    <section id="steps" className="bg-white" aria-labelledby="steps-title">
      <Container>
        <div className="border-t border-neutral-200 py-10">
          <SectionLabel>{steps.kicker}</SectionLabel>
          <h2
            id="steps-title"
            className="mt-2 max-w-[900px] font-display text-[28px] leading-[1.08] font-black sm:text-[36px]"
          >
            {steps.title}
          </h2>

          <ol className="mt-8 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {steps.items.map((step, index) => (
              <li key={step.title} className="relative flex items-start gap-4">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-[14px] font-bold text-white">
                    {index + 1}
                  </span>
                  <Icon name={step.icon} className="h-8 w-8 text-ink" />
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-[15px] font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-[190px] text-[13px] leading-relaxed text-neutral-600">
                    {step.text}
                  </p>
                </div>
                {index < steps.items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[18px] right-[-20px] hidden h-px w-8 bg-neutral-200 lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}