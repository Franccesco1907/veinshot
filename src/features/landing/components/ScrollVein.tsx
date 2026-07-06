"use client";

import { useRef, type ReactNode } from "react";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollVein({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.75"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const endNodeOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 hidden w-0.5 lg:block left-[max(1.5rem,calc(50%-34rem))]"
      >
        <div className="h-full w-full bg-line" />
        {reduceMotion ? (
          <div className="absolute inset-0 bg-venous opacity-60" />
        ) : (
          <>
            <motion.div
              className="absolute inset-0 origin-top bg-venous"
              style={{ scaleY }}
            />
            <div className="absolute -left-[3px] top-0 size-2 rounded-full bg-venous" />
            <motion.div
              className="absolute -left-[3px] bottom-0 size-2 rounded-full bg-venous"
              style={{ opacity: endNodeOpacity }}
            />
          </>
        )}
      </div>
      {children}
    </div>
  );
}
