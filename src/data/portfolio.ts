import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowTrendingUp,
  HiOutlineBolt,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineFolderOpen,
  HiOutlineLifebuoy,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";
import type {
  ContactLink,
  HighlightItem,
  LearningItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  TimelineItem,
} from "../types/portfolio";

export const seo = {
  title: "Joao Victor Alves de Abreu | Backend Engineering Portfolio",
  description:
    "Portfolio profissional com foco em backend, Java, Spring Boot, C#, .NET, Python, APIs REST e projetos orientados a produto.",
  image: "/images/profile.webp",
  url: "https://joaovictorabreu-joaovictor-labs.vercel.app",
};

export const navItems: NavItem[] = [
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const heroSignals = [
  "Sao Paulo, Brasil",
  "Disponivel para estagio",
  "Foco em backend, APIs e arquitetura",
];

export const heroStats = [
  {
    label: "Projetos selecionados",
    value: "3",
    detail:
      "Cases principais com foco em backend, produto e profundidade tecnica.",
  },
  {
    label: "Stack principal",
    value: "Java + Spring + .NET",
    detail: "Base crescente em backend corporativo e integracoes.",
  },
  {
    label: "Formacao",
    value: "FIAP",
    detail: "Ciencia da Computacao com foco em engenharia de software.",
  },
];

export const quickProfile = [
  { label: "Objetivo", value: "Estagio em Engenharia de Software" },
  { label: "Email", value: "joaovictoralvesabreu1@gmail.com" },
  { label: "GitHub", value: "JoaoVictorAAbreu-Dev" },
  { label: "LinkedIn", value: "linkedin.com/in/joaovictoraabreu" },
];

export const aboutPoints = [
  "Sou estudante de Ciencia da Computacao na FIAP, com foco em engenharia de software, desenvolvimento backend e arquitetura de sistemas.",
  "Tenho interesse em construir APIs, autenticacao, persistencia relacional e produtos que resolvem problemas reais com clareza tecnica.",
  "Meu portfolio prioriza repositorios publicos com contexto de produto, setup reproduzivel, documentacao e evolucao incremental.",
];

export const highlights: HighlightItem[] = [
  {
    title: "Clareza tecnica",
    description:
      "Procuro deixar contratos, servicos, persistencia e responsabilidades bem separados para facilitar leitura e manutencao.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Projetos com contexto",
    description:
      "Os melhores cases tratam problema, solucao, arquitetura e impacto, em vez de mostrar apenas interface ou CRUD.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Aprendizado rapido",
    description:
      "Consigo absorver tecnologias novas e transformar estudo em entrega pratica, com boa documentacao e iteracao constante.",
    icon: HiOutlineArrowTrendingUp,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Java",
        level: "Base forte",
        description:
          "POO, dominio, organizacao de regras de negocio e evolucao para APIs mais robustas.",
        icon: HiOutlineCommandLine,
      },
      {
        name: "Spring Boot",
        level: "Em crescimento",
        description:
          "APIs REST, validacao, seguranca, camadas e documentacao OpenAPI.",
        icon: HiOutlineBolt,
      },
      {
        name: "C# e .NET",
        level: "Stack alvo",
        description:
          "Aprofundamento continuo com foco em oportunidades de estagio backend.",
        icon: HiOutlineCodeBracket,
      },
      {
        name: "Python",
        level: "Aplicado em projeto",
        description:
          "FastAPI, automacao, analytics e produtos de apoio a decisao.",
        icon: HiOutlineCpuChip,
      },
    ],
  },
  {
    category: "Frontend e DX",
    items: [
      {
        name: "TypeScript",
        level: "Uso recorrente",
        description:
          "Tipagem, componentes reutilizaveis e manutencao mais segura.",
        icon: HiOutlineShieldCheck,
      },
      {
        name: "React",
        level: "Uso recorrente",
        description:
          "Interfaces para dashboards, formularios e leitura executiva de dados.",
        icon: HiOutlineSparkles,
      },
      {
        name: "Git e GitHub",
        level: "Uso diario",
        description:
          "Versionamento, documentacao publica e fluxo incremental de entrega.",
        icon: HiOutlineFolderOpen,
      },
    ],
  },
  {
    category: "Dados e Infra",
    items: [
      {
        name: "SQL",
        level: "Aplicado em projeto",
        description:
          "Modelagem relacional, persistencia e leitura de indicadores de negocio.",
        icon: HiOutlineCircleStack,
      },
      {
        name: "APIs REST",
        level: "Foco principal",
        description:
          "Rotas claras, autenticacao, integracao entre servicos e interface.",
        icon: HiOutlineCloud,
      },
      {
        name: "Docker basico",
        level: "Base profissional",
        description:
          "Ambientes locais reproduziveis com backend, frontend e banco.",
        icon: HiOutlineLifebuoy,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "devtrack-ai",
    title: "DevTrack AI",
    shortTitle: "Plataforma full stack para produtividade tecnica",
    description:
      "Sistema para organizar projetos, tarefas, metas de estudo e resumos semanais com recomendacoes explicaveis.",
    problemSolved:
      "Evitar que acompanhamento de produtividade vire apenas um CRUD sem contexto de estudo, entrega e prioridade.",
    architectureUsed:
      "Backend Java 21 com Spring Boot e seguranca; frontend React com TypeScript; PostgreSQL e Docker Compose.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "Docker",
    ],
    challenges: [
      "Transformar dados simples em leitura util para o usuario.",
      "Equilibrar produto, backend e documentacao no mesmo case.",
      "Manter narrativa forte para entrevistas de estagio.",
    ],
    learnings: [
      "Boa prova de autenticacao, API, dominio e setup local.",
      "Case forte para mostrar engenharia de software completa.",
      "Projeto orientado a produto, nao apenas a features soltas.",
    ],
    status: "Case principal",
    imageLabel: "Produtividade tecnica",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-devtrack-ai",
    demoUrl: null,
    caseStudy: {
      context:
        "DevTrack AI foi estruturado como um produto de portfolio para demonstrar uma entrega full stack mais madura.",
      problem:
        "Ferramentas comuns registram atividades, mas raramente ajudam a interpretar carga, atraso e prioridade de maneira justificavel.",
      solution:
        "O projeto combina projetos, tarefas, metas de estudo e resumos semanais com recomendacoes baseadas em sinais objetivos.",
      architecture: [
        "Backend Spring Boot com seguranca, validacao e contratos de API",
        "Frontend React orientado a dashboard e leitura executiva",
        "PostgreSQL e Docker Compose para setup reproduzivel",
      ],
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "React",
        "TypeScript",
      ],
      challenges: [
        "Evitar um CRUD sem contexto de produto",
        "Transformar metricas em recomendacoes uteis",
        "Equilibrar escopo e clareza arquitetural",
      ],
      results: [
        "Projeto consistente para demonstrar backend e produto",
        "Narrativa forte para vagas de estagio em software engineering",
        "Boa amostra de organizacao tecnica ponta a ponta",
      ],
      futureImprovements: [
        "Historico semanal por usuario",
        "Exportacao de resumo em PDF",
        "Cobertura adicional de testes automatizados",
      ],
    },
  },
  {
    slug: "greenops-control-center",
    title: "GreenOps Control Center",
    shortTitle: "Centro de controle operacional com Spring e JWT",
    description:
      "Dashboard operacional para priorizacao de vegetacao rodoviaria com autenticacao, ranking e plano semanal.",
    problemSolved:
      "Substituir manutencao baseada em cronograma fixo por decisao explicavel e orientada a prioridade real.",
    architectureUsed:
      "Backend em Java 21 com Spring Security, DTOs, servicos e OpenAPI; frontend React; PostgreSQL.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "React",
      "OpenAPI",
    ],
    challenges: [
      "Modelar uma operacao mais realista sem perder clareza.",
      "Centralizar regra de negocio de forma legivel.",
      "Conectar ranking, clima e autenticacao no mesmo produto.",
    ],
    learnings: [
      "Mostra arquitetura em camadas com mais maturidade.",
      "Boa vitrine de Spring Security e documentacao de API.",
      "Projeto forte para demonstrar backend orientado a negocio.",
    ],
    status: "Case principal",
    imageLabel: "Operacao e decisao",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-greenops-control-center",
    demoUrl: null,
    caseStudy: {
      context:
        "GreenOps foi pensado como produto de apoio a decisao, e nao como cadastro generico.",
      problem:
        "Cronogramas lineares geram custo por intervencao antecipada e risco por atraso de execucao.",
      solution:
        "O sistema calcula prioridade por trecho, organiza ranking, mostra indicadores e gera plano semanal conforme capacidade.",
      architecture: [
        "Backend Spring Boot com controller, dto, service, repository e exception",
        "Autenticacao JWT e documentacao OpenAPI",
        "Frontend React para leitura operacional e decisao",
      ],
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "React",
        "OpenAPI",
      ],
      challenges: [
        "Explicar a priorizacao de forma transparente",
        "Integrar dados operacionais e climaticos",
        "Preservar clareza tecnica para recrutadores",
      ],
      results: [
        "Um dos projetos mais fortes para vagas backend",
        "Boa evidencia de organizacao tecnica e raciocinio de produto",
        "Entrega proxima de um cenario corporativo real",
      ],
      futureImprovements: [
        "Pipeline de CI/CD",
        "Perfis de acesso mais granulares",
        "Mais cobertura de testes integrados",
      ],
    },
  },
  {
    slug: "motiva-orion",
    title: "Motiva ORION",
    shortTitle: "Inteligencia operacional com FastAPI e dados",
    description:
      "Plataforma corporativa de inteligencia operacional para gestao preditiva com ETL, scoring e relatorios.",
    problemSolved:
      "Consolidar dados heterogeneos, risco operacional e contexto regulatorio em uma visao acionavel para priorizacao de campo.",
    architectureUsed:
      "Frontend React; backend FastAPI; PostgreSQL; ETL geoespacial; motor deterministico de risco.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "React",
      "Pandas",
      "GeoPandas",
    ],
    challenges: [
      "Integrar ETL, API, score e dashboard sem perder legibilidade.",
      "Separar calculo deterministico da camada interpretativa.",
      "Sustentar um dominio mais denso do que um projeto academico comum.",
    ],
    learnings: [
      "Projeto profundo em operacao, dados e backend.",
      "Mostra capacidade de trabalhar com dominio mais complexo.",
      "Diferencial importante pela maturidade do contexto tecnico.",
    ],
    status: "Case principal",
    imageLabel: "Dados e previsao",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-motiva-orion",
    demoUrl: null,
    caseStudy: {
      context:
        "Motiva ORION amplia o portfolio para um cenario com dados geograficos, conformidade e tomada de decisao operacional.",
      problem:
        "Sem centralizacao, dados de vegetacao, risco, clima e conformidade ficam dispersos e dificultam um plano consistente.",
      solution:
        "A plataforma organiza ingestao, persistencia, scoring, planejamento de missao, APIs e dashboards em um fluxo unico.",
      architecture: [
        "Pipeline ETL para CSV, XLSX, KML e KMZ",
        "FastAPI com autenticacao JWT, regras de negocio e relatorios",
        "Frontend React para mapa, ranking, simulador e centro executivo",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "React",
        "Pandas",
        "GeoPandas",
      ],
      challenges: [
        "Definir regras reproduziveis em um dominio complexo",
        "Combinar geodados, scoring e experiencia operacional",
        "Controlar escopo com multiplas capacidades de produto",
      ],
      results: [
        "Projeto de alto valor para demonstrar engenharia aplicada",
        "Boa amostra de backend com dados e decisao operacional",
        "Diferencial relevante em um portfolio de estudante",
      ],
      futureImprovements: [
        "Mais testes de integracao",
        "Observabilidade do backend",
        "Expansao controlada das integracoes externas",
      ],
    },
  },
];

