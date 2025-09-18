
import RecentProjects from "@/components/LandingPageComponents/Projects";
import ProjectsBanner from "@/components/ProjectsComponents/ProjectsBanner";
import TopNotchServices from "@/components/ProjectsComponents/TopNotchServices";

const AUTOMATION_FEATURES = [
    { title: "Workflow Automation", description: "Map → automate → monitor. Eliminate manual steps across sales, ops, finance, and support." },
    { title: "API & App Integrations", description: "Connect Shopify/WordPress, Meta/WhatsApp Cloud, Google/Zoho, Stripe/Razorpay, CRM/ERP." },
    { title: "RPA & Scheduled Jobs", description: "Headless bots handle repetitive back-office tasks with retries, queues, and alerts." },
    { title: "AI Agents & Chat", description: "Lead triage, FAQs, document processing, and internal copilots with human-in-the-loop checks." },
    { title: "Data Pipelines & Dashboards", description: "ETL to warehouse, metrics, anomaly alerts—know what’s happening in real time." },
    { title: "Security & Reliability", description: "Audit logs, role-based access, SLA monitoring, observability, and incident playbooks." },
];

export default function Projects() {

    const topNotchAutomationServices = {
        title: "Thancos Tech builds automations that save hours and scale",
        body:
            "At Thancos Tech, we design end-to-end automations that remove manual work and connect your stack—from lead capture to fulfillment and invoicing. We combine process mapping, API integrations, RPA, and AI agents so data flows instantly and reliably. Our approach: map the process, automate the hand-offs, add human-in-the-loop checks, and instrument everything with monitoring. Result: fewer errors, faster cycles, and measurable ROI.",
        features: AUTOMATION_FEATURES, // or keep DEFAULT_FEATURES if your UI expects it
        image:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
    };

    return (
        <section className="w-full bg-[#0D0D0D] ">

            <ProjectsBanner />

            <RecentProjects />

            {/* Automation */}
            <TopNotchServices data={topNotchAutomationServices} />

        </section>
    );
}
