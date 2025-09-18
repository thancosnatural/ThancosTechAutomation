import { useState } from "react";
import { Plus } from "lucide-react";
import { ABOUT_IMAGES } from "@/constants/branding";

export default function WhyChooseThancos({
  title = "Why Choose Thancos Automation?",
  subtitle =
    "When it comes to industrial automation and robotics integration, Elextrio Automation stands out as the partner of choice.",
  image = ABOUT_IMAGES.WhyThancos,
  items = DEFAULT_ITEMS,
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
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-[13.5px] leading-6 text-white/80 sm:text-[14.5px]">
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid items-start gap-6 md:mt-10 md:grid-cols-2 md:gap-10">
          {/* Left: Accordion */}
          <div className="space-y-3">
            {items.map((it, i) => (
              <AccordionRow
                key={it.q}
                i={i}
                q={it.q}
                a={it.a}
                open={isOpen(i)}
                onClick={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right: Image */}
          <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
            <img src={image} alt="Why choose us" className="block h-auto w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionRow({ q, a, open, onClick, i }) {
  return (
    <div className="rounded-[10px] ring-1 ring-white/12">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 rounded-[10px] bg-transparent px-4 py-3 text-left text-[14px] font-medium text-white/90 hover:bg-white/[0.02]"
        aria-expanded={open}
        aria-controls={`choose-panel-${i}`}
      >
        <span className="text-orange-400">{q}</span>
        <span className="shrink-0 rounded-sm border border-white/15 p-1.5">
          <Plus
            className={`h-4 w-4 text-orange-500 transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`}
          />
        </span>
      </button>
      <div
        id={`choose-panel-${i}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-3 text-[13.5px] leading-6 text-white/75">{a}</p>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_ITEMS = [
  {
    q: "Expertise",
    a: "With years of experience in the industry, our team brings unmatched expertise to every project. We’ve successfully tackled a wide range of automation challenges and have a proven track record of delivering exceptional results",
  },
  {
    q: "Customized Solutions",
    a: "We understand that each business is unique, and one-size-fits-all solutions won’t cut it. At Elextrio Automation, we pride ourselves on crafting customized solutions that align perfectly with your specific requirements and goals.",
  },
  {
    q: "Innovation",
    a: "We’re at the forefront of technology. Our commitment to innovation ensures that you get access to the latest advancements in automation and robotics, giving you a competitive edge in your industry.",
  },
  {
    q: "Seamless Integration",
    a: "Transitioning to automated systems can be daunting, but we make it easy. Our seamless integration process minimizes disruption to your operations, ensuring a smooth transition with minimal downtime.",
  },
  {
    q: "Ongoing Support",
    a: "Our dedication to your success doesn’t end with project completion. We offer comprehensive support and maintenance services to keep your systems running at their best, year after year.",
  },
];
