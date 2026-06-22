import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
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
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.4rem] border border-[rgba(0,255,65,0.2)] bg-[rgba(2,6,2,0.9)] shadow-[0_18px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="window-chrome">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="window-dot bg-[#00ff41]" />
              <span className="window-dot bg-[#0a7f2b]" />
              <span className="window-dot bg-[#d7ffe0]" />
            </div>
            <p className="terminal-kicker text-[#d7ffe0]">
              joao-victor.dev
              <span className="terminal-cursor" aria-hidden="true">
                _
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="search-shell hidden lg:flex">
              <HiOutlineMagnifyingGlass aria-hidden="true" />
              <span>search sections</span>
            </div>
            <span className="system-pill hidden sm:inline-flex">online</span>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,255,65,0.18)] bg-[rgba(3,11,4,0.88)] text-[#d7ffe0] lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-4 py-4 lg:px-5">
          <NavLink to="/" className="group flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(0,255,65,0.22)] bg-[radial-gradient(circle_at_top,_rgba(22,70,30,0.95),rgba(2,8,3,0.95)_70%)] text-lg font-semibold text-[#d7ffe0] shadow-[0_0_18px_rgba(0,255,65,0.14)] transition group-hover:border-[rgba(0,255,65,0.42)]">
              JV
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.08em] text-[#f4fff7]">
                João Victor Alves de Abreu
              </p>
              <p className="truncate text-xs text-[#92cfa2]">
                Backend Engineering Portfolio
              </p>
            </div>
          </NavLink>

          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                className="rounded-full border border-transparent px-4 py-2 text-sm text-[#9fd2ab] transition hover:border-[rgba(0,255,65,0.16)] hover:bg-[rgba(0,255,65,0.06)] hover:text-[#f4fff7]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={resumeUrl} download className="btn-secondary">
              <HiOutlineArrowDownTray />
              Currículo
            </a>
            <a href={sectionHref("#contato")} className="btn-primary">
              <HiOutlineArrowRight />
              Contato
            </a>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-navigation"
            className="border-t border-[rgba(0,255,65,0.12)] px-4 pb-4 pt-2 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={sectionHref(item.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-[#b7eac4] transition hover:border-[rgba(0,255,65,0.16)] hover:bg-[rgba(0,255,65,0.06)] hover:text-[#f4fff7]"
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
                Baixar currículo
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
