import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { contentUrl } from "@lib/utils";
import { t } from "@i18n/ui";
import { type Locale } from "@lib/i18n";
import { getLocalizedEntries } from "@lib/content";

export async function buildRss(context: { site?: string }, lang: Locale) {
  const items = await getLocalizedEntries(lang);
  const ui = t(lang);

  return rss({
    title: SITE.TITLE,
    description: ui.site.description,
    site: context.site ?? "https://duckpsycho.dev",
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: contentUrl(item.collection, item.id),
    })),
  });
}
