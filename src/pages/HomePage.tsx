import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FiCheckCircle, FiClock, FiGithub, FiLinkedin } from "react-icons/fi";
import type { IconType } from "react-icons";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowRight,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineSignal,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  contactLinks,
  githubInsights,
  heroSignals,
  highlights,
  learningPath,
  projects,
  quickProfile,
  skillCategories,
  terminalLines,
  timeline,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import {
  buildContactMailtoLink,
  isContactFormConfigured,
  submitContactForm,
} from "../services/contact";
import { usePageMeta } from "../utils/meta";

type ContactStatus = "idle" | "sending" | "sent" | "error";
type ContactField = "name" | "email" | "company" | "subject" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

const subjectOptions = [
  "Oportunidade de estágio",
  "Convite para entrevista",
  "Contato profissional",
  "Projeto freelance",
  "Outro assunto",
];

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  usePageMeta({
    title: "João Victor Alves de Abreu | Backend Engineering Portfolio",
    description:
      "Portfólio profissional com foco em backend, Java, Spring Boot, .NET, Python, APIs REST e projetos orientados a produto.",
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
        className="section-shell pb-10 pt-8 sm:pt-10"
      >
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <motion.article {...reveal()} className="terminal-window">
            <div className="flex flex-wrap items-center gap-3">
              <span className="system-pill">software portfolio</span>
              <span className="system-pill">matrix terminal</span>
              <span className="system-pill">backend focused</span>
            </div>

            <p className="eyebrow mt-6">system ready // professional profile</p>

            <h1
              id="hero-title"
              className="mt-5 max-w-4xl text-4xl font-semibold uppercase tracking-[0.04em] text-[#f4fff7] sm:text-5xl xl:text-[4rem]"
            >
              João Victor // Backend Engineering
            </h1>

            <p className="mt-4 text-lg text-[#d7ffe0] sm:text-xl">
              Computer Science Student | Backend Developer
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#a8dcb6] sm:text-lg">
              Estou construindo uma base sólida em Java, C#, .NET, APIs, banco
              de dados e desenvolvimento de software, com foco em backend,
              arquitetura e projetos que façam sentido para recrutadores.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <SignalChip
                icon={HiOutlineMapPin}
                label={heroSignals[0] ?? "São Paulo/SP - Brasil"}
              />
              <SignalChip
                icon={HiOutlineSignal}
                label={heroSignals[1] ?? "Status: ONLINE"}
              />
              <SignalChip
                icon={HiOutlineBriefcase}
                label={
                  heroSignals[2] ??
                  "Objetivo: Estágio em Engenharia de Software / Backend"
                }
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickProfile.map((item, index) => (
                <motion.div
                  key={item.label}
                  {...reveal(0.03 * index)}
                  className="mini-panel"
                >
                  <p className="terminal-kicker">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-[#d7ffe0]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-primary">
                <HiOutlineArrowRight />
                Ver projetos
              </a>
              <ExternalLink
                href="https://github.com/JoaoVictorAAbreu-Dev"
                className="btn-secondary"
                aria-label="Abrir GitHub de João Victor em nova guia"
                hideIcon
                showNewTabText
              >
                <FiGithub />
                GitHub
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
                className="btn-secondary"
                aria-label="Abrir LinkedIn de João Victor em nova guia"
                hideIcon
                showNewTabText
              >
                <FiLinkedin />
                LinkedIn
              </ExternalLink>
              <a href={resumeUrl} download className="btn-secondary">
                <HiOutlineArrowDownTray />
                Baixar currículo
              </a>
            </div>
          </motion.article>

          <div className="grid gap-6">
            <motion.div {...reveal(0.05)}>
              <ProfilePhoto />
            </motion.div>

            <motion.article {...reveal(0.08)} className="terminal-window">
              <p className="eyebrow">career snapshot</p>
              <div className="mt-6 space-y-4">
                {terminalLines.map((line) => (
                  <div
                    key={line.label}
                    className="flex flex-col gap-1 border-b border-[rgba(0,255,65,0.1)] pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <span className="text-sm text-[#73d08d]">{line.label}</span>
                    <span className="text-sm text-[#d7ffe0] sm:text-right">
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28 pt-4"
      >
        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <SectionHeading
              id="sobre-heading"
              eyebrow="Sobre"
              title="Interface enxuta, narrativa direta e foco em empregabilidade para backend."
              description="A proposta desta página é apresentar contexto, stack, projetos e sinais técnicos com organização de painel operacional."
            />
            <motion.article {...reveal()} className="terminal-window">
              <p className="terminal-kicker">about terminal</p>
              <div className="mt-5 space-y-3">
                {terminalLines.map((line) => (
                  <p
                    key={line.label}
                    className="text-sm leading-7 text-[#c6f3d0]"
                  >
                    <span className="text-[#73d08d]">{line.label}</span>
                    <span className="mx-2 text-[#4ea864]">::</span>
                    <span>{line.value}</span>
                  </p>
                ))}
              </div>
            </motion.article>
          </div>

          <div className="grid gap-6">
            <motion.article {...reveal(0.05)} className="terminal-window">
              <p className="terminal-kicker">profile summary</p>
              <div className="mt-5 space-y-4">
                {aboutPoints.map((point) => (
                  <p key={point} className="text-base leading-8 text-[#a8dcb6]">
                    {point}
                  </p>
                ))}
              </div>
            </motion.article>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  {...reveal(0.05 * index)}
                  className="terminal-window h-full"
                >
                  <div className="icon-badge">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#f4fff7]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Stack"
          title="Stack distribuída por blocos de competência, com prioridade nas tecnologias que sustentam meu objetivo em backend."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.category}
              {...reveal(0.04 * index)}
              className="terminal-window h-full"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-[#f4fff7]">
                  {category.category}
                </h3>
                <span className="system-pill">active</span>
              </div>

              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="mini-panel">
                    <div className="flex items-start gap-3">
                      <div className="icon-badge h-10 w-10 rounded-xl">
                        <item.icon size={16} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-semibold text-[#f4fff7]">
                            {item.name}
                          </h4>
                          <span className="tag">{item.level}</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
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
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Featured Projects"
          title="Curadoria baseada nos repositórios públicos mais fortes para demonstrar backend, produto, dados e profundidade técnica."
          description="Cada card resume contexto, stack, estrutura e o principal sinal técnico que ele transmite em uma avaliação de estágio."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reveal={reveal}
              delay={0.03 * index}
            />
          ))}
        </div>
      </section>

      <section
        id="github"
        aria-labelledby="github-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="github-heading"
          eyebrow="GitHub Dashboard"
          title="Leitura rápida do posicionamento público do portfólio."
          description="Os indicadores abaixo resumem o que o GitHub já sinaliza sobre foco técnico, consistência e direção de carreira."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {githubInsights.map((insight, index) => (
              <motion.article
                key={insight.label}
                {...reveal(0.04 * index)}
                className="terminal-window h-full"
              >
                <p className="terminal-kicker">{insight.label}</p>
                <p className="mt-4 text-2xl font-semibold text-[#f4fff7]">
                  {insight.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                  {insight.detail}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-6">
            <motion.article {...reveal(0.12)} className="terminal-window">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow">public profile telemetry</p>
                <ExternalLink
                  href="https://github.com/JoaoVictorAAbreu-Dev"
                  className="btn-secondary"
                  aria-label="Abrir perfil de João Victor no GitHub em nova guia"
                  hideIcon
                  showNewTabText
                >
                  <FiGithub />
                  Ver perfil
                </ExternalLink>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="mini-panel">
                  <p className="terminal-kicker">curated repositories</p>
                  <div className="mt-4 space-y-3">
                    {projects.slice(0, 4).map((project) => (
                      <ExternalLink
                        key={project.slug}
                        href={project.githubUrl}
                        className="flex items-start justify-between gap-3 rounded-[0.9rem] border border-[rgba(0,255,65,0.1)] bg-[rgba(0,255,65,0.03)] px-3 py-3 text-left transition hover:border-[rgba(0,255,65,0.24)]"
                        aria-label={`Abrir repositório ${project.title} no GitHub em nova guia`}
                        hideIcon
                        showNewTabText
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#f4fff7]">
                            {project.title}
                          </p>
                          <p className="mt-1 text-xs leading-6 text-[#9fd2ab]">
                            {project.shortTitle}
                          </p>
                        </div>
                        <span className="tag shrink-0">{project.status}</span>
                      </ExternalLink>
                    ))}
                  </div>
                </div>

                <div className="mini-panel">
                  <p className="terminal-kicker">readout</p>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-[#a8dcb6] marker:text-[#00ff41]">
                    <li>
                      Portfólio público com recorte forte em backend e produto.
                    </li>
                    <li>
                      Mistura de Java, Spring Boot, Python, dados e interfaces.
                    </li>
                    <li>
                      Projetos com regra de negócio, setup local e documentação.
                    </li>
                    <li>
                      Curadoria prioriza repositórios mais úteis para
                      recrutadores.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>

            <motion.article {...reveal(0.16)} className="terminal-window">
              <p className="terminal-kicker">featured project map</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {projects.slice(4).map((project) => (
                  <div key={project.slug} className="mini-panel">
                    <p className="text-sm font-semibold text-[#f4fff7]">
                      {project.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#a8dcb6]">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section
        id="jornada"
        aria-labelledby="jornada-heading"
        className="section-shell scroll-mt-28"
      >
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionHeading
              id="jornada-heading"
              eyebrow="Career Roadmap"
              title="Linha de evolução pensada para estágio, crescimento técnico e entrada consistente em software engineering."
            />

            <ol className="mt-10 space-y-4">
              {timeline.map((item, index) => (
                <motion.li
                  key={`${item.period}-${item.title}`}
                  {...reveal(0.04 * index)}
                  className="list-none"
                >
                  <article className="roadmap-item">
                    <span className="roadmap-marker" aria-hidden="true" />
                    <p className="terminal-kicker">{item.period}</p>
                    <h3 className="mt-3 text-xl font-semibold text-[#f4fff7]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                      {item.description}
                    </p>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading
              eyebrow="Learning Path"
              title="Certificações e frentes de estudo que apoiam a próxima fase profissional."
            />

            <div className="mt-10 grid gap-4">
              {learningPath.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...reveal(0.04 * index)}
                  className="terminal-window"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#f4fff7]">
                      {item.title}
                    </h3>
                    <span className="tag">{item.status}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#a8dcb6]">
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
          eyebrow="Contact"
          title="Contato direto para estágio, entrevista, networking profissional ou conversa sobre projetos."
          description="Se o endpoint de formulário estiver configurado, o envio acontece pelo site. Caso contrário, o envio abre o cliente de email com a mensagem pronta."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {contactLinks.map(
              ({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="terminal-window flex items-center gap-4"
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
                    <p className="terminal-kicker">{label}</p>
                    <p className="mt-2 text-sm text-[#d7ffe0]">{value}</p>
                  </div>
                </a>
              ),
            )}

            <article className="terminal-window">
              <p className="terminal-kicker">communication notes</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="mini-panel">
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d7ffe0]">
                    <HiOutlineEnvelope aria-hidden="true" />
                    Canal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                    Formulário, email direto e LinkedIn.
                  </p>
                </div>
                <div className="mini-panel">
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d7ffe0]">
                    <FiClock aria-hidden="true" />
                    Retorno
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                    Preferencialmente em até 48 horas.
                  </p>
                </div>
                <div className="mini-panel">
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d7ffe0]">
                    <HiOutlineBriefcase aria-hidden="true" />
                    Melhor uso
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
                    Oportunidades de estágio e contato profissional.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

function SignalChip({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <span className="data-chip">
      <Icon aria-hidden="true" />
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  reveal,
  delay,
}: {
  project: (typeof projects)[number];
  reveal: (delay?: number) => Record<string, unknown>;
  delay: number;
}) {
  return (
    <motion.article {...reveal(delay)} className="terminal-window h-full">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="terminal-kicker">{project.imageLabel}</p>
        <span className="system-pill">{project.status}</span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-[#f4fff7]">
        {project.title}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#73d08d]">
        {project.shortTitle}
      </p>
      <p className="mt-5 text-sm leading-8 text-[#a8dcb6]">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <div className="mini-panel">
          <p className="terminal-kicker">problem</p>
          <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
            {project.problemSolved}
          </p>
        </div>
        <div className="mini-panel">
          <p className="terminal-kicker">architecture</p>
          <p className="mt-3 text-sm leading-7 text-[#a8dcb6]">
            {project.architectureUsed}
          </p>
        </div>
      </div>

      <div className="mt-6 mini-panel">
        <p className="terminal-kicker">technical signal</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#a8dcb6] marker:text-[#00ff41]">
          {project.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ExternalLink
          href={project.githubUrl}
          className="btn-secondary"
          aria-label={`Abrir repositório ${project.title} no GitHub em nova guia`}
          hideIcon
          showNewTabText
        >
          <FiGithub />
          GitHub
        </ExternalLink>

        <Link to={`/projetos/${project.slug}`} className="btn-primary">
          <HiOutlineArrowRight />
          Case study
        </Link>
      </div>
    </motion.article>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState(subjectOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const configured = isContactFormConfigured();
  const remainingCharacters = 500 - message.length;

  const resetStatus = () => {
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const nextErrors: ContactErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = "Informe um nome com pelo menos 2 caracteres.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Informe um email válido para retorno.";
    }

    if (company.trim().length > 80) {
      nextErrors.company =
        "O nome da empresa deve ter no máximo 80 caracteres.";
    }

    if (!subject.trim()) {
      nextErrors.subject = "Selecione um assunto principal.";
    }

    if (message.trim().length < 24) {
      nextErrors.message =
        "Descreva a oportunidade ou o contexto com pelo menos 24 caracteres.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    const payload = {
      company: company.trim(),
      email: email.trim(),
      message: message.trim(),
      name: name.trim(),
      subject: subject.trim(),
    };

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    if (!configured) {
      window.location.href = buildContactMailtoLink(payload);
      setStatus("sent");
      return;
    }

    try {
      setStatus("sending");
      await submitContactForm(payload);
      setStatus("sent");
      setName("");
      setEmail("");
      setCompany("");
      setSubject(subjectOptions[0]);
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <article className="terminal-window">
      <div className="flex items-start gap-3">
        <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
          <HiOutlineEnvelope size={18} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#f4fff7]">
            Formulário de contato
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#a8dcb6]">
            Preencha os campos para abrir um contato profissional claro, com
            contexto suficiente para uma resposta mais rápida.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-8">
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
              value={name}
              onChange={(event) => {
                resetStatus();
                setName(event.target.value);
              }}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name ? (
              <small id="contact-name-error" className="field-error">
                {errors.name}
              </small>
            ) : null}
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
              value={email}
              onChange={(event) => {
                resetStatus();
                setEmail(event.target.value);
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
            />
            {errors.email ? (
              <small id="contact-email-error" className="field-error">
                {errors.email}
              </small>
            ) : null}
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
          <label htmlFor="contact-company" className="field-shell">
            <span>Empresa ou equipe</span>
            <input
              id="contact-company"
              name="company"
              autoComplete="organization"
              maxLength={80}
              placeholder="Opcional"
              value={company}
              onChange={(event) => {
                resetStatus();
                setCompany(event.target.value);
              }}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={
                errors.company
                  ? "contact-company-error"
                  : "contact-company-help"
              }
            />
            {errors.company ? (
              <small id="contact-company-error" className="field-error">
                {errors.company}
              </small>
            ) : (
              <small id="contact-company-help" className="field-help">
                Opcional, mas útil para contextualizar o contato.
              </small>
            )}
          </label>

          <label htmlFor="contact-subject" className="field-shell">
            <span>Assunto</span>
            <select
              id="contact-subject"
              name="subject"
              value={subject}
              onChange={(event) => {
                resetStatus();
                setSubject(event.target.value);
              }}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "contact-subject-error" : undefined
              }
            >
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.subject ? (
              <small id="contact-subject-error" className="field-error">
                {errors.subject}
              </small>
            ) : null}
          </label>
        </div>

        <label htmlFor="contact-message" className="field-shell mt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="mb-0 block text-sm font-medium text-[#c7f8d6]">
              Mensagem
            </span>
            <span
              className={`text-xs ${
                remainingCharacters < 80 ? "text-[#ffe08b]" : "text-[#8ec7a0]"
              }`}
            >
              {message.length}/500
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={7}
            required
            minLength={24}
            maxLength={500}
            placeholder="Descreva a vaga, a oportunidade, o objetivo do contato ou o contexto da conversa."
            value={message}
            onChange={(event) => {
              resetStatus();
              setMessage(event.target.value);
            }}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-help"
            }
          />
          {errors.message ? (
            <small id="contact-message-error" className="field-error">
              {errors.message}
            </small>
          ) : (
            <small id="contact-message-help" className="field-help">
              Quanto mais contexto, melhor a qualidade da resposta.
            </small>
          )}
        </label>

        <div className="mt-6 min-h-6" aria-live="polite">
          {status === "sent" ? (
            <p
              role="status"
              className="inline-flex items-center gap-2 text-sm text-[#8dffb7]"
            >
              <FiCheckCircle aria-hidden="true" />
              {configured
                ? "Mensagem enviada com sucesso."
                : "Rascunho aberto no seu cliente de email."}
            </p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="text-sm text-[#ff9a9a]">
              Revise os campos obrigatórios para continuar. Se preferir, use
              email ou LinkedIn.
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="submit"
            className="btn-primary w-full justify-center sm:w-auto"
            disabled={status === "sending"}
          >
            <HiOutlineArrowRight />
            {status === "sending"
              ? "Enviando..."
              : configured
                ? "Enviar mensagem"
                : "Abrir email pronto"}
          </button>

          <a
            href="mailto:joaovictoralvesabreu1@gmail.com"
            className="btn-secondary w-full justify-center sm:w-auto"
          >
            <HiOutlineEnvelope />
            Email direto
          </a>

          <ExternalLink
            href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
            className="btn-secondary w-full justify-center sm:w-auto"
            aria-label="Abrir LinkedIn de João Victor em nova guia"
            hideIcon
            showNewTabText
          >
            <FiLinkedin />
            LinkedIn
          </ExternalLink>
        </div>
      </form>
    </article>
  );
}
