import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineArrowDownTray, HiOutlineArrowRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;
  const sectionHref = (hash: string) => `${import.meta.env.BASE_URL}${hash}`;

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
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(7,11,28,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-5 lg:px-8">
        <NavLink to="/" className="group flex min-w-0 items-center gap-3">
          <span className="brand-mark">JV</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--text-strong)]">
              Joao Victor Alves de Abreu
            </p>
            <p className="truncate text-xs text-[var(--text-muted)]">
              Backend Engineering Portfolio
            </p>
          </div>
        </NavLink>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegacao principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={resumeUrl} download className="btn-secondary">
            <HiOutlineArrowDownTray />
            Curriculo
          </a>
          <a href={sectionHref("#contato")} className="btn-primary">
            <HiOutlineArrowRight />
            Contato
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-elevated)] text-[var(--text-strong)] lg:hidden"
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
          className="border-t border-[var(--border-soft)] px-4 pb-4 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface-elevated)] hover:text-[var(--text-strong)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="btn-secondary justify-center"
            >
              <HiOutlineArrowDownTray />
              Baixar curriculo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
