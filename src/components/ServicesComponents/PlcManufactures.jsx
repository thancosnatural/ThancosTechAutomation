import { SERVICES_IMAGES } from "@/constants/branding";

/**
 * PLC Manufacturers strip — centered title + 3 rounded logo cards
 * - Fully responsive (1/2/3 columns)
 * - White logo tiles with soft shadows
 * - Replace src paths with your brand assets
 */
export default function PlcManufacturers({
  title = "We Integrate PLC Solutions Via Below Manufactures And More",
  brands = DEFAULT_BRANDS,
}) {
  return (
    <section className="relative w-full overflow-hidden rounded-[22px] bg-[#0f0f10]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 md:py-12 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-[clamp(1.25rem,1.05rem+1.2vw,2rem)] font-semibold leading-tight text-white">
          {title}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {brands.map((b) => (
            <LogoCard key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ name, src }) {
  return (
    <figure className="rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
      <div className="grid place-items-center">
        {/* Logo image — use transparent PNG/SVG so it sits nicely on white */}
        <img
          src={src}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </figure>
  );
}

const DEFAULT_BRANDS = [
  { name: "Siemens", src: SERVICES_IMAGES.Siemens },
  { name: "Rockwell Automation", src: SERVICES_IMAGES.Rockwell },
  { name: "Omron", src: SERVICES_IMAGES.Ormon},
];
