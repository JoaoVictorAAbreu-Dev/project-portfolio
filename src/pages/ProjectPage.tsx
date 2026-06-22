import { FiArrowLeft, FiGithub } from "react-icons/fi";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  usePageMeta({
    title: project ? `${project.title} | Case study` : "Projeto nao encontrado",
    description: project
      ? `${project.title}: contexto, problema, solucao, arquitetura, desafios e proximos passos.`
      : "Projeto nao encontrado no portfolio.",
    path: project ? `/projetos/${project.slug}` : "/404",
  });

  if (!project) {
    return (
      <MainLayout>
        <div className="section-shell py-16">
          <div className="card-surface text-center">
            <p className="eyebrow">Projeto indisponivel</p>
            <h1 className="mt-4 text-4xl font-semibold text-[var(--text-strong)]">
              O estudo de caso solicitado nao existe.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
              Volte para a home para continuar navegando pelos projetos e pela
              stack principal.
            </p>
            <Link to="/" className="btn-primary mt-8 inline-flex">
              <FiArrowLeft />
              Voltar para o portfolio
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="section-shell py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition hover:text-[var(--text-strong)]"
        >
          <FiArrowLeft />
          Voltar para o portfolio
        </Link>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.84fr_1.16fr]">
          <aside className="space-y-6 xl:sticky xl:top-32 xl:self-start">
            <ProjectVisual label={project.imageLabel} />

            <div className="card-surface">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow">{project.status}</p>
                <span className="soft-pill">Case study</span>
              </div>

              <h1 className="mt-5 text-3xl font-semibold text-[var(--text-strong)]">
                {project.title}
              </h1>
              <p className="mt-4 text-sm leading-8 text-[var(--text-muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ExternalLink
                  href={project.githubUrl}
                  className="btn-secondary"
                  aria-label={`Abrir repositorio ${project.title} no GitHub em nova guia`}
                  showNewTabText
                >
                  <FiGithub />
                  GitHub
                </ExternalLink>
                {project.demoUrl ? (
                  <ExternalLink
                    href={project.demoUrl}
                    className="btn-primary"
                    aria-label={`Abrir demonstracao do projeto ${project.title} em nova guia`}
                    hideIcon
                    showNewTabText
                  >
                    <HiOutlineArrowTopRightOnSquare />
                    Demo
                  </ExternalLink>
                ) : null}
              </div>
            </div>

            <div className="card-surface">
              <p className="eyebrow">Sinais tecnicos</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-muted)] marker:text-[var(--accent)]">
                {project.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-6">
            <SectionHeading
              eyebrow="Case study"
              title={`Como o ${project.title} foi estruturado do problema a solucao.`}
              description="Os blocos abaixo resumem contexto, decisao tecnica, arquitetura, desafios e proximos passos de forma direta."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <CaseCard
                title="Contexto"
                content={[project.caseStudy.context]}
              />
              <CaseCard
                title="Problema"
                content={[project.caseStudy.problem]}
              />
              <CaseCard
                title="Solucao"
                content={[project.caseStudy.solution]}
              />
              <CaseCard
                title="Arquitetura"
                content={project.caseStudy.architecture}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <CaseCard
                title="Tecnologias"
                content={project.caseStudy.technologies}
              />
              <CaseCard
                title="Desafios"
                content={project.caseStudy.challenges}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <CaseCard
                title="Resultados"
                content={project.caseStudy.results}
              />
              <CaseCard
                title="Melhorias futuras"
                content={project.caseStudy.futureImprovements}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function CaseCard({ title, content }: { title: string; content: string[] }) {
  return (
    <article className="card-surface h-full">
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-8 text-[var(--text-muted)] marker:text-[var(--accent)]">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
