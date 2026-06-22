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
      <div className="section-shell py-16">
        <div className="card-surface text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-5xl font-semibold text-[var(--text-strong)]">
            Pagina nao encontrada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            O link solicitado nao esta disponivel. Volte para a pagina principal
            e continue a navegacao pelo portfolio.
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