export const archivedProjects = [
  {
    title: "Climate Analytics",
    href: "https://github.com/JoaoVictorAAbreu-Dev/project-climate-analytics",
  },
  {
    title: "Bot NBA",
    href: "https://github.com/JoaoVictorAAbreu-Dev/project-bot-nba",
  },
  {
    title: "AetherOS",
    href: "https://github.com/JoaoVictorAAbreu-Dev/project-aetheros",
  },
];

export const profileTags = Array.from(
  new Set(
    skillCategories.flatMap((category) =>
      category.items.map((item) => item.name),
    ),
  ),
).slice(0, 9);

export const timeline: TimelineItem[] = [
  {
    period: "Agora",
    title: "FIAP | Ciencia da Computacao",
    description:
      "Base academica em logica, POO, desenvolvimento web, estrutura de dados e fundamentos de engenharia de software.",
  },
  {
    period: "Foco atual",
    title: "Backend, APIs e arquitetura",
    description:
      "Desenvolvimento de projetos publicos com Java, Spring Boot, Python, dados e interfaces para demonstrar maturidade tecnica.",
  },
  {
    period: "Proximo passo",
    title: "Estagio em Engenharia de Software",
    description:
      "Aplicar backend, testes, documentacao e trabalho colaborativo em um ambiente profissional.",
  },
];

