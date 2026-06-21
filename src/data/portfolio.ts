import {
  FiActivity,
  FiBarChart2,
  FiBookOpen,
  FiBox,
  FiCode,
  FiDatabase,
  FiFileText,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiServer,
  FiShield,
  FiTerminal,
  FiTrendingUp,
} from "react-icons/fi";
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
    "Portfolio de Joao Victor Alves de Abreu com foco em backend, Java, Spring Boot, FastAPI, PostgreSQL, APIs REST e produtos orientados a decisao.",
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
  "Sou estudante de Ciencia da Computacao na FIAP e concentro minha evolucao em engenharia de software com foco principal em backend, APIs, modelagem de dados e organizacao de sistemas.",
  "Meu portfolio prioriza produtos que resolvem problemas reais com criterio tecnico claro: autenticacao, regras de negocio, integracao entre camadas, dashboards orientados a decisao e documentacao reproduzivel.",
  "Hoje busco oportunidades de estagio em Engenharia de Software para ampliar repertorio em Java, Spring Boot, C#, .NET e arquitetura de backend sem perder consistencia de entrega.",
];

export const quickProfile = [
  { label: "Objetivo", value: "Estagio em Engenharia de Software" },
  {
    label: "Foco principal",
    value: "Backend com Java, Spring Boot, FastAPI e PostgreSQL",
  },
  {
    label: "Recorte do portfolio",
    value: "APIs, produtos full stack, dados e decisao operacional",
  },
  { label: "Base academica", value: "FIAP · Ciencia da Computacao" },
];

