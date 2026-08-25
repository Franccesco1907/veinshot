import {
  getRedirectUrl,
  getRewrittenUrl,
  isRewrite,
  unstable_doesMiddlewareMatch,
} from "next/experimental/testing/server";
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { LOCALE_COOKIE_NAME } from "@/features/locale-routing/routing";

import { config, proxy } from "./proxy";

function request(path: string, init?: ConstructorParameters<typeof NextRequest>[1]) {
  return new NextRequest(`https://veinshot.com${path}`, init);
}

describe("proxy locale routing", () => {
  it("redirects a first Spanish-preferring visit to /es and preserves its query", () => {
    const response = proxy(
      request("/?campaign=launch", { headers: { "accept-language": "es-AR,es;q=0.9" } }),
    );

    expect(getRedirectUrl(response)).not.toBeNull();
    expect(getRedirectUrl(response)).toBe("https://veinshot.com/es?campaign=launch");
    expect(response.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe("es");
    expect(response.headers.get("set-cookie")).toContain("Path=/; Expires=");
    expect(response.headers.get("set-cookie")).toContain("Max-Age=31536000");
    expect(response.headers.get("set-cookie")).toContain("HttpOnly; SameSite=lax");
  });

  it("uses the cookie before Accept-Language on unprefixed paths", () => {
    const response = proxy(
      request("/work?from=home", {
        headers: {
          "accept-language": "en-US",
          cookie: `${LOCALE_COOKIE_NAME}=es`,
        },
      }),
    );

    expect(getRedirectUrl(response)).toBe("https://veinshot.com/es/work?from=home");
  });

  it("rewrites English and unknown preferences internally without changing the clean URL", () => {
    const response = proxy(request("/work?from=home", { headers: { "accept-language": "fr-FR" } }));

    expect(isRewrite(response)).toBe(true);
    expect(getRewrittenUrl(response)).toBe("https://veinshot.com/en/work?from=home");
  });

  it("serves the marked internal English rewrite without redirecting again", () => {
    const response = proxy(
      request("/en", { headers: { "x-veinshot-internal-english-rewrite": "1" } }),
    );

    expect(getRedirectUrl(response)).toBeNull();
    expect(isRewrite(response)).toBe(false);
    expect(response.cookies.get(LOCALE_COOKIE_NAME)).toBeUndefined();
  });

  it("scopes the internal marker to the English rewrite destination", () => {
    const response = proxy(
      request("/es", { headers: { "x-veinshot-internal-english-rewrite": "1" } }),
    );

    expect(response.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe("es");
  });

  it("uses /en as an explicit English switch, persists it, and redirects once", () => {
    const switchResponse = proxy(
      request("/en?from=selector", { headers: { cookie: `${LOCALE_COOKIE_NAME}=es` } }),
    );

    expect(getRedirectUrl(switchResponse)).toBe("https://veinshot.com/?from=selector");
    expect(switchResponse.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe("en");

    const followResponse = proxy(
      request("/?from=selector", { headers: { cookie: `${LOCALE_COOKIE_NAME}=en` } }),
    );
    expect(getRedirectUrl(followResponse)).toBeNull();
    expect(getRewrittenUrl(followResponse)).toBe("https://veinshot.com/en?from=selector");
  });

  it("serves explicit Spanish paths and persists the manual selection", () => {
    const response = proxy(
      request("/es", { headers: { cookie: `${LOCALE_COOKIE_NAME}=en` } }),
    );

    expect(getRedirectUrl(response)).toBeNull();
    expect(isRewrite(response)).toBe(false);
    expect(response.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe("es");
  });
});

describe("proxy matcher", () => {
  it.each(["/api/contact", "/_next/static/chunk.js", "/_next/image", "/favicon.ico", "/og-en.png"])(
    "excludes %s",
    (url) => {
      expect(unstable_doesMiddlewareMatch({ config, nextConfig: {}, url })).toBe(false);
    },
  );

  it.each(["/", "/es", "/en", "/work"])("includes %s", (url) => {
    expect(unstable_doesMiddlewareMatch({ config, nextConfig: {}, url })).toBe(true);
  });
});
