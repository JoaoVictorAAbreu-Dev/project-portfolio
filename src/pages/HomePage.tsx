import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent } from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin, FiServer, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  certifications,
  contactLinks,
  featuredRepositories,
  githubInsights,
  heroMetrics,
  highlights,
  projects,
  quickProfile,
  skillCategories,
  timeline,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { buildMailtoLink } from "../services/contact";
import { usePageMeta } from "../utils/meta";

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const focusAreas = ["APIs REST", "Arquitetura backend", "Boas praticas de codigo"];
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  usePageMeta({
    title: "Joao Victor Alves de Abreu | Software Engineering Student",
    description:
      "Portfolio profissional com foco em backend Java, C#, .NET, APIs REST, banco de dados e arquitetura de software.",
  });

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay },
        };

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto grid max-w-7xl gap-14 overflow-hidden px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20"
      >
        <div className="hero-orb right-[4%] top-[6%] h-40 w-40 bg-brand-500/20" />
        <div className="hero-orb left-[8%] top-[32%] h-24 w-24 bg-cyan-300/25" />
        <div className="hero-orb right-[16%] top-[52%] h-32 w-32 bg-cyan-300/15" />
        <div className="flex flex-col justify-center">
          <motion.p {...reveal()} className="eyebrow">
            Software portfolio orientado a contratacao
          </motion.p>
          <motion.div {...reveal(0.02)} className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/80 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
              <FiZap aria-hidden="true" className="text-brand-600 dark:text-cyan-300" />
              Foco em backend e arquitetura
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/80 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
              <FiMapPin aria-hidden="true" className="text-brand-600 dark:text-cyan-300" />
              Sao Paulo, Brasil
            </span>
          </motion.div>
          <motion.h1
            {...reveal(0.05)}
            id="hero-title"
            className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl"
          >
            Construindo base solida para atuar com{" "}
            <span className="headline-gradient">engenharia de software backend</span>.
          </motion.h1>
          <motion.p {...reveal(0.08)} className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
            Joao Victor Alves de Abreu
          </motion.p>
          <motion.p {...reveal(0.1)} className="mt-6 text-xl text-slate-700 dark:text-slate-200 sm:text-2xl">
            Software Engineering Student | Backend Developer
          </motion.p>
          <motion.p {...reveal(0.15)} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Desenvolvendo solucoes com foco em Java, C#, .NET, APIs REST e arquitetura de software, com atencao especial a organizacao, clareza tecnica e evolucao consistente para ambientes profissionais.
          </motion.p>
          <motion.div {...reveal(0.18)} className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_24px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
              >
                <FiServer aria-hidden="true" className="text-brand-600 dark:text-cyan-300" />
                {area}
              </span>
            ))}
          </motion.div>

          <motion.div {...reveal(0.2)} className="mt-10 flex flex-wrap gap-4">
            <ExternalLink
              href="https://github.com/JoaoVictorAAbreu-Dev"
              className="btn-primary"
              aria-label="Abrir perfil do GitHub de Joao Victor Alves de Abreu em nova guia"
              showNewTabText
            >
              <FiGithub />
              GitHub
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
              className="btn-secondary"
              aria-label="Abrir perfil do LinkedIn de Joao Victor Alves de Abreu em nova guia"
              showNewTabText
            >
              <FiLinkedin />
              LinkedIn
            </ExternalLink>
            <a href={resumeUrl} download className="btn-secondary">
              <FiDownload />
              Baixar curriculo
            </a>
            <a href="#projetos" className="btn-secondary">
              <FiArrowRight />
              Ver projetos
            </a>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((item, index) => (
              <motion.article
                key={item.label}
                {...reveal(0.08 * index)}
                className="mini-stat"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.note}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <ProfilePhoto />
          <div className="hero-panel">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">Snapshot profissional</p>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                Disponivel para estagio
              </span>
            </div>
            <div className="mt-5 grid gap-4">
              {quickProfile.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-slate-200/80 pb-4 last:border-0 last:pb-0 dark:border-white/10">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="section-divider mt-6" />
            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Perfil direcionado para times que valorizam organizacao, aprendizado rapido e evolucao consistente em backend moderno.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" aria-labelledby="sobre-heading" className="section-shell">
        <SectionHeading
          id="sobre-heading"
          eyebrow="Sobre mim"
          title="Portfolio pensado para mostrar maturidade tecnica, capacidade analitica e potencial real de crescimento."
          description="A proposta aqui nao e apenas apresentar projetos, mas comunicar criterio de engenharia, clareza de raciocinio e direcao profissional para times backend."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card space-y-5">
            {aboutPoints.map((point) => (
              <p key={point} className="text-base leading-8 text-slate-600 dark:text-slate-300">
                {point}
              </p>
            ))}
            <div className="section-divider pt-2" />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Objetivo atual: conquistar estagio em engenharia de software com foco backend.
            </p>
          </div>
          <div className="grid gap-5">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="glass-card">
                <div className="icon-badge">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" aria-labelledby="stack-heading" className="section-shell">
        <SectionHeading
          id="stack-heading"
          eyebrow="Stack tecnologica"
          title="Competencias organizadas por area, com foco em backend e crescimento profissional consistente."
        />
        <div className="mt-8 hero-panel">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-cyan-300">
                Direcao principal
              </p>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Minha prioridade esta em aprofundar Java, C#, .NET, Spring Boot, SQL e desenho de APIs para atuar em times que precisem de codigo organizado, evolutivo e confiavel.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-cyan-300">
              <FiZap aria-hidden="true" />
              Backend-first mindset
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category) => (
            <article key={category.category} className="glass-card">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{category.category}</h3>
              <div className="mt-6 grid gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="surface-card">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-950 dark:text-white">{item.name}</h4>
                          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" aria-labelledby="projetos-heading" className="section-shell">
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Projetos apresentados como experiencia de engenharia, nao apenas como lista de repositorios."
          description="Cada item possui narrativa de problema, arquitetura e aprendizado. Os estudos de caso detalhados ficam em paginas individuais."
        />
        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              aria-labelledby={`${project.slug}-title`}
              className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(148,163,184,0.15)] dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[0.72fr_1.28fr]"
            >
              <ProjectVisual label={project.imageLabel} />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{project.status}</span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                    {project.shortTitle}
                  </span>
                </div>
                <h3 id={`${project.slug}-title`} className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Problema resolvido</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.problemSolved}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Arquitetura utilizada</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.architectureUsed}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Desafios enfrentados</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 marker:text-brand-500 dark:text-slate-300 dark:marker:text-cyan-300">
                      {project.challenges.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Aprendizados</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 marker:text-brand-500 dark:text-slate-300 dark:marker:text-cyan-300">
                      {project.learnings.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
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
                      className="btn-secondary"
                      aria-label={`Abrir demonstracao do projeto ${project.title} em nova guia`}
                      showNewTabText
                    >
                      <FiArrowRight />
                      Demo
                    </ExternalLink>
                  ) : null}
                  <Link to={`/projetos/${project.slug}`} className="btn-primary">
                    Ver estudo de caso
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="github" aria-labelledby="github-heading" className="section-shell">
        <SectionHeading
          id="github-heading"
          eyebrow="GitHub dashboard"
          title="Leitura rapida do meu perfil tecnico e do tipo de repositorio que venho construindo."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {githubInsights.map((item) => (
              <article key={item.label} className="glass-card">
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="glass-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
              Repositorios destacados
            </p>
            <div className="mt-6 space-y-4">
              {featuredRepositories.map((repo) => (
                <ExternalLink
                  key={repo.name}
                  href={repo.url}
                  aria-label={`Abrir repositorio ${repo.name} no GitHub em nova guia`}
                  className="block rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-5 transition hover:border-brand-500/30 dark:border-white/10 dark:bg-white/[0.03]"
                  hideIcon
                  showNewTabText
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{repo.name}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{repo.note}</p>
                    </div>
                    <FiArrowRight aria-hidden="true" className="shrink-0 text-brand-600 dark:text-cyan-300" />
                  </div>
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" aria-labelledby="jornada-heading" className="section-shell">
        <SectionHeading
          id="jornada-heading"
          eyebrow="Jornada e experiencia"
          title="Linha do tempo com marcos de aprendizado, desafios academicos e direcao tecnica."
        />
        <ol className="mt-12 space-y-5">
          {timeline.map((item) => (
            <li key={item.title} className="list-none">
              <article className="glass-card relative overflow-hidden pl-8">
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-600 to-cyan-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section id="certificacoes" aria-labelledby="certificacoes-heading" className="section-shell">
        <SectionHeading
          id="certificacoes-heading"
          eyebrow="Certificacoes e cursos"
          title="Estrutura preparada para ampliar evidencias formais de aprendizado."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {certifications.map((group) => (
            <article key={group.provider} className="glass-card">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.provider}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 marker:text-brand-500 dark:text-slate-300 dark:marker:text-cyan-300">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" aria-labelledby="contato-heading" className="section-shell">
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Canal direto para recrutadores, networking tecnico e oportunidades de estagio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <address className="grid gap-4 not-italic">
            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="glass-card flex items-center gap-4"
                aria-label={external ? `${label}: ${value}. Abre em nova guia` : `${label}: ${value}`}
              >
                <div className="icon-badge">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-1 font-medium text-slate-950 dark:text-white">{value}</p>
                </div>
              </a>
            ))}
            <a href={resumeUrl} download className="btn-primary w-fit">
              <FiDownload />
              Baixar curriculo
            </a>
          </address>

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    window.location.href = buildMailtoLink({ email, message, name, subject });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card" aria-describedby="contact-form-help">
      <p id="contact-form-help" className="text-sm leading-7 text-slate-600 dark:text-slate-300">
        Este formulario abre seu cliente de email padrao com os dados preenchidos. Nenhuma informacao e armazenada no site.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="contact-name" className="field-shell">
          <span>Nome</span>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            minLength={2}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="contact-email" className="field-shell">
          <span>Email</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seuemail@dominio.com"
          />
        </label>
      </div>
      <label htmlFor="contact-subject" className="field-shell mt-5">
        <span>Assunto</span>
        <input
          id="contact-subject"
          name="subject"
          required
          minLength={4}
          placeholder="Assunto da mensagem"
        />
      </label>
      <label htmlFor="contact-message" className="field-shell mt-5">
        <span>Mensagem</span>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          required
          minLength={12}
          autoComplete="off"
          placeholder="Descreva sua oportunidade ou contexto."
        />
      </label>
      <button type="submit" className="btn-primary mt-8">
        <FiArrowRight />
        Enviar por email
      </button>
    </form>
  );
}
