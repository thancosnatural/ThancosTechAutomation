import { HOME_IMAGES } from "@/constants/branding";
import { ArrowLeft } from "lucide-react";

/**
 * Recent Projects grid + animated bottom line
 * - 3-up responsive cards (1/2/3 columns)
 * - Rounded image-on-top, caption below
 * - Continuous animated accent line at the section bottom
 */
export default function RecentProjects({
  title = "Our  Recent Projects",
  items = DEFAULT_ITEMS,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D]">
      {/* ambient glows */}
      {/* <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" /> */}

      <div className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:px-12">
        {/* heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-orange-400" />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-white/90">{title}</h2>
        </div>

        {/* grid of cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>

      {/* animated bottom line */}
      <AnimatedAccentLine height={6} speed={6} colors={["#ff7300", "#805ad5"]} />
    </section>
  );
}

function ProjectCard({ image, title }) {
  return (
    <article className="group overflow-hidden rounded-[22px] bg-[#141416] ring-1 ring-white/8 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      <div className="p-2">
        <div className="overflow-hidden rounded-[18px]">
          <img
            src={image}
            alt=""
            className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-40 md:h-44"
          />
        </div>
      </div>
      <div className="rounded-t-[18px] bg-[#1a1b1e] px-4 pb-5 pt-4 text-center">
        <p className="text-[13.5px] font-medium leading-5 text-white/90 sm:text-[14px]">
          {title}
        </p>
      </div>
    </article>
  );
}

// Reusable animated line you can drop anywhere
export function AnimatedAccentLine({ height = 6, speed = 6, colors = ["#ff7300", "#805ad5"], backgroundOpacity = 0.06 }) {
  const grad = `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${colors[0]} 20%, ${colors[1]} 40%, ${colors[0]} 60%, ${colors[1]} 80%, rgba(255,255,255,0) 100%)`;
  return (
    <div className="relative mt-8 w-full overflow-hidden" style={{ height }}>
      <div className="absolute inset-0" style={{ background: `rgba(255,255,255,${backgroundOpacity})` }} />
      <div
        className="absolute inset-0 animate-[stripeMove_var(--spd)_linear_infinite] bg-[length:200%_100%]"
        style={{
          backgroundImage: grad,
          // provide CSS var for speed so multiple instances can have different durations
          ['--spd']: `${speed}s`,
        }}
      />
      <style>{`@keyframes stripeMove { from { background-position: 0% 0; } to { background-position: 200% 0; } }`}</style>
    </div>
  );
}

const DEFAULT_ITEMS = [
  {
    image: HOME_IMAGES.Project1,
    title: "Robotic Industrial washing machines",
  },
  {
    image: HOME_IMAGES.Project2,
    title: "SPMs to customized client requirements",
  },
  {
    image: HOME_IMAGES.Project3,
    title: "Food and beverage material handling",
  },
  {
    image: HOME_IMAGES.Project4,
    title: "Robotic fettling cells",
  },
  {
    image: HOME_IMAGES.Project5,
    title: "Leak Tester machines for casting",
  },
];
