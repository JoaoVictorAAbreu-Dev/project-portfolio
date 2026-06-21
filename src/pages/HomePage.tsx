import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiTerminal,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  contactLinks,
  highlights,
  projects,
  quickProfile,
  skillCategories,
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
  "Oportunidade de estagio",
  "Convite para entrevista",
  "Networking profissional",
  "Projeto freelance",
  "Outro assunto",
];

const recruiterSignals = [
  "Projetos primeiro, narrativa depois.",
  "Estudos de caso com problema, arquitetura e resultado.",
  "Motion contido para nao prejudicar leitura.",
];

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  usePageMeta({
    title: "Joao Victor Alves de Abreu | Backend Software Portfolio",
    description:
      "Portfolio profissional com foco em backend, Java, Spring Boot, FastAPI, PostgreSQL, APIs REST e produtos orientados a decisao.",
  });

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.45, delay },
        };

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-18 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-22 lg:pt-18"
      >
        <div className="hero-orb left-[2%] top-[12%] h-28 w-28 bg-[rgba(76,255,139,0.16)]" />
        <div className="hero-orb right-[4%] top-[32%] h-36 w-36 bg-[rgba(76,255,139,0.1)]" />

        <div className="flex flex-col justify-center">
          <motion.p {...reveal()} className="eyebrow">
            portfolio layout // recruiter first
          </motion.p>
          <motion.h1
            {...reveal(0.04)}
            id="hero-title"
            className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-[#effff4] sm:text-6xl"
          >
            Backend portfolio com
            <span className="headline-gradient"> projetos fortes, </span>
            contexto tecnico e leitura direta.
          </motion.h1>
          <motion.p
            {...reveal(0.08)}
            className="mt-5 max-w-2xl text-lg leading-8 text-[#a8dbb7]"
          >
            Sou Joao Victor Alves de Abreu, estudante de Ciencia da Computacao
            na FIAP. Estou construindo base em Java, Spring Boot, FastAPI,
            PostgreSQL, autenticacao, APIs REST e produtos orientados a decisao.
          </motion.p>

          <motion.div {...reveal(0.12)} className="mt-8 flex flex-wrap gap-3">
            <span className="data-chip">
              <FiMapPin className="text-[#74ff9f]" />
              Sao Paulo, SP
            </span>
            <span className="data-chip">4 projetos em destaque</span>
            <span className="data-chip">Disponivel para estagio</span>
          </motion.div>

          <motion.div {...reveal(0.16)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projetos" className="btn-primary">
              <FiArrowRight />
              Explorar projetos
            </a>
            <a href={resumeUrl} download className="btn-secondary">
              <FiDownload />
              Baixar curriculo
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.2)}
            className="mt-10 terminal-card max-w-2xl"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="terminal-kicker">why this layout</p>
              <span className="panel-chip">updated</span>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[#a6deb7]">
              {recruiterSignals.map((signal) => (
                <p key={signal} className="font-mono">
                  {">"} {signal}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.08)}
          className="flex flex-col justify-center gap-6"
        >
          <ProfilePhoto />
          <div className="hero-panel">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">current signal</p>
              <span className="panel-chip">targeting internships</span>
            </div>
            <div className="mt-6 grid gap-4">
              {quickProfile.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(6,17,9,0.8)] p-4"
                >
                  <span className="text-sm text-[#87c69b]">{item.label}</span>
                  <p className="mt-2 font-medium text-[#effff4]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="matrix-divider my-6" />
            <div className="flex flex-wrap gap-4 text-sm text-[#9fd7b0]">
              <ExternalLink
                href="https://github.com/JoaoVictorAAbreu-Dev"
                className="inline-flex items-center gap-2 transition hover:text-[#effff4]"
                aria-label="Abrir GitHub de Joao Victor em nova guia"
                showNewTabText
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
                className="inline-flex items-center gap-2 transition hover:text-[#effff4]"
                aria-label="Abrir LinkedIn de Joao Victor em nova guia"
                showNewTabText
              >
                <FiLinkedin aria-hidden="true" />
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell pt-0">
        <motion.div {...reveal(0.08)} className="grid gap-4 lg:grid-cols-4">
          <SignalMetric
            label="Foco principal"
            value="Backend Engineering"
            note="Java, Spring Boot, APIs e arquitetura"
          />
          <SignalMetric
            label="Tipo de portfolio"
            value="Projeto-first"
            note="Repositorios fortes antes de texto institucional"
          />
          <SignalMetric
            label="Leitura"
            value="Case study"
            note="Problema, stack, estrutura e resultado"
          />
          <SignalMetric
            label="Tema"
            value="Matrix"
            note="Dark, motion sutil e ambiente tecnologico"
          />
        </motion.div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28 pt-10"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Os projetos vem primeiro porque e neles que o portfolio realmente prova capacidade tecnica."
          description="A curadoria abaixo segue um padrao comum dos portfolios mais fortes: miniaturas ricas, contexto objetivo e acesso rapido ao estudo de caso."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              index={index}
              project={project}
              reveal={reveal}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28"
      >
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <SectionHeading
              id="sobre-heading"
              eyebrow="Sobre"
              title="Clareza tecnica, evolucao consistente e foco em problemas de software que fazem sentido para produto."
              description="Este portfolio foi reorganizado para comunicar melhor o que importa em selecao tecnica: criterio, profundidade de projeto e direcao de carreira."
            />
            <div className="terminal-card space-y-4">
              {aboutPoints.map((point) => (
                <p key={point} className="text-base leading-8 text-[#a8dbb7]">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                {...reveal(0.05 * index)}
                className="surface-card"
              >
                <div className="icon-badge">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#effff4]">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#a8dbb7]">
                  {description}
                </p>
              </motion.article>
            ))}
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
          title="Stack organizada por area, com foco no que aparece com mais densidade tecnica nos repositorios selecionados."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.category}
              {...reveal(0.04 * index)}
              className="glass-card"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-[#effff4]">
                  {category.category}
                </h3>
                <span className="panel-chip">stack block</span>
              </div>
              <div className="mt-6 grid gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="surface-card">
                    <div className="flex items-start gap-4">
                      <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg font-semibold text-[#effff4]">
                            {item.name}
                          </h4>
                          <span className="tag">{item.level}</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[#a8dbb7]">
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
        id="jornada"
        aria-labelledby="jornada-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="jornada-heading"
          eyebrow="Jornada"
          title="Linha de evolucao organizada como log tecnico, sem excesso de texto e sem perder contexto."
        />
        <ol className="mt-12 space-y-5">
          {timeline.map((item, index) => (
            <motion.li
              key={item.title}
              {...reveal(0.04 * index)}
              className="list-none"
            >
              <article className="terminal-card relative overflow-hidden pl-8">
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[linear-gradient(180deg,#1dd45a,#91ffb8)]" />
                <p className="terminal-kicker">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#effff4]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#a8dbb7]">
                  {item.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ol>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Contato direto, formulario limpo e caminhos simples para recrutadores."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <address className="grid gap-4 not-italic">
            {contactLinks.map(
              ({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="glass-card flex items-center gap-4"
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
                    <p className="text-sm text-[#87c69b]">{label}</p>
                    <p className="mt-1 font-medium text-[#effff4]">{value}</p>
                  </div>
                </a>
              ),
            )}
          </address>

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

function SignalMetric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="surface-card">
      <p className="terminal-kicker">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-[#effff4]">{value}</p>
      <p className="mt-2 text-sm leading-7 text-[#9fd7b0]">{note}</p>
    </div>
  );
}

function ProjectCard({
  index,
  project,
  reveal,
  shouldReduceMotion,
}: {
  index: number;
  project: (typeof projects)[number];
  reveal: (delay?: number) => Record<string, unknown>;
  shouldReduceMotion: boolean | null;
}) {
  const isFeatured = index === 0;
  const layoutClassName = isFeatured
    ? "xl:col-span-7 xl:row-span-2"
    : index === 3
      ? "xl:col-span-7"
      : "xl:col-span-5";

  return (
    <motion.article
      {...reveal(0.04 * index)}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className={`glass-card relative overflow-hidden ${layoutClassName}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(76,255,139,0.12),_transparent_28%)]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="eyebrow">{project.status}</span>
          <span className="text-sm text-[#8bc8a0]">{project.shortTitle}</span>
        </div>

        <div className="mt-6 rounded-[1.6rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(4,11,5,0.9)] p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="terminal-kicker">{project.imageLabel}</p>
            <span className="panel-chip">selected repo</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(7,18,10,0.84)] p-4">
              <div className="h-3 w-1/2 rounded-full bg-[rgba(145,255,184,0.14)]" />
              <div className="mt-4 h-24 rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(18,92,39,0.42),rgba(76,255,139,0.08),rgba(0,0,0,0.2))]" />
            </div>
            <div className="grid gap-3">
              <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(7,18,10,0.84)] p-4">
                <div className="h-2 w-2/3 rounded-full bg-[rgba(145,255,184,0.14)]" />
                <div className="mt-3 h-8 rounded-xl bg-[rgba(145,255,184,0.08)]" />
                <div className="mt-2 h-8 rounded-xl bg-[rgba(145,255,184,0.08)]" />
              </div>
              <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.1)] bg-[rgba(7,18,10,0.84)] p-4">
                <div className="h-2 w-1/2 rounded-full bg-[rgba(145,255,184,0.14)]" />
                <div className="mt-3 h-10 rounded-xl bg-[linear-gradient(90deg,rgba(18,92,39,0.3),rgba(76,255,139,0.14))]" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-3xl font-semibold text-[#effff4]">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-8 text-[#a8dbb7]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div
          className={`mt-6 grid gap-4 ${
            isFeatured ? "lg:grid-cols-2" : "sm:grid-cols-2"
          }`}
        >
          <div className="surface-card">
            <p className="terminal-kicker">problema</p>
            <p className="mt-3 text-sm leading-7 text-[#a8dbb7]">
              {project.problemSolved}
            </p>
          </div>
          <div className="surface-card">
            <p className="terminal-kicker">estrutura</p>
            <p className="mt-3 text-sm leading-7 text-[#a8dbb7]">
              {project.architectureUsed}
            </p>
          </div>
        </div>

        <div className="mt-6 surface-card">
          <p className="terminal-kicker">o que este projeto sinaliza</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#a8dbb7] marker:text-[#74ff9f]">
            {project.learnings.slice(0, isFeatured ? 3 : 2).map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <ExternalLink
            href={project.githubUrl}
            className="btn-secondary"
            aria-label={`Abrir repositorio ${project.title} no GitHub em nova guia`}
            showNewTabText
          >
            <FiGithub />
            Repositorio
          </ExternalLink>
          <Link to={`/projetos/${project.slug}`} className="btn-primary">
            Ver estudo de caso
          </Link>
        </div>
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
      nextErrors.email = "Informe um email valido para retorno.";
    }

    if (company.trim().length > 80) {
      nextErrors.company =
        "O nome da empresa deve ter no maximo 80 caracteres.";
    }

    if (!subject.trim()) {
      nextErrors.subject = "Selecione um assunto principal.";
    }

    if (message.trim().length < 24) {
      nextErrors.message =
        "Descreva a oportunidade ou contexto com pelo menos 24 caracteres.";
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
    <div className="glass-card">
      <div className="flex items-start gap-3">
        <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
          <FiTerminal size={18} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#effff4]">
            Formulario de contato
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#a8dbb7]">
            O layout foi simplificado para facilitar contato rapido. Sem
            endpoint configurado, o formulario abre o cliente de email com o
            texto pronto.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(4,13,7,0.88)] p-4 sm:grid-cols-3">
        <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(7,19,10,0.82)] px-4 py-4">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d9ffe7]">
            <FiSend className="text-[#72ff9d]" />
            Envio
          </p>
          <p className="mt-2 text-sm text-[#9fd7b0]">
            {configured ? "Direto pelo site" : "Abre email pronto"}
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(7,19,10,0.82)] px-4 py-4">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d9ffe7]">
            <FiClock className="text-[#72ff9d]" />
            Retorno
          </p>
          <p className="mt-2 text-sm text-[#9fd7b0]">
            Preferencialmente em ate 48h
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-[rgba(76,255,139,0.12)] bg-[rgba(7,19,10,0.82)] px-4 py-4">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#d9ffe7]">
            <FiMessageSquare className="text-[#72ff9d]" />
            Melhor uso
          </p>
          <p className="mt-2 text-sm text-[#9fd7b0]">
            Estagio, entrevista e networking
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
                Opcional, mas ajuda a contextualizar o contato.
              </small>
            )}
          </label>

          <label htmlFor="contact-subject" className="field-shell">
            <span>Assunto principal</span>
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
                remainingCharacters < 80 ? "text-[#ffd48d]" : "text-[#8ec7a0]"
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
            placeholder="Descreva a oportunidade, a vaga, o contexto do contato ou o objetivo da conversa."
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
            <p role="alert" className="text-sm text-[#ff9898]">
              Revise os campos obrigatorios para continuar. Se preferir, use
              email ou LinkedIn.
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          <button
            type="submit"
            className="btn-primary w-full justify-center sm:w-auto"
            disabled={status === "sending"}
          >
            <FiArrowRight />
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
            <FiMail />
            Email direto
          </a>

          <ExternalLink
            href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
            className="btn-secondary w-full justify-center sm:w-auto"
            aria-label="Abrir LinkedIn de Joao Victor em nova guia"
            showNewTabText
          >
            <FiLinkedin />
            LinkedIn
          </ExternalLink>
        </div>
      </form>
    </div>
  );
}
