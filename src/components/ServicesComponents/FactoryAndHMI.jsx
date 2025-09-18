import { useState } from "react";
import { Plus } from "lucide-react";
import { SERVICES_IMAGES } from "@/constants/branding";


export default function FactoryAndHMISections({
  factory = FACTORY_CONTENT,
  hmi = HMI_CONTENT,
  plc = INDUSTRIAL_PLC_CONTENT,
  roboticsProgramming = ROBOTICS_PROGRAMMING_CONTENT,
  specialPurpose = SPECIAL_PURPOSE_CONTENT,
  completeTurnkey = COMPLETE_TURNKEY_CONTENT
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0f10] px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-12">
      <ServiceGroup {...factory} />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...hmi} reverse />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...plc} />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...roboticsProgramming} reverse />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...specialPurpose} />
      <div className="h-8 sm:h-10" />
      <ServiceGroup {...completeTurnkey} reverse />
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
        "For targeted improvements, we implement partial process automation to optimize specific aspects of your production, enhancing efficiency and reducing operational costs",
    },
    {
      label: "Single Automated Machines",
      body:
        "We design and integrate individual automated machines that perform dedicated tasks with precision and reliability, contributing to your overall production process.",
    },
    {
      label: "SCADA",
      body: "SCADA, a key component of our Factory Automation services, provides real-time control and monitoring for enhanced operational efficiency"
    },
    {
      label: "DCS",
      body: "DCS, a vital aspect of our Factory Automation services, enhances complex process control and monitoring, ensuring seamless efficiency."
    },
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


const ROBOTICS_PROGRAMMING_CONTENT = {
  title: "Robotics Programming Integration",
  sub:
    "At Elextrio Automation, we specialize in Robotics Programming and Integration to elevate your industrial processes. Our service includes",
  image: SERVICES_IMAGES.RoboticProgramming,
  items: [
    {
      label: "Precision Programming",
      body:
        "We customize robotic systems for your specific needs, ensuring precise movements and optimal task execution.",
    },
    {
      label: "Seamless Integration",
      body:
        "Our team seamlessly integrates robots into your workflow, enhancing efficiency and productivity.",
    },
    {
      label: "Varsatile Application",
      body: "From manufacturing to logistics, our expertise spans various industries, offering robotic solutions for diverse applications."
    },

  ],
};


const SPECIAL_PURPOSE_CONTENT = {
  title: "Special Purpose Machine (Turnkey)",
  sub:
    "Elextrio Automation specializes in delivering turnkey solutions for Special Purpose Machines (SPMs). Our comprehensive service includes",
  image: SERVICES_IMAGES.SpecialPurpose,
  items: [
    {
      label: "Customized Design",
      body:
        "We design SPMs tailored to your unique manufacturing or production needs, ensuring efficiency and precision.",
    },
    {
      label: "Manufacturing",
      body:
        "Our team handles the fabrication, assembly,and integration of streamlining the entire process.",
    },
    {
      label: "Testing and Validation",
      body: "Rigorous testing and validation processes ensure that your SPM operates flawlessly, meeting the highest quality standards."
    },
    {
      label: "Installation and Traning",
      body: "We provide on-site installation, operator training, and ongoing support to seamlessly integrate SPMs into your operations."
    },

  ],
};

const COMPLETE_TURNKEY_CONTENT = {
  title: "Complete Turnkey Solutions",
  sub:
    "At Elextrio Automation, we offer comprehensive turnkey solutions designed to streamline your industrial processes from start to finish.",
  image: SERVICES_IMAGES.CompleteTurnkey,
  items: [
    {
      label: "Experienced Team",
      body:
        "Our team of experienced engineers and experts brings a wealth of knowledge and innovation to every project.",
    },
    {
      label: "Onsite Support",
      body:
        "We provide on-site installation, training, and ongoing support to ensure a smooth transition and continued success.",
    },
    {
      label: "Cost Effectiveness",
      body: "Our robust design processes and efficient project management help control costs, making our turnkey solutions a cost-effective choice."
    },
    {
      label: "Quality Assurance",
      body: "We implement rigorous testing and quality control measures throughout the project to deliver high-quality, reliable solutions."
    },
    {
      label: "Project Management",
      body: "We handle every phase of your project, from design to manufacturing, and implementation, ensuring a seamless process."
    },
    {
      label: "Proven Building Blocks",
      body: "We leverage a portfolio of proven building blocks, developed through years of experience, as the foundation for your custom solution."
    },
  ],
};
