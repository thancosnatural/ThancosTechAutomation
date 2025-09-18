import ValuesThatDefineUs from "@/components/AboutUsComponents/ValuesDefineUs";
import HeroTechRated from "@/components/HeroSpotlight";
import CTAInvite from "@/components/LandingPageComponents/CTA";
import FAQSection from "@/components/LandingPageComponents/FAQ";
import RecentTechProjects from "@/components/LandingPageComponents/TechProjects";
import TechServices from "@/components/LandingPageComponents/TechServices";
import TopNotchServices from "@/components/ProjectsComponents/TopNotchServices";
import TechBanner from "@/components/TechServicesComponents/TechBanner";
import Testimonials from "@/components/Testimonials";

const DEFAULT_GALLERY = [
    {
        src: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1600&auto=format&fit=crop",
        alt: "India chip silicon board",
    },
    {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        alt: "Gears automation tablet",
    },
    {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop",
        alt: "CNC machining center",
    },
];

const DEFAULT_FEATURES = [
    {
        title: "Web Development",
        description:
            "High-performance, secure web apps with modern stacks (React/Vite/Next + Node/Express + SQL). SEO-friendly, scalable, and API-ready.",
    },
    {
        title: "Website Design",
        description:
            "Conversion-focused, responsive designs that reflect your brand, follow accessibility best practices, and tell a clear story.",
    },
    {
        title: "Mobile App Design",
        description:
            "iOS/Android UX from wireframes to high-fidelity prototypes—gesture patterns, micro-interactions, offline-first flows, HIG/Material aligned.",
    },
    {
        title: "Dashboard Design",
        description:
            "Data-dense dashboards with clear IA, role-based views, and meaningful visualizations to surface real-time insights and speed decisions.",
    },
    {
        title: "UX Research",
        description:
            "Interviews, JTBD, usability tests, analytics and A/Bs to uncover friction, validate ideas, and prioritize features with evidence.",
    },
    {
        title: "Graphic Design",
        description:
            "Brand kits, logos, social creatives, ads, and packaging that stay consistent across channels and lift recognition.",
    },
];


/* ----------------------------- Page root ---------------------------- */
export default function TechServicesLandingPage() {

    const topNotchTechServices = {
        title: "Thancos Tech offers top notch tech services too",
        body:
            "At Trancos Tech, we are passionate creators, problem solvers, and innovators dedicated to building digital experiences that connect, inspire, and deliver results. We specialize in UX/UI design and web development, helping startups, enterprises, and brands craft seamless digital products that users love. We believe great digital solutions lie at the intersection of design, technology, and human behavior. Our approach combines user‑centered design principles with robust engineering practices to create products that are not only beautiful but also functional and scalable.",
        features: DEFAULT_FEATURES,
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",

    }

    const CTATech = {
        label: "CALL TO US",
        title: "Let’s Start Tech services for your Business",
        subtitle: "We Are Digitally Give Impact In Your Bussiness by our Tech services",
        cta: { label: "Get in Touch", href: "/contact-us" },
        heroImage:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
        gallery: DEFAULT_GALLERY,
    }


    return (
        <main className="min-h-screen bg-neutral-950 text-white">

            <HeroTechRated
                line1="India’s Top Rated"
                highlight="Digital"
                line2Rest="Transformations Company"
                chips={["WEB DEVELOPMENT", "UX/UI DESIGN", "GRAPHIC DESIGN"]}
            />

            <RecentTechProjects />

            <Testimonials />

            <FAQSection data={DEFAULT_FAQS} />

        </main>
    );
}



const DEFAULT_FAQS = [
    {
        q: "What Services does the Thancos tech offers ?",
        a: "We provide industrial automation, PLC/HMI, robotics integration, and commissioning, along with digital services like web/mobile apps, AI/ML, and cloud solutions.",
    },
    {
        q: "What Services does the Thancos tech offers ?",
        a: "Engagements range from fixed-scope builds to dedicated teams. We tailor process, cadence, and tooling to your context.",
    },
    {
        q: "What Services does the Thancos tech offers ?",
        a: "We start with discovery, define requirements, propose timelines and costs, then move into iterative delivery with regular demos.",
    },
    {
        q: "What Services does the Thancos tech offers ?",
        a: "Yes—support SLAs are available. We handle maintenance, monitoring, and optimizations post-launch.",
    },
    {
        q: "What Services does the Thancos tech offers ?",
        a: "Pricing depends on scope and complexity. We offer both fixed-price and time-and-materials models.",
    },
    {
        q: "What Services does the Thancos tech offers ?",
        a: "We collaborate with your internal stakeholders, ensuring knowledge transfer and transparency throughout.",
    },
];