export const highlights: HighlightItem[] = [
  {
    title: "Backend orientado a dominio",
    description:
      "Os projetos destacam autenticacao, DTOs, persistencia, servicos e organizacao por responsabilidade em vez de apenas interface.",
    icon: FiServer,
  },
  {
    title: "Produtos com contexto real",
    description:
      "As solucoes simulam operacoes de campo, produtividade de desenvolvedores e centros de controle com regras explicaveis.",
    icon: FiLayers,
  },
  {
    title: "Entrega ponta a ponta",
    description:
      "Repositorios fortes incluem backend, frontend, banco, setup local, validacao e narrativa tecnica para avaliacao profissional.",
    icon: FiTrendingUp,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Java · Spring Boot · Spring Security",
        level: "Foco de crescimento",
        description:
          "APIs REST, autenticacao JWT, validacao, servicos, DTOs e arquitetura em camadas para cenarios mais proximos de ambiente corporativo.",
        icon: FiServer,
      },
      {
        name: "Python · FastAPI · SQLAlchemy",
        level: "Uso forte em portfolio",
        description:
          "Construo APIs com logica de negocio, integracao com dados, relatorios e organizacao orientada a servicos.",
        icon: FiCode,
      },
      {
        name: "PostgreSQL · JPA · modelagem relacional",
        level: "Aplicado em projeto",
        description:
          "Persistencia relacional, entidades, consultas, organizacao de schemas e apoio a fluxos de decisao e produtividade.",
        icon: FiDatabase,
      },
    ],
  },
  {
    category: "Frontend e Interface",
    items: [
      {
        name: "React · TypeScript · Vite",
        level: "Uso frequente",
        description:
          "Interfaces responsivas para dashboards, autenticacao, formularios e leitura tecnica clara de indicadores e status.",
        icon: FiMonitor,
      },
      {
        name: "Tailwind CSS · Framer Motion",
        level: "Uso frequente",
        description:
          "Camada visual com foco em hierarquia, ritmo de leitura, responsividade e identidade consistente para portfolio e produtos.",
        icon: FiBox,
      },
    ],
  },
  {
    category: "Dados e Inteligencia Aplicada",
    items: [
      {
        name: "Pandas · scikit-learn · ETL",
        level: "Aplicado em projeto",
        description:
          "Uso dados para suportar priorizacao, analise operacional, previsoes leves e explicacoes orientadas a produto.",
        icon: FiActivity,
      },
      {
        name: "Regras explicaveis e suporte a decisao",
        level: "Diferencial de portfolio",
        description:
          "Prefiro motores de decisao justificaveis a caixas-pretas quando o problema exige confiabilidade operacional.",
        icon: FiBarChart2,
      },
    ],
  },
  {
    category: "Qualidade e Workflow",
    items: [
      {
        name: "Git · GitHub · documentacao tecnica",
        level: "Uso diario",
        description:
          "Versionamento, repositorios publicos bem estruturados, README util, setup local e historico de evolucao incremental.",
        icon: FiGithub,
      },
      {
        name: "Docker · testes · OpenAPI · linting",
        level: "Base profissional",
        description:
          "Busco deixar os projetos mais reproduziveis, testaveis e compreensiveis para avaliacao tecnica e demonstracao.",
        icon: FiShield,
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
      "Plataforma de produtividade para desenvolvedores com projetos, tarefas, metas de estudo, resumo semanal e recomendacoes explicaveis.",
    problemSolved:
      "Evitar que acompanhamento de produtividade tecnica vire apenas um CRUD generico, trazendo consolidacao semanal, risco de atraso e proximo passo acionavel.",
    architectureUsed:
      "Backend em Java 21 com Spring Boot, seguranca, validacao e OpenAPI; frontend em React com TypeScript; banco PostgreSQL e Docker Compose para ambiente local.",
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
      "Conectar metas de estudo, tarefas e resumo semanal em uma narrativa unica.",
    ],
    learnings: [
      "Produto full stack com proposta clara de portfolio.",
      "Organizacao de backend orientado a negocio e autenticacao.",
      "Documentacao de setup e demonstracao com foco profissional.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Productivity command center",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-devtrack-ai",
    demoUrl: null,
    caseStudy: {
      context:
        "DevTrack AI foi desenhado como produto de portfolio para mostrar uma entrega full stack mais madura do que uma lista simples de tarefas.",
      problem:
        "Ferramentas de produtividade costumam registrar itens, mas raramente ajudam a interpretar carga aberta, risco de atraso e prioridade semanal de forma justificavel.",
      solution:
        "A solucao combina projetos, tarefas, metas de estudo e resumo semanal com recomendacoes explicaveis baseadas em sinais concretos do sistema.",
      architecture: [
        "Backend Spring Boot com seguranca, regras de negocio e contratos de API",
        "Frontend React orientado a dashboard e fluxo de leitura executiva",
        "PostgreSQL e Docker Compose para reproducao local consistente",
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
        "Transformar metricas simples em recomendacoes com valor real",
        "Preservar clareza de dominio sem inflar o escopo",
        "Construir narrativa de produto util para avaliacao de recrutadores",
      ],
      results: [
        "Projeto forte para demonstrar backend com produto e autenticacao",
        "Boa combinacao entre proposta funcional e base tecnica",
        "Narrativa alinhada a estagio em engenharia de software",
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
    shortTitle: "Spring Boot + JWT + operacao realista",
    description:
      "Centro de controle operacional para gestao de vegetacao em rodovias, com priorizacao explicavel, plano semanal, clima e autenticacao JWT.",
    problemSolved:
      "Resolver o problema de priorizacao ruim em operacoes lineares, evitando manutencao adiantada demais ou tardia demais sem criterio tecnico consistente.",
    architectureUsed:
      "Backend Java 21 em camadas com Spring Security e OpenAPI; frontend React; PostgreSQL; testes de backend e frontend; organizacao forte de setup e documentacao.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "React",
      "OpenAPI",
    ],
    challenges: [
      "Traduzir uma operacao de campo para um modelo de decisao reproduzivel.",
      "Justificar score e prioridade de forma legivel para o usuario.",
      "Conectar autenticacao, ranking, relatorios e plano semanal no mesmo produto.",
    ],
    learnings: [
      "Arquitetura em camadas para problema realista de negocio.",
      "JWT e Swagger como parte de uma entrega profissional.",
      "Valor de testes e scripts locais para demonstracao tecnica.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Operational matrix board",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-greenops-control-center",
    demoUrl: null,
    caseStudy: {
      context:
        "GreenOps Control Center foi pensado como centro de decisao operacional, nao como CRUD, para mostrar maturidade em modelagem de produto e backend corporativo.",
      problem:
        "Cronogramas fixos em manutencao de vegetacao geram desperdicio e risco porque ignoram contexto operacional, clima, recorrencia e pressao contratual.",
      solution:
        "O sistema calcula prioridade explicavel por trecho, organiza visualizacao em ranking e mapa e gera plano semanal conforme capacidade de equipes.",
      architecture: [
        "Backend Spring Boot com DTOs, servicos, repositorios e tratamento centralizado de erros",
        "Seguranca JWT e documentacao OpenAPI para demonstracao da API",
        "Frontend React para dashboard, autenticacao e leitura de indicadores",
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
        "Equilibrar logica explicavel com escopo de produto realista",
        "Manter a base tecnica limpa mesmo com multiplos modulos",
        "Demonstrar valor operacional sem depender de dados proprietarios",
      ],
      results: [
        "Um dos projetos mais fortes para vaga de backend",
        "Boa evidencia de organizacao tecnica e criterio de arquitetura",
        "Stack proxima do que muitas empresas avaliam em estagio",
      ],
      futureImprovements: [
        "Pipeline CI/CD",
        "RBAC mais granular",
        "Exportacao adicional de relatorios",
      ],
    },
  },
  {
    slug: "motiva-orion",
    title: "Motiva ORION",
    shortTitle: "FastAPI + ETL + inteligencia operacional",
    description:
      "Plataforma corporativa de inteligencia operacional para gestao preditiva de vegetacao rodoviaria com ETL, score deterministico, planejamento e relatorios.",
    problemSolved:
      "Consolidar dados heterogeneos, risco operacional e criterio regulatorio em uma visao acionavel para priorizar manutencao e conformidade.",
    architectureUsed:
      "Frontend React; backend FastAPI; PostgreSQL; ETL geoespacial; motor deterministico de risco; relatorios e copiloto apenas interpretativo.",
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
      "Separar calculo deterministico de interpretacao por IA.",
      "Modelar um dominio operacional mais denso que um app academico comum.",
    ],
    learnings: [
      "Produto de maior profundidade operacional e analitica.",
      "Uso de dados como apoio a decisao, nao como fim em si.",
      "Melhor visao de governanca tecnica em sistemas de negocio.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Predictive operations engine",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-motiva-orion",
    demoUrl: null,
    caseStudy: {
      context:
        "Motiva ORION expande o recorte de backend para um dominio mais robusto, com dados geograficos, priorizacao operacional e trilha tecnica de produto corporativo.",
      problem:
        "Sem centralizacao, informacoes de vegetacao, conformidade e criticidade ficam dispersas e dificultam a definicao de plano de acao consistente.",
      solution:
        "A plataforma estrutura ingestao, persistencia, score, planejamento e relatorios em um fluxo unico para leitura executiva e operacional.",
      architecture: [
        "Pipeline ETL para CSV, XLSX, KML e KMZ",
        "FastAPI com autenticacao JWT, rotas de negocio e relatorios",
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
        "Definir regras de risco reproduziveis em dominio complexo",
        "Combinar dados operacionais e geograficos sem comprometer setup",
        "Sustentar narrativa de produto com boa governanca tecnica",
      ],
      results: [
        "Projeto de alto valor para mostrar maturidade de engenharia",
        "Boa demonstracao de backend com dados e operacao",
        "Diferencial relevante em portfolio de estudante",
      ],
      futureImprovements: [
        "Mais cobertura de testes de integracao",
        "Evolucao de observabilidade",
        "Expansao controlada de integracoes externas",
      ],
    },
  },
  {
    slug: "taskflow-dev",
    title: "TaskFlow Dev",
    shortTitle: "FastAPI + arquitetura modular + testes",
    description:
      "API backend para inteligencia operacional de manutencao, com calculo de risco, ranking, planejamento semanal, relatorios e camada explicativa opcional.",
    problemSolved:
      "Demonstrar uma cadeia de decisao de backend clara, da entrada de dados e clima ate ranking, cronograma e relatorios executivos.",
    architectureUsed:
      "Backend em FastAPI com SQLAlchemy, Alembic, modulos por dominio, testes automatizados e suporte a explicacao deterministica ou assistida por modelo.",
    technologies: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Alembic",
      "Pytest",
      "SQLite/PostgreSQL",
    ],
    challenges: [
      "Organizar uma API mais densa em modulos e casos de uso.",
      "Manter rastreabilidade da logica de inteligencia operacional.",
      "Permitir explicacao assistida sem quebrar a confiabilidade do core.",
    ],
    learnings: [
      "Boa base para arquitetura modular em backend Python.",
      "Separacao clara entre dominio, persistencia e rotas.",
      "Valor de testes e migracoes desde o inicio do projeto.",
    ],
    status: "Projeto selecionado",
    imageLabel: "Backend intelligence service",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-taskflow-dev-groq",
    demoUrl: null,
    caseStudy: {
      context:
        "TaskFlow Dev foi estruturado para apresentar backend puro com uma cadeia de negocio clara, sem depender de um frontend para justificar seu valor.",
      problem:
        "Muitos projetos de API mostram apenas CRUD. Aqui o objetivo foi expor um fluxo de decisao com risco, prioridade, planejamento e relatorios.",
      solution:
        "A API organiza modulos por dominio, aplica regras deterministicas para inteligencia operacional e adiciona explicacao assistida apenas como camada complementar.",
      architecture: [
        "FastAPI com modulos por dominio, repositorios, use cases e servicos",
        "SQLAlchemy 2.0, Alembic e banco preparado para evolucao",
        "Testes automatizados e scripts de seed para reproducao local",
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
        "Modelar inteligencia operacional em uma estrutura legivel",
        "Combinar IA assistiva sem transformar o sistema em caixa-preta",
      ],
      results: [
        "Projeto forte para demonstrar arquitetura de API",
        "Boa evidencia de disciplina modular e testes",
        "Complemento consistente ao recorte Java do portfolio",
      ],
      futureImprovements: [
        "Persistencia produtiva completa em PostgreSQL",
        "Mais testes de integracao",
        "Observabilidade e health checks ampliados",
      ],
    },
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "FIAP",
    title: "Base em ciencia da computacao e desenvolvimento de software",
    description:
      "Formacao com fundamentos de logica, orientacao a objetos, desenvolvimento web, estrutura de dados e resolucao de problemas aplicada a software.",
  },
  {
    period: "Backends publicos",
    title: "Consolidacao de APIs, persistencia e arquitetura",
    description:
      "A evolucao do portfolio passou a priorizar autenticacao, APIs REST, modelagem relacional, documentacao tecnica e produtos mais proximos de cenarios reais.",
  },
  {
    period: "Full stack orientado a produto",
    title: "Dashboards, decisao operacional e setup reproduzivel",
    description:
      "Projetos como DevTrack AI, GreenOps e Motiva ORION ampliaram o foco em entrega ponta a ponta, com backend forte e narrativa de produto consistente.",
  },
  {
    period: "Proxima etapa",
    title: "Estagio em engenharia de software",
    description:
      "Busco oportunidade para aprofundar Java, Spring Boot, C#, .NET, testes, boas praticas de engenharia e trabalho colaborativo em produto.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "joaovictoralvesabreu1@gmail.com",
    href: "mailto:joaovictoralvesabreu1@gmail.com",
    icon: FiMail,
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
    icon: FiMail,
  },
];

export const sectionIcons = {
  stack: FiTerminal,
  journey: FiTrendingUp,
  projects: FiLayers,
  about: FiFileText,
  backend: FiServer,
  database: FiDatabase,
  tools: FiBookOpen,
};
