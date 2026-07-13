export type Site = {
  TITLE: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Giscus = {
  REPO: string;
  REPO_ID: string;
  CATEGORY: string;
  CATEGORY_ID: string;
};
