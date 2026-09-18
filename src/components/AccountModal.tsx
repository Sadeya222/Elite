import { useState } from "react";
import Modal from "./Modal";
import { Icon } from "./ui";
import { useShop } from "../store/shop";

const field =
  "h-11 w-full rounded-[3px] border border-neutral-300 bg-white px-3 text-[13.5px] text-ink outline-none transition-colors placeholder:text-neutral-400 focus:border-ink";

export default function AccountModal() {
  const { accountOpen, closeAccount, user, login, logout } = useShop();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === "register" && !form.name)) {
      setError("Bitte fülle alle Felder aus.");
      return;
    }
    setError(null);
    const name = mode === "register" ? form.name : form.email.split("@")[0];
    login({ name, email: form.email });
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <Modal open={accountOpen} onClose={closeAccount} title={user ? "Mein Konto" : "Anmelden"}>
      {user ? (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-panel">
              <Icon name="user" className="h-6 w-6 text-ink" />
            </span>
            <div>
              <p className="font-display text-[15px] font-bold">{user.name}</p>
              <p className="text-[12.5px] text-neutral-500">{user.email}</p>
            </div>
          </div>
          <div className="rounded-[4px] bg-panel p-4 text-[12.5px] text-neutral-600">
            Hier findest du künftig deine Buchungen, Gutscheine und Termine.
          </div>
          <button
            type="button"
            onClick={logout}
            className="h-11 w-full rounded-[4px] border border-neutral-300 font-display text-[12.5px] font-bold uppercase text-ink hover:border-ink"
          >
            Abmelden
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4 grid grid-cols-2 gap-1 rounded-[4px] bg-panel p-1">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  setError(null);
                }}
                className={`h-9 rounded-[3px] text-[12.5px] font-semibold transition-colors ${
                  mode === m ? "bg-white text-ink shadow-sm" : "text-neutral-500"
                }`}
              >
                {m === "login" ? "Anmelden" : "Registrieren"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-3">
            {mode === "register" && (
              <input
                className={field}
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                autoComplete="name"
              />
            )}
            <input
              type="email"
              className={field}
              placeholder="E-Mail-Adresse"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              autoComplete="email"
            />
            <input
              type="password"
              className={field}
              placeholder="Passwort"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
            {error && <p className="text-[12.5px] font-medium text-brand">{error}</p>}
            <button
              type="submit"
              className="h-11 w-full rounded-[4px] bg-brand font-display text-[12.5px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              {mode === "login" ? "Anmelden" : "Konto erstellen"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
