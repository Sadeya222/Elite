import { Container, Icon, Logo } from "./ui";
import { footerLinks } from "../config/content";
import type { LegalKey } from "../config/content";
import { useShop } from "../store/shop";

const legalMap: Record<string, LegalKey> = {
  Impressum: "impressum",
  Datenschutz: "datenschutz",
  AGB: "agb",
  Kontakt: "kontakt",
};

export default function Footer() {
  const { openLegal } = useShop();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-7 lg:flex-row">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <Logo className="h-11 w-[250px] sm:w-[270px]" />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => openLegal(legalMap[l])}
                className="text-[12.5px] text-neutral-700 hover:text-brand"
              >
                {l}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-ink">
            <a href="#top" aria-label="Instagram" className="hover:text-brand">
              <Icon name="instagram" className="h-[19px] w-[19px]" />
            </a>
            <a href="#top" aria-label="TikTok" className="hover:text-brand">
              <Icon name="tiktok" className="h-[19px] w-[19px]" />
            </a>
            <Icon name="paypal" className="h-5 w-[52px]" />
            <Icon name="mastercard" className="h-6 w-[42px]" />
            <span className="flex items-center gap-1.5">
              <Icon name="klarna" className="h-4 w-[44px]" />
              <span className="text-[11px] text-neutral-500">Zahlung mit</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-100 py-4 sm:flex-row">
          <p className="text-[11px] text-neutral-500">
            © {new Date().getFullYear()} Elite Sport Cars Club · Deutschlandtour 2026
          </p>
          <button
            type="button"
            className="flex items-center gap-2 rounded-[3px] border border-neutral-300 px-3 py-1.5 text-[11.5px] text-neutral-700"
          >
            <Icon name="globe" className="h-4 w-4" />
            Deutschland / EUR
          </button>
        </div>
      </Container>
    </footer>
  );
}
