import type { Locale } from "./types";

export const LOCALE_COOKIE_NAME = "VEINSHOT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const SUPPORTED_LOCALES: readonly Locale[] = ["en", "es"];

export interface LocaleResolutionInput {
  explicitLocale?: string | null;
  persistedLocale?: string | null;
  acceptLanguage?: string | null;
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value !== null && value !== undefined && SUPPORTED_LOCALES.includes(value as Locale);
}

export function getExplicitLocale(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
}

export function resolveLocale({
  explicitLocale,
  persistedLocale,
  acceptLanguage,
}: LocaleResolutionInput): Locale {
  if (isLocale(explicitLocale)) return explicitLocale;
  if (isLocale(persistedLocale)) return persistedLocale;
  return getPreferredLocale(acceptLanguage) ?? "en";
}

export function getPreferredLocale(acceptLanguage: string | null | undefined): Locale | null {
  if (!acceptLanguage) return null;

  const preferences = acceptLanguage
    .split(",")
    .map((entry, index) => parseLanguagePreference(entry, index))
    .filter((preference): preference is LanguagePreference => preference !== null)
    .sort((left, right) => right.quality - left.quality || left.index - right.index);

  for (const preference of preferences) {
    const locale = preference.range.split("-")[0];
    if (isLocale(locale)) return locale;
  }

  return null;
}

interface LanguagePreference {
  range: string;
  quality: number;
  index: number;
}

function parseLanguagePreference(entry: string, index: number): LanguagePreference | null {
  const [rawRange, ...parameters] = entry.trim().toLowerCase().split(";");
  if (!rawRange || rawRange === "*" || !/^[a-z]{1,8}(?:-[a-z0-9]{1,8})*$/.test(rawRange)) {
    return null;
  }

  let quality = 1;
  for (const parameter of parameters) {
    const trimmedParameter = parameter.trim();
    const match = trimmedParameter.match(/^q=(0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/);
    if (trimmedParameter.startsWith("q=") && !match) return null;
    if (match) quality = Number(match[1]);
  }

  if (quality === 0) return null;
  return { range: rawRange, quality, index };
}
