import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  type Locale,
  DEFAULT_LOCALE,
  getLangFromId,
  getSlugFromId,
  localizePath,
} from "@lib/i18n";
import { t } from "@i18n/ui";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function contentUrl(collection: string, id: string) {
  const lang = getLangFromId(id);
  const slug = getSlugFromId(id);
  return localizePath(`/${collection}/${slug}/`, lang);
}

export function blogIndexUrl(lang: Locale = DEFAULT_LOCALE) {
  return localizePath("/blog/", lang);
}

export function projectsIndexUrl(lang: Locale = DEFAULT_LOCALE) {
  return localizePath("/projects/", lang);
}

export function tagUrl(tag: string, lang: Locale = DEFAULT_LOCALE) {
  return localizePath(`/tags/${tag}/`, lang);
}

export function readingTime(html: string, lang: Locale = DEFAULT_LOCALE) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  const labels = t(lang).readingTime;

  if (lang === "en") {
    const label = minutes === 1 ? labels.one : labels.few;
    return `${minutes} ${label} ${labels.suffix}`;
  }

  const label =
    minutes % 10 === 1 && minutes % 100 !== 11
      ? labels.one
      : minutes % 10 >= 2 &&
          minutes % 10 <= 4 &&
          (minutes % 100 < 10 || minutes % 100 >= 20)
        ? labels.few
        : labels.many;

  return `${minutes} ${label} ${labels.suffix}`;
}
