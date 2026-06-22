import { footerLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="section-shell pt-0" aria-label="Rodapé">
      <div className="terminal-window">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">end session</p>
            <p className="mt-4 text-lg font-semibold text-[#f4fff7]">
              Portfólio orientado a backend, arquitetura e clareza técnica.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
              Construído para apresentar contexto real, stack principal,
              curadoria de projetos e direção profissional de forma objetiva.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-3"
            aria-label="Links do rodapé"
          >
            {footerLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="btn-secondary"
                aria-label={
                  href.startsWith("http")
                    ? `${label} (abre em nova guia)`
                    : label
                }
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
