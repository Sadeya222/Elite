import { Container, Icon } from "./ui";

const logos = [
  { name: "GROUPON", node: <span className="font-display text-[19px] font-extrabold tracking-tight">GROUPON</span> },
  {
    name: "mydays",
    node: <span className="font-display text-[19px] font-bold lowercase">mydays<span className="text-[22px]">•</span></span>,
  },
  {
    name: "JOCHEN SCHWEIZER",
    node: (
      <span className="text-center font-display text-[12px] leading-none font-extrabold uppercase">
        Jochen
        <br />
        Schweizer
      </span>
    ),
  },
  {
    name: "erlebnisgeschenke.de",
    node: (
      <span className="flex items-center gap-2">
        <Icon name="gift" className="h-6 w-6 text-ink" />
        <span className="leading-none">
          <span className="block font-display text-[14px] font-bold">erlebnisgeschenke.de</span>
          <span className="block text-[9px] text-neutral-500">Erlebnisse. Emotionen. Erinnerungen.</span>
        </span>
      </span>
    ),
  },
];

export default function Partners() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col items-center gap-5 py-5 sm:flex-row sm:gap-8">
          <p className="label-caps shrink-0 text-neutral-500">Partner von:</p>
          <div className="flex flex-1 flex-wrap items-center justify-around gap-x-8 gap-y-4">
            {logos.map((l) => (
              <div key={l.name} className="flex items-center grayscale">{l.node}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
