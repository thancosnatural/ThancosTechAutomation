import { ArrowLeft } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { HOME_IMAGES } from "@/constants/branding";

export default function WhoWeAre({ items = DEFAULT_ITEMS, title = "WHO WE ARE" }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#0a0a0c] to-black">
      {/* --- Animated background blobs (very gentle, disabled if user prefers reduced motion) --- */}
      <m.div
        className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 10], y: [0, -8], opacity: [0.12, 0.18, 0.12] }
        }
        transition={reduce ? undefined : { duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, -8], y: [0, 8], opacity: [0.15, 0.22, 0.15] }
        }
        transition={reduce ? undefined : { duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <m.div
        className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 6], y: [0, -6], opacity: [0.12, 0.18, 0.12] }
        }
        transition={reduce ? undefined : { duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* --- Content --- */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-12 lg:py-20">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-orange-400" />
          </span>
          <h2 className="text-base font-semibold tracking-[0.18em] text-white/90 sm:text-lg">
            {title}
          </h2>
        </div>

        {/* Row */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h3 className="text-[22px] font-semibold text-orange-400 sm:text-2xl">
              {items[0].title}
            </h3>
            <div className="mt-3 space-y-3 text-[13.5px] leading-6 text-neutral-300 sm:text-[14.5px] sm:leading-7">
              {items[0].body.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <m.img
              src={items[0].image}
              alt=""
              className="w-full max-w-sm rounded-2xl bg-neutral-900/40 p-4 shadow-lg ring-1 ring-white/10"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_ITEMS = [
  {
    title: "Thancos Automation",
    body:
      "At Thancos Automation, we thrive to innovate towards the future of industrial and factory automation. Established with a vision to revolutionize manufacturing processes, we offer a comprehensive suite of services tailored to meet the evolving needs of the industry.\nAt Thancos Automation, we're committed to excellence in every project we undertake. Our experienced team is dedicated to delivering innovative and customized solutions, ensuring seamless integration with minimal disruption, and providing ongoing support and maintenance to keep your operations running smoothly. Together, we'll drive your business to new heights of success.",
    image: HOME_IMAGES.WhoWeAre,
  },
];
