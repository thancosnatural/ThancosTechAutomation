import { ArrowLeft } from "lucide-react";

/**
 * Recent Tech Projects — alternating gradient showcase cards
 * - 2 items by default (supports any number)
 * - Alternating image/text per row
 * - Tablet/browser mock frame around screenshots
 */
export default function RecentTechProjects({
  title = "Our  Recent Tech Projects",
  items = DEFAULT_ITEMS,
  frameColor = "#e6e21f", // yellow-green accent around device
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e0e10]">
      {/* soft backdrop glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-orange-400" />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-white/90">{title}</h2>
        </div>

        <div className="space-y-8">
          {items.map((item, i) => (
            <ShowcaseRow key={i} item={item} reverse={i % 2 === 1} frameColor={frameColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseRow({ item, reverse = false, frameColor }) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a1130] via-[#171227] to-[#3b1b77] p-4 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] ring-1 ring-white/10 sm:p-6 md:p-7">
      {/* inner inset highlight to mimic mock */}
      <div className="pointer-events-none absolute inset-[10px] rounded-xl ring-1 ring-white/10" />

      <div className={["grid items-center gap-6 md:grid-cols-2", reverse ? "md:[&>div:first-child]:order-2" : ""].join(" ") }>
        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
          <div className="mt-3 space-y-2 text-[13.5px] leading-6 text-white/85 sm:text-[14.5px] sm:leading-7">
            {item.points.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Image frame */}
        <div className="relative flex items-center justify-center">
          <DeviceMock src={item.image} alt={item.alt} frameColor={frameColor} />
        </div>
      </div>
    </article>
  );
}

function DeviceMock({ src, alt = "Project screenshot", frameColor = "#e6e21f" }) {
  return (
    <div
      className="w-full max-w-xl rounded-[22px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
      style={{ border: `8px solid ${frameColor}` }}
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        <div className="ml-3 h-5 flex-1 rounded bg-black/5" />
      </div>
      <img src={src} alt={alt} className="h-56 w-full object-cover sm:h-64 md:h-72" />
    </div>
  );
}

const DEFAULT_ITEMS = [
  {
    title: "Thancos naturals Icecreams",
    points: [
      "Thancos Tech is a global services based in India crafting research‑driven and user‑friendly digital products.",
      "Thancos Tech is a global services based in India crafting research‑driven and user‑friendly digital products.",
    ],
    image:
      "https://images.unsplash.com/photo-1611695434369-25c2a3c9dd9a?q=80&w=1600&auto=format&fit=crop",
    alt: "Mock site on tablet",
  },
  {
    title: "Thancos naturals Icecreams",
    points: [
      "Thancos Tech is a global services based in India crafting research‑driven and user‑friendly digital products.",
      "Thancos Tech is a global services based in India crafting research‑driven and user‑friendly digital products.",
    ],
    image:
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a5b?q=80&w=1600&auto=format&fit=crop",
    alt: "Mock site on tablet",
  },
];

/* Usage
<RecentTechProjects />

// Or pass custom items:
<RecentTechProjects
  items={[
    { title: 'Project A', points: ['line 1', 'line 2'], image: '/shots/a.jpg' },
    { title: 'Project B', points: ['line 1', 'line 2'], image: '/shots/b.jpg' },
  ]}
  frameColor="#e6e21f"
/>
*/
