import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
  HiOutlineFolder,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  archivedProjects,
  contactLinks,
  heroSignals,
  heroStats,
  highlights,
  learningPath,
  projects,
  quickProfile,
  skillCategories,
  timeline,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { usePageMeta } from "../utils/meta";

const featuredProjects = projects.slice(0, 3);

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  usePageMeta({
    title: "Joao Victor Alves de Abreu | Backend Engineering Portfolio",
    description:
      "Portfolio profissional com foco em backend, Java, Spring Boot, C#, .NET, Python, APIs REST e projetos orientados a produto.",
  });

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.42, delay },
        };

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="section-shell pb-10 pt-10"
      >
        <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <motion.div {...reveal()} className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="soft-pill">Backend engineering</span>
                <span className="soft-pill">Portfolio profissional</span>
                <span className="soft-pill">Disponivel para estagio</span>
              </div>

              <div className="space-y-5">
                <p className="eyebrow">Ola, eu sou Joao</p>
                <h1
                  id="hero-title"
                  className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--text-strong)] sm:text-5xl xl:text-6xl"
                >
                  Desenvolvedor backend em formacao, focado em APIs, arquitetura
                  e projetos com contexto real.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                  Estudante de Ciencia da Computacao na FIAP, construindo uma
                  base solida em Java, Spring Boot, C#, .NET, Python, banco de
                  dados e desenvolvimento de software orientado a produto.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <SignalChip
                  icon={HiOutlineMapPin}
                  label={heroSignals[0] ?? ""}
                />
                <SignalChip
                  icon={HiOutlineBriefcase}
                  label={heroSignals[1] ?? ""}
                />
                <SignalChip
                  icon={HiOutlineArrowRight}
                  label={heroSignals[2] ?? ""}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#projetos" className="btn-primary">
                  <HiOutlineArrowRight />
                  Ver projetos
                </a>
                <a href={resumeUrl} download className="btn-secondary">
                  <HiOutlineArrowDownTray />
                  Baixar curriculo
                </a>
                <a href="#contato" className="btn-secondary">
                  <HiOutlineEnvelope />
                  Contato
                </a>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.article
                  key={item.label}
                  {...reveal(0.05 * (index + 1))}
                  className="card-surface h-full"
                >
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-4 text-2xl font-semibold text-[var(--text-strong)]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div {...reveal(0.08)} className="grid gap-4 self-start">
            <ProfilePhoto />
            <article className="card-surface">
              <p className="eyebrow">Canais principais</p>
              <div className="mt-5 grid gap-3">
                {quickProfile.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 rounded-[1rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] px-4 py-3"
                  >
                    <span className="text-sm text-[var(--text-muted)]">
                      {item.label}
                    </span>
                    <span className="text-right text-sm font-medium text-[var(--text-strong)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Tres cases principais que sustentam a narrativa de backend, produto e arquitetura."
          description="A home concentra apenas os estudos de caso mais fortes para reduzir ruido e facilitar avaliacao rapida por recrutadores."
        />

        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              delay={0.05 * index}
              reveal={reveal}
            />
          ))}
        </div>

        <motion.article {...reveal(0.12)} className="card-surface mt-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">Arquivo tecnico</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-strong)]">
                Outros projetos continuam publicos, mas sairam da narrativa
                principal.
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Mantive esses repositorios como evidencia complementar de
                exploracao tecnica, sem competir com os cases principais da
                home.
              </p>
            </div>
            <div className="icon-badge">
              <HiOutlineFolder size={18} aria-hidden="true" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {archivedProjects.map((project) => (
              <ExternalLink
                key={project.title}
                href={project.href}
                className="btn-secondary"
                aria-label={`Abrir repositorio arquivado ${project.title} em nova guia`}
                hideIcon
                showNewTabText
              >
                <FiGithub />
                {project.title}
              </ExternalLink>
            ))}
          </div>
        </motion.article>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Stack"
          title="Habilidades agrupadas por area e explicadas com foco em evidencia pratica, nao apenas em lista de tecnologias."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.category}
              {...reveal(0.04 * index)}
              className="card-surface h-full"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--text-strong)]">
                  {category.category}
                </h3>
                <span className="soft-pill">Principal</span>
              </div>

              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[1rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="icon-badge h-10 w-10 rounded-xl">
                        <item.icon size={16} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-semibold text-[var(--text-strong)]">
                            {item.name}
                          </h4>
                          <span className="tech-chip">{item.level}</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28 pt-4"
      >
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              id="sobre-heading"
              eyebrow="Sobre"
              title="Um portfolio mais claro, objetivo e alinhado ao que um recrutador precisa avaliar rapido."
              description="O foco aqui e mostrar contexto, stack, casos fortes e sinais tecnicos sem excesso visual ou secoes duplicadas."
            />

            <motion.article {...reveal(0.04)} className="card-surface">
              <div className="space-y-4">
                {aboutPoints.map((point) => (
                  <p
                    key={point}
                    className="text-base leading-8 text-[var(--text-muted)]"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </motion.article>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                {...reveal(0.06 * index)}
                className="card-surface h-full"
              >
                <div className="icon-badge">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text-strong)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="jornada"
        aria-labelledby="jornada-heading"
        className="section-shell scroll-mt-28"
      >
        <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
          <div>
            <SectionHeading
              id="jornada-heading"
              eyebrow="Jornada"
              title="Evolucao academica e tecnica apresentada de forma curta, organizada e util."
            />

            <div className="mt-10 grid gap-4">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.period}-${item.title}`}
                  {...reveal(0.05 * index)}
                  className="card-surface"
                >
                  <p className="eyebrow">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--text-strong)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Certificacoes e estudo"
              title="Frentes que reforcam a proxima etapa profissional e sustentam a base tecnica."
            />

            <div className="mt-10 grid gap-4">
              {learningPath.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...reveal(0.05 * index)}
                  className="card-surface"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[var(--text-strong)]">
                      {item.title}
                    </h3>
                    <span className="tech-chip">{item.status}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Contato direto para estagio, entrevista, networking ou conversa sobre projetos."
          description="Removi o formulario dependente de endpoint opcional para deixar a experiencia mais confiavel e objetiva."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactLinks.map(
              ({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="card-surface flex items-center gap-4"
                  aria-label={
                    external
                      ? `${label}: ${value}. Abre em nova guia`
                      : `${label}: ${value}`
                  }
                >
                  <div className="icon-badge">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="eyebrow">{label}</p>
                    <p className="mt-2 text-sm text-[var(--text-strong)]">
                      {value}
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>

          <article className="card-surface">
            <div className="flex items-start gap-3">
              <div className="icon-badge h-11 w-11 shrink-0 rounded-2xl">
                <HiOutlineEnvelope size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="eyebrow">Acoes rapidas</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-strong)]">
                  Vamos conversar
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                  Para oportunidades de estagio, entrevistas ou networking,
                  prefiro canais diretos e confiaveis: email, LinkedIn e GitHub.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:joaovictoralvesabreu1@gmail.com"
                className="btn-primary justify-center"
              >
                <HiOutlineEnvelope />
                Enviar email
              </a>
              <a
                href={resumeUrl}
                download
                className="btn-secondary justify-center"
              >
                <HiOutlineArrowDownTray />
                Baixar curriculo
              </a>
              <ExternalLink
                href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
                className="btn-secondary justify-center"
                aria-label="Abrir LinkedIn de Joao Victor em nova guia"
                hideIcon
                showNewTabText
              >
                <FiLinkedin />
                LinkedIn
              </ExternalLink>
              <ExternalLink
                href="https://github.com/JoaoVictorAAbreu-Dev"
                className="btn-secondary justify-center"
                aria-label="Abrir GitHub de Joao Victor em nova guia"
                hideIcon
                showNewTabText
              >
                <FiGithub />
                GitHub
              </ExternalLink>
            </div>

            <div className="mt-8 rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-5">
              <p className="eyebrow">Mensagem recomendada</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                Se quiser agilizar o contato, envie contexto sobre a vaga,
                stack, modelo de trabalho e etapa do processo. Isso melhora a
                qualidade da resposta e reduz friccao.
              </p>
            </div>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}

function SignalChip({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <span className="signal-chip">
      <Icon aria-hidden="true" />
      {label}
    </span>
  );
}

function FeaturedProjectCard({
  project,
  reveal,
  delay,
}: {
  project: (typeof projects)[number];
  reveal: (delay?: number) => Record<string, unknown>;
  delay: number;
}) {
  return (
    <motion.article {...reveal(delay)} className="project-featured-card">
      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="soft-pill">{project.status}</span>
            <span className="eyebrow">{project.imageLabel}</span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold text-[var(--text-strong)]">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
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
              hideIcon
              showNewTabText
            >
              <FiGithub />
              Repositorio
            </ExternalLink>
            <Link to={`/projetos/${project.slug}`} className="btn-primary">
              <HiOutlineArrowRight />
              Ver estudo de caso
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
            <p className="eyebrow">Problema</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {project.problemSolved}
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
            <p className="eyebrow">Arquitetura</p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              {project.architectureUsed}
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-4">
            <p className="eyebrow">Sinais tecnicos</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-muted)] marker:text-[var(--accent)]">
              {project.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
