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
  GithubInsight,
  HighlightItem,
  LearningItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  TerminalLine,
  TimelineItem,
} from "../types/portfolio";

export const seo = {
  title: "João Victor Alves de Abreu | Backend Engineering Portfolio",
  description:
    "Portfólio profissional com foco em backend, Java, Spring Boot, .NET, Python, APIs REST, bancos relacionais e projetos orientados a produto.",
  image: "/images/profile.webp",
  url: "https://joaovictorabreu-joaovictor-labs.vercel.app",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "GitHub", href: "#github" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contato", href: "#contato" },
];

export const heroSignals = [
  "São Paulo/SP - Brasil",
  "Status: ONLINE",
  "Objetivo: Estágio em Engenharia de Software / Backend",
];

export const quickProfile = [
  { label: "Objetivo", value: "Estágio em Engenharia de Software" },
  { label: "Formação", value: "FIAP · Ciência da Computação" },
  {
    label: "Foco técnico",
    value: "Backend com Java, Spring Boot, C#, .NET e Python",
  },
  {
    label: "Posicionamento",
    value: "Projetos reais, APIs, dados, testes e documentação",
  },
];

export const profileTags = [
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "Python",
  "REST APIs",
  "PostgreSQL",
  "Docker",
  "Linux",
];

export const terminalLines: TerminalLine[] = [
  { label: "> loading_profile", value: "completed" },
  { label: "> focus", value: "backend engineering" },
  {
    label: "> current_stack",
    value: "Java / Spring Boot / C# / .NET / Python / SQL",
  },
  { label: "> goal", value: "software engineering internship" },
  { label: "> status", value: "building real-world projects" },
];

export const aboutPoints = [
  "Sou estudante de Ciência da Computação na FIAP, com foco em Engenharia de Software, desenvolvimento backend e arquitetura de sistemas escaláveis.",
  "Meu interesse principal está em APIs, autenticação, organização em camadas, persistência relacional e produtos que resolvem problemas reais com clareza técnica.",
  "Estou construindo um portfólio orientado à empregabilidade, com repositórios que mostram backend, frontend, dados, documentação, testes e setup reproduzível.",
];

