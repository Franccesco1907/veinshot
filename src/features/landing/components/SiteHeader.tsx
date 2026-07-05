import Link from "next/link";

import { brand } from "../content";
import { SyringeLogomark } from "./SyringeLogomark";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center" aria-label="Veinshot home">
        <SyringeLogomark className="h-8 w-auto" />
      </Link>
      <a
        href={brand.contact.href}
        className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-arterial"
      >
        {brand.contact.label}
      </a>
    </header>
  );
}
