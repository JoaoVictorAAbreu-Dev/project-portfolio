export const DEFAULT_SITE_URL =
  "https://joao-victor-abreu-portfolio-jotas-projects-01e8afdf.vercel.app";

function normalizeUrl(url) {
  return url.replace(/\/$/, "");
}

export function resolveSiteUrl(env = process.env) {
  if (env.VITE_SITE_URL) {
    return normalizeUrl(env.VITE_SITE_URL);
  }

  if (env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeUrl(`https://${env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (env.VERCEL_URL) {
    return normalizeUrl(`https://${env.VERCEL_URL}`);
  }

  return DEFAULT_SITE_URL;
}
