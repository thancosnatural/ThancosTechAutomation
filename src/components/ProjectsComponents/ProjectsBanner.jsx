
export default function ProjectsBanner({ title = "OUR PROJECTS" }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0e4f] via-[#4b1a8f] to-[#2a0a58]" />

      {/* Glow hotspots */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-0 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl" />

      {/* SVG tech lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e879f9" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#stroke)" strokeOpacity="0.55" strokeWidth="1.4">
          {Array.from({ length: 10 }).map((_, i) => {
            const pad = 40 + i * 20;
            const tx = 80 - i * 6; // shift to simulate depth
            const skew = -18;
            return (
              <g key={i} transform={`translate(${tx},0) skewX(${skew})`}>
                <rect x={pad} y={40 + i * 6} width={1100 - pad * 2} height={320 - i * 12} rx="8" />
              </g>
            );
          })}
        </g>
        {/* small floating dots */}
        <g fill="#ffffff" fillOpacity="0.2">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle key={i} cx={(i * 137) % 1200} cy={60 + ((i * 83) % 300)} r={(i % 3) + 1} />
          ))}
        </g>
        {/* right side dark vignette */}
        <linearGradient id="fadeR" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#0b0716" />
        </linearGradient>
        <rect x="800" y="0" width="400" height="400" fill="url(#fadeR)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 grid h-[180px] place-items-center sm:h-[220px] md:h-[260px]">
        <h1 className="px-4 text-center text-3xl font-extrabold tracking-wide text-white sm:text-4xl md:text-[44px]">
          {title}
        </h1>
      </div>
    </section>
  );
}