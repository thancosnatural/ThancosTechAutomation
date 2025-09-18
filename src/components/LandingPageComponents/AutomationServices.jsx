import { ArrowLeft, Cpu, Factory, PanelsTopLeft, Wrench, Workflow, Bot, Boxes, Hammer, Package, Settings2 } from "lucide-react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

// ===== Shared easing + reveal helpers =====
const ease = [0.22, 1, 0.36, 1];
const headingReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const gridReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export default function AutomationServices({ title = "Our Automation Services", items = DEFAULT_ITEMS }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D]">
      {/* subtle animated background grid */}
      <m.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_200px_at_20%_0%,rgba(255,122,0,0.06),transparent),radial-gradient(800px_200px_at_80%_100%,rgba(124,58,237,0.06),transparent)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <LazyMotion features={domAnimation} strict>
          {/* Heading */}
          <m.div
            className="mb-8 flex items-center gap-3 sm:mb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={headingReveal}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
              <ArrowLeft className="h-4 w-4 -rotate-45 text-orange-400" />
            </span>
            <h2 className="text-base font-semibold tracking-[0.18em] text-white/90 sm:text-lg">{title}</h2>
          </m.div>

          {/* Grid */}
          <m.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={gridReveal}
          >
            {items.map((s, i) => (
              <AnimatedServiceCard key={s.title} idx={i} {...s} />
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}

// ===== Card with richer motion (3D tilt, sheen, bobbing icon) =====
function AnimatedServiceCard({ title, desc, icon = "default", idx = 0 }) {
  const Icon = ICONS[icon] ?? ICONS.default;
  const reduce = useReducedMotion();

  // in-view pop
  const variants = {
    hidden: { opacity: 0, y: 28, rotateZ: -0.6, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      scale: 1,
      transition: reduce
        ? { duration: 0.2 }
        : { type: "spring", stiffness: 130, damping: 16, delay: idx * 0.04 },
    },
  };

  // 3D tilt on pointer (disabled if reduced motion)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 150, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 150, damping: 12 });

  function onMove(e) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  }

  function onLeave() {
    mx.set(0); my.set(0);
  }

  // Variants for the glowing gradient border + outer aura (animate only on hover)
  const borderVariants = {
    rest: { opacity: 0, rotate: 0 },
    hover: {
      opacity: 1,
      rotate: 360,
      transition: { duration: 4, ease: "linear", repeat: Infinity },
    },
  };
  const auraVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <m.article
      variants={variants}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
      whileTap={{ scale: 0.99 }}
      className="group relative overflow-hidden rounded-2xl bg-[#141416] p-5 ring-1 ring-white/8 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] transition will-change-transform"
    >
      {/* --- HOVER LIGHTING BORDER (sharp ring) --- */}
      <m.div
        variants={borderVariants}
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background: "conic-gradient(from 0deg, #ff7a00, #7c3aed, #ff7a00)",
          padding: "1.5px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "1rem",
        }}
      />

      {/* --- OUTER GLOW AURA (soft blur) --- */}
      <m.div
        variants={auraVariants}
        className="pointer-events-none absolute -inset-2 rounded-3xl blur-xl"
        style={{ background: "conic-gradient(from 0deg, rgba(255,122,0,0.35), rgba(124,58,237,0.35), rgba(255,122,0,0.35))" }}
      />

      {/* animated sheen */}
      <m.div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        whileHover={reduce ? {} : { x: ["-100%", "100%"] }}
        transition={{ duration: 0.9, ease }}
      />

      {/* icon badge with gentle bob */}
      <m.div
        className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/15 ring-1 ring-orange-500/30"
        animate={reduce ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className="h-4 w-4 text-orange-400" />
      </m.div>

      <h3 className="text-[15px] font-semibold text-white sm:text-base">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-neutral-300 sm:text-[13.5px]">{desc}</p>
    </m.article>
  );
}

// ===== Icons & data =====
const ICONS = {
  industrial: Settings2,
  factory: Factory,
  hmi: PanelsTopLeft,
  mechanical: Wrench,
  electrical: Cpu,
  plc: Workflow,
  robotics: Bot,
  special: Boxes,
  turnkey: Package,
  panel: Hammer,
  default: Settings2,
};

const DEFAULT_ITEMS = [
  { icon: "industrial", title: "Industrial Automations", desc: "Enhance efficiency and productivity through cutting-edge solutions that optimize industrial processes." },
  { icon: "factory", title: "Factory Automations", desc: "Modernize manufacturing facilities with smart automation, reducing costs and increasing productivity." },
  { icon: "hmi", title: "HMI Programming", desc: "Design user‑friendly Human‑Machine Interfaces (HMI) for seamless interaction with automated systems." },
  { icon: "mechanical", title: "Mechanical Design", desc: "Industrial‑grade: Create robust, efficient mechanical systems tailored for industrial applications." },
  { icon: "electrical", title: "Electrical Design", desc: "Design reliable electrical systems to support industrial automation, ensuring safety and efficiency." },
  { icon: "plc", title: "PLC Programming", desc: "Develop custom PLC solutions for precise control and automation of industrial processes." },
  { icon: "robotics", title: "Robotics Programming", desc: "Integrate robotics to improve precision and productivity in industrial settings." },
  { icon: "special", title: "Special purpose machines", desc: "Tailor‑made machines to meet unique industrial needs, providing end‑to‑end solutions." },
  { icon: "turnkey", title: "Turnkey Solutions", desc: "From concept to execution, we offer comprehensive automation solutions, simplifying the entire process for you." },
  { icon: "panel", title: "Control panel & Manufacturing Design", desc: "We specialize in the design and fabrication of control panels for industrial applications, optimizing manufacturing." },
];

/* Usage
npm i framer-motion

<AutomationServices />
// Heavier motion added: springy in-view pop, 3D tilt + sheen on hover, bobbing icon.
// Respects prefers-reduced-motion.
*/
