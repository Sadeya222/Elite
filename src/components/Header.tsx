import { useState } from "react";
import { Container, Icon, Logo } from "./ui";
import { nav } from "../config/content";
import { useShop } from "../store/shop";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count, openCart, openAccount, user } = useShop();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-[62px] items-center justify-between gap-3">
          <a href="#top" className="flex shrink-0 items-center">
            <Logo />
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-neutral-800 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <button
              type="button"
              onClick={openAccount}
              aria-label="Mein Konto"
              className="flex h-9 items-center justify-center gap-1.5 px-1.5 text-[12.5px] text-neutral-800 hover:text-brand sm:px-0"
            >
              <Icon name="user" className="h-[18px] w-[18px]" />
              <span className="hidden max-w-[110px] truncate sm:inline">
                {user ? user.name.split(" ")[0] : "Mein Konto"}
              </span>
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Warenkorb"
              className="relative flex h-9 items-center justify-center gap-1.5 px-1.5 text-[12.5px] text-neutral-800 hover:text-brand sm:px-0"
            >
              <span className="relative">
                <Icon name="cart" className="h-[18px] w-[18px]" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-brand px-1 text-[9px] font-bold text-white">
                    {count}
                  </span>
                )}
              </span>
              <span className="hidden sm:inline">Warenkorb</span>
            </button>
            <button
              type="button"
              aria-label="Menü"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded border border-neutral-300 lg:hidden"
            >
              <span className="block h-[1.6px] w-4 bg-ink" />
              <span className="block h-[1.6px] w-4 bg-ink" />
              <span className="block h-[1.6px] w-4 bg-ink" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="grid gap-1 pb-4 lg:hidden">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded border-b border-neutral-100 py-2.5 text-sm font-medium text-neutral-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
