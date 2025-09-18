// src/components/Testimonials.jsx
import { MessageCircle as MessageIcon } from "lucide-react"; // npm i lucide-react (optional)

const TESTIMONIALS = [
  {
    title: "Seamless user\nExperience",
    quote:
      `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
  {
    title: "Seamless user\nExperience",
    quote:
      `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
  {
    title: "Seamless user\nExperience",
    quote:
      `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`,
  },
];

export default function Testimonials({
  items = TESTIMONIALS,
  heading = "Our Client Testimonials",
  lead = "Genuine experiences and real results – What our clients would like you to know.",
}) {
  return (
    <section className="relative isolate w-full py-12 sm:py-16">
      {/* backdrop (subtle dark gradient) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(124,58,237,0.08),transparent_35%),radial-gradient(100%_80%_at_100%_0%,rgba(249,115,22,0.06),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xl sm:text-2xl font-semibold tracking-tight">
            <span className="mr-2 align-middle text-2xl sm:text-3xl">↳</span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
              {heading}
            </span>
          </p>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-neutral-300">
            {lead}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {items.map((t, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/70 p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-sm transition
                         hover:border-white/20 hover:shadow-[0_14px_36px_rgba(0,0,0,.45)]"
            >
              {/* corner radius glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

              <div className="flex items-start gap-3">
                {/* orange chat icon badge */}
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600/20 text-orange-400 ring-1 ring-orange-500/20">
                  {/* Lucide icon (fallback to SVG if package not installed) */}
                  {MessageIcon ? (
                    <MessageIcon className="h-5 w-5" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                    </svg>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-semibold leading-snug text-white">
                  {t.title.split("\n").map((line, idx) => (
                    <span key={idx} className={idx ? "block" : ""}>
                      {line}
                    </span>
                  ))}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                {t.quote}
              </p>

              {/* subtle rounded outline accent on hover */}
              <span
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,.25), rgba(249,115,22,.25))",
                  WebkitMask:
                    "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
