import { NextResponse, type NextRequest } from "next/server";

import {
  getExplicitLocale,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  resolveLocale,
} from "@/features/locale-routing/routing";
import type { Locale } from "@/features/locale-routing/types";

const INTERNAL_ENGLISH_REWRITE_HEADER = "x-veinshot-internal-english-rewrite";

const localeCookieOptions = {
  httpOnly: true,
  maxAge: LOCALE_COOKIE_MAX_AGE,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

function persistLocale(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, localeCookieOptions);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const explicitLocale = getExplicitLocale(pathname);

  // Control-flow marker, not a security boundary: normal browser navigations do not set it,
  // and spoofing it only changes that caller's routing for the internal /en destination.
  if (
    explicitLocale === "en" &&
    request.headers.get(INTERNAL_ENGLISH_REWRITE_HEADER) === "1"
  ) {
    return NextResponse.next();
  }

  if (explicitLocale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return persistLocale(NextResponse.redirect(url), "en");
  }

  if (explicitLocale === "es") {
    return persistLocale(NextResponse.next(), "es");
  }

  const locale = resolveLocale({
    persistedLocale: request.cookies.get(LOCALE_COOKIE_NAME)?.value,
    acceptLanguage: request.headers.get("accept-language"),
  });

  const url = request.nextUrl.clone();
  if (locale === "es") {
    url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
    return persistLocale(NextResponse.redirect(url), "es");
  }

  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(INTERNAL_ENGLISH_REWRITE_HEADER, "1");
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|.*\\..*).*)"],
};
