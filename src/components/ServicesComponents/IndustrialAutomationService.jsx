import { useState } from "react";
import { Plus } from "lucide-react";
import { SERVICES_IMAGES } from "@/constants/branding";

export default function IndustrialAutomationServices({ data }) {
  const {
    heading,
    sub,
    items,
    initiallyOpen,
  } = data
  const [open, setOpen] = useState(initiallyOpen);
  const toggle = (i) => setOpen((p) => (p === i ? -1 : i));

  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f10]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-14">
        <h2 className="text-[clamp(1.75rem,1.2rem+2.2vw,2.5rem)] font-semibold text-white">
          {heading}
        </h2>
        <p className="mt-2 max-w-3xl text-[clamp(0.92rem,0.85rem+0.25vw,1.05rem)] leading-relaxed text-white/75">
          {sub}
        </p>

        <div className="mt-6 space-y-4 sm:mt-8">
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
  const headingId = `auto-bar-${idx}`;
  const panelId = `auto-panel-${idx}`;
  return (
    <div className="rounded-md">
      {/* Bar */}
      <button
        id={headingId}
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-sm bg-[#5b2aa8] px-3 py-4 text-left text-[clamp(0.95rem,0.9rem+0.25vw,1.05rem)] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="truncate">{title}</span>
        <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
          <Plus className={`h-4 w-4 text-white transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`} />
          <span className="sr-only">{open ? "Collapse" : "Expand"}</span>
        </span>
      </button>

      {/* Panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className="grid overflow-hidden bg-[#0f0f10] transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="m-3 rounded-sm border border-orange-600/40 p-4 sm:p-5 md:p-6">
            <div className="grid items-start gap-5 md:grid-cols-12 md:gap-6 lg:gap-8">
              {/* Text */}
              <div className="md:col-span-7 lg:col-span-7">
                <h3 className="text-[clamp(1.1rem,0.9rem+0.8vw,1.5rem)] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 max-w-prose text-[clamp(0.92rem,0.86rem+0.25vw,1.05rem)] leading-relaxed text-white/80">
                  {body}
                </p>
              </div>

              {/* Image */}
              <div className="md:col-span-5 lg:col-span-5">
                <div className="overflow-hidden rounded-md ring-1 ring-white/10">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="block h-auto w-full object-cover aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]"
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
