import { useEffect, type ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-base)]">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[70] -translate-y-20 rounded-full border border-[var(--border-strong)] bg-[var(--surface-card)] px-4 py-2 text-sm font-medium text-[var(--text-strong)] transition focus:translate-y-0"
      >
        Pular para o conteudo
      </a>

      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.24),_transparent_26%),radial-gradient(circle_at_80%_10%,_rgba(6,182,212,0.18),_transparent_20%),linear-gradient(180deg,#060816_0%,#0a1025_55%,#050812_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.015))]" />

      <div className="relative">
        <Header />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
