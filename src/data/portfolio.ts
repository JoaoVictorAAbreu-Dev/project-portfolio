import {
  FiActivity,
  FiAward,
  FiBook,
  FiBriefcase,
  FiCloud,
  FiCode,
  FiCommand,
  FiDatabase,
  FiFileText,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiMonitor,
  FiPackage,
  FiPenTool,
  FiPocket,
  FiTerminal,
  FiServer,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import type {
  CertificateGroup,
  ContactLink,
  GithubInsight,
  HighlightItem,
  MetricItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  TimelineItem,
} from "../types/portfolio";

export const seo = {
  title: "Joao Victor Alves de Abreu | Backend Portfolio",
  description:
    "Portfolio profissional de Joao Victor Alves de Abreu, estudante de Ciencia da Computacao na FIAP com foco em Backend Java, C#, .NET, APIs REST, banco de dados e arquitetura de software.",
  image: "/images/profile.webp",
  url: "https://joaovictoraabreu-dev.github.io/site-portifolio",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Stack", href: "/#stack" },
  { label: "Projetos", href: "/#projetos" },
  { label: "GitHub", href: "/#github" },
  { label: "Jornada", href: "/#jornada" },
  { label: "Contato", href: "/#contato" },
];

export const heroMetrics: MetricItem[] = [
  { label: "Projetos desenvolvidos", value: "10+", note: "aplicacoes academicas e autorais" },
  { label: "Tecnologias estudadas", value: "15+", note: "backend, frontend e ferramentas" },
  { label: "Semestres concluidos", value: "3+", note: "base consolidada em evolucao" },
  { label: "Perfil no GitHub", value: "Ativo", note: "repositorios publicados e atualizados" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Java",
        level: "Intermediario",
        description: "POO, organizacao de dominio, modelagem orientada a objetos e projetos academicos.",
        icon: FiCode,
      },
      {
        name: "Spring Boot",
        level: "Em consolidacao",
        description: "Base para APIs REST, autenticacao, documentacao e padroes de backend moderno.",
        icon: FiServer,
      },
      {
        name: "C#",
        level: "Fundamentos aplicados",
        description: "Estudo orientado a logica de negocio, legibilidade e evolucao para ambiente corporativo.",
        icon: FiTerminal,
      },
      {
        name: ".NET",
        level: "Aprendendo",
        description: "Foco em APIs, estrutura de projetos e maturidade para vagas backend.",
        icon: FiPackage,
      },
      {
        name: "Node.js",
        level: "Secundario",
        description: "Uso em interfaces e projetos full stack quando necessario.",
        icon: FiCommand,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        level: "Intermediario",
        description: "Componentizacao, interfaces responsivas e organizacao por modulos.",
        icon: FiMonitor,
      },
      {
        name: "TypeScript",
        level: "Intermediario",
        description: "Tipagem para manutencao, previsibilidade e escalabilidade do frontend.",
        icon: FiFileText,
      },
      {
        name: "HTML",
        level: "Avancando",
        description: "Semantica, estrutura acessivel e base para boa experiencia.",
        icon: FiLayers,
      },
      {
        name: "CSS",
        level: "Avancando",
        description: "Layouts responsivos, consistencia visual e refinamento de interface.",
        icon: FiPenTool,
      },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      {
        name: "PostgreSQL",
        level: "Em estudo pratico",
        description: "Modelagem, consultas SQL e base para APIs e persistencia confiavel.",
        icon: FiDatabase,
      },
      {
        name: "MySQL",
        level: "Fundamentos",
        description: "Conceitos de tabelas, joins, integridade e consultas estruturadas.",
        icon: FiDatabase,
      },
      {
        name: "SQL Server",
        level: "Aprendendo",
        description: "Contato inicial com ecossistema Microsoft e organizacao de dados.",
        icon: FiDatabase,
      },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      {
        name: "Git",
        level: "Uso frequente",
        description: "Versionamento, historico limpo e trabalho incremental.",
        icon: FiGitBranch,
      },
      {
        name: "GitHub",
        level: "Uso frequente",
        description: "Repositorios, publicacao, revisao e portfolio tecnico.",
        icon: FiGithub,
      },
      {
        name: "Docker",
        level: "Basico",
        description: "Containers e reproducao de ambientes de desenvolvimento.",
        icon: FiPackage,
      },
      {
        name: "Postman",
        level: "Basico a intermediario",
        description: "Teste de endpoints e validacao de contratos de API.",
        icon: FiPocket,
      },
      {
        name: "IntelliJ",
        level: "Uso academico",
        description: "Desenvolvimento Java com produtividade e depuracao.",
        icon: FiCode,
      },
      {
        name: "VS Code",
        level: "Uso diario",
        description: "Desenvolvimento web, scripts e organizacao geral do fluxo.",
        icon: FiMonitor,
      },
    ],
  },
  {
    category: "Cloud e DevOps",
    items: [
      {
        name: "GitHub Actions",
        level: "Aprendendo",
        description: "Interesse em pipelines, validacao automatica e padrao profissional.",
        icon: FiGitBranch,
      },
      {
        name: "Azure",
        level: "Aprendendo",
        description: "Exploracao inicial de cloud com foco em empregabilidade backend.",
        icon: FiCloud,
      },
      {
        name: "Docker Compose",
        level: "Basico",
        description: "Orquestracao simples para apps e servicos locais.",
        icon: FiPackage,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "motiva-orion",
    title: "Motiva ORION",
    shortTitle: "Motiva ORION",
    description:
      "Aplicacao mobile voltada para gestao de inspecoes e monitoramento operacional, com foco em clareza de fluxo, usabilidade e acompanhamento em campo.",
    problemSolved:
      "Centralizar operacoes de inspecao e registrar informacoes relevantes com mais velocidade e organizacao.",
    architectureUsed:
      "Frontend mobile modular com componentes reutilizaveis e fluxo de tela orientado a operacao.",
    technologies: ["React Native", "TypeScript", "Expo", "Mobile UX"],
    challenges: [
      "Traduzir um contexto operacional para uma interface objetiva.",
      "Manter navegacao clara para uso recorrente em campo.",
      "Organizar o estado de telas e formularios sem perder simplicidade.",
    ],
    learnings: [
      "Design de fluxos mobile mais orientados a tarefa.",
      "Priorizacao de dados e acoes mais importantes na primeira camada da interface.",
      "Importancia de pensar produto e usabilidade junto com implementacao.",
    ],
    status: "Concluido",
    imageLabel: "Mobile operations app",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-CPAD-motiva-orion-mobile",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto academico ligado a um contexto operacional, com necessidade de apoiar inspecoes e acompanhamento de atividades em uma experiencia mobile objetiva.",
      problem:
        "O desafio era representar processos de inspecao de forma compreensivel, sem poluir a interface e mantendo rapidez no uso.",
      solution:
        "A estrutura foi desenhada para destacar tarefas principais, reduzir atrito na navegacao e reforcar consistencia visual entre telas.",
      architecture: [
        "Separacao por telas e componentes reutilizaveis",
        "Modelagem de fluxo voltada para jornadas de inspecao",
        "Camada visual pensada para legibilidade em dispositivos moveis",
      ],
      technologies: ["React Native", "TypeScript", "Expo"],
      challenges: [
        "Definir prioridade de informacoes no mobile",
        "Evitar interface carregada em fluxos operacionais",
        "Manter consistencia de componentes ao longo das telas",
      ],
      results: [
        "Projeto mais alinhado a contexto real de uso",
        "Melhoria na organizacao visual do fluxo",
        "Evolucao em pensamento de produto aplicado a software",
      ],
      futureImprovements: [
        "Persistencia offline",
        "Sincronizacao com backend real",
        "Autenticacao e perfis operacionais",
      ],
    },
  },
  {
    slug: "space-predictive-analytics-center",
    title: "Space Predictive Analytics Center",
    shortTitle: "Space Analytics Center",
    description:
      "Dashboard web com telemetria simulada e analise preditiva aplicada a um cenario espacial, destacando monitoramento, leitura de dados e tomada de decisao.",
    problemSolved:
      "Transformar dados e eventos em uma visualizacao clara, com narrativa tecnica e leitura rapida para acompanhamento operacional.",
    architectureUsed:
      "Frontend em React com organizacao por componentes, secoes de visualizacao e estrutura orientada a dashboard.",
    technologies: ["React", "TypeScript", "Vite", "Dashboard UI"],
    challenges: [
      "Traduzir telemetria simulada em interface compreensivel.",
      "Equilibrar densidade de informacao com boa leitura.",
      "Criar um produto visualmente tecnico sem perder clareza.",
    ],
    learnings: [
      "Modelagem de dashboards com hierarquia de informacao.",
      "Pensamento de UX para cenarios orientados a dados.",
      "Refinamento de frontends com mais cara de produto real.",
    ],
    status: "Concluido",
    imageLabel: "Telemetry dashboard",
    githubUrl:
      "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-Apllication-development",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto com contexto espacial e necessidade de representar dados simulados de forma crivel para analise e acompanhamento.",
      problem:
        "Interfaces de dados podem se tornar confusas rapidamente quando a densidade aumenta e a narrativa do produto nao esta clara.",
      solution:
        "Foi construida uma experiencia de dashboard com foco em leitura orientada a operacao, organizando informacoes por importancia visual.",
      architecture: [
        "Componentes visuais reaproveitaveis",
        "Secoes orientadas a resumo, monitoramento e analise",
        "Separacao de dados e interface para manutencao futura",
      ],
      technologies: ["React", "TypeScript", "Vite"],
      challenges: [
        "Definir hierarquia de paines e blocos",
        "Evitar excesso de ruido visual",
        "Criar narrativa de produto coerente com o tema",
      ],
      results: [
        "Dashboard mais profissional e coerente",
        "Melhora em UX para interfaces orientadas a dados",
        "Capacidade maior de construir interfaces orientadas a produto",
      ],
      futureImprovements: [
        "Integracao com API real",
        "Filtros e historico de eventos",
        "Paineis configuraveis por usuario",
      ],
    },
  },
  {
    slug: "sistema-java-monitoramento-espacial",
    title: "Sistema Java de Monitoramento Espacial",
    shortTitle: "Monitoramento Espacial em Java",
    description:
      "Aplicacao academica em Java com foco em POO, pacotes, clareza estrutural e organizacao de dominio para monitoramento de eventos espaciais.",
    problemSolved:
      "Estruturar um sistema orientado a objetos de forma legivel, separando responsabilidades e representando entidades do dominio com mais clareza.",
    architectureUsed:
      "Arquitetura academica baseada em pacotes, classes por responsabilidade e principios de clean code.",
    technologies: ["Java", "POO", "Pacotes", "Clean Code"],
    challenges: [
      "Definir bem as responsabilidades das classes.",
      "Evitar acoplamento excessivo no modelo de dominio.",
      "Manter o codigo compreensivel e facil de evoluir.",
    ],
    learnings: [
      "Evolucao em modelagem orientada a objetos.",
      "Uso mais consciente de organizacao por pacotes.",
      "Melhor percepcao sobre separacao de responsabilidades.",
    ],
    status: "Concluido",
    imageLabel: "Java architecture project",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-POO",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto academico orientado a exercitar fundamentos de Java, POO e organizacao de software em torno de um dominio de monitoramento.",
      problem:
        "O objetivo principal era sair de uma implementacao apenas funcional para uma estrutura mais limpa e coerente.",
      solution:
        "A modelagem foi organizada com foco em responsabilidade clara entre classes, separacao por pacotes e leitura simples do dominio.",
      architecture: [
        "Pacotes por responsabilidade",
        "Entidades e classes focadas no dominio",
        "Separacao entre regras e representacao de dados",
      ],
      technologies: ["Java", "POO"],
      challenges: [
        "Controlar o acoplamento entre objetos",
        "Modelar o dominio sem exagerar em complexidade",
        "Escrever codigo limpo em projeto academico",
      ],
      results: [
        "Melhora consistente em orientacao a objetos",
        "Codigo mais organizado e legivel",
        "Base mais forte para backend em Java",
      ],
      futureImprovements: [
        "Persistencia de dados",
        "Exposicao de API",
        "Testes automatizados",
      ],
    },
  },
  {
    slug: "api-rest-backend",
    title: "API REST Backend",
    shortTitle: "API REST Backend",
    description:
      "Projeto conceitual de backend para gestao de tarefas, pensado para demonstrar maturidade em autenticacao, CRUD, persistencia, documentacao e arquitetura em Java.",
    problemSolved:
      "Representar com clareza o tipo de solucao backend que melhor traduz meu objetivo profissional para recrutadores e times de engenharia.",
    architectureUsed: "Camadas controller, service, repository, DTO e documentacao de API.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "JWT"],
    challenges: [
      "Transformar intencao profissional em projeto que comunique valor tecnico.",
      "Organizar requisitos de autenticacao, persistencia e documentacao em uma mesma proposta.",
      "Evidenciar mentalidade backend mesmo antes da publicacao final do repositorio.",
    ],
    learnings: [
      "Definicao de escopo de backend com foco em empregabilidade.",
      "Clareza sobre arquitetura em camadas e requisitos essenciais de API.",
      "Importancia de documentar contexto, decisoes e proximos passos.",
    ],
    status: "Planejado",
    imageLabel: "REST API architecture",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto estruturado como estudo de caso para representar o tipo de backend profissional que quero construir para vagas de Software Engineer.",
      problem:
        "A maior parte dos meus repositorios publicos atuais enfatiza experiencias academicas e frontend, enquanto meu objetivo profissional e backend.",
      solution:
        "Foi definido um estudo de caso de API REST com autenticacao, CRUD, persistencia e documentacao para comunicar direcao tecnica e proximo passo claro.",
      architecture: [
        "Controller, service, repository e DTOs",
        "Camada de seguranca com autenticacao JWT",
        "Persistencia relacional e documentacao OpenAPI",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "JWT"],
      challenges: [
        "Alinhar projeto com mercado e com minha trilha atual",
        "Definir um escopo enxuto mas profissional",
        "Demonstrar pensamento de arquitetura antes da publicacao final",
      ],
      results: [
        "Estudo de caso alinhado ao objetivo de carreira",
        "Narrativa mais forte de backend no portfolio",
        "Direcao concreta para proxima entrega publica",
      ],
      futureImprovements: [
        "Publicar repositorio real",
        "Adicionar testes e CI",
        "Subir demonstracao documentada",
      ],
    },
  },
];

