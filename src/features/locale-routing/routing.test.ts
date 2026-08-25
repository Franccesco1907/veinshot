import { describe, expect, it } from "vitest";

import { getExplicitLocale, getPreferredLocale, resolveLocale } from "./routing";

describe("resolveLocale", () => {
  it("prioritizes an explicit URL locale over the cookie and header", () => {
    expect(
      resolveLocale({
        explicitLocale: "es",
        persistedLocale: "en",
        acceptLanguage: "en-US,en;q=0.9",
      }),
    ).toBe("es");
  });

  it("prioritizes a valid cookie over Accept-Language", () => {
    expect(resolveLocale({ persistedLocale: "es", acceptLanguage: "en-US" })).toBe("es");
  });

  it("matches Spanish regional language ranges", () => {
    expect(getPreferredLocale("es-MX,es;q=0.9,en;q=0.8")).toBe("es");
  });

  it("respects quality weights among supported languages", () => {
    expect(getPreferredLocale("es;q=0.4,en-GB;q=0.9")).toBe("en");
  });

  it.each([undefined, null, "", "fr-FR,de;q=0.8", "es;q=broken", "es--MX"])(
    "falls back to English for a missing, unknown, or malformed header: %s",
    (acceptLanguage) => {
      expect(resolveLocale({ acceptLanguage })).toBe("en");
    },
  );
});

describe("getExplicitLocale", () => {
  it.each([
    ["/en", "en"],
    ["/en/work", "en"],
    ["/es", "es"],
    ["/es/work", "es"],
    ["/essay", null],
    ["/", null],
  ])("reads only a complete leading locale segment from %s", (pathname, expected) => {
    expect(getExplicitLocale(pathname)).toBe(expected);
  });
});
