import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineChartBarSquare,
  HiOutlineCircleStack,
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineFolderOpen,
  HiOutlineQueueList,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import type {
  ContactLink,
  HighlightItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  TimelineItem,
} from "../types/portfolio";

export const seo = {
  title: "Joao Victor Alves de Abreu | Backend Software Portfolio",
  description:
    "Portfólio de João Victor Alves de Abreu com foco em backend, Java, Spring Boot, FastAPI, PostgreSQL, APIs REST e produtos orientados à decisão.",
  image: "/images/profile.webp",
  url: "https://joaovictorabreu-joaovictor-labs.vercel.app",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contato", href: "#contato" },
];

export const aboutPoints = [
  "Sou estudante de Ciência da Computação na FIAP e concentro minha evolução em engenharia de software, com foco principal em backend, APIs, modelagem de dados e organização de sistemas.",
  "Meu portfólio prioriza produtos que resolvem problemas reais com critério técnico claro: autenticação, regras de negócio, integração entre camadas, dashboards orientados à decisão e documentação reproduzível.",
  "Busco oportunidades de estágio em Engenharia de Software para aprofundar Java, Spring Boot, C#, .NET e arquitetura de backend sem perder consistência de entrega.",
];

export const quickProfile = [
  { label: "Objetivo", value: "Estágio em Engenharia de Software" },
  {
    label: "Foco principal",
    value: "Backend com Java, C#, .NET, Spring Boot e FastAPI",
  },
  {
    label: "Recorte do portfólio",
    value: "APIs, produtos full stack, dados e decisão operacional",
  },
  { label: "Base acadêmica", value: "FIAP • Ciência da Computação" },
];

