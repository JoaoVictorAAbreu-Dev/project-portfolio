import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

export function NotFoundPage() {
  usePageMeta({
    title: "404 | Portfolio",
    description:
      "Pagina nao encontrada no portfolio de Joao Victor Alves de Abreu.",
    path: "/404",
  });

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <div className="glass-card text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-5xl font-semibold text-[#effff4]">
            Pagina nao encontrada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9fd7b0]">
            O link solicitado nao esta disponivel. Volte para a pagina
            principal e continue a navegacao pelo portfolio.
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
