
import FactoryAndHMISections from "@/components/ServicesComponents/FactoryAndHMI";
import IndustrialAutomationServices from "@/components/ServicesComponents/IndustrialAutomationService";
import PlcManufacturers from "@/components/ServicesComponents/PlcManufactures";
import RoboticsProgrammingIntegration from "@/components/ServicesComponents/RoboticsProgrammingIntegration";
import ServicesBanner from "@/components/ServicesComponents/ServicesBanner";
import { SERVICES_IMAGES } from "@/constants/branding";


const INDUSTRIAL_AUTOMATION_DEFAULT_ITEMS = [
  {
    title: "Fixed Automation",
    body:
      "Ideal for high‑volume production, fixed automation involves specialized equipment designed for dedicated tasks. We optimize your processes for maximum efficiency and consistency.",
    image: SERVICES_IMAGES.FixedAutomation
  },
  {
    title: "Programmable Automation",
    body:
      "Leveraging the power of Programmable Logic Controllers (PLCs), we provide flexible solutions to control and monitor machinery and processes. Our programmable automation solutions adapt to your evolving needs.",
    image: SERVICES_IMAGES.Programmable
  },
  {
    title: "Flexible Automation",
    body:
      "For tasks that require adaptability and versatility, our flexible automation solutions are tailored to meet the dynamic demands of your operations. We ensure seamless transitions and efficient production.",
    image: SERVICES_IMAGES.Flexible
  },
  {
    title: "Integrated Automation",
    body:
      "Our integrated automation services focus on connecting and harmonizing various systems and processes within your facility. This holistic approach enhances overall efficiency and enables data-driven decision-making.",
    image: SERVICES_IMAGES.Integrated
  },
];
const IndustrialAutomation = {
  heading: "Our Industrial Automation Services",
  sub:
    "At Thancos Automation, we offer a comprehensive suite of industrial automation solutions to meet your unique needs. Our services are categorized into four key areas.",
  items: INDUSTRIAL_AUTOMATION_DEFAULT_ITEMS,
  initiallyOpen: 0,
}


const INDUSTRIAL_MECHANICAL_DEFAULT_ITEMS = [
  {
    title: "Machine Design",
    body:
      "Our expertise in crafting industrial machinery for specific manufacturing processes to enhance efficiency and precision.",
    image: SERVICES_IMAGES.MachineDesign
  },
  {
    title: "Product Design",
    body:
      "Elevating industrial products and components, optimizing functionality and manufacturability to ensure quality and performance.",
    image: SERVICES_IMAGES.Product
  },
  {
    title: "Material Handling System Design ",
    body:
      "Developing efficient material movement and storage solutions, streamlining production and logistics.",
    image: SERVICES_IMAGES.Material
  },
  {
    title: "Tooling Design",
    body:
      "Creating specialized tools, jigs, dies, molds, and cutting tools that enhance manufacturing processes.",
    image: SERVICES_IMAGES.Tooling
  },
];
const IndustrialMechanical = {
  heading: "Industrial Mechanical Design",
  sub:
    "At Thancos Automation, we are experts in Industrial Mechanical Design, crafting robust and efficient mechanical systems tailored for industrial applications.",
  items: INDUSTRIAL_MECHANICAL_DEFAULT_ITEMS,
  initiallyOpen: 0,
}



const INDUSTRIAL_ELECTRICAL_DEFAULT_ITEMS = [
  {
    title: "Eplan: Revolutionizing Electrical Engineering",
    body:
      "Eplan stands at the forefront of electrical engineering solutions, pioneering innovation and efficiency in design and documentation. Our cutting-edge software and services empower engineers and businesses worldwide.",
    image: SERVICES_IMAGES.Eplan
  },
  {
    title: "Power Distribution Design",
    body:
      "Tailored planning and design for efficient electrical power distribution within industrial facilities",
    image: SERVICES_IMAGES.Power
  },
  {
    title: "Control System Design",
    body:
      "Expertise in creating custom control panels and systems to automate and manage industrial processes efficiently.",
    image: SERVICES_IMAGES.Control
  },
  {
    title: "Electrical Wiring And Layout Design",
    body:
      "Precision in developing comprehensive wiring diagrams and layouts for seamless electrical system integration.",
    image: SERVICES_IMAGES.ElectricalWiring
  },
];

const IndustrialElectrical = {
  heading: "Industrial Electrical Design",
  sub:
    "Thancos Automation specializes in Industrial Electrical Design, offering robust solutions tailored to industrial facilities. We provide expert electrical design services to optimize the performance and efficiency of your industrial systems.",
  items: INDUSTRIAL_ELECTRICAL_DEFAULT_ITEMS,
  initiallyOpen: 0,
}


export default function Services() {

  return (
    <section className="w-full bg-[#0D0D0D] ">

      <ServicesBanner />

      <IndustrialAutomationServices data={IndustrialAutomation} />

      <FactoryAndHMISections />

      <IndustrialAutomationServices data={IndustrialMechanical} />

      <IndustrialAutomationServices data={IndustrialElectrical} />

      <PlcManufacturers />

    </section>
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
  image: SERVICES_IMAGES.OurFactory,
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