export const githubInsights: GithubInsight[] = [
  {
    label: "Repositorios em destaque",
    value: "Motiva ORION, Bot_NBA, Projeto_AetherOS",
    detail: "Projetos recentes mostram variedade entre produto, automacao e experimentacao tecnica.",
  },
  {
    label: "Linguagens mais usadas",
    value: "Java, TypeScript, Python",
    detail: "A distribuicao reforca minha base academica e meu foco atual em backend e aplicacoes.",
  },
  {
    label: "Contribuicoes",
    value: "Atividade recorrente em 2026",
    detail: "Projetos recentes publicados e atualizados mostram consistencia de estudo e entrega.",
  },
  {
    label: "Perfil tecnico",
    value: "Aprendizado orientado a projeto",
    detail: "Uso o GitHub como trilha publica de evolucao, documentando desafios e solucao aplicada.",
  },
];

export const featuredRepositories = [
  {
    name: "Sprint02-CPAD-motiva-orion-mobile",
    url: "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-CPAD-motiva-orion-mobile",
    note: "Aplicacao mobile com foco operacional e fluxo de inspecao.",
  },
  {
    name: "Sprint02-Apllication-development",
    url: "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-Apllication-development",
    note: "Dashboard web com narrativa orientada a monitoramento e decisao.",
  },
  {
    name: "Sprint02-POO",
    url: "https://github.com/JoaoVictorAAbreu-Dev/Sprint02-POO",
    note: "Projeto Java com POO, modelagem e organizacao de dominio.",
  },
  {
    name: "Bot_NBA",
    url: "https://github.com/JoaoVictorAAbreu-Dev/Bot_NBA",
    note: "Automacao com integracoes externas e leitura de dados.",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Inicio da FIAP",
    title: "Base academica em Ciencia da Computacao",
    description:
      "Inicio da formacao com foco em fundamentos, programacao, logica e resolucao de problemas.",
  },
  {
    period: "Aprendizado de Java",
    title: "Consolidacao em POO e organizacao de software",
    description:
      "Projetos como Sprint02-POO e estudos em Java reforcaram clareza estrutural e orientacao a objetos.",
  },
  {
    period: "Global Solutions",
    title: "Projetos multidisciplinares com contexto real",
    description:
      "Experiencias academicas com web, mobile, dados e desafios aplicados a problemas concretos.",
  },
  {
    period: "CCR Motiva Challenge",
    title: "Produto orientado a operacao",
    description:
      "Desenvolvimento de solucoes para monitoramento, inspecao e experiencia de usuario em cenarios operacionais.",
  },
  {
    period: "Aprendizado de .NET",
    title: "Expansao da trilha backend",
    description:
      "Estudos direcionados para fortalecer empregabilidade em ecossistema Microsoft e APIs corporativas.",
  },
  {
    period: "Agora",
    title: "Foco em estagio de Software Engineering",
    description:
      "Prioridade em backend Java, C#, .NET, APIs REST, banco de dados e arquitetura de software.",
  },
];

export const certifications: CertificateGroup[] = [
  {
    provider: "Alura",
    items: ["Espaco reservado para cursos concluidos e trilhas de Java e backend."],
  },
  {
    provider: "FIAP",
    items: ["Projetos, disciplinas e experiencias academicas relevantes."],
  },
  {
    provider: "DIO",
    items: ["Espaco para bootcamps e formacoes complementares."],
  },
  {
    provider: "Microsoft Learn",
    items: ["Espaco para trilhas de .NET, Azure e backend."],
  },
  {
    provider: "Cisco",
    items: ["Espaco para estudos de redes e infraestrutura."],
  },
];

export const highlights: HighlightItem[] = [
  {
    title: "Mentalidade backend",
    description:
      "Interesse consistente por regras de negocio, arquitetura, APIs e persistencia de dados.",
    icon: FiServer,
  },
  {
    title: "Aprendizado continuo",
    description:
      "Evolucao orientada a projeto, com busca ativa por melhoria tecnica e organizacao de portfolio.",
    icon: FiTrendingUp,
  },
  {
    title: "Analise e resolucao",
    description:
      "Facilidade para decompor problemas, entender contexto e estruturar solucoes de forma objetiva.",
    icon: FiActivity,
  },
  {
    title: "Trabalho em equipe",
    description:
      "Projetos academicos e desafios colaborativos reforcaram comunicacao e responsabilidade compartilhada.",
    icon: FiUsers,
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "jv9217096@gmail.com",
    href: "mailto:jv9217096@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/JoaoVictorAAbreu-Dev",
    href: "https://github.com/JoaoVictorAAbreu-Dev",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joaovictoraabreu",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
    external: true,
  },
  {
    label: "Contato rapido",
    value: "Disponivel por email ou LinkedIn",
    href: "mailto:jv9217096@gmail.com?subject=Contato%20rapido%20via%20portfolio",
    icon: FiMessageCircle,
  },
];

