import { useEffect, type ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <div className="min-h-screen bg-[#020503] text-[#e8fff0] transition-colors">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[60] -translate-y-20 rounded-full border border-[rgba(76,255,139,0.28)] bg-[#031108] px-4 py-2 text-sm font-medium text-[#d7ffe4] transition focus:translate-y-0"
      >
        Pular para o conteudo
      </a>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,255,139,0.08),_transparent_28%)]" />
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
