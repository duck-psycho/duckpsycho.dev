import { buildRss } from "@lib/rss";

export async function GET(context) {
  return buildRss(context, "ru");
}