export const highlights: HighlightItem[] = [
  {
    title: "Raciocínio de produto",
    description:
      "Os projetos não param em CRUD básico. Eles trazem contexto, fluxo de decisão, regras de negócio e leitura operacional mais próxima do mercado.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Organização técnica",
    description:
      "Procuro separar responsabilidade entre camadas, contratos de API, serviços, persistência, documentação e automação local.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Aprendizado rápido",
    description:
      "Tenho facilidade para absorver tecnologias novas e transformar estudo em entrega prática, com disciplina de documentação e evolução incremental.",
    icon: HiOutlineArrowTrendingUp,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend core",
    items: [
      {
        name: "Java",
        level: "Base forte",
        description:
          "POO, estruturação de regras de negócio, modelagem de domínio e construção de APIs mais organizadas.",
        icon: HiOutlineCommandLine,
      },
      {
        name: "Spring Boot",
        level: "Em crescimento",
        description:
          "APIs REST, validação, serviços, segurança, documentação OpenAPI e arquitetura em camadas.",
        icon: HiOutlineBolt,
      },
      {
        name: "C# e .NET",
        level: "Stack alvo",
        description:
          "Parte central do meu foco de estágio, com aprofundamento contínuo em backend corporativo.",
        icon: HiOutlineCodeBracket,
      },
      {
        name: "Python",
        level: "Uso aplicado",
        description:
          "APIs com FastAPI, integração com dados, automações e produtos de apoio à decisão.",
        icon: HiOutlineCpuChip,
      },
    ],
  },
  {
    category: "Web e interface",
    items: [
      {
        name: "JavaScript",
        level: "Uso recorrente",
        description:
          "Base para interfaces, consumo de APIs e comportamento de aplicações web.",
        icon: HiOutlineCodeBracket,
      },
      {
        name: "TypeScript",
        level: "Uso recorrente",
        description:
          "Tipagem de contratos, componentes reutilizáveis e manutenção mais segura no frontend.",
        icon: HiOutlineShieldCheck,
      },
      {
        name: "React",
        level: "Uso recorrente",
        description:
          "Dashboards, telas operacionais, formulários e componentes com foco em leitura técnica.",
        icon: HiOutlineCommandLine,
      },
    ],
  },
  {
    category: "Dados e infraestrutura",
    items: [
      {
        name: "SQL",
        level: "Aplicado em projeto",
        description:
          "Modelagem relacional, consultas, persistência e apoio a indicadores de negócio.",
        icon: HiOutlineCircleStack,
      },
      {
        name: "APIs REST",
        level: "Foco principal",
        description:
          "Contratos claros, rotas organizadas, autenticação e integração entre serviços e interface.",
        icon: HiOutlineCloud,
      },
      {
        name: "Docker básico",
        level: "Base profissional",
        description:
          "Ambientes locais reproduzíveis com backend, frontend e banco de dados isolados.",
        icon: HiOutlineLifebuoy,
      },
      {
        name: "Git e GitHub",
        level: "Uso diário",
        description:
          "Versionamento, organização de repositórios, documentação pública e fluxo incremental.",
        icon: HiOutlineFolderOpen,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "devtrack-ai",
    title: "DevTrack AI",
    shortTitle: "productivity platform",
    description:
      "Plataforma de produtividade para desenvolvedores com projetos, tarefas, metas de estudo, resumos semanais e recomendações explicáveis.",
    problemSolved:
      "Organizar produtividade técnica sem cair em um gerenciador genérico de tarefas, conectando entregas, estudos, risco de atraso e prioridade semanal.",
    architectureUsed:
      "Backend Java 21 com Spring Boot, segurança, validação e OpenAPI; frontend React com TypeScript; PostgreSQL e Docker Compose para ambiente local.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "Docker",
    ],
    challenges: [
      "Traduzir produtividade em regras explicáveis e não em IA opaca.",
      "Conectar metas de estudo, tarefas e resumo semanal com boa narrativa.",
      "Equilibrar produto, backend e documentação em um mesmo case.",
    ],
    learnings: [
      "Produto full stack com proposta clara para recrutadores.",
      "Boa demonstração de autenticação, API, domínio e setup local.",
      "Projeto forte para entrevistas com foco em engenharia de software.",
    ],
    status: "featured build",
    imageLabel: "devtrack-ai.dashboard",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-devtrack-ai",
    demoUrl: null,
    caseStudy: {
      context:
        "DevTrack AI foi estruturado como produto de portfólio para mostrar uma entrega full stack além de um simples gerenciador de tarefas.",
      problem:
        "Ferramentas comuns registram atividades, mas raramente ajudam a interpretar risco, atraso, carga aberta e prioridade da semana de forma justificável.",
      solution:
        "O projeto combina projetos, tarefas, metas de estudo e visão semanal com recomendações baseadas em sinais objetivos do sistema.",
      architecture: [
        "Backend Spring Boot com segurança, validação e contratos de API",
        "Frontend React orientado a dashboard e leitura executiva",
        "PostgreSQL e Docker Compose para setup reproduzível",
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
        "Transformar métricas simples em recomendações úteis",
        "Equilibrar escopo e clareza arquitetural",
      ],
      results: [
        "Projeto consistente para demonstrar backend e produto",
        "Narrativa forte para vagas de estágio em software engineering",
        "Boa amostra de organização técnica ponta a ponta",
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
    shortTitle: "spring backend + dashboard",
    description:
      "Centro de controle operacional para priorização de vegetação rodoviária com autenticação JWT, planejamento semanal e suporte a decisão.",
    problemSolved:
      "Evitar decisões de manutenção guiadas por cronograma fixo, substituindo isso por priorização explicável, ranking e plano semanal por capacidade.",
    architectureUsed:
      "Backend em Java 21 com Spring Security, DTOs, serviços e OpenAPI; frontend React; PostgreSQL; testes e scripts locais de setup.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "React",
      "Vitest",
    ],
    challenges: [
      "Modelar um cenário operacional realista sem perder simplicidade.",
      "Manter a regra de negócio centralizada e legível.",
      "Conectar ranking, indicadores, clima e autenticação no mesmo produto.",
    ],
    learnings: [
      "Projeto muito forte para demonstrar arquitetura em camadas.",
      "Boa vitrine de Spring Security, JWT e OpenAPI.",
      "Mostra backend com foco em regra de negócio, não só interface.",
    ],
    status: "featured build",
    imageLabel: "greenops.control-center",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-greenops-control-center",
    demoUrl: null,
    caseStudy: {
      context:
        "GreenOps Control Center foi pensado como um produto de apoio à decisão, e não como um CRUD genérico de cadastros.",
      problem:
        "Cronogramas lineares de manutenção costumam gerar custo extra por intervenção antecipada e risco por atraso de execução.",
      solution:
        "O sistema calcula prioridade por trecho, organiza ranking, mostra indicadores executivos e gera plano semanal conforme capacidade das equipes.",
      architecture: [
        "Backend Spring Boot com controller, dto, service, repository, model e exception",
        "Autenticação JWT e documentação OpenAPI para demonstrar maturidade de API",
        "Frontend React para painel operacional e leitura de sinais críticos",
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
        "Explicar a priorização de forma transparente",
        "Integrar dados operacionais e climáticos sem inflar escopo",
        "Preservar clareza técnica para avaliação de recrutadores",
      ],
      results: [
        "Um dos projetos mais fortes para vagas backend",
        "Boa evidência de organização técnica e raciocínio de produto",
        "Entrega mais próxima de um cenário corporativo real",
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
    shortTitle: "operational intelligence platform",
    description:
      "Plataforma corporativa de inteligência operacional para gestão preditiva de vegetação rodoviária com ETL, scoring determinístico e relatórios.",
    problemSolved:
      "Consolidar dados heterogêneos, risco operacional e contexto regulatório em uma visão acionável para priorização de campo.",
    architectureUsed:
      "Frontend React; backend FastAPI; PostgreSQL; pipeline ETL geoespacial; motor determinístico de risco; relatórios e camada interpretativa complementar.",
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
      "Separar cálculo determinístico da camada interpretativa.",
      "Sustentar um domínio mais denso do que um projeto acadêmico comum.",
    ],
    learnings: [
      "Projeto profundo em operação, dados e backend.",
      "Mostra capacidade de trabalhar com domínio mais complexo.",
      "Diferencial importante pela maturidade do contexto técnico.",
    ],
    status: "featured build",
    imageLabel: "motiva-orion.exec-panel",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-motiva-orion",
    demoUrl: null,
    caseStudy: {
      context:
        "Motiva ORION amplia o recorte do portfólio para um cenário com dados geográficos, conformidade, priorização e tomada de decisão operacional.",
      problem:
        "Sem centralização, dados de vegetação, risco, clima e conformidade ficam dispersos e dificultam a definição de um plano de ação consistente.",
      solution:
        "A plataforma organiza ingestão, persistência, scoring, planejamento de missão, APIs e dashboards em um fluxo único de leitura operacional.",
      architecture: [
        "Pipeline ETL para CSV, XLSX, KML e KMZ",
        "FastAPI com autenticação JWT, regras de negócio e relatórios",
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
        "Definir regras reproduzíveis em um domínio complexo",
        "Combinar geodados, scoring e experiência operacional",
        "Controlar escopo mesmo com múltiplas capacidades do produto",
      ],
      results: [
        "Projeto de alto valor para demonstrar engenharia aplicada",
        "Boa amostra de backend com dados e decisão operacional",
        "Diferencial relevante em um portfólio de estudante",
      ],
      futureImprovements: [
        "Mais testes de integração",
        "Observabilidade do backend",
        "Expansão controlada das integrações externas",
      ],
    },
  },
  {
    slug: "climate-analytics",
    title: "Climate Analytics",
    shortTitle: "weather intelligence dashboard",
    description:
      "Dashboard de inteligência climática com visão de condições atuais, previsão de curto prazo e indicadores simples de risco para planejamento operacional.",
    problemSolved:
      "Transformar dados públicos de clima em sinais legíveis para decisão, sem esconder a lógica por trás de modelos opacos.",
    architectureUsed:
      "Backend em FastAPI para endpoints de clima e analytics; frontend React com TypeScript; consumo da Open-Meteo API e testes básicos.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Open-Meteo",
      "Pytest",
    ],
    challenges: [
      "Traduzir dados climáticos em alertas operacionais legíveis.",
      "Manter o produto simples, mas com valor real de leitura.",
      "Integrar backend e frontend de forma enxuta e profissional.",
    ],
    learnings: [
      "Boa prova de conceito para APIs orientadas a analytics.",
      "Mostra integração entre dados públicos e painel web.",
      "Reforça leitura de produto baseada em sinais explicáveis.",
    ],
    status: "selected build",
    imageLabel: "climate-analytics.forecast",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/project-climate-analytics",
    demoUrl: null,
    caseStudy: {
      context:
        "Climate Analytics foi posicionado como uma ferramenta de suporte à decisão com base em dados públicos de clima.",
      problem:
        "Muitos painéis climáticos mostram números, mas não ajudam a transformar previsão em ação operacional direta.",
      solution:
        "O sistema entrega snapshot atual, blocos de previsão e indicadores simples de calor, vento, umidade e risco de chuva.",
      architecture: [
        "FastAPI com endpoints de saúde, clima, forecast e analytics",
        "Frontend React com leitura enxuta de dados por cidade",
        "Integração com Open-Meteo e checagens básicas de qualidade",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "Open-Meteo",
        "Pytest",
      ],
      challenges: [
        "Evitar um dashboard sem interpretação",
        "Escolher métricas úteis para planejamento",
        "Preservar simplicidade técnica no escopo",
      ],
      results: [
        "Boa vitrine de integração com API pública",
        "Exemplo claro de produto enxuto com backend e frontend",
        "Complementa o portfólio com recorte analítico",
      ],
      futureImprovements: [
        "Persistência de histórico por cidade",
        "Alertas customizados",
        "Comparação entre janelas de tempo",
      ],
    },
  },
  {
    slug: "bot-nba",
    title: "Bot NBA",
    shortTitle: "discord bot + api fallback",
    description:
      "Bot interativo para fãs da NBA com comandos em Discord, dashboard web e fallback entre provedores de dados esportivos.",
    problemSolved:
      "Consumir dados da NBA de forma confiável mesmo quando um dos provedores externos falha, preservando a utilidade do produto.",
    architectureUsed:
      "Aplicação em Python com discord.py, serviços isolados, fallback entre APIs e dashboard web complementar com FastAPI.",
    technologies: [
      "Python",
      "discord.py",
      "FastAPI",
      "TheSportsDB",
      "balldontlie",
      "HTML",
    ],
    challenges: [
      "Tratar indisponibilidade de APIs externas.",
      "Organizar comandos, serviços e utilitários sem acoplamento excessivo.",
      "Manter UX simples entre bot e painel web.",
    ],
    learnings: [
      "Mostra integração prática com APIs de terceiros.",
      "Evidencia tratamento de falhas e fallback de provider.",
      "Adiciona automação e bot development ao portfólio.",
    ],
    status: "selected build",
    imageLabel: "bot-nba.command-center",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-bot-nba",
    demoUrl: null,
    caseStudy: {
      context:
        "Bot NBA foi construído para consumir informações esportivas em tempo real com uma experiência simples dentro do Discord.",
      problem:
        "APIs esportivas nem sempre são estáveis ou completas. Isso reduz confiabilidade quando o produto depende de uma única fonte de dados.",
      solution:
        "O projeto combina balldontlie com TheSportsDB como fallback e expõe comandos úteis de times, jogadores, jogos e ranking.",
      architecture: [
        "Camada de serviços para integração com APIs externas",
        "Comandos desacoplados do core do bot",
        "Painel web complementar para visualização local",
      ],
      technologies: [
        "Python",
        "discord.py",
        "FastAPI",
        "balldontlie",
        "TheSportsDB",
      ],
      challenges: [
        "Gerenciar indisponibilidade de provedores",
        "Padronizar respostas entre fontes diferentes",
        "Controlar configuração local com múltiplas chaves",
      ],
      results: [
        "Boa amostra de integração e tolerância a falhas",
        "Projeto útil para demonstrar automação com APIs",
        "Expande o portfólio além do dashboard tradicional",
      ],
      futureImprovements: [
        "Mais testes de integração",
        "Cache local para consultas frequentes",
        "Histórico de interações por usuário",
      ],
    },
  },
  {
    slug: "aetheros",
    title: "AetherOS",
    shortTitle: "academic open source operating system",
    description:
      "Sistema operacional acadêmico em Rust para x86_64, com arquitetura modular, documentação forte e foco educacional em baixo nível.",
    problemSolved:
      "Criar uma base séria de estudo para OSDev sem ficar apenas em um boot screen mínimo ou em um repositório sem explicação arquitetural.",
    architectureUsed:
      "Projeto em Rust com kernel modular, crates organizadas, documentação, roadmap, convenções de contribuição e execução em QEMU.",
    technologies: [
      "Rust",
      "x86_64",
      "QEMU",
      "Cargo",
      "Makefile",
      "GitHub Actions",
    ],
    challenges: [
      "Trabalhar em baixo nível com disciplina arquitetural.",
      "Documentar decisões para quem ainda está aprendendo OSDev.",
      "Equilibrar profundidade técnica e clareza didática.",
    ],
    learnings: [
      "Mostra curiosidade técnica além do recorte web.",
      "Reforça disciplina arquitetural e documentação.",
      "Diferencial de profundidade para um estudante em início de carreira.",
    ],
    status: "open source build",
    imageLabel: "aetheros.kernel-view",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/project-aetheros",
    demoUrl: null,
    caseStudy: {
      context:
        "AetherOS nasceu como sistema operacional acadêmico open source, com o objetivo de ser ao mesmo tempo sério tecnicamente e útil como referência educacional.",
      problem:
        "Repositórios de sistemas operacionais amadores costumam ser ou superficiais demais, ou técnicos demais sem documentação suficiente para aprendizado.",
      solution:
        "O projeto organiza kernel, crates, scripts e documentação para evoluir de forma incremental com foco em arquitetura limpa e clareza.",
      architecture: [
        "Kernel modular em Rust para x86_64",
        "Crates e diretórios separados por responsabilidade",
        "Docs, roadmap e convenções de contribuição como parte do produto",
      ],
      technologies: ["Rust", "x86_64", "QEMU", "Cargo", "GitHub Actions"],
      challenges: [
        "Lidar com baixo nível e modularidade ao mesmo tempo",
        "Documentar trade-offs de arquitetura",
        "Tornar o projeto útil para estudo e contribuição",
      ],
      results: [
        "Projeto que amplia a profundidade técnica do portfólio",
        "Boa demonstração de disciplina arquitetural",
        "Diferencial de aprendizado para recrutadores técnicos",
      ],
      futureImprovements: [
        "Mais testes automatizados de subsistemas",
        "Expansão da documentação técnica",
        "Evolução incremental do kernel e user space",
      ],
    },
  },
];

export const githubInsights: GithubInsight[] = [
  {
    label: "Public repositories",
    value: "43",
    detail:
      "Base pública com projetos de backend, dashboards, automações e estudos de sistemas.",
  },
  {
    label: "Primary focus",
    value: "Backend engineering",
    detail:
      "Java, Spring Boot, Python, APIs REST, persistência relacional e organização de domínio.",
  },
  {
    label: "Current positioning",
    value: "Open source in progress",
    detail:
      "Portfólio evoluindo com documentação, setup local, testes e narrativa técnica mais madura.",
  },
  {
    label: "Main signal",
    value: "Product-driven builds",
    detail:
      "Projetos priorizam contexto real, regra de negócio e clareza técnica para recrutadores.",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2026",
    title: "Computer Science Student",
    description:
      "Base acadêmica em lógica, POO, desenvolvimento web, estrutura de dados e fundamentos de engenharia de software na FIAP.",
  },
  {
    period: "2026",
    title: "Backend projects and academic systems",
    description:
      "Construção de APIs, dashboards, automações e sistemas acadêmicos com foco crescente em backend e organização técnica.",
  },
  {
    period: "2027",
    title: "Backend Developer Internship",
    description:
      "Próxima etapa desejada: aplicar backend, testes, documentação e trabalho colaborativo em ambiente profissional.",
  },
  {
    period: "2028",
    title: "Software Engineer Junior",
    description:
      "Evolução para contexto de produto com mais profundidade em arquitetura, dados, cloud e qualidade contínua.",
  },
  {
    period: "2030+",
    title: "Software Engineer focused on scalable systems",
    description:
      "Objetivo de longo prazo: atuar com sistemas escaláveis, backend robusto e decisões técnicas orientadas a produto.",
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
      "Aprofundar segurança, validação, testes, persistência e desenho de APIs para produto real.",
  },
  {
    title: "Microsoft AZ-900",
    status: "Planned",
    detail:
      "Consolidar base de cloud e vocabulário de infraestrutura relevante para times de engenharia.",
  },
  {
    title: "GitHub Foundations",
    status: "Planned",
    detail:
      "Refinar práticas de versionamento, colaboração, automação e documentação pública.",
  },
  {
    title: "AWS Cloud Practitioner",
    status: "Planned",
    detail:
      "Expandir repertório de cloud e serviços frequentemente presentes em vagas de estágio.",
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
  github: HiOutlineCpuChip,
  journey: HiOutlineRocketLaunch,
};
