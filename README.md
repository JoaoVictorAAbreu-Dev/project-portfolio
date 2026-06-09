# Portfolio Profissional - Joao Victor Alves de Abreu

Portfolio desenvolvido para apresentar Joao Victor Alves de Abreu como candidato a estagio e vagas de Software Engineer com foco em backend.

## Objetivo

O projeto foi estruturado para transmitir:

- profissionalismo
- organizacao
- maturidade tecnica
- clareza de objetivos
- potencial de crescimento em backend

Nao e apenas uma landing page visual. O portfolio foi pensado para funcionar como material de apresentacao profissional, com narrativa tecnica, estudos de caso e direcionamento claro de carreira.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons

## Principais recursos

- Hero section com indicadores de empregabilidade
- Tema claro/escuro com persistencia local
- Secoes de stack tecnologica organizadas por categoria
- Cards de projeto com links reais do GitHub
- Paginas individuais de estudo de caso para cada projeto
- Dashboard de GitHub orientado a leitura de recrutador
- Linha do tempo de jornada e experiencias
- Estrutura para certificacoes e cursos
- Formulario visual com envio via `mailto`
- SEO base com Open Graph e favicon
- `robots.txt`, `sitemap.xml` e `404.html`
- Preparado para GitHub Pages, Netlify e Vercel

## Estrutura

```text
src/
  components/
  constants/
  data/
  hooks/
  layouts/
  pages/
  services/
  types/
  utils/
public/
  images/
  404.html
  favicon.svg
  robots.txt
  sitemap.xml
```

## Como rodar

### Requisitos

- Node.js 20+
- npm 10+

### Instalar dependencias

```bash
npm install
```

### Ambiente local

```bash
npm run dev
```

### Build de producao

```bash
npm run build
```

### Preview local

```bash
npm run preview
```

## Personalizacao

Os dados principais do portfolio ficam em:

- `src/data/portfolio.ts`

As rotas principais ficam em:

- `src/pages/HomePage.tsx`
- `src/pages/ProjectPage.tsx`
- `src/pages/NotFoundPage.tsx`

## Foto de perfil

O site tenta carregar automaticamente:

```text
public/images/profile.webp
```

Se a imagem nao existir, o Hero mostra o fallback com as iniciais `JV`.

## Curriculo

Para habilitar o download real do curriculo, adicione:

```text
public/curriculo-joao-victor.pdf
```

## Deploy

## Netlify

- `netlify.toml` ja configurado
- `public/_redirects` configurado para SPA

## Vercel

- `vercel.json` ja configurado

## GitHub Pages

- `vite.config.ts` suporta `VITE_BASE_PATH`
- o roteamento usa `HashRouter` automaticamente quando a aplicacao e publicada fora da raiz, o que evita quebra nas paginas de estudo de caso no GitHub Pages
- ha um workflow pronto em `.github/workflows/deploy-github-pages.yml`
- o script `npm run build:github-pages` configura automaticamente `VITE_BASE_PATH` e `VITE_SITE_URL`
- exemplo PowerShell:

```powershell
$env:VITE_BASE_PATH="/site-portifolio/"
npm run build
```

Ou, para simular exatamente a build de publicacao:

```bash
npm run build:github-pages
```

## SEO e producao

O projeto inclui:

- meta description
- Open Graph
- favicon
- sitemap
- robots
- rota 404

Para producao final, atualize em `src/data/portfolio.ts`:

- link do WhatsApp
- links de demo reais

## Limitacoes atuais

- O projeto `API REST Backend` ainda esta representado como estudo de caso conceitual e nao como repositorio publicado.
- O link de WhatsApp esta como placeholder e deve ser trocado pelo numero correto antes da publicacao.
- O SEO usa URL base de exemplo e deve ser ajustado para o dominio final.