export const highlights: HighlightItem[] = [
  {
    title: "Backend orientado a domínio",
    description:
      "Os projetos destacam autenticação, DTOs, persistência, serviços e organização por responsabilidade, e não apenas interface.",
    icon: HiOutlineCommandLine,
  },
  {
    title: "Produtos com contexto real",
    description:
      "As soluções simulam operações de campo, produtividade de desenvolvedores e centros de controle com regras explicáveis.",
    icon: HiOutlineChartBarSquare,
  },
  {
    title: "Entrega ponta a ponta",
    description:
      "Repositórios fortes incluem backend, frontend, banco, setup local, validação e narrativa técnica para avaliação profissional.",
    icon: HiOutlineRocketLaunch,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Java • Spring Boot • Spring Security",
        level: "Foco de crescimento",
        description:
          "APIs REST, autenticação JWT, validação, serviços, DTOs e arquitetura em camadas para cenários mais próximos do ambiente corporativo.",
        icon: HiOutlineCommandLine,
      },
      {
        name: "Python • FastAPI • SQLAlchemy",
        level: "Uso forte no portfólio",
        description:
          "Construo APIs com lógica de negócio, integração com dados, relatórios e organização orientada a serviços.",
        icon: HiOutlineCodeBracket,
      },
      {
        name: "PostgreSQL • JPA • Modelagem relacional",
        level: "Aplicado em projeto",
        description:
          "Persistência relacional, entidades, consultas, organização de schemas e apoio a fluxos de decisão e produtividade.",
        icon: HiOutlineCircleStack,
      },
    ],
  },
  {
    category: "Frontend e interface",
    items: [
      {
        name: "React • TypeScript • Vite",
        level: "Uso frequente",
        description:
          "Interfaces responsivas para dashboards, autenticação, formulários e leitura técnica clara de indicadores e status.",
        icon: HiOutlineCpuChip,
      },
      {
        name: "Tailwind CSS • Framer Motion",
        level: "Uso frequente",
        description:
          "Camada visual com foco em hierarquia, ritmo de leitura, responsividade e identidade consistente para portfólio e produtos.",
        icon: HiOutlineBriefcase,
      },
    ],
  },
  {
    category: "Dados e inteligência aplicada",
    items: [
      {
        name: "Pandas • scikit-learn • ETL",
        level: "Aplicado em projeto",
        description:
          "Uso dados para suportar priorização, análise operacional, previsões leves e explicações orientadas a produto.",
        icon: HiOutlineChartBarSquare,
      },
      {
        name: "Regras explicáveis e suporte à decisão",
        level: "Diferencial de portfólio",
        description:
          "Prefiro motores de decisão justificáveis a caixas-pretas quando o problema exige confiabilidade operacional.",
        icon: HiOutlineQueueList,
      },
    ],
  },
  {
    category: "Qualidade e workflow",
    items: [
      {
        name: "Git • GitHub • Documentação técnica",
        level: "Uso diário",
        description:
          "Versionamento, repositórios públicos bem estruturados, README útil, setup local e histórico de evolução incremental.",
        icon: HiOutlineFolderOpen,
      },
      {
        name: "Docker • Testes • OpenAPI • Linting",
        level: "Base profissional",
        description:
          "Busco deixar os projetos mais reproduzíveis, testáveis e compreensíveis para avaliação técnica e demonstração.",
        icon: HiOutlineShieldCheck,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "devtrack-ai",
    title: "DevTrack AI",
    shortTitle: "Java + Spring Boot + produtividade",
    description:
      "Plataforma de produtividade para desenvolvedores com projetos, tarefas, metas de estudo, resumo semanal e recomendações explicáveis.",
    problemSolved:
      "Evitar que o acompanhamento de produtividade técnica vire apenas um CRUD genérico, trazendo consolidação semanal, risco de atraso e próximo passo acionável.",
    architectureUsed:
      "Backend em Java 21 com Spring Boot, segurança, validação e OpenAPI; frontend em React com TypeScript; banco PostgreSQL e Docker Compose para ambiente local.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "Docker",
    ],
    challenges: [
      "Modelar produtividade sem depender de IA opaca.",
      "Equilibrar escopo de produto com clareza de arquitetura.",
      "Conectar metas de estudo, tarefas e resumo semanal em uma narrativa única.",
    ],
    learnings: [
      "Produto full stack com proposta clara de portfólio.",
      "Organização de backend orientado a negócio e autenticação.",
      "Documentação de setup e demonstração com foco profissional.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Painel de produtividade",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-devtrack-ai",
    demoUrl: null,
    caseStudy: {
      context:
        "DevTrack AI foi desenhado como produto de portfólio para mostrar uma entrega full stack mais madura do que uma lista simples de tarefas.",
      problem:
        "Ferramentas de produtividade costumam registrar itens, mas raramente ajudam a interpretar carga aberta, risco de atraso e prioridade semanal de forma justificável.",
      solution:
        "A solução combina projetos, tarefas, metas de estudo e resumo semanal com recomendações explicáveis baseadas em sinais concretos do sistema.",
      architecture: [
        "Backend Spring Boot com segurança, regras de negócio e contratos de API",
        "Frontend React orientado a dashboard e fluxo de leitura executiva",
        "PostgreSQL e Docker Compose para reprodução local consistente",
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
        "Transformar métricas simples em recomendações com valor real",
        "Preservar clareza de domínio sem inflar o escopo",
        "Construir narrativa de produto útil para avaliação de recrutadores",
      ],
      results: [
        "Projeto forte para demonstrar backend com produto e autenticação",
        "Boa combinação entre proposta funcional e base técnica",
        "Narrativa alinhada a estágio em engenharia de software",
      ],
      futureImprovements: [
        "Histórico semanal por usuário",
        "Exportação de resumo em PDF",
        "Cobertura adicional de testes automatizados",
      ],
    },
  },
  {
    slug: "greenops-control-center",
    title: "GreenOps Control Center",
    shortTitle: "Spring Boot + JWT + operação realista",
    description:
      "Centro de controle operacional para gestão de vegetação em rodovias, com priorização explicável, plano semanal, clima e autenticação JWT.",
    problemSolved:
      "Resolver o problema de priorização ruim em operações lineares, evitando manutenção adiantada demais ou tardia demais sem critério técnico consistente.",
    architectureUsed:
      "Backend Java 21 em camadas com Spring Security e OpenAPI; frontend React; PostgreSQL; testes de backend e frontend; organização forte de setup e documentação.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "React",
      "OpenAPI",
    ],
    challenges: [
      "Traduzir uma operação de campo para um modelo de decisão reproduzível.",
      "Justificar score e prioridade de forma legível para o usuário.",
      "Conectar autenticação, ranking, relatórios e plano semanal no mesmo produto.",
    ],
    learnings: [
      "Arquitetura em camadas para problema realista de negócio.",
      "JWT e Swagger como parte de uma entrega profissional.",
      "Valor de testes e scripts locais para demonstração técnica.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Central de operações",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-greenops-control-center",
    demoUrl: null,
    caseStudy: {
      context:
        "GreenOps Control Center foi pensado como centro de decisão operacional, e não como CRUD, para mostrar maturidade em modelagem de produto e backend corporativo.",
      problem:
        "Cronogramas fixos em manutenção de vegetação geram desperdício e risco porque ignoram contexto operacional, clima, recorrência e pressão contratual.",
      solution:
        "O sistema calcula prioridade explicável por trecho, organiza visualização em ranking e mapa e gera plano semanal conforme capacidade de equipes.",
      architecture: [
        "Backend Spring Boot com DTOs, serviços, repositórios e tratamento centralizado de erros",
        "Segurança JWT e documentação OpenAPI para demonstração da API",
        "Frontend React para dashboard, autenticação e leitura de indicadores",
      ],
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "React",
        "Vitest",
      ],
      challenges: [
        "Equilibrar lógica explicável com escopo de produto realista",
        "Manter a base técnica limpa mesmo com múltiplos módulos",
        "Demonstrar valor operacional sem depender de dados proprietários",
      ],
      results: [
        "Um dos projetos mais fortes para vaga de backend",
        "Boa evidência de organização técnica e critério de arquitetura",
        "Stack próxima do que muitas empresas avaliam em estágio",
      ],
      futureImprovements: [
        "Pipeline CI/CD",
        "RBAC mais granular",
        "Exportação adicional de relatórios",
      ],
    },
  },
  {
    slug: "motiva-orion",
    title: "Motiva ORION",
    shortTitle: "FastAPI + ETL + inteligência operacional",
    description:
      "Plataforma corporativa de inteligência operacional para gestão preditiva de vegetação rodoviária com ETL, score determinístico, planejamento e relatórios.",
    problemSolved:
      "Consolidar dados heterogêneos, risco operacional e critério regulatório em uma visão acionável para priorizar manutenção e conformidade.",
    architectureUsed:
      "Frontend React; backend FastAPI; PostgreSQL; ETL geoespacial; motor determinístico de risco; relatórios e copiloto apenas interpretativo.",
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "React",
      "Pandas",
      "scikit-learn",
    ],
    challenges: [
      "Integrar ETL, API e centro executivo sem perder legibilidade.",
      "Separar cálculo determinístico de interpretação por IA.",
      "Modelar um domínio operacional mais denso que um app acadêmico comum.",
    ],
    learnings: [
      "Produto de maior profundidade operacional e analítica.",
      "Uso de dados como apoio à decisão, não como fim em si.",
      "Melhor visão de governança técnica em sistemas de negócio.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Motor preditivo operacional",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-motiva-orion",
    demoUrl: null,
    caseStudy: {
      context:
        "Motiva ORION expande o recorte de backend para um domínio mais robusto, com dados geográficos, priorização operacional e trilha técnica de produto corporativo.",
      problem:
        "Sem centralização, informações de vegetação, conformidade e criticidade ficam dispersas e dificultam a definição de plano de ação consistente.",
      solution:
        "A plataforma estrutura ingestão, persistência, score, planejamento e relatórios em um fluxo único para leitura executiva e operacional.",
      architecture: [
        "Pipeline ETL para CSV, XLSX, KML e KMZ",
        "FastAPI com autenticação JWT, rotas de negócio e relatórios",
        "Frontend React para mapa, ranking, simulador e centro executivo",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "React",
        "GeoPandas",
        "scikit-learn",
      ],
      challenges: [
        "Definir regras de risco reproduzíveis em domínio complexo",
        "Combinar dados operacionais e geográficos sem comprometer setup",
        "Sustentar narrativa de produto com boa governança técnica",
      ],
      results: [
        "Projeto de alto valor para mostrar maturidade de engenharia",
        "Boa demonstração de backend com dados e operação",
        "Diferencial relevante em portfólio de estudante",
      ],
      futureImprovements: [
        "Mais cobertura de testes de integração",
        "Evolução de observabilidade",
        "Expansão controlada de integrações externas",
      ],
    },
  },
  {
    slug: "taskflow-dev",
    title: "TaskFlow Dev",
    shortTitle: "FastAPI + arquitetura modular + testes",
    description:
      "API backend para inteligência operacional de manutenção, com cálculo de risco, ranking, planejamento semanal, relatórios e camada explicativa opcional.",
    problemSolved:
      "Demonstrar uma cadeia de decisão de backend clara, da entrada de dados e clima até ranking, cronograma e relatórios executivos.",
    architectureUsed:
      "Backend em FastAPI com SQLAlchemy, Alembic, módulos por domínio, testes automatizados e suporte a explicação determinística ou assistida por modelo.",
    technologies: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Alembic",
      "Pytest",
      "SQLite/PostgreSQL",
    ],
    challenges: [
      "Organizar uma API mais densa em módulos e casos de uso.",
      "Manter rastreabilidade da lógica de inteligência operacional.",
      "Permitir explicação assistida sem quebrar a confiabilidade do core.",
    ],
    learnings: [
      "Boa base para arquitetura modular em backend Python.",
      "Separação clara entre domínio, persistência e rotas.",
      "Valor de testes e migrações desde o início do projeto.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Serviço de inteligência operacional",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-taskflow-dev-groq",
    demoUrl: null,
    caseStudy: {
      context:
        "TaskFlow Dev foi estruturado para apresentar backend puro com uma cadeia de negócio clara, sem depender de um frontend para justificar seu valor.",
      problem:
        "Muitos projetos de API mostram apenas CRUD. Aqui o objetivo foi expor um fluxo de decisão com risco, prioridade, planejamento e relatórios.",
      solution:
        "A API organiza módulos por domínio, aplica regras determinísticas para inteligência operacional e adiciona explicação assistida apenas como camada complementar.",
      architecture: [
        "FastAPI com módulos por domínio, repositórios, casos de uso e serviços",
        "SQLAlchemy 2.0, Alembic e banco preparado para evolução",
        "Testes automatizados e scripts de seed para reprodução local",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Alembic",
        "Pytest",
        "Groq API",
      ],
      challenges: [
        "Evitar um backend genérico e sem contexto",
        "Modelar inteligência operacional em uma estrutura legível",
        "Combinar IA assistiva sem transformar o sistema em caixa-preta",
      ],
      results: [
        "Projeto forte para demonstrar arquitetura de API",
        "Boa evidência de disciplina modular e testes",
        "Complemento consistente ao recorte Java do portfólio",
      ],
      futureImprovements: [
        "Persistência produtiva completa em PostgreSQL",
        "Mais testes de integração",
        "Observabilidade e health checks ampliados",
      ],
    },
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "FIAP",
    title: "Base em ciência da computação e desenvolvimento de software",
    description:
      "Formação com fundamentos de lógica, orientação a objetos, desenvolvimento web, estrutura de dados e resolução de problemas aplicada a software.",
  },
  {
    period: "Backends públicos",
    title: "Consolidação de APIs, persistência e arquitetura",
    description:
      "A evolução do portfólio passou a priorizar autenticação, APIs REST, modelagem relacional, documentação técnica e produtos mais próximos de cenários reais.",
  },
  {
    period: "Full stack orientado a produto",
    title: "Dashboards, decisão operacional e setup reproduzível",
    description:
      "Projetos como DevTrack AI, GreenOps e Motiva ORION ampliaram o foco em entrega ponta a ponta, com backend forte e narrativa de produto consistente.",
  },
  {
    period: "Próxima etapa",
    title: "Estágio em engenharia de software",
    description:
      "Busco oportunidade para aprofundar Java, Spring Boot, C#, .NET, testes, boas práticas de engenharia e trabalho colaborativo em produto.",
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
  stack: HiOutlineCommandLine,
  journey: HiOutlineRocketLaunch,
  projects: HiOutlineFolderOpen,
  about: HiOutlineAcademicCap,
  backend: HiOutlineCodeBracket,
  database: HiOutlineCircleStack,
  tools: HiOutlineShieldCheck,
};
