import { useEffect } from "react";
import { seo } from "../data/portfolio";
import { siteConfig } from "../constants/site";

type MetaOptions = {
  title: string;
  description: string;
  path?: string;
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function usePageMeta({ title, description, path = "/" }: MetaOptions) {
  useEffect(() => {
    const baseSiteUrl = siteConfig.siteUrl.replace(/\/$/, "");
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const absoluteUrl = window.location.hash.startsWith("#/")
      ? `${baseSiteUrl}/#${normalizedPath}`
      : `${baseSiteUrl}${normalizedPath}`;
    const imageUrl = `${baseSiteUrl}${seo.image}`;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "João Victor A. Abreu Portfolio",
    });

    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "pt_BR",
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: absoluteUrl,
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    upsertMeta('meta[name="twitter:url"]', {
      name: "twitter:url",
      content: absoluteUrl,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: absoluteUrl,
    });
  }, [description, path, title]);
}
