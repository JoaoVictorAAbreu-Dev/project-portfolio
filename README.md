# Joao Victor Alves de Abreu | Portfolio

Portfolio profissional com foco em recrutadores de Engenharia de Software. O projeto destaca backend, arquitetura, APIs, dados e produtos full stack por meio de uma curadoria enxuta de tres estudos de caso principais.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Destaques

- Visual profissional com foco em clareza, contraste e leitura rapida
- Hero orientado a empregabilidade, com CTAs diretos para projetos, GitHub, LinkedIn e curriculo
- Tres projetos principais com resumo tecnico e estudo de caso
- Foto local com fallback automatico para iniciais
- Contato direto por email, LinkedIn e GitHub
- SEO basico, sitemap e metadados preparados para deploy

## Projetos em destaque

- DevTrack AI
- GreenOps Control Center
- Motiva ORION

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

Use `.env.example` como base para criar um arquivo `.env`:

- `VITE_SITE_URL`: URL publica usada em SEO e links canonicos
- `VITE_BASE_PATH`: base path do projeto

## Deploy na Vercel

Configuracao recomendada:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Se quiser forcar a canonical para um dominio proprio:

- defina `VITE_SITE_URL=https://seu-dominio.com`
