import type { LandingContent } from "../types";
import { VeinCircuit } from "./VeinCircuit";

export function Hero({ content }: { content: LandingContent["hero"] }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24 pt-12 sm:pt-20">
      <p className="animate-rise font-mono text-xs uppercase tracking-[0.16em] text-arterial">
        {content.eyebrow}
      </p>
      <h1 className="animate-rise mt-4 max-w-[14ch] text-balance text-5xl font-extrabold tracking-tighter sm:text-7xl [animation-delay:80ms]">
        {content.headline.lead} <span className="text-arterial">{content.headline.accent}</span>
      </h1>
      <p className="animate-rise mt-6 max-w-[52ch] text-pretty text-base text-muted sm:text-lg [animation-delay:160ms]">
        {content.subline}
      </p>
      <div className="animate-rise mt-8 [animation-delay:240ms]">
        <a
          href={content.cta.href}
          className="inline-block rounded-md bg-arterial px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          {content.cta.label}
        </a>
      </div>
      <div className="animate-rise mt-14 [animation-delay:320ms]">
        <VeinCircuit ariaLabel={content.veinAriaLabel} />
      </div>
    </section>
  );
}
