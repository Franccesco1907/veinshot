"use client";

import { motion, useReducedMotion } from "motion/react";

const VEIN_PATH =
  "M -10 170 H 110 C 150 170 150 100 190 100 H 290 C 330 100 330 235 370 235 H 460 C 500 235 500 165 540 165 H 615";

/* Dash pattern: one 46px pulse travelling a ~700px path per cycle. */
const PULSE_DASH = "46 700";
const PULSE_CYCLE = 746;

const NODES = [
  { cx: 190, cy: 100 },
  { cx: 370, cy: 235 },
  { cx: 540, cy: 165 },
] as const;

const PRODUCT_BLOCKS = [
  { x: 634, y: 86, width: 132, height: 22, delay: 1.4 },
  { x: 634, y: 120, width: 60, height: 120, delay: 2.2 },
  { x: 706, y: 120, width: 60, height: 54, delay: 3.0 },
  { x: 706, y: 186, width: 60, height: 54, delay: 3.8 },
] as const;

/*
 * Generic tool-category icons riding the vein: terminal, database,
 * branching, cloud, packaging. Deliberately unbranded — third-party
 * logos never appear inside brand animations (AGENTS.md, rule 3).
 * Shapes are centered on the origin so animateMotion can place them.
 */
const TOOL_ICONS = [
  {
    id: "terminal",
    begin: "1.6s",
    shape: (
      <>
        <path d="M -6 -3.5 L -2 0 L -6 3.5" />
        <path d="M 0.5 4 H 6" />
      </>
    ),
  },
  {
    id: "database",
    begin: "2.5s",
    shape: (
      <>
        <ellipse cx={0} cy={-4} rx={5.5} ry={2.2} />
        <path d="M -5.5 -4 V 4 a 5.5 2.2 0 0 0 11 0 V -4" />
        <path d="M -5.5 0 a 5.5 2.2 0 0 0 11 0" />
      </>
    ),
  },
  {
    id: "git-branch",
    begin: "3.4s",
    shape: (
      <>
        <circle cx={-4} cy={-4.5} r={2} />
        <circle cx={-4} cy={4.5} r={2} />
        <circle cx={4.5} cy={-4.5} r={2} />
        <path d="M -4 -2.5 V 2.5" />
        <path d="M 4.5 -2.5 C 4.5 1.5 -4 -0.5 -4 2.5" />
      </>
    ),
  },
  {
    id: "cloud",
    begin: "4.3s",
    shape: (
      <path d="M -4.5 4 H 4 a 3.4 3.4 0 0 0 0.7 -6.7 A 5.2 5.2 0 0 0 -5 -1.5 A 3.4 3.4 0 0 0 -4.5 4 Z" />
    ),
  },
  {
    id: "package",
    begin: "5.2s",
    shape: (
      <>
        <path d="M 0 -6 L 5.5 -3 V 3 L 0 6 L -5.5 3 V -3 Z" />
        <path d="M -5.5 -3 L 0 0 L 5.5 -3" />
        <path d="M 0 0 V 6" />
      </>
    ),
  },
] as const;

export function VeinCircuit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="stage-grid relative overflow-hidden rounded-xl border border-stage-line">
      <svg
        viewBox="0 0 800 320"
        className="block w-full"
        role="img"
        aria-label="A circuit-shaped vein carries tool icons into a wireframe product, lighting it up section by section"
      >
        {/* Motion track for the travelling glyphs (never painted). */}
        <path id="vein-flow" d={VEIN_PATH} fill="none" stroke="none" />

        <motion.path
          d={VEIN_PATH}
          fill="none"
          className="stroke-venous"
          strokeWidth={3}
          opacity={0.55}
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        />

        {!reduceMotion && (
          <motion.path
            d={VEIN_PATH}
            fill="none"
            className="stroke-stage-pulse"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={PULSE_DASH}
            initial={{ strokeDashoffset: PULSE_CYCLE, opacity: 0 }}
            animate={{ strokeDashoffset: [PULSE_CYCLE, 0], opacity: 1 }}
            transition={{
              strokeDashoffset: { duration: 3, ease: "linear", repeat: Infinity, delay: 1.2 },
              opacity: { duration: 0.3, delay: 1.2 },
            }}
          />
        )}

        {NODES.map((node) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            {...node}
            r={4}
            className="fill-venous"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          />
        ))}

        {/* Wireframe product */}
        <rect x={620} y={70} width={160} height={190} rx={8} fill="none" className="stroke-stage-line" strokeWidth={2} />
        {PRODUCT_BLOCKS.map((block) => (
          <g key={`${block.x}-${block.y}`}>
            <rect {...block} rx={4} fill="none" className="stroke-stage-dim" strokeWidth={2} />
            {!reduceMotion && (
              <motion.rect
                {...block}
                rx={4}
                fill="none"
                className="stroke-stage-pulse"
                strokeWidth={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: block.delay }}
              />
            )}
          </g>
        ))}

        {/* Tool icons riding the vein (SMIL scales with the viewBox). */}
        {!reduceMotion &&
          TOOL_ICONS.map((icon) => (
            <g
              key={icon.id}
              opacity={0}
              fill="none"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-stage-foreground"
            >
              {/* Inner scale wrapper: keeps animateMotion's translation in
                  unscaled path coordinates while sizing up the icon shapes. */}
              <g transform="scale(1.75)">{icon.shape}</g>
              {/* Opacity 0 until `begin` (SMIL renders at the origin first), then
                  fade in at the vein entry and get absorbed into the product. */}
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.06;0.86;1"
                dur="4.5s"
                begin={icon.begin}
                repeatCount="indefinite"
              />
              <animateMotion dur="4.5s" begin={icon.begin} repeatCount="indefinite">
                <mpath href="#vein-flow" />
              </animateMotion>
            </g>
          ))}
      </svg>
    </div>
  );
}
