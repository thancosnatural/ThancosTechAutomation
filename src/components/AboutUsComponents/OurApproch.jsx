import { ABOUT_IMAGES } from "@/constants/branding";

export default function OurApproach({
  title = "Our Approach",
  points = DEFAULT_POINTS,
}) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2 lg:gap-14 lg:px-12 lg:py-14">
        {/* Left: Image */}
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <img src={ABOUT_IMAGES.Our_Approach} alt="Automation approach" className="block h-auto w-full object-cover" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[44px]">{title}</h2>
          <ul className="mt-6 space-y-5">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  {/* arrow glyph */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/90">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-[14px] leading-7 text-white/80">
                  <span className="font-semibold text-white">{p.lead}</span>
                  <span className=""> {p.copy}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_POINTS = [
  {
    lead: "Precision",
    copy:
      "We prioritize accuracy and reliability in all our solutions, ensuring that every process is executed with utmost precision.",
  },
  {
    lead: "Innovation",
    copy:
      "We stay on the cutting edge of technology, incorporating the latest advancements in automation to deliver innovative solutions.",
  },
  {
    lead: "Innovation",
    copy:
      "We stay on the cutting edge of technology, incorporating the latest advancements in automation to deliver innovative solutions.",
  },
];
