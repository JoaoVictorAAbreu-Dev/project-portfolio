import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/portfolio";

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
    <header className="sticky top-0 z-50 border-b border-[rgba(76,255,139,0.12)] bg-[rgba(1,8,3,0.84)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(76,255,139,0.18)] bg-[linear-gradient(180deg,rgba(17,50,23,0.9),rgba(5,16,8,0.9))] font-semibold text-[#72ff9d] transition group-hover:scale-105">
            JV
          </span>
          <div>
            <p className="text-sm font-semibold text-[#f0fff5]">
              Joao Victor Alves de Abreu
            </p>
            <p className="text-xs text-[#8fd5a6]">
              backend software portfolio // matrix mode
            </p>
          </div>
        </NavLink>

        <nav
          className="hidden items-center gap-4 md:flex"
          aria-label="Navegacao principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-[#9ce5b4] transition hover:bg-[rgba(76,255,139,0.08)] hover:text-[#effff4]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(76,255,139,0.16)] text-[#dffff0] md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          aria-label="Navegacao mobile"
          className="border-t border-[rgba(76,255,139,0.12)] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#9ce5b4] transition hover:bg-[rgba(76,255,139,0.08)] hover:text-[#effff4]"
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
