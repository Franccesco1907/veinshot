import type { LandingContent, Locale } from "../types";
import { en } from "./en";
import { es } from "./es";

export const locales: readonly Locale[] = ["en", "es"];

const dictionaries: Record<Locale, LandingContent> = { en, es };

export function hasLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function getContent(locale: Locale): LandingContent {
  return dictionaries[locale];
}
