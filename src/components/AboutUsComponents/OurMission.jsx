import { ArrowLeft } from "lucide-react";

export default function OurMission({
  missionTitle = "OUR MISSION",
  mission =
    "To empower businesses with digital products that make life easier, smarter, and more engaging for users worldwide.",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#101112]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
      
        {/* divider spacing */}
        <div className="h-10" />

        {/* OUR MISSION */}
        <header className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
            <ArrowLeft className="h-4 w-4 -rotate-45 text-white/80" />
          </span>
          <h2 className="text-lg font-semibold tracking-wide text-white">{missionTitle}</h2>
        </header>
        <p className="max-w-4xl text-[14px] leading-7 text-white/80">{mission}</p>
      </div>
    </section>
  );
}