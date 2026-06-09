import {
  FiActivity,
  FiBookOpen,
  FiCloud,
  FiCode,
  FiDatabase,
  FiFileText,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiPackage,
  FiServer,
  FiTool,
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
  title: "João Victor A. Abreu | Backend Engineer Portfolio",
  description:
    "Portfólio de João Victor Alves de Abreu, estudante de Ciência da Computação na FIAP com foco em backend, FastAPI, machine learning e sistemas orientados a produto.",
  image: "/images/profile.webp",
  url: "https://joaovictoraabreu-dev.github.io/Meu_Portifolio",
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contato", href: "#contato" },
];

export const aboutPoints = [
  "Sou estudante de Ciência da Computação na FIAP e direciono minha formação para backend, APIs, dados e arquitetura de software com aplicação prática.",
  "Gosto de construir sistemas que transformam dados em decisão: painéis operacionais, APIs, automações e produtos que precisem de clareza técnica para evoluir.",
  "Uso projetos públicos para demonstrar raciocínio de engenharia, organização de código e capacidade de sair de protótipos acadêmicos para soluções mais próximas de contexto real.",
];

export const quickProfile = [
  { label: "Formação", value: "Ciência da Computação · FIAP" },
  { label: "Foco atual", value: "Backend, FastAPI, Java e Machine Learning aplicado" },
  { label: "Base técnica", value: "Python, APIs REST, dados, frontend React e arquitetura" },
  { label: "Localização", value: "São Paulo, SP · Brasil" },
];

