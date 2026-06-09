import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/72 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/72">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-500/15 to-cyan-300/20 font-semibold text-brand-600 transition group-hover:scale-105 dark:text-cyan-300">
            JV
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Joao Victor Alves de Abreu
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Backend Software Engineering Portfolio
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 text-slate-900 dark:border-white/10 dark:text-white md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          aria-label="Navegacao mobile"
          className="border-t border-slate-200/70 px-5 py-4 dark:border-white/10 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
