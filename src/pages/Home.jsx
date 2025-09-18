// src/components/ServiceBoxes.jsx
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "automations",
    title: "Home Automations",
    desc:
      "Industrial automation, controls, PLC/HMI, robotics integration, safety & commissioning.",
    href: "/automations",
    // Use your real images under /public/assets/...
    image: "/assets/ServicesImages/Industrial.webp",
    accent: "from-orange-500 to-red-500",
  },
  //  {
  //   id: "automations",
  //   title: "Industrial Automations",
  //   desc:
  //     "Industrial automation, controls, PLC/HMI, robotics integration, safety & commissioning.",
  //   href: "/automations",
  //   // Use your real images under /public/assets/...
  //   image: "/assets/ServicesImages/Industrial.webp",
  //   accent: "from-orange-500 to-red-500",
  // },
  {
    id: "techservices",
    title: "Tech Services",
    desc:
      "Web & mobile apps, AI/ML, cloud, integrations, and performance engineering.",
    href: "/techservices",
    image: "/assets/HomeImages/project3.webp",
    accent: "from-cyan-500 to-indigo-500",
  },
];

export default function ServiceBoxes({ services = SERVICES, title = "Choose a Service" }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-neutral-950 text-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 text-orange-500">What are you looking for?</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-2 text-neutral-300">
            Pick a service to continue. You can switch anytime, by clicking on Logo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-lg hover:shadow-xl hover:ring-white/20"
            >
              {/* Clickable overlay */}
              <button
                type="button"
                onClick={() => navigate(s.href)}
                className="absolute inset-0 z-10"
                aria-label={`Open ${s.title}`}
                title={s.title}
              />

              {/* Image */}
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="eager"
                />
                {/* gradient bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-20 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-neutral-300">{s.desc}</p>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    to={s.href}
                    className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Explore {s.title}
                  </Link>

                  {/* subtle accent pill */}
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r ${s.accent} text-white/90`}
                  >
                    {s.id === "automations" ? "Industry" : "Digital"}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
