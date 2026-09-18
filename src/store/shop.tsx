import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { initialStock, type LegalKey, pricing } from "../config/content";

export type CartItem = {
  id: string;
  type: "ticket" | "voucher";
  title: string;
  subtitle?: string;
  unitPrice: number;
  qty: number;
  city?: string;
};

export type User = { name: string; email: string };

type ShopState = {
  /* cart */
  items: CartItem[];
  count: number;
  total: number;
  addTicket: (city: string, dates: string) => void;
  addVoucher: () => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;

  /* cart drawer */
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  /* stock */
  stock: Record<string, number>;

  /* account */
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  accountOpen: boolean;
  openAccount: () => void;
  closeAccount: () => void;

  /* legal modal */
  legalPage: LegalKey | null;
  openLegal: (page: LegalKey) => void;
  closeLegal: () => void;

  /* toast */
  toast: string | null;
  notify: (msg: string) => void;
};

const ShopContext = createContext<ShopState | null>(null);

const CART_KEY = "escc_cart";
const STOCK_KEY = "escc_stock";
const USER_KEY = "escc_user";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

let idCounter = 0;
const nextId = () => `${Date.now().toString(36)}-${(idCounter++).toString(36)}`;

export function ShopProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => load(CART_KEY, []));
  const [stock, setStock] = useState<Record<string, number>>(() => ({
    ...initialStock,
    ...load(STOCK_KEY, {}),
  }));
  const [user, setUser] = useState<User | null>(() => load<User | null>(USER_KEY, null));

  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalKey | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    localStorage.setItem(STOCK_KEY, JSON.stringify(stock));
  }, [stock]);
  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, [user]);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3200);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const addTicket = useCallback(
    (city: string, dates: string) => {
      const remaining = stock[city] ?? 0;
      if (remaining <= 0) {
        notify(`${city} ist leider ausverkauft.`);
        return;
      }
      setStock((s) => ({ ...s, [city]: (s[city] ?? 0) - 1 }));
      setItems((prev) => {
        const existing = prev.find((i) => i.type === "ticket" && i.city === city);
        if (existing) {
          return prev.map((i) => (i.id === existing.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [
          ...prev,
          {
            id: nextId(),
            type: "ticket",
            title: `Promo-Ticket ${city}`,
            subtitle: dates,
            unitPrice: pricing.ticket,
            qty: 1,
            city,
          },
        ];
      });
      notify(`Promo-Ticket ${city} in den Warenkorb gelegt.`);
      openCart();
    },
    [stock, notify, openCart],
  );

  const addVoucher = useCallback(() => {
    setItems((prev) => {
      const existing = prev.find((i) => i.type === "voucher");
      if (existing) {
        return prev.map((i) => (i.id === existing.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          id: nextId(),
          type: "voucher",
          title: "Geschenk-Gutschein",
          subtitle: "Lamborghini fahren",
          unitPrice: pricing.voucher,
          qty: 1,
        },
      ];
    });
    notify("Gutschein in den Warenkorb gelegt.");
    openCart();
  }, [notify, openCart]);

  const restore = useCallback((item: CartItem, amount: number) => {
    if (item.type === "ticket" && item.city) {
      const city = item.city;
      setStock((s) => ({ ...s, [city]: (s[city] ?? 0) + amount }));
    }
  }, []);

  const inc = useCallback(
    (id: string) => {
      setItems((prev) => {
        const item = prev.find((i) => i.id === id);
        if (!item) return prev;
        if (item.type === "ticket" && item.city && (stock[item.city] ?? 0) <= 0) {
          notify(`${item.city} ist leider ausverkauft.`);
          return prev;
        }
        if (item.type === "ticket" && item.city) {
          const city = item.city;
          setStock((s) => ({ ...s, [city]: (s[city] ?? 0) - 1 }));
        }
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      });
    },
    [stock, notify],
  );

  const dec = useCallback(
    (id: string) => {
      setItems((prev) => {
        const item = prev.find((i) => i.id === id);
        if (!item) return prev;
        if (item.qty <= 1) {
          restore(item, 1);
          return prev.filter((i) => i.id !== id);
        }
        restore(item, 1);
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i));
      });
    },
    [restore],
  );

  const remove = useCallback(
    (id: string) => {
      setItems((prev) => {
        const item = prev.find((i) => i.id === id);
        if (item) restore(item, item.qty);
        return prev.filter((i) => i.id !== id);
      });
    },
    [restore],
  );

  const clear = useCallback(() => setItems([]), []);

  const login = useCallback(
    (u: User) => {
      setUser(u);
      setAccountOpen(false);
      notify(`Willkommen, ${u.name.split(" ")[0]}!`);
    },
    [notify],
  );
  const logout = useCallback(() => {
    setUser(null);
    notify("Du wurdest abgemeldet.");
  }, [notify]);

  const value = useMemo<ShopState>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const total = items.reduce((n, i) => n + i.qty * i.unitPrice, 0);
    return {
      items,
      count,
      total,
      addTicket,
      addVoucher,
      inc,
      dec,
      remove,
      clear,
      cartOpen,
      openCart,
      closeCart,
      stock,
      user,
      login,
      logout,
      accountOpen,
      openAccount: () => setAccountOpen(true),
      closeAccount: () => setAccountOpen(false),
      legalPage,
      openLegal: (page: LegalKey) => setLegalPage(page),
      closeLegal: () => setLegalPage(null),
      toast,
      notify,
    };
  }, [
    items,
    addTicket,
    addVoucher,
    inc,
    dec,
    remove,
    clear,
    cartOpen,
    openCart,
    closeCart,
    stock,
    user,
    login,
    logout,
    accountOpen,
    legalPage,
    toast,
    notify,
  ]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}

export function formatEuro(n: number) {
  return `${n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}
