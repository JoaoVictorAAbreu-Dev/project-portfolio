import { footerLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer
      className="border-t border-[rgba(76,255,139,0.12)]"
      aria-label="Rodape"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-[#98d8ad] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="font-medium text-[#effff4]">
            Portfolio orientado a processo, arquitetura e clareza tecnica.
          </p>
          <p className="mt-1">
            Layout redesenhado para destacar projetos primeiro, estudos de caso
            depois e contato direto por ultimo.
          </p>
        </div>

        <nav
          className="flex flex-wrap items-center gap-4"
          aria-label="Links do rodape"
        >
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 transition hover:text-[#effff4]"
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
