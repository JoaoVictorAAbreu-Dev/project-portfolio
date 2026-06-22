import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

export function NotFoundPage() {
  usePageMeta({
    title: "404 | Portfólio",
    description:
      "Página não encontrada no portfólio de João Victor Alves de Abreu.",
    path: "/404",
  });

  return (
    <MainLayout>
      <div className="section-shell py-16">
        <div className="terminal-window text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-5xl font-semibold text-[#f4fff7]">
            Página não encontrada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#a8dcb6]">
            O link solicitado não está disponível. Volte para a página principal
            e continue a navegação pelo portfólio.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <FiArrowLeft />
            Voltar para a home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
