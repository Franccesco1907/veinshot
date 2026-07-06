import Link from "next/link";

import type { LandingContent, Locale } from "../types";
import { SyringeLogomark } from "./SyringeLogomark";

const localeLinks: { locale: Locale; label: string; href: string }[] = [
  { locale: "en", label: "EN", href: "/" },
  { locale: "es", label: "ES", href: "/es" },
];

export function SiteHeader({
  locale,
  brand,
}: {
  locale: Locale;
  brand: LandingContent["brand"];
}) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link
        href={locale === "en" ? "/" : "/es"}
        className="flex items-center"
        aria-label={brand.homeAriaLabel}
      >
        <SyringeLogomark className="h-8 w-auto" ariaLabel={brand.logoAriaLabel} />
      </Link>
      <div className="flex items-center gap-6">
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          {localeLinks.map((link, index) => (
            <span key={link.locale} className="flex items-center gap-2">
              {index > 0 && <span className="text-line">/</span>}
              <Link
                href={link.href}
                aria-current={locale === link.locale ? "page" : undefined}
                className={
                  locale === link.locale
                    ? "text-foreground transition-colors"
                    : "text-muted transition-colors hover:text-arterial"
                }
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <a
          href={brand.contact.href}
          className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-arterial sm:block"
        >
          {brand.contact.label}
        </a>
      </div>
    </header>
  );
}
