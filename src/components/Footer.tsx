import { footerLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10" aria-label="Rodape">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 dark:text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-medium text-slate-900 dark:text-white">
            João Victor Alves de Abreu
          </p>
          <p className="mt-1">
            Portfólio com foco em backend, APIs, dados e projetos públicos de engenharia.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4" aria-label="Links do rodape">
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white"
              aria-label={href.startsWith("http") ? `${label} (abre em nova guia)` : label}
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
