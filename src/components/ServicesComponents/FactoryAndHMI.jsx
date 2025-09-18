import { useState } from "react";
import { Plus } from "lucide-react";
import { SERVICES_IMAGES } from "@/constants/branding";


export default function FactoryAndHMISections({
  factory = FACTORY_CONTENT,
  hmi = HMI_CONTENT,
  plc = INDUSTRIAL_PLC_CONTENT,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f10] px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-12">
      <ServiceGroup {...factory} />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...hmi} reverse />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...plc} />
    </section>
  );
}

function ServiceGroup({ title, sub, image, items, reverse = false }) {
  return (
    <article className="mx-auto md:px-9 grid max-w-7xl grid-cols-1 items-start gap-5 md:grid-cols-12 md:gap-6 lg:gap-8">
      {/* Image */}
      <div className={[reverse ? "md:order-2 md:col-span-5" : "md:col-span-5"].join(" ")}>
        <div className="overflow-hidden rounded-md ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <img src={image} alt="section" className="block h-auto w-full object-cover aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]" />
        </div>
      </div>

      {/* Text + Accordion */}
      <div className={[reverse ? "md:order-1 md:col-span-7" : "md:col-span-7"].join(" ")}>
        <h2 className="text-[clamp(1.4rem,1.1rem+1.2vw,1.9rem)] font-semibold text-white">{title}</h2>
        <p className="mt-1 text-[clamp(0.92rem,0.86rem+0.25vw,1.05rem)] leading-relaxed text-white/80">{sub}</p>

        <div className="mt-3 space-y-2">
          {items.map((it, i) => (
            <MiniAccordion key={i} label={it.label} body={it.body} />
          ))}
        </div>
      </div>
    </article>
  );
}

function MiniAccordion({ label, body }) {
  const [open, setOpen] = useState(false);
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="rounded-sm border border-white/10">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-4 rounded-sm bg-transparent px-3 py-2 text-left text-[14px] font-medium text-white/90 hover:bg-white/[0.03]"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <span className="text-white/90">{label}</span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-orange-500/60">
          <Plus className={`h-4 w-4 text-orange-500 transition-transform ${open ? "rotate-45" : "rotate-0"}`} />
        </span>
      </button>
      <div
        id={`panel-${id}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-3 pb-3 text-[13.5px] leading-6 text-white/75">{body}</p>
        </div>
      </div>
    </div>
  );
}

const FACTORY_CONTENT = {
  title: "Our Factory Automation Services",
  sub:
    "At Thancos Automation, we understand that every factory is unique, and we offer a range of tailored solutions to meet your specific needs. Our factory automation service encompasses four key areas",
  image: SERVICES_IMAGES.OurFactory,
  items: [
    {
      label: "Partial Process Automation",
      body:
        "Automate critical sub‑processes to remove bottlenecks and improve throughput without a full line redesign.",
    },
    {
      label: "Single Automated Machines",
      body:
        "Purpose‑built stations for tasks like assembly, inspection, or packaging with PLC/vision integration.",
    },
    { label: "SCADA", body: "Real‑time monitoring and control with alarms, historian, and reporting." },
    { label: "DCS", body: "Distributed Control Systems for complex, multi‑loop process industries." },
  ],
};

const HMI_CONTENT = {
  title: "HMI Software Services",
  sub:
    "At Elextrio Automation, we offer a range of HMI software services to cater to diverse industrial needs. Elextrio Automation offers a diverse range of HMI software services, ensuring that your industrial processes benefit from the right level of control, monitoring, and functionality.",
  image: SERVICES_IMAGES.HMI,
  items: [
    {
      label: "Supervisory Software Solutions",
      body:
        "High‑level control and visualization across lines and plants with centralized role‑based access.",
    },
    {
      label: "HMI/Client Software Customization",
      body:
        "Tailored operator screens, workflows, and KPIs aligned to your process and safety standards.",
    },
    {
      label: "Software Modul Integration",
      body:
        "Integrate add‑on modules (recipe, SPC, OEE, traceability) with existing PLC/SCADA/MES infrastructure.",
    },
  ],
};

const INDUSTRIAL_PLC_CONTENT = {
  title: "Industrial PLC Programming",
  sub:
    "At Thancos Automation, we excel in Industrial PLC (Programmable Logic Controller) Programming to optimize your industrial processes. Thancos Automation is your trusted partner for PLC programming excellence. Whether you need new programming solutions or enhancements to existing systems, we bring innovation and expertise to every project. Contact us today to elevate your industrial automation capabilities.",
  image: SERVICES_IMAGES.Industrial,
  items: [
    {
      label: "Anolog Input Modules",
      body:
        "Measure continuous signals (voltage or current) from sensors for prevision data.",
    },
    {
      label: "Anolog Output Modules",
      body:
        "Measure continuous signals (voltage or current) from sensors for precision data.",
    },
    {
      label: "Communication Modules",
      body: "Enable data exchange between PLCs and external devices via various protocols."
    },
    {
      label: "Safety Programming",
      body: "involves creating logic and algorithms to ensure the safe operation of industrial systems and machinery."
    },
    {
      label: "Safety IO",
      body: "safeguards workers, equipment, and complies with standards through sensors, emergency stops, and diagnostics."
    },
    {
      label: "Digital Input Modules",
      body: "These modules read digital signals (on/off or high/low) from sensors or switches."
    },
  ],
};
