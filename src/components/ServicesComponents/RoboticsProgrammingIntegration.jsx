import { useState } from "react";
import { Plus } from "lucide-react";

/**
 * Robotics Programming Integration — accordion section
 * - Title + short intro
 * - Purple bars with circular + icon
 * - Expanded panel: orange border, left text + right image
 * - Fully responsive (fluid text + grid), accessible aria wiring
 */
export default function RoboticsProgrammingIntegration({
  heading = "Robotics Programming Integration",
  intro =
    "At Thancos Automation, we specialize in Robotics Programming and Integration to elevate your industrial processes. Our service include",
  items = DEFAULT_ITEMS,
  initiallyOpen = 0,
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const toggle = (i) => setOpen((p) => (p === i ? -1 : i));

  return (
    <section className="relative w-full overflow-hiddenbg-[#0f0f10]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-12">
        <h2 className="text-[clamp(1.6rem,1.1rem+2.2vw,2.25rem)] font-semibold text-white">
          {heading}
        </h2>
        <p className="mt-1 max-w-3xl text-[clamp(0.9rem,0.85rem+0.25vw,1.05rem)] leading-relaxed text-white/75">
          {intro}
        </p>

        <div className="mt-5 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={it.title}
              idx={i}
              title={it.title}
              panelTitle={it.panelTitle}
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

function AccordionItem({ idx, title, panelTitle, body, image, open, onClick }) {
  const headingId = `robo-bar-${idx}`;
  const panelId = `robo-panel-${idx}`;
  return (
    <div className="rounded-sm">
      {/* Purple bar */}
      <button
        id={headingId}
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-sm bg-[#5b2aa8] px-3 py-4 text-left text-[clamp(0.95rem,0.9rem+0.25vw,1.05rem)] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
                <h3 className="text-[clamp(1.05rem,0.95rem+0.6vw,1.3rem)] font-semibold text-white">
                  {panelTitle || title}
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
                    alt={panelTitle || title}
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
    title: "Fixed Automation",
    panelTitle: "Precision Programming",
    body:
      "Our team seamlessly integrates robots into your workflow, enhancing efficiency and productivity.",
    image:
      "https://images.unsplash.com/photo-1581092915940-d8b31d46f8a0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Programmable Automation",
    panelTitle: "Adaptive Cells",
    body:
      "Flexible, software-driven robotics with quick changeovers and recipe management.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Flexible Automation",
    panelTitle: "High-Mix Efficiency",
    body:
      "Vision-guided robots and modular tooling to handle SKU variety without sacrificing throughput.",
    image:
      "https://images.unsplash.com/photo-1580691060144-cb48d4a0d6a0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Integrated Automation",
    panelTitle: "Unified Control",
    body:
      "Tight integration of robots with PLC/SCADA/MES for synchronized, reliable operation.",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop",
  },
];

/* Usage
<RoboticsProgrammingIntegration initiallyOpen={0} />
*/
