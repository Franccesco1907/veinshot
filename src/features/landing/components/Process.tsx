"use client";

import { motion, useReducedMotion } from "motion/react";

import { process } from "../content";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-arterial">
        {process.eyebrow}
      </p>
      <h2 className="mt-4 max-w-[16ch] text-balance text-3xl font-extrabold tracking-tighter sm:text-5xl">
        {process.headline.lead} <span className="text-arterial">{process.headline.accent}</span>
      </h2>
      <p className="mt-5 max-w-[52ch] text-pretty text-base text-muted">{process.subline}</p>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, index) => (
          <motion.li
            key={step.number}
            className="border-t-2 border-line pt-5"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(12px)" }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {step.number} · {step.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