export const aboutPoints = [
  "Tenho direcionado minha formacao para backend porque me interesso por estrutura de software, integracao entre sistemas, regras de negocio e confiabilidade tecnica.",
  "Meu foco nao esta apenas em construir funcionalidades. Busco entender arquitetura, contratos de API, responsabilidade entre camadas e qualidade de implementacao.",
  "Ao longo da graduacao, venho usando projetos academicos como espaco de evolucao tecnica, fortalecendo repertorio pratico, capacidade analitica e colaboracao em equipe.",
];

export const quickProfile = [
  { label: "Objetivo", value: "Estagio em Engenharia de Software" },
  { label: "Formacao", value: "Ciencia da Computacao - FIAP" },
  { label: "Especialidade em construcao", value: "Backend Java, C# e .NET" },
  { label: "Interesse tecnico", value: "APIs REST, banco de dados e arquitetura" },
  { label: "Disponibilidade", value: "Aberto a estagio, desafios tecnicos e networking" },
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/JoaoVictorAAbreu-Dev", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
  },
  { label: "Email", href: "mailto:jv9217096@gmail.com", icon: FiMail },
];

export const sectionIcons = {
  stack: FiCode,
  github: FiGitBranch,
  journey: FiBriefcase,
  certifications: FiAward,
  about: FiBook,
  architecture: FiLayers,
  database: FiDatabase,
};
