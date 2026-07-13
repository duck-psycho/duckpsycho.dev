import type { Giscus, Site, Socials } from "@types";

export const GISCUS: Giscus = {
  REPO: "duck-psycho/duckpsycho.dev",
  REPO_ID: import.meta.env.PUBLIC_GISCUS_REPO_ID ?? "",
  CATEGORY: "Comments",
  CATEGORY_ID: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? "",
};

export const SITE: Site = {
  TITLE: "duckpsycho",
  EMAIL: "duckpsycho.developer@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/duck-psycho",
  },
  {
    NAME: "X(Twitter)",
    HREF: "https://x.com/duckpsycho_dev",
  },
  {
    NAME: "Boosty(вдруг)",
    HREF: "https://boosty.to/duckpsycho",
  },
  {
    NAME: "Google Play",
    HREF: "https://play.google.com/store/apps/developer?id=Duckpsycho+Developer",
  },
];
