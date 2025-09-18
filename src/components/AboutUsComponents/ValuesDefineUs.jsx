import { ArrowLeft } from "lucide-react";


export default function ValuesThatDefineUs({
  title = "VALUES THAT DEFINE US",
  items = DEFAULT_VALUES,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f10]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-white/80" />
          </span>
          <h2 className="text-lg font-semibold tracking-[0.14em] text-white">{title}</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ValueCard key={i} index={i + 1} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ index, heading, body, badge }) {
  const num = String(index).padStart(2, "0");
  return (
    <article className="max-w-sm">
      {/* Big number */}
      <div className="flex items-end gap-2">
        <span className="font-light leading-none text-white/90 text-6xl sm:text-7xl md:text-8xl">{num}</span>
        <span className="mb-2 inline-block h-2 w-2 rounded-sm bg-orange-500" />
      </div>

      {/* Heading */}
      <h3 className="mt-4 text-[15.5px] font-semibold text-white sm:text-[16px]">{heading}</h3>

      {/* Body */}
      <p className="mt-3 text-[13.5px] leading-6 text-white/70 sm:text-[14px]">{body}</p>

    </article>
  );
}

const DEFAULT_VALUES = [
  {
    heading: "User First",
    body:
      "Our people thrive in an environment that celebrates experimentation, adaptability, and innovative ideas.",
  },
  {
    heading: "Innovation with Purpose",
    body:
      "We embrace creativity and cutting‑edge technology not just for novelty, but to solve real problems and deliver measurable results.",
  },
  {
    heading: "Collaboration at Heart",
    body:
      "We believe the best ideas are born when diverse minds come together. Teamwork, transparency, and open communication fuel everything we do.",
  },
  {
    heading: "Craftsmanship in Detail",
    body:
      "Design is more than aesthetics—it's about precision. From pixels to code, we obsess over details that elevate the entire experience.",
  },
  {
    heading: "Integrity & Trust",
    body:
      "We value honesty and accountability. Our clients trust us because we stay true to our word and deliver on promises.",
  },
  {
    heading: "Growth Mindset",
    body:
      "Technology evolves fast—and so do we. We continuously learn, adapt, and challenge ourselves to set higher standards.",
  },
];
