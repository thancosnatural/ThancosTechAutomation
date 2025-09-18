import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";

export default function FAQSection({
  data,
  allowMultiple = false,
}) {
  const [open, setOpen] = useState(allowMultiple ? new Set() : -1);

  const toggle = (i) => {
    if (allowMultiple) {
      const copy = new Set(open);
      copy.has(i) ? copy.delete(i) : copy.add(i);
      setOpen(copy);
    } else {
      setOpen((prev) => (prev === i ? -1 : i));
    }
  };

  const isOpen = (i) => (allowMultiple ? open.has(i) : open === i);

  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f10]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-orange-400" />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-white">FAQ's</h2>
        </div>
        <p className="mb-6 text-[13.5px] leading-6 text-white/70 sm:text-sm">Let us help you quickly ease your queries and make informed decisions.</p>

        {/* List */}
        <div className="divide-y divide-white/10">
          {data.map((it, i) => (
            <div key={i} className="py-3">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-2 text-left text-[14px] text-white/90 hover:text-white focus:outline-none"
                aria-expanded={isOpen(i)}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{it.q}</span>
                <Plus
                  className={`h-4 w-4 text-[#ff7a00] transition-transform duration-200 ${isOpen(i) ? "rotate-45" : "rotate-0"}`}
                />
              </button>
              <div
                id={`faq-panel-${i}`}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen(i) ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden pr-8">
                  <p className="pb-3 pt-1 text-[13.5px] leading-6 text-white/70">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
