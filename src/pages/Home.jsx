// src/components/ServiceBoxes.jsx
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Cog, Cpu, ArrowRight, Zap } from "lucide-react";

/* ---------- config ---------- */
const SERVICES = [
  {
    id: "automations",
    title: "Automations",
    desc:
      "Industrial automation, controls, PLC/HMI, robotics integration, safety & commissioning.",
    href: "/automations",
    icon: Cog,
    accentFrom: "#fb923c", // orange-400
    accentTo: "#ef4444", // red-500
  },
  {
    id: "techservices",
    title: "Tech Services",
    desc:
      "Web & mobile apps, AI/ML, cloud, integrations, and performance engineering.",
    href: "/tech-services", // use /techservices if that's your route
    icon: Cpu,
    accentFrom: "#22d3ee", // cyan-400
    accentTo: "#6366f1", // indigo-500
  },
];

function SectionBackgroundVideo({ src, poster }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}

/* ---------- small glass logo badge (top-left) ---------- */
function LogoBadge({
  logoSrc = "/assets/ThancosLogo3.webp",
  logoAlt = "Thancos Tech",
  logoHref = "/",
}) {
  return (
    <Link
      to={logoHref}
      className="fixed top-4 z-30 group"
      aria-label="Go to home"
    >
      <span className="relative inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,.35)]">
        <img
          src={logoSrc}
          alt={logoAlt}
          className=" w-30 object-contain"
          loading="eager"
        />

        {/* gradient rim */}
        <span
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-70 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, #a78bfa, #22d3ee, #60a5fa, #a78bfa)",
            WebkitMask:
              "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
        {/* soft shine sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/30 opacity-70 transition-transform duration-700 group-hover:translate-x-[260%]" />
        </span>
      </span>
    </Link>
  );
}

function ButtonBadge({
  logoHref = "/",
  buttonAlt = "Start Now"
}) {
  return (
    <Link
      to={logoHref}
      className="group mt-10"
      aria-label="Go to home"
    >
      <span className=" inline-flex items-center gap-2 mt-6 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,.35)]">
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
          {buttonAlt}
        </span>
        <ArrowRight className="h-4 w-4 arrow" />

        <span
          className="pointer-events-none absolute -inset-px rounded-full opacity-70 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, #a78bfa, #22d3ee, #60a5fa, #a78bfa)",
            WebkitMask:
              "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
        {/* soft shine sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/30 opacity-70 transition-transform duration-700 group-hover:translate-x-[260%]" />
        </span>
      </span>
    </Link>
  );
}

export default function ServiceBoxes({
  services = SERVICES,
  title = "Choose a Service",
  bgVideoSrc = "/assets/videos/hero-bg.mp4",
  bgPoster = "/assets/videos/hero-bg.jpg",
  logoSrc = "/assets/ThancosLogo3.webp",
  logoAlt = "Thancos Tech",
  logoHref = "/",
}) {
  const navigate = useNavigate();

  return (
    <section className="relative isolate w-full text-white py-12 sm:py-16 overflow-hidden">
      <SectionBackgroundVideo src={bgVideoSrc} poster={bgPoster} />
      {/* readability overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60" />



      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {/* top-left logo */}
        <LogoBadge logoSrc={logoSrc} logoAlt={logoAlt} logoHref={logoHref} />
        <header className="mb-8 sm:mb-10 pt-10">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 text-orange-500">
            What are you looking for?
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-2 text-neutral-200">
            Pick a service to continue. You can switch anytime by clicking the logo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
          {services.map((s, idx) => {
            const Icon = s.icon || Zap;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                style={{
                  "--from": s.accentFrom,
                  "--to": s.accentTo,
                  background:
                    "radial-gradient(120% 80% at 50% -10%, rgba(59,130,246,0.25) 8%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 80%)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* full clickable */}
                <button
                  type="button"
                  onClick={() => navigate(s.href)}
                  className="absolute inset-0 z-20"
                  aria-label={`Open ${s.title}`}
                  title={s.title}
                />

                {/* top glow / dotted field */}
                <div
                  className="pointer-events-none absolute inset-x-0 -top-24 h-52 opacity-90"
                  style={{
                    background:
                      "radial-gradient(60% 100% at 50% 100%, rgba(255,255,255,0.18), rgba(255,255,255,0) 70%)",
                    maskImage:
                      "radial-gradient(70% 70% at 50% 100%, black, transparent 70%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                    maskImage:
                      "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 75%)",
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10 px-6 pt-10 pb-7 text-center">
                  {/* orb */}
                  <div className="mx-auto mb-6 h-24 w-24 rounded-full relative animate-orb-float">
                    <div
                      className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                      style={{
                        background:
                          "radial-gradient(70% 70% at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.06)), radial-gradient(80% 80% at 70% 70%, rgba(0,0,0,0.2), rgba(0,0,0,0.55))",
                      }}
                    />
                    <div
                      className="absolute inset-[-3px] rounded-full blur-[6px]"
                      style={{
                        background: "linear-gradient(140deg, var(--from), var(--to))",
                        opacity: 0.7,
                      }}
                    />
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="orb-sheen absolute inset-0" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-yellow-400 drop-shadow-[0_4px_12px_rgba(250,204,21,0.6)]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-200/90">{s.desc}</p>

                  {/* GLASS CTA */}

                  <ButtonBadge logoHref={s.href} />
                </div>

                {/* animated edge ring (spins on hover) */}
                <div className="ring-rotor pointer-events-none absolute -inset-px rounded-3xl opacity-40">
                  <div
                    className="rounded-3xl h-full w-full"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, var(--from), var(--to), var(--from))",
                      WebkitMask:
                        "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
                      WebkitMaskComposite: "xor",
                      padding: "1px",
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* local CSS */}
      <style>{`
        @keyframes orbFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        .animate-orb-float { animation: orbFloat 5s ease-in-out infinite; }

        .orb-sheen {
          background:
            radial-gradient(40% 20% at 50% -10%, rgba(255,255,255,0.85), rgba(255,255,255,0) 60%),
            radial-gradient(60% 30% at 30% 120%, rgba(255,255,255,0.15), rgba(255,255,255,0) 70%);
          mix-blend-mode: screen;
          animation: orbFloat 5s ease-in-out infinite;
        }

        .glass-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.15rem;
          border-radius: 9999px;
          color: #0a0a0a;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 28px rgba(0,0,0,0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: transform .25s cubic-bezier(.2,.8,.2,1), background .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .glass-btn:hover {
          transform: translateY(-2px) scale(1.02);
          background: rgba(255,255,255,0.18);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 34px rgba(0,0,0,0.35);
        }
        .glass-btn::before {
          content: "";
          position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
          background: linear-gradient(90deg, var(--from, #a78bfa), var(--to, #22d3ee));
          -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
          -webkit-mask-composite: xor; mask-composite: exclude; opacity: .65;
          transition: opacity .3s ease, filter .3s ease;
        }
        .group:hover .glass-btn::before { opacity: 1; filter: drop-shadow(0 0 12px rgba(99,102,241,.6)); }
        .glass-btn::after {
          content: ""; position: absolute; top: 0; left: -40%; height: 100%; width: 40%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.35) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg); opacity: .85; transition: transform .7s ease; pointer-events: none;
        }
        .glass-btn:hover::after { transform: translateX(260%) skewX(-20deg); }
        .glass-btn .arrow { transition: transform .25s ease; }
        .glass-btn:hover .arrow { transform: translateX(2px); }

        @keyframes spinSlow { to { transform: rotate(360deg) } }
        .group:hover .ring-rotor { animation: spinSlow 5s linear infinite; opacity: .55; }
      `}</style>
    </section>
  );
}
