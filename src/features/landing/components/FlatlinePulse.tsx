export function FlatlinePulse({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 60" className={className} aria-hidden="true">
      {/* two heartbeats, then flatline */}
      <path
        d="M 0 30 H 120 h 10 l 8 -18 l 12 32 l 8 -14 h 10 H 300 h 10 l 8 -12 l 12 22 l 8 -10 h 10 H 800"
        fill="none"
        className="stroke-venous"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M 440 30 H 800"
        fill="none"
        className="stroke-arterial"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
