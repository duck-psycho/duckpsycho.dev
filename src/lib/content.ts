import { getCollection, type CollectionEntry } from "astro:content";
import { getLangFromId, type Locale } from "@lib/i18n";

export async function getLocalizedBlog(lang: Locale) {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => !post.data.draft && getLangFromId(post.id) === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLocalizedProjects(lang: Locale) {
  const projects = await getCollection("projects");
  return projects
    .filter(
      (project) => !project.data.draft && getLangFromId(project.id) === lang,
    )
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLocalizedEntries(lang: Locale) {
  const [blog, projects] = await Promise.all([
    getLocalizedBlog(lang),
    getLocalizedProjects(lang),
  ]);

  return [...blog, ...projects].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export type LocalizedEntry =
  | CollectionEntry<"blog">
  | CollectionEntry<"projects">;
