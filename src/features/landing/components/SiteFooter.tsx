import { brand } from "../content";
import { SyringeLogomark } from "./SyringeLogomark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <SyringeLogomark className="h-6 w-auto" />
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          © {new Date().getFullYear()} Veinshot
        </p>
        <a
          href={brand.contact.href}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-arterial"
        >
          {brand.contact.label}
        </a>
      </div>
    </footer>
  );
}
