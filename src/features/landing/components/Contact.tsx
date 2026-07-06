import type { LandingContent } from "../types";

export function Contact({
  content,
  brand,
}: {
  content: LandingContent["contact"];
  brand: LandingContent["brand"];
}) {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 pb-28 pt-8">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-arterial">
        {content.eyebrow}
      </p>
      <h2 className="mt-4 max-w-[16ch] text-balance text-3xl font-extrabold tracking-tighter sm:text-5xl">
        {content.headline.lead} <span className="text-arterial">{content.headline.accent}</span>
      </h2>
      <p className="mt-5 max-w-[52ch] text-pretty text-base text-muted">{content.subline}</p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href={content.cta.href}
          className="inline-block rounded-md bg-arterial px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {content.cta.label}
        </a>
        <a
          href={brand.contact.href}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-arterial"
        >
          {brand.contact.label}
        </a>
      </div>
    </section>
  );
}