export const highlights: HighlightItem[] = [
  {
    title: "Pensamento de produto",
    description:
      "Projetos são apresentados com contexto, problema, arquitetura e impacto técnico, e não apenas como interface visual.",
    icon: FiLayers,
  },
  {
    title: "Base backend",
    description:
      "Tenho foco em APIs, modelagem de dados, integração entre camadas e sistemas que precisem de manutenção previsível.",
    icon: FiServer,
  },
  {
    title: "Aprendizado contínuo",
    description:
      "Minha evolução acontece por entregas reais, estudo orientado a projeto e revisão constante de qualidade técnica.",
    icon: FiTrendingUp,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Python · FastAPI · REST APIs",
        level: "Principal",
        description:
          "Construção de APIs, organização por serviços, integração com dados e foco em clareza de contrato.",
        icon: FiServer,
      },
      {
        name: "Java · Spring Boot",
        level: "Em consolidação",
        description:
          "Evolução direcionada para backend corporativo, camadas de serviço, autenticação e arquitetura orientada a manutenção.",
        icon: FiCode,
      },
      {
        name: "SQL · PostgreSQL · SQLAlchemy",
        level: "Aplicado em projeto",
        description:
          "Persistência relacional, modelagem de dados e acesso consistente para aplicações orientadas a negócio.",
        icon: FiDatabase,
      },
    ],
  },
  {
    category: "ML / Dados",
    items: [
      {
        name: "scikit-learn · Pandas · NumPy",
        level: "Aplicado em projeto",
        description:
          "Pipelines de análise, preparação de dados, modelos supervisionados e suporte à tomada de decisão.",
        icon: FiActivity,
      },
      {
        name: "Jupyter · Visualização",
        level: "Uso frequente",
        description:
          "Exploração de dados, prototipagem de modelos e documentação técnica do raciocínio analítico.",
        icon: FiBookOpen,
      },
    ],
  },
  {
    category: "Cloud / Deploy",
    items: [
      {
        name: "Azure",
        level: "Em estudo",
        description:
          "Interesse em serviços de dados, storage e deploy para fortalecer a trilha de backend e ML.",
        icon: FiCloud,
      },
      {
        name: "Netlify · Vercel · GitHub Pages",
        level: "Uso prático",
        description:
          "Publicação de frontends, ajustes de base path, SEO básico e automação de deploy.",
        icon: FiCloud,
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React · TypeScript · Tailwind CSS",
        level: "Uso frequente",
        description:
          "Interfaces responsivas, componentização e páginas que comuniquem valor técnico com clareza.",
        icon: FiMonitor,
      },
      {
        name: "React Native · Expo",
        level: "Aplicado em projeto",
        description:
          "Fluxos mobile com foco em operação, formulários e usabilidade para cenários de campo.",
        icon: FiMonitor,
      },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      {
        name: "Git · GitHub",
        level: "Uso diário",
        description:
          "Versionamento, publicação de projetos, histórico incremental e fluxo de revisão.",
        icon: FiGithub,
      },
      {
        name: "Docker · ESLint · Prettier · Husky",
        level: "Base de qualidade",
        description:
          "Padronização de código, automação de validações e reprodutibilidade em desenvolvimento.",
        icon: FiTool,
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "motiva-orion",
    title: "Motiva ORION",
    shortTitle: "FastAPI + dados operacionais",
    description:
      "Plataforma operacional para gestão preditiva de vegetação rodoviária, com foco em risco, conformidade e apoio à decisão.",
    problemSolved:
      "Consolidar dados operacionais e geográficos em uma visão acionável para priorização de manutenção e conformidade regulatória.",
    architectureUsed:
      "Frontend React, backend FastAPI, persistência relacional, ETL de dados e motor determinístico de risco com apoio de ML.",
    technologies: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "scikit-learn"],
    challenges: [
      "Transformar dados heterogêneos em um fluxo operacional legível.",
      "Separar cálculo determinístico de risco da camada interpretativa.",
      "Organizar frontend, API e regras de negócio sem perder clareza.",
    ],
    learnings: [
      "Arquitetura orientada a operação com decisões justificáveis.",
      "Integração entre ETL, API e visualização de dados.",
      "Modelagem de produto com foco em contexto real de uso.",
    ],
    status: "Projeto público",
    imageLabel: "Operational decision platform",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/Projeto-Motiva_Orion",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto construído para um cenário de inteligência operacional em rodovias, no qual dados precisam se transformar em plano de ação, não apenas em visualização.",
      problem:
        "Sem uma estrutura centralizada, informações de vegetação, criticidade e conformidade ficam dispersas e dificultam priorização técnica.",
      solution:
        "A solução combina ingestão de dados, API REST, regras configuráveis e uma interface executiva para leitura rápida do cenário e das prioridades.",
      architecture: [
        "Pipeline ETL para dados operacionais e geográficos",
        "Backend FastAPI com autenticação, rotas de negócio e relatórios",
        "Frontend React orientado a centro de decisão",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "scikit-learn"],
      challenges: [
        "Definir critérios de risco sem depender de interpretação arbitrária",
        "Unificar visão técnica, executiva e regulatória",
        "Manter clareza de produto em um domínio complexo",
      ],
      results: [
        "Base sólida para um produto orientado a decisão operacional",
        "Stack integrada entre dados, API e interface",
        "Narrativa técnica forte para backend com dados",
      ],
      futureImprovements: [
        "Refino da camada de observabilidade",
        "Ampliação de integrações externas",
        "Evolução do deploy em nuvem com serviços gerenciados",
      ],
    },
  },
  {
    slug: "climatemind-ai",
    title: "ClimateMind AI",
    shortTitle: "FastAPI + previsão climática",
    description:
      "Plataforma de monitoramento e previsão climática com dashboard web, endpoints REST e modelo de predição aplicado a dados ambientais.",
    problemSolved:
      "Reunir consulta climática, previsão e análise assistida em uma experiência única e fácil de evoluir tecnicamente.",
    architectureUsed:
      "Separação entre backend FastAPI, frontend React e módulo de machine learning para previsões e checagens de saúde do sistema.",
    technologies: ["Python", "FastAPI", "React", "Machine Learning", "Pandas"],
    challenges: [
      "Integrar visualização e predição sem acoplamento excessivo.",
      "Manter API simples para consumo pelo frontend.",
      "Documentar fluxo técnico com clareza para uso local.",
    ],
    learnings: [
      "Composição de frontend e backend em um produto único.",
      "Estruturação de endpoints para casos reais de leitura de dados.",
      "Apresentação mais madura de um projeto com componente analítico.",
    ],
    status: "Projeto público",
    imageLabel: "Climate analytics platform",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/-PROJETO-ClimateMind-AI",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto criado para explorar monitoramento climático, visualização de informações e uso de machine learning em um fluxo acessível.",
      problem:
        "Ferramentas isoladas de clima e previsão costumam separar consulta, análise e experiência de uso.",
      solution:
        "A proposta integra dashboard, API e modelo preditivo em uma base mais coesa, voltada à leitura rápida e expansão futura.",
      architecture: [
        "Backend FastAPI com endpoints de clima e predição",
        "Frontend React com dashboard de acompanhamento",
        "Modelo de machine learning integrado ao fluxo da API",
      ],
      technologies: ["Python", "FastAPI", "React", "Pandas", "scikit-learn"],
      challenges: [
        "Definir uma fronteira clara entre dados externos e lógica da aplicação",
        "Manter o fluxo previsível mesmo com dependências de API",
        "Comunicar a proposta técnica com objetividade",
      ],
      results: [
        "Projeto consistente para demonstrar backend com ML aplicado",
        "Melhora na organização entre API, interface e modelo",
        "Base útil para evolução de produto orientado a dados",
      ],
      futureImprovements: [
        "Melhorias de observabilidade e testes",
        "Evolução do modelo de previsão",
        "Deploy contínuo com ambiente separado",
      ],
    },
  },
  {
    slug: "bot-nba",
    title: "Bot NBA",
    shortTitle: "Python + integrações externas",
    description:
      "Bot interativo para fãs da NBA com integração a múltiplas APIs, comandos no Discord e dashboard local para diagnóstico de dados.",
    problemSolved:
      "Permitir acesso rápido a times, jogadores, jogos e estatísticas mesmo quando uma API principal falha.",
    architectureUsed:
      "Serviços desacoplados para fontes externas, bot em Python e painel local para validação e observabilidade básica.",
    technologies: ["Python", "discord.py", "FastAPI", "balldontlie", "TheSportsDB"],
    challenges: [
      "Garantir resiliência com fallback entre APIs.",
      "Organizar comandos, serviços e utilitários de forma legível.",
      "Expor um fluxo técnico fácil de testar localmente.",
    ],
    learnings: [
      "Integração com APIs externas sujeitas a indisponibilidade.",
      "Estruturação de automação com foco em manutenção.",
      "Validação HTTP além da lógica do bot em si.",
    ],
    status: "Projeto público",
    imageLabel: "Discord bot architecture",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/Bot_NBA",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto voltado a automação e consulta de dados esportivos, com atenção especial à confiabilidade das integrações.",
      problem:
        "APIs esportivas variam em cobertura e disponibilidade, o que torna a experiência instável quando se depende de uma única fonte.",
      solution:
        "A solução usa uma API principal com fallback complementar e organiza o projeto em comandos, serviços e utilitários bem definidos.",
      architecture: [
        "Bot em Python com discord.py",
        "Camada de serviços para múltiplas APIs externas",
        "Dashboard local para testes e inspeção de respostas",
      ],
      technologies: ["Python", "discord.py", "FastAPI", "balldontlie", "TheSportsDB"],
      challenges: [
        "Controlar erros de integração sem quebrar a experiência",
        "Padronizar respostas de fontes diferentes",
        "Testar comportamento visível pelo navegador e pelo bot",
      ],
      results: [
        "Projeto com boa demonstração de integração externa",
        "Fluxo de fallback implementado de forma pragmática",
        "Evidência concreta de organização para backend em Python",
      ],
      futureImprovements: [
        "Mais cobertura automatizada de testes",
        "Persistência de preferências e histórico",
        "Observabilidade mais detalhada por endpoint",
      ],
    },
  },
  {
    slug: "aetheros",
    title: "AetherOS",
    shortTitle: "Rust + sistemas de baixo nível",
    description:
      "Sistema operacional acadêmico em Rust para x86_64, com foco em arquitetura modular, documentação forte e evolução incremental em QEMU.",
    problemSolved:
      "Criar uma base educacional séria para desenvolvimento de sistemas operacionais, com documentação e estrutura melhores que o padrão hobby.",
    architectureUsed:
      "Workspace em Cargo, kernel em Rust, fluxo UEFI, documentação de arquitetura e automação para build, teste e boot.",
    technologies: ["Rust", "x86_64", "QEMU", "UEFI", "Cargo"],
    challenges: [
      "Organizar uma base de baixo nível sem perder legibilidade.",
      "Documentar decisões de arquitetura de forma útil.",
      "Evoluir incrementalmente um domínio técnico complexo.",
    ],
    learnings: [
      "Pensamento sistêmico e disciplina arquitetural.",
      "Importância de documentação como parte do produto técnico.",
      "Controle mais rigoroso de escopo e evolução incremental.",
    ],
    status: "Projeto público",
    imageLabel: "Operating system architecture",
    githubUrl: "https://github.com/JoaoVictorAAbreu-Dev/Projeto_AetherOS",
    demoUrl: null,
    caseStudy: {
      context:
        "Projeto acadêmico open source voltado a desenvolvimento de sistemas operacionais com Rust, documentação forte e valor educacional explícito.",
      problem:
        "Muitos projetos de OSDev são tecnicamente interessantes, mas difíceis de acompanhar por falta de organização e explicação arquitetural.",
      solution:
        "AetherOS foi estruturado para equilibrar profundidade técnica, documentação e modularidade, com um roadmap claro de evolução.",
      architecture: [
        "Workspace Cargo com kernel, crates compartilhadas e documentação",
        "Fluxo de boot UEFI orientado a QEMU",
        "Roadmap incremental para memória, interrupções, shell e drivers",
      ],
      technologies: ["Rust", "QEMU", "UEFI", "x86_64", "Cargo"],
      challenges: [
        "Lidar com baixo nível mantendo clareza de arquitetura",
        "Separar código específico de plataforma de núcleo genérico",
        "Preparar uma base didática sem sacrificar qualidade",
      ],
      results: [
        "Projeto técnico com forte diferencial de profundidade",
        "Documentação mais madura que a média para o tema",
        "Evidência de rigor em engenharia além do escopo web",
      ],
      futureImprovements: [
        "Ampliação do shell e do VFS",
        "Mais automação de testes orientados a QEMU",
        "Evolução da demonstração visual do boot",
      ],
    },
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "FIAP",
    title: "Formação em Ciência da Computação",
    description:
      "Base acadêmica em lógica, estruturas, orientação a objetos, desenvolvimento web e resolução de problemas com software.",
  },
  {
    period: "Projetos de base",
    title: "Consolidação em Java, POO e arquitetura",
    description:
      "Projetos acadêmicos em Java reforçaram modelagem, organização por responsabilidades e leitura de código mais previsível.",
  },
  {
    period: "Produtos com dados",
    title: "Entrada em backend com APIs e machine learning",
    description:
      "Projetos como Motiva ORION e ClimateMind AI ampliaram meu foco em APIs, dados operacionais e produtos orientados a decisão.",
  },
  {
    period: "Sistemas e automação",
    title: "Expansão de repertório técnico",
    description:
      "Bot NBA e AetherOS ampliaram minha experiência com integrações externas, automação e sistemas de maior profundidade técnica.",
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
    value: "linkedin.com/in/joãovictoraabreu",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
    external: true,
  },
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/JoaoVictorAAbreu-Dev", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jo%C3%A3ovictoraabreu",
    icon: FiLinkedin,
  },
  { label: "Email", href: "mailto:joaovictoralvesabreu1@gmail.com", icon: FiMail },
];

export const sectionIcons = {
  stack: FiCode,
  journey: FiTrendingUp,
  projects: FiLayers,
  about: FiFileText,
  backend: FiServer,
  database: FiDatabase,
  tools: FiPackage,
};
