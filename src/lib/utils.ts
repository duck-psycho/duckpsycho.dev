import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  const label =
    minutes % 10 === 1 && minutes % 100 !== 11
      ? "минута"
      : minutes % 10 >= 2 &&
          minutes % 10 <= 4 &&
          (minutes % 100 < 10 || minutes % 100 >= 20)
        ? "минуты"
        : "минут";
  return `${minutes} ${label} чтения`;
}
