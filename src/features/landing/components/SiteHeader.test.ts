import { createElement, type AnchorHTMLAttributes, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import type { LandingContent } from "../types";
import { SiteHeader } from "./SiteHeader";

vi.mock("next/link", () => ({
  default: ({
    children,
    prefetch,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    prefetch?: boolean | "auto" | null;
  }) =>
    createElement(
      "a",
      { ...props, "data-prefetch": prefetch === false ? "false" : undefined },
      children,
    ),
}));

const brand: LandingContent["brand"] = {
  contact: { href: "mailto:hello@veinshot.com", label: "Contact" },
  homeAriaLabel: "Veinshot home",
  logoAriaLabel: "Veinshot",
};

describe("SiteHeader locale selector", () => {
  it("disables prefetch for both locale choices", () => {
    const markup = renderToStaticMarkup(createElement(SiteHeader, { locale: "en", brand }));

    expect(markup).toMatch(/href="\/en"[^>]*data-prefetch="false"/);
    expect(markup).toMatch(/href="\/es"[^>]*data-prefetch="false"/);
  });
});
