import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "duckpsycho",
  DESCRIPTION: "Блог duckpsycho",
  EMAIL: "duckpsycho.developer@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  DESCRIPTION: "Главная страница сайта duckpsycho.dev",
};

export const BLOG: Metadata = {
  TITLE: "Блог",
  DESCRIPTION: "Блог разработчика, но не только о разработке",
};

export const PROJECTS: Metadata = {
  TITLE: "Проекты",
  DESCRIPTION:
    "Проекты duckpsycho",
};

export const TAGS: Metadata = {
  TITLE: "Теги",
  DESCRIPTION: "Список используемых тегов",
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
