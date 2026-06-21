# Joao Victor Alves de Abreu - Portfolio

Portfolio profissional com curadoria de projetos voltada a recrutadores de Engenharia de Software. A interface foi refeita em tema Matrix para destacar identidade visual, enquanto o conteudo prioriza backend, arquitetura, APIs REST, dados e produto.

## Stack principal

React · Vite · TypeScript · Tailwind CSS · Framer Motion · React Icons

## Destaques desta versao

- tema visual inspirado em Matrix, com foco dark-first
- curadoria dos repositorios mais fortes do GitHub
- destaque para backend com Java, Spring Boot, FastAPI e PostgreSQL
- SEO, sitemap e canonical preparados para deploy
- formulario visual sem backend, com fallback para email

## Projetos em destaque

- DevTrack AI - https://github.com/JoaoVictorAAbreu-Dev/project-devtrack-ai
- GreenOps Control Center - https://github.com/JoaoVictorAAbreu-Dev/project-greenops-control-center
- Motiva ORION - https://github.com/JoaoVictorAAbreu-Dev/project-motiva-orion
- TaskFlow Dev - https://github.com/JoaoVictorAAbreu-Dev/project-taskflow-dev-groq

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
```

## Variaveis opcionais

Use `.env.example` como base para um arquivo `.env` quando quiser customizar:

- `VITE_SITE_URL`: URL publica usada em SEO e links canonicos
- `VITE_BASE_PATH`: base path do projeto
- `VITE_FORMSPREE_ENDPOINT`: endpoint do Formspree para ativar o formulario sem backend

## Deploy na Vercel

Deploy oficial atual:

- [joaovictorabreu-joaovictor-labs.vercel.app](https://joaovictorabreu-joaovictor-labs.vercel.app)

Configuracao recomendada no painel da Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Se quiser forcar a canonical para dominio proprio:

- adicione `VITE_SITE_URL=https://seu-dominio.com`
