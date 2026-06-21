import { useEffect, useState } from "react";
import { FiArrowRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

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
    <header className="sticky top-0 z-50 border-b border-[rgba(76,255,139,0.12)] bg-[rgba(1,8,3,0.78)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <NavLink to="/" className="group flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(76,255,139,0.18)] bg-[linear-gradient(180deg,rgba(18,48,23,0.92),rgba(5,14,8,0.92))] font-semibold text-[#74ff9f] transition group-hover:scale-105">
            JV
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#f1fff5]">
              Joao Victor Alves de Abreu
            </p>
            <p className="truncate text-xs uppercase tracking-[0.18em] text-[#88d7a2]">
              software engineer portfolio
            </p>
          </div>
        </NavLink>

        <nav
          className="hidden items-center gap-2 rounded-full border border-[rgba(76,255,139,0.12)] bg-[rgba(5,16,8,0.76)] px-3 py-2 lg:flex"
          aria-label="Navegacao principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#a5ebbc] transition hover:bg-[rgba(76,255,139,0.08)] hover:text-[#f1fff5]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={resumeUrl} download className="btn-secondary">
            <FiDownload />
            Curriculo
          </a>
          <a href="#contato" className="btn-primary">
            <FiArrowRight />
            Contato
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(76,255,139,0.16)] text-[#e4ffee] lg:hidden"
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
          className="border-t border-[rgba(76,255,139,0.12)] px-5 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#a5ebbc] transition hover:bg-[rgba(76,255,139,0.08)] hover:text-[#f1fff5]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-[rgba(76,255,139,0.14)] px-4 py-3 text-sm font-medium text-[#f1fff5]"
            >
              Baixar curriculo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
