import { useId } from "react";

export function SyringeLogomark({
  className,
  ariaLabel = "Veinshot: the wordmark inside a syringe barrel",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  const barrelClipId = useId();

  return (
    <svg viewBox="0 0 196 80" className={className} role="img" aria-label={ariaLabel}>
      <defs>
        <clipPath id={barrelClipId}>
          <rect x="26" y="22" width="132" height="36" rx="6" />
        </clipPath>
      </defs>
      {/* dose + ink blocks, clipped to the barrel's rounded corners */}
      <g clipPath={`url(#${barrelClipId})`}>
        <rect x="26" y="22" width="66" height="36" className="logomark-dose fill-arterial" />
        <rect x="92" y="22" width="66" height="36" className="fill-stage" />
      </g>
      {/* barrel */}
      <rect
        x="26"
        y="22"
        width="132"
        height="36"
        rx="6"
        fill="none"
        className="stroke-foreground"
        strokeWidth="3"
      />
      {/* plunger */}
      <g className="logomark-plunger">
        <line x1="13" y1="30" x2="13" y2="50" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
        <line x1="13" y1="40" x2="26" y2="40" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* needle */}
      <line x1="158" y1="40" x2="180" y2="40" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
      {/* y=40 seats the lowercase x-height on the barrel's optical center; the
          mathematical center (y=41) reads bottom-heavy. */}
      <text
        x="59"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
        className="fill-white font-sans"
      >
        vein
      </text>
      <text
        x="125"
        y="40"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
        className="fill-white font-sans"
      >
        shot
      </text>
    </svg>
  );
}
