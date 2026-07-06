import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "es"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // English is the unprefixed default: /en/* redirects to its clean URL.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }

  const hasLocalePrefix = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  // Everything else is served from the [lang] tree as English.
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
