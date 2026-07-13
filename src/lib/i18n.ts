import type { CollectionEntry } from "astro:content";

export const LOCALES = ["ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ru";

export function getLangFromId(id: string): Locale {
  const lang = id.split("/")[0];
  return lang === "en" ? "en" : "ru";
}

export function getSlugFromId(id: string): string {
  const [first, ...rest] = id.split("/");
  if (first === "ru" || first === "en") {
    return rest.join("/");
  }
  return id;
}

export function ensureTrailingSlash(path: string): string {
  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const splitIndex = Math.min(
    hashIndex === -1 ? path.length : hashIndex,
    queryIndex === -1 ? path.length : queryIndex,
  );
  const pathname = path.slice(0, splitIndex);
  const suffix = path.slice(splitIndex);

  if (!pathname.startsWith("/")) return path;
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return path;
  if (pathname === "/" || pathname.endsWith("/")) return path;

  return `${pathname}/${suffix}`;
}

export function localizePath(path: string, lang: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const pathname = normalized.split(/[?#]/)[0];
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);

  if (lang === "en") {
    if (normalized === "/") return "/en/";
    const enPath = `/en${normalized}`;
    if (hasExtension) return enPath;
    return ensureTrailingSlash(enPath);
  }

  if (hasExtension) return normalized;
  return ensureTrailingSlash(normalized);
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const stripped = pathname.slice(3) || "/";
    return stripped.endsWith("/") ? stripped : `${stripped}/`;
  }
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function giscusTerm(collection: string, id: string): string {
  const slug = getSlugFromId(id);
  return localizePath(`/${collection}/${slug}/`, DEFAULT_LOCALE);
}

export function buildPageAlternates(pathname: string) {
  const basePath = stripLocalePrefix(pathname);

  return LOCALES.map((lang) => ({
    lang,
    href: localizePath(basePath, lang),
  }));
}

export function buildContentAlternates(
  collection: string,
  slug: string,
  entries: CollectionEntry<"blog">[] | CollectionEntry<"projects">[],
) {
  return LOCALES.flatMap((lang) => {
    const entry = entries.find(
      (item) =>
        getLangFromId(item.id) === lang && getSlugFromId(item.id) === slug,
    );

    if (!entry) return [];

    return [{ lang, href: localizePath(`/${collection}/${slug}/`, lang) }];
  });
}

export function ogLocale(lang: Locale) {
  return lang === "en" ? "en_US" : "ru_RU";
}
