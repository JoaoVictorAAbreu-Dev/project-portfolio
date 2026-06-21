import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
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
    title: project
      ? `${project.title} | Estudo de caso`
      : "Projeto não encontrado",
    description: project
      ? `${project.title}: contexto, problema, solução, arquitetura, desafios e melhorias futuras.`
      : "Projeto não encontrado no portfólio.",
    path: project ? `/projetos/${project.slug}` : "/404",
  });

  if (!project) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
          <div className="glass-card">
            <p className="eyebrow">Projeto não encontrado</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#effff4]">
              O estudo de caso solicitado não existe.
            </h1>
            <Link to="/" className="btn-primary mt-8 inline-flex">
              <FiArrowLeft />
              Voltar para o portfólio
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#9fd7b0] transition hover:text-[#effff4]"
        >
          <FiArrowLeft />
          Voltar para o portfólio
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ProjectVisual label={project.imageLabel} />

            <div className="glass-card">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">{project.status}</p>
                <span className="panel-chip">projeto selecionado</span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold text-[#effff4]">
                {project.title}
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#a8dbb7]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <ExternalLink
                  href={project.githubUrl}
                  className="btn-secondary"
                  aria-label={`Abrir repositório ${project.title} no GitHub em nova guia`}
                  showNewTabText
                >
                  <FiGithub />
                  GitHub
                </ExternalLink>
                {project.demoUrl ? (
                  <ExternalLink
                    href={project.demoUrl}
                    className="btn-primary"
                    aria-label={`Abrir demonstração do projeto ${project.title} em nova guia`}
                    showNewTabText
                  >
                    <FiArrowUpRight />
                    Demo
                  </ExternalLink>
                ) : null}
              </div>
            </div>

            <div className="terminal-card">
              <p className="terminal-kicker">Sinais técnicos</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#a8dbb7] marker:text-[#74ff9f]">
                {project.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-10">
            <SectionHeading
              eyebrow="Estudo de caso"
              title={`Como o ${project.title} foi estruturado do problema à solução.`}
              description="Os blocos abaixo resumem contexto, decisão técnica, arquitetura e próximos passos de forma direta."
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
    <article className="glass-card h-full">
      <p className="terminal-kicker">{title}</p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-[#a8dbb7] marker:text-[#4cff8b]">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
