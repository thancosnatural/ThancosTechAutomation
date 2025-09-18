import { useState } from "react";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { AnimatedAccentLine } from "../AnimatedAccentLine";
import { HOME_IMAGES } from "@/constants/branding";

/**
 * Benefits Section with Accordion + Animated Bottom Line
 * - Left: image
 * - Right: accordion where items open/close to show answers
 * - Top heading/subtitle, orange accent
 * - Re-uses inline keyframes for the continuous bottom stripe
 */
export default function BenefitsAccordion({
  title = "Our Benefits",
  subtitle = "Benefits of Our Thancos Automation",
  blurb =
  "When you choose Thancos Automation as your partner in industrial automation and robotics integration, you unlock a wealth of benefits that drive your business towards greater success.",
  image = "https://images.unsplash.com/photo-1572947650440-e8a97ef053b0?q=80&w=1400&auto=format&fit=crop",
  items = DEFAULT_ITEMS,
}) {
  const [open, setOpen] = useState(0); // index of open panel (or null)
  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b0d]">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-white/80 ring-1 ring-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-rotate-45 text-orange-400"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-sm font-medium">{title}</span>
          </div>
          <h2 className="text-xl font-semibold text-orange-400 sm:text-2xl">{subtitle}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-neutral-300 sm:text-base">
            {blurb}
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
          {/* Left image */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img src={HOME_IMAGES.Benefits} alt="Automation" className="h-full w-full object-cover" />
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {items.map((it, i) => (
              <AccordionItem
                key={it.q}
                i={i}
                isOpen={open === i}
                onToggle={() => toggle(i)}
                {...it}
              />
            ))}
          </div>
        </div>
      </div>

      {/* animated bottom line */}
      <AnimatedAccentLine height={6} speed={6} colors={["#ff7300", "#805ad5"]} />
    </section>
  );
}

function AccordionItem({ q, a, isOpen, onToggle, i }) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-white/12">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-xl bg-[#141416] px-5 py-4 text-left text-[14px] font-medium text-white/90 transition hover:bg-[#17181b]"
        aria-expanded={isOpen}
        aria-controls={`panel-${i}`}
      >
        <span>{q}</span>
        <span className="shrink-0 rounded-md bg-white/5 p-1.5 ring-1 ring-white/10">
          {isOpen ? <Minus className="h-4 w-4 text-white/80" /> : <Plus className="h-4 w-4 text-white/80" />}
        </span>
      </button>
      <div
        id={`panel-${i}`}
        className="grid bg-[#121316] px-5 transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="py-4 text-[13.5px] leading-6 text-neutral-300">{a}</p>
        </div>
      </div>
    </div>
  );
}



const DEFAULT_ITEMS = [
  {
    q: "Enhanced Efficiency",
    a: "Our solutions are meticulously designed to streamline your processes, minimize downtime, and optimize production. Expect increased efficiency and reduced operational costs.",
  },
  {
    q: "Precision and Reliability",
    a: "We prioritize precision and reliability in every aspect of our services. Your operations become more consistent, resulting in higher-quality outputs and fewer errors.",
  },
  {
    q: "Innovation at Your Fingertips",
    a: "Thanco's Automation keeps you on the cutting edge of technology. Our commitment to innovation means you have access to the latest advancements in automation, ensuring your operations stay competitive.",
  },
  {
    q: "Minimal Disruption",
    a: "Transitioning to automated systems can be challenging, but we make it easy. Our seamless integration approach minimizes disruption to your operations, ensuring a smooth transition.",
  },
  {
    q: "Competitive Advantage",
    a: "By choosing Thanco's Automation, you gain a competitive advantage. Our solutions are designed to not only meet but exceed your expectations, making you a leader in your industry.",
  },
  {
    q: "Turnkey Solutions",
    a: "From concept to execution, we offer end-to-end turnkey solutions. This means you can focus on your core business while we take care of the technical details.",
  },
];
