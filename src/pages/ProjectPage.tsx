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
    title: project ? `${project.title} | Case Study` : "Projeto não encontrado",
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
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">
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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
          <FiArrowLeft />
          Voltar para o portfólio
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <ProjectVisual label={project.imageLabel} />
          <div className="glass-card">
            <p className="eyebrow">{project.status}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">{project.title}</h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
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
                  showNewTabText
                >
                  <FiArrowUpRight />
                  Demo
                </ExternalLink>
              ) : null}
            </div>
          </div>
        </div>

        <section aria-labelledby="case-study-heading" className="mt-16">
          <SectionHeading
            id="case-study-heading"
            eyebrow="Estudo de caso"
            title="Contexto, problema, solução e direcionamento técnico."
          />
          <div className="mt-10 grid gap-6">
            <CaseCard title="Contexto" content={[project.caseStudy.context]} />
            <CaseCard title="Problema" content={[project.caseStudy.problem]} />
            <CaseCard title="Solução" content={[project.caseStudy.solution]} />
            <CaseCard title="Arquitetura" content={project.caseStudy.architecture} />
            <CaseCard title="Tecnologias" content={project.caseStudy.technologies} />
            <CaseCard title="Desafios" content={project.caseStudy.challenges} />
            <CaseCard title="Resultados" content={project.caseStudy.results} />
            <CaseCard title="Melhorias futuras" content={project.caseStudy.futureImprovements} />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

function CaseCard({ title, content }: { title: string; content: string[] }) {
  return (
    <article className="glass-card">
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-600 marker:text-brand-500 dark:text-slate-300 dark:marker:text-cyan-300">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
