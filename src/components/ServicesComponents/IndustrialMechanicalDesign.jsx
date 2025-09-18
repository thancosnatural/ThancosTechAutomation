import { useState } from "react";
import { Plus } from "lucide-react";

/**
 * Industrial Mechanical Design — accordion section
 * - Title + short intro copy
 * - Purple section bars with round + icon
 * - Expanded panel: orange border, left text + right image
 * - Fully responsive, fluid type, accessible
 */
export default function MechanicalDesignAccordion({
  heading = "Industrial Mechanical Design",
  intro =
    "At Thancos Automation, we are experts in Industrial Mechanical Design, crafting robust and efficient mechanical systems tailored for industrial applications.",
  items = DEFAULT_ITEMS,
  initiallyOpen = 0,
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const toggle = (i) => setOpen((p) => (p === i ? -1 : i));

  return (
    <section className="relative w-full overflow-hidden rounded-[22px] bg-[#0f0f10]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-12">
        <h2 className="text-[clamp(1.6rem,1.1rem+2.2vw,2.25rem)] font-semibold text-white">
          {heading}
        </h2>
        <p className="mt-1 max-w-3xl text-[clamp(0.9rem,0.85rem+0.25vw,1.05rem)] leading-relaxed text-white/75">
          {intro}
        </p>

        <div className="mt-5 space-y-3">
          {items.map((it, i) => (
            <Item
              key={it.title}
              idx={i}
              title={it.title}
              body={it.body}
              image={it.image}
              open={open === i}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ idx, title, body, image, open, onClick }) {
  const headingId = `mech-bar-${idx}`;
  const panelId = `mech-panel-${idx}`;
  return (
    <div className="rounded-sm">
      {/* Purple bar */}
      <button
        id={headingId}
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-sm bg-[#5b2aa8] px-3 py-2 text-left text-[clamp(0.95rem,0.9rem+0.25vw,1.05rem)] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="truncate">{title}</span>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
          <Plus className={`h-3.5 w-3.5 text-white transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`} />
          <span className="sr-only">{open ? "Collapse" : "Expand"}</span>
        </span>
      </button>

      {/* Open panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className="grid overflow-hidden bg-[#0f0f10] transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="m-3 rounded-sm border border-orange-600/60 p-4 sm:p-6">
            <div className="grid items-start gap-6 md:grid-cols-12">
              {/* Left: text */}
              <div className="md:col-span-7">
                <h3 className="text-[clamp(1.1rem,0.95rem+0.6vw,1.4rem)] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 max-w-prose text-[clamp(0.92rem,0.86rem+0.25vw,1.05rem)] leading-relaxed text-white/80">
                  {body}
                </p>
              </div>
              {/* Right: image */}
              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-sm ring-1 ring-white/10">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="block h-auto w-full object-cover aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_ITEMS = [
  {
    title: "Machine Design",
    body:
      "Our expertise in crafting industrial machinery for specific manufacturing processes to enhance efficiency and precision.",
    image:
      "https://images.unsplash.com/photo-1611419010196-27cfda0e3a07?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Programmable Automation",
    body: "Flexible, software-controlled systems to accommodate product variants and batch runs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Flexible Automation",
    body: "Adaptable cells and quick changeovers that sustain productivity across diverse SKUs.",
    image: "https://images.unsplash.com/photo-1581094478373-1e7e2cde41ff?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Integrated Automation",
    body: "Tightly integrated PLC/robots/vision with supervisory systems for unified, reliable operation.",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop",
  },
];

/* Usage
<MechanicalDesignAccordion initiallyOpen={0} />
*/
