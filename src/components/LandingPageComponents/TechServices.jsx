import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Smartphone,
  LayoutDashboard,
  Search,
  PenTool,
} from "lucide-react";

export default function TechServices({
  title = "Our Tech Services",
  subtitle = "We design and build delightful, robust digital products across web, mobile, and brand.",
  features = DEFAULT_FEATURES,
}) {
  return (
    <section className="relative w-full bg-neutral-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-300 sm:text-base">{subtitle}</p>
        </div>

        {/* NOTE: items-stretch makes all cards in a row equal height */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((item, i) => (
            <ServiceCard key={item.title + i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, iconKey, index = 0 }) {
  const Icon = ICONS[iconKey] ?? pickIcon(title);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
      className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-orange-400/30"
    >
      {/* Inner now uses h-full + min-h, no aspect-square */}
      <div className="relative h-full min-h-[240px] sm:min-h-[260px] rounded-2xl bg-[#121214] p-5 sm:p-6 ring-1 ring-white/10 overflow-hidden flex flex-col">
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)",
          }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 ring-1 ring-purple-500/30">
          <Icon className="h-5 w-5 text-purple-400" />
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-[15px] font-semibold text-white sm:text-base">{title}</h3>

        {/* Description (clamped to keep tidy) */}
        <p
          className="relative z-10 mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6 overflow-hidden"
          style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}
          title={description}
        >
          {truncate(description, 190)}
        </p>

        {/* Bottom accent */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Lighting border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ boxShadow: "0 0 0 1px rgba(168,85,247,.35), 0 0 40px 6px rgba(168,85,247,.18)" }}
      />
    </motion.article>
  );
}


/* ---------------------- Helpers ---------------------- */
function truncate(s = "", max = 160) {
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "…";
}

// Simple icon picker if iconKey not provided
function pickIcon(title = "") {
  const t = title.toLowerCase();
  if (t.includes("web") && t.includes("develop")) return Code2;
  if (t.includes("website") || t.includes("design")) return Layout;
  if (t.includes("mobile")) return Smartphone;
  if (t.includes("dashboard")) return LayoutDashboard;
  if (t.includes("research")) return Search;
  if (t.includes("graphic") || t.includes("brand")) return PenTool;
  return Code2;
}

const ICONS = {
  web: Code2,
  website: Layout,
  mobile: Smartphone,
  dashboard: LayoutDashboard,
  research: Search,
  graphic: PenTool,
};

/* Example default data; your page already passes its own. */
const DEFAULT_FEATURES = [
  {
    title: "Web Development",
    description:
      "High-performance, secure web apps with modern stacks (React/Vite/Next + Node/Express + SQL). SEO-friendly, scalable, and API-ready.",
    iconKey: "web",
  },
  {
    title: "Website Design",
    description:
      "Conversion-focused, responsive designs that reflect your brand, follow accessibility best practices, and tell a clear story.",
    iconKey: "website",
  },
  {
    title: "Mobile App Design",
    description:
      "iOS/Android UX from wireframes to high-fidelity prototypes—gesture patterns, micro-interactions, offline-first flows, HIG/Material aligned.",
    iconKey: "mobile",
  },
  {
    title: "Dashboard Design",
    description:
      "Data-dense dashboards with clear IA, role-based views, and meaningful visualizations to surface real-time insights and speed decisions.",
    iconKey: "dashboard",
  },
  {
    title: "UX Research",
    description:
      "Interviews, JTBD, usability tests, analytics and A/Bs to uncover friction, validate ideas, and prioritize features with evidence.",
    iconKey: "research",
  },
  {
    title: "Graphic Design",
    description:
      "Brand kits, logos, social creatives, ads, and packaging that stay consistent across channels and lift recognition.",
    iconKey: "graphic",
  },
];
