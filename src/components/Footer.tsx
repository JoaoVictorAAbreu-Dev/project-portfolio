import { footerLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border-soft)]"
      aria-label="Rodape"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-base font-semibold text-[var(--text-strong)]">
            Portfolio focado em backend, clareza tecnica e projetos reais.
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
            Curadoria de projetos, stack principal, contato direto e narrativa
            objetiva para recrutadores.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center gap-3"
          aria-label="Links do rodape"
        >
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-secondary"
              aria-label={
                href.startsWith("http") ? `${label} (abre em nova guia)` : label
              }
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
