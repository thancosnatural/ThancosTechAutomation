// AssociatesSection.jsx
import { Building2, MapPin } from "lucide-react";

const ASSOCIATES = [
  {
    name: "Home Solution",
    location: "Mumbai, India",
    blurb: "MEP Consultant & Contractor",
  },
  {
    name: "Ashwin Enterprises",
    location: "Hubli, India",
    blurb: "Export & Import: All Types of Furniture Items",
  },
];

export default function AssociatesSection({ items = ASSOCIATES }) {
  return (
    <section className="bg-neutral-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Other Associate Companies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Strategic partners supporting our turnkey delivery
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((a) => (
            <article
              key={a.name}
              className="rounded-xl bg-white p-5 sm:p-6 shadow-md ring-1 ring-black/5"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-neutral-100 text-neutral-700">
                  <Building2 className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                    {a.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-2 text-[13.5px] sm:text-sm text-neutral-600">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{a.location}</span>
                  </p>

                  <p className="mt-2 text-[13.5px] sm:text-sm md:text-base text-neutral-800">
                    {a.blurb}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
