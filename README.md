# João Victor Alves de Abreu | Portfólio

Portfólio profissional com foco em recrutadores de Engenharia de Software. O projeto destaca backend, arquitetura, APIs, dados e produtos full stack por meio de uma curadoria enxuta de estudos de caso.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Destaques

- Tema visual inspirado em Matrix, com foco em legibilidade e contraste
- Hero orientado a empregabilidade, com CTAs diretos para projetos, GitHub, LinkedIn e currículo
- Projetos selecionados com resumo técnico e estudo de caso
- Foto local com fallback automático para iniciais
- Formulário visual sem backend, com fallback para `mailto`
- SEO básico, sitemap e metadados preparados para deploy

## Projetos em destaque

- DevTrack AI
- GreenOps Control Center
- Motiva ORION
- TaskFlow Dev

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Variáveis opcionais

Use `.env.example` como base para criar um arquivo `.env`:

- `VITE_SITE_URL`: URL pública usada em SEO e links canônicos
- `VITE_BASE_PATH`: base path do projeto
- `VITE_FORMSPREE_ENDPOINT`: endpoint do Formspree para ativar envio direto no formulário

## Deploy na Vercel

Configuração recomendada:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Se quiser forçar a canonical para um domínio próprio:

- defina `VITE_SITE_URL=https://seu-dominio.com`
