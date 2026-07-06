"use client";

import { motion, useReducedMotion } from "motion/react";

import type { LandingContent } from "../types";

export function Services({ content }: { content: LandingContent["services"] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-arterial">
        {content.eyebrow}
      </p>
      <h2 className="mt-4 max-w-[16ch] text-balance text-3xl font-extrabold tracking-tighter sm:text-5xl">
        {content.headline.lead} <span className="text-arterial">{content.headline.accent}</span>
      </h2>
      <p className="mt-5 max-w-[52ch] text-pretty text-base text-muted">{content.subline}</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {content.items.map((item, index) => (
          <motion.article
            key={item.tag}
            className="rounded-xl border border-line p-6 transition-colors duration-200 ease-out hover:border-venous"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(12px)" }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {item.tag}
            </p>
            <h3 className="mt-3 text-lg font-bold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
