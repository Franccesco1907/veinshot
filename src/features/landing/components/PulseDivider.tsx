"use client";

import { motion, useReducedMotion } from "motion/react";

const BASELINE = "M 0 30 H 348 h 10 l 8 -20 l 12 36 l 8 -16 h 10 H 800";
const BLIP = "M 348 30 h 10 l 8 -20 l 12 36 l 8 -16 h 10";

export function PulseDivider() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-5xl px-6" aria-hidden="true">
      <svg viewBox="0 0 800 60" className="block w-full">
        <path d={BASELINE} fill="none" className="stroke-venous" strokeWidth={2} opacity={0.4} />
        {reduceMotion ? (
          <path d={BLIP} fill="none" className="stroke-arterial" strokeWidth={2} strokeLinecap="round" />
        ) : (
          <motion.path
            d={BLIP}
            fill="none"
            className="stroke-arterial"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          />
        )}
      </svg>
    </div>
  );
}
