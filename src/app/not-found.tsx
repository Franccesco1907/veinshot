import Link from "next/link";

import { FlatlinePulse } from "@/features/landing/components/FlatlinePulse";
import { SiteFooter } from "@/features/landing/components/SiteFooter";
import { SiteHeader } from "@/features/landing/components/SiteHeader";
import { notFound } from "@/features/landing/content";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <p className="animate-rise font-mono text-xs uppercase tracking-[0.16em] text-arterial">
          {notFound.eyebrow}
        </p>
        <h1 className="animate-rise mt-4 text-5xl font-extrabold tracking-tighter sm:text-7xl [animation-delay:80ms]">
          {notFound.headline.lead}
          <span className="text-arterial">{notFound.headline.accent}</span>
        </h1>
        <p className="animate-rise mt-6 max-w-[52ch] text-pretty text-base text-muted sm:text-lg [animation-delay:160ms]">
          {notFound.subline}
        </p>
        <div className="animate-rise mt-8 [animation-delay:240ms]">
          <Link
            href={notFound.cta.href}
            className="inline-block rounded-md bg-arterial px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 ease-out active:scale-[0.97]"
          >
            {notFound.cta.label}
          </Link>
        </div>
        <div className="animate-rise mt-16 [animation-delay:320ms]">
          <FlatlinePulse className="block w-full" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