export const learningPath: LearningItem[] = [
  {
    title: "Oracle Java",
    status: "Planned",
    detail:
      "Fortalecer Java para entrevistas, fundamentos de backend e ecossistema corporativo.",
  },
  {
    title: "Spring Boot",
    status: "In progress",
    detail:
      "Aprofundar seguranca, validacao, testes, persistencia e desenho de APIs.",
  },
  {
    title: "Microsoft AZ-900",
    status: "Planned",
    detail:
      "Consolidar base de cloud e vocabulario de infraestrutura relevante para times de engenharia.",
  },
  {
    title: "GitHub Foundations",
    status: "Planned",
    detail:
      "Refinar praticas de versionamento, colaboracao, automacao e documentacao publica.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "joaovictoralvesabreu1@gmail.com",
    href: "mailto:joaovictoralvesabreu1@gmail.com",
    icon: HiOutlineEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/JoaoVictorAAbreu-Dev",
    href: "https://github.com/JoaoVictorAAbreu-Dev",
    icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joaovictoraabreu",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
    external: true,
  },
];

export const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/JoaoVictorAAbreu-Dev",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:joaovictoralvesabreu1@gmail.com",
    icon: HiOutlineEnvelope,
  },
];

export const sectionIcons = {
  about: HiOutlineAcademicCap,
  stack: HiOutlineCommandLine,
  projects: HiOutlineFolderOpen,
  journey: HiOutlineRocketLaunch,
};
