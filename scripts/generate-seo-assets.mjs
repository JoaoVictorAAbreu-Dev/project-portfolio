import { mkdirSync, writeFileSync } from "node:fs";

const siteUrl = (
  process.env.VITE_SITE_URL || "https://joaovictoraabreu-dev.github.io/Meu_Portifolio"
).replace(/\/$/, "");
const pages = [
  "",
  "/#/projetos/motiva-orion",
  "/#/projetos/climatemind-ai",
  "/#/projetos/bot-nba",
  "/#/projetos/aetheros",
];

mkdirSync("public", { recursive: true });

writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf8",
);

const urls = pages.map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n  </url>`).join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8",
);
