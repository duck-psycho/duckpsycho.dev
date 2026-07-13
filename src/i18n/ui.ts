import type { Locale } from "@lib/i18n";

export const UI = {
  ru: {
    site: {
      description: "Блог duckpsycho",
    },
    home: {
      description: "Главная страница сайта duckpsycho.dev",
      logoAlt: "Резиновая уточка с ножом",
      intro:
        "Привет. Это блог backend-разработчика, но не только о backend, да и не только о разработке.",
      stack:
        'Основной стек, с которым мне приятно работать (как раз моя текущая работа): <code>TypeScript</code>/<code>Nest.js</code>/<code>Node.js</code>. Но могу и на <code>Bash</code> пописать, и коммерческий опыт на <code>Python</code> был. Сейчас в свободное время разбираюсь с <code>Android</code>/<code>Kotlin</code>. В общем, стараюсь быть многопрофильным разработчиком.',
      projects: "Проекты",
      allProjects: "Все проекты",
      posts: "Посты",
      allPosts: "Все посты",
      socials: "Я здесь",
      socialAria: (site: string, name: string) => `${site} в ${name}`,
      emailAria: (site: string) => `Электронная почта ${site}`,
    },
    blog: {
      title: "Блог",
      description: "Блог разработчика, но не только о разработке",
    },
    projects: {
      title: "Проекты",
      description: "Проекты duckpsycho",
    },
    tags: {
      title: "Теги",
      description: "Список используемых тегов",
      allTags: "Все теги",
      entriesWithTag: (tag: string) => `Записи с тегом «${tag}»`,
      pageDescription: (tag: string) => `Записи с тегом: ${tag}`,
    },
    nav: {
      blog: "блог",
      projects: "проекты",
      search: "Поиск",
    },
    common: {
      back: "Назад",
      tags: "Теги:",
      comments: "Комментарии",
      tableOfContents: "Содержание",
      notFound: "404: Страница не найдена",
    },
    footer: {
      lightTheme: "Светлая тема",
      darkTheme: "Тёмная тема",
      systemTheme: "Системная тема",
    },
    search: {
      closePrefix: "Нажмите",
      closeSuffix: ", чтобы закрыть",
    },
    readingTime: {
      one: "минута",
      few: "минуты",
      many: "минут",
      suffix: "чтения",
    },
    languageSwitcher: {
      label: "Язык",
      ru: "RU",
      en: "EN",
    },
  },
  en: {
    site: {
      description: "duckpsycho blog",
    },
    home: {
      description: "Home page of duckpsycho.dev",
      logoAlt: "Rubber duck with a knife",
      intro:
        "Hi. This is a backend developer blog, but it's not just about backend, nor is it just about development.",
      stack:
        'My go-to tech stack that I enjoy working with (and use in my current job) is <code>TypeScript</code>/<code>Nest.js</code>/<code>Node.js</code>. That said, I can whip up some <code>Bash</code> scripts, and I\'ve got commercial experience with <code>Python</code>. Lately, I\'ve been diving into <code>Android</code>/<code>Kotlin</code> in my free time. Long story short, I’m trying to be a well-rounded developer.',
      projects: "Projects",
      allProjects: "All projects",
      posts: "Posts",
      allPosts: "All posts",
      socials: "Find me",
      socialAria: (site: string, name: string) => `${site} on ${name}`,
      emailAria: (site: string) => `Email ${site}`,
    },
    blog: {
      title: "Blog",
      description: "A developer's blog, but not only about development",
    },
    projects: {
      title: "Projects",
      description: "Projects by duckpsycho",
    },
    tags: {
      title: "Tags",
      description: "List of tags used on the site",
      allTags: "All tags",
      entriesWithTag: (tag: string) => `Entries tagged «${tag}»`,
      pageDescription: (tag: string) => `Entries tagged: ${tag}`,
    },
    nav: {
      blog: "blog",
      projects: "projects",
      search: "Search",
    },
    common: {
      back: "Back",
      tags: "Tags:",
      comments: "Comments",
      tableOfContents: "Table of contents",
      notFound: "404: Page not found",
    },
    footer: {
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      systemTheme: "System theme",
    },
    search: {
      closePrefix: "Press",
      closeSuffix: " to close",
    },
    readingTime: {
      one: "minute",
      few: "minutes",
      many: "minutes",
      suffix: "read",
    },
    languageSwitcher: {
      label: "Language",
      ru: "RU",
      en: "EN",
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function t(lang: Locale) {
  return UI[lang];
}
