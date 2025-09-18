// src/components/Approach.jsx
import { Search, Compass, PenTool, ArrowLeft } from "lucide-react"; // npm i lucide-react (optional)

const DEFAULT_ITEMS = [
  {
    title: "Research",
    desc: "The methodical study of users to derive user insights.",
    // If you have an image: image: "/assets/approach/research.png",
    icon: Search,
  },
  {
    title: "Strategy",
    desc: "The process of aligning accurate research insights with the goals.",
    icon: Compass,
  },
  {
    title: "Design",
    desc: "Designing seamless experiences, solving user pain points.",
    icon: PenTool,
  },
];

function OrangePanel({ icon: Icon, image }) {
  // Top orange “illustration” area. Uses an image if provided; otherwise a gradient + icon.
  if (image) {
    return (
      <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    );
  }
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
      {/* orange gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-rose-600" />
      {/* soft dots pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      {/* decorative blurs */}
      <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute right-[-14px] bottom-[-14px] h-24 w-24 rounded-full bg-black/20 blur-xl" />
      {/* centered icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Icon ? (
          <Icon className="h-10 w-10 text-white/95 drop-shadow-[0_4px_18px_rgba(0,0,0,.35)]" />
        ) : null}
      </div>
    </div>
  );
}

export default function OurApproach({
  items = DEFAULT_ITEMS,
  heading = "OUR APPROACH",
}) {
  return (
    <section className="relative isolate w-full py-10 sm:py-14">
      {/* subtle page glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_10%_0%,rgba(168,85,247,.08),transparent_35%),radial-gradient(80%_70%_at_90%_0%,rgba(249,115,22,.06),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-white/80" />
          </span>
          <h2 className="text-lg font-semibold tracking-wide text-white">{heading}</h2>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-7">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-sm transition
                         hover:border-white/20 hover:shadow-[0_14px_36px_rgba(0,0,0,.45)]"
            >
              <OrangePanel icon={it.icon} image={it.image} />

              <div className="p-5">
                <h3 className="text-white text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {it.desc}
                </p>
              </div>

              {/* subtle gradient outline on hover */}
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
