// AutomationShowcase.jsx
import React from "react";

// Your data (paste the objects you shared or import them)
export const AUTOMATION_FEATURES = [
  { title: "Workflow Automation", description: "Map → automate → monitor. Eliminate manual steps across sales, ops, finance, and support." },
  { title: "API & App Integrations", description: "Connect Shopify/WordPress, Meta/WhatsApp Cloud, Google/Zoho, Stripe/Razorpay, CRM/ERP." },
  { title: "RPA & Scheduled Jobs", description: "Headless bots handle repetitive back-office tasks with retries, queues, and alerts." },
  { title: "AI Agents & Chat", description: "Lead triage, FAQs, document processing, and internal copilots with human-in-the-loop checks." },
  { title: "Data Pipelines & Dashboards", description: "ETL to warehouse, metrics, anomaly alerts—know what’s happening in real time." },
  { title: "Security & Reliability", description: "Audit logs, role-based access, SLA monitoring, observability, and incident playbooks." },
];

export const topNotchAutomationServices = {
  title: "Thancos Tech builds automations that save hours and scale",
  body:
    "At Thancos Tech, we design end-to-end automations that remove manual work and connect your stack—from lead capture to fulfillment and invoicing. We combine process mapping, API integrations, RPA, and AI agents so data flows instantly and reliably. Our approach: map the process, automate the hand-offs, add human-in-the-loop checks, and instrument everything with monitoring. Result: fewer errors, faster cycles, and measurable ROI.",
  features: AUTOMATION_FEATURES,
  image:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
};

export default function AutomationShowcase({ data = topNotchAutomationServices }) {
  const { title, body, features = [], image } = data;

  return (
    <section className="relative w-full overflow-hidden bg-[#0d0d0f] text-white">
      {/* subtle background glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-14">
          {/* Copy + features */}
          <div>
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-7 text-white/80">
              {body}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="group rounded-xl bg-[#141416] p-4 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                >
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-orange-500/15 ring-1 ring-orange-500/30">
                      <CheckIcon className="h-3.5 w-3.5 text-orange-400" />
                    </span>
                    <h3 className="text-[15px] font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-[13.5px] leading-6 text-white/75">
                    {f.description}
                  </p>

                  {/* subtle “lighting” border on hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-transparent transition group-hover:opacity-100 group-hover:ring-purple-400/40" />
                </article>
              ))}
            </div>
          </div>

          {/* Image panel */}
          <div className="order-first md:order-last">
            <div className="relative overflow-hidden rounded-2xl bg-[#5b2aa8] p-3 ring-1 ring-white/10">
              <div className="rounded-xl bg-[#121217] p-2">
                <img
                  src={image}
                  alt="Automation illustration"
                  className="block h-auto w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* corner accent */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny inline icon so you don't need any icon library */
function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
