// src/sections/HeroTechRated.jsx
import { Link } from "react-router-dom";

export default function HeroTechRated({
  // You can override any of these props
  line1 = "India’s Top Rated",
  highlight = "Digital",
  line2Rest = "Transformations Company",
  chips,
  subtitle = "Thancos Tech is a global services based in India crafting research-driven and user-friendly digital products.",
  cta = { label: "Get in Touch", to: "/contact-us" },
  className = "",
}) {
  return (
    <section className={`relative isolate w-full ${className} min-h-[90vh]`}>
      {/* soft dark gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_15%_0%,#1b1418_0%,#0d0c10_55%,#09090b_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_10%_5%,rgba(249,115,22,.18),transparent_60%),radial-gradient(55%_50%_at_80%_80%,rgba(168,85,247,.16),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="min-h-[42svh] py-10 sm:py-14 md:py-16 flex items-center">
          <div className="w-full max-w-5xl">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block">{line1}</span>
              <span className="block">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  {highlight}
                </span>{" "}
                {line2Rest}
              </span>
            </h1>

            {/* Chips */}
            {chips?.length ? (
              <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold tracking-wider text-white/80 uppercase">
                {chips.map((c, i) => (
                  <li key={c} className="flex items-center gap-4">
                    <span>{c}</span>
                    {i < chips.length - 1 && (
                      <span aria-hidden className="opacity-50">–</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}

            {/* Subtitle */}
            {subtitle ? (
              <p className="mt-3 sm:mt-4 max-w-3xl text-[13px] sm:text-sm text-neutral-300">
                {subtitle}
              </p>
            ) : null}

            {/* CTA */}
            {cta?.label ? (
              <div className="mt-6">
                <Link
                  to={cta.to || "#"}
                  className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white
                             bg-gradient-to-b from-violet-600 to-fuchsia-600 shadow-[0_10px_30px_rgba(99,102,241,.35)]
                             ring-1 ring-white/10 transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  {cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
