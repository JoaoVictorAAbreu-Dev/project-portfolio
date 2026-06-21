import { useEffect, type ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MatrixRain } from "../components/MatrixRain";

export function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <div className="min-h-screen bg-[#010301] text-[#ecfff2] transition-colors">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[70] -translate-y-20 rounded-full border border-[rgba(76,255,139,0.26)] bg-[#031108] px-4 py-2 text-sm font-medium text-[#ddffe9] transition focus:translate-y-0"
      >
        Pular para o conteudo
      </a>
      <MatrixRain />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(76,255,139,0.12),_transparent_24%),radial-gradient(circle_at_85%_12%,_rgba(76,255,139,0.08),_transparent_18%),linear-gradient(180deg,rgba(3,13,7,0.86),rgba(1,5,2,0.92))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70" />
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
