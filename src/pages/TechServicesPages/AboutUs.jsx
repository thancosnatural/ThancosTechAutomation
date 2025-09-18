import OurMission from "@/components/AboutUsComponents/OurMission";
import ValuesThatDefineUs from "@/components/AboutUsComponents/ValuesDefineUs";
import HeroTechRated from "@/components/HeroSpotlight";
import { ArrowLeft } from "lucide-react";

/* ----------------------------- Page root ---------------------------- */
export default function AboutTech() {

    return (
        <main className="min-h-screen bg-neutral-950 text-white ">

            <HeroTechRated
                line1="Disigning for people, not just"
                highlight="Products"
                line2Rest="product partner"
                // chips={["WEB DEVELOPMENT", "UX/UI DESIGN", "GRAPHIC DESIGN"]}
                subtitle="We merge creativity and technology to craft experiences that feel intuitive, human, and impactful."
            />

            <WhoWeAre />

            <OurMission />

            <ValuesThatDefineUs />

        </main>
    );
}


// src/sections/WhoWeAre.jsx
function WhoWeAre({
    title = "WHO WE ARE",
    paragraphs = [
        "At Thancos Tech, we are passionate creators, problem solvers, and innovators dedicated to building digital experiences that connect, inspire, and deliver results. We specialize in UX/UI design and web development, helping startups, enterprises, and brands craft seamless digital products that users love.",
        "We believe great digital solutions lie at the intersection of design, technology, and human behavior. Our approach combines user-centered design principles with robust engineering practices to create products that are not only beautiful but also functional and scalable.",
    ],
    className = "",
}) {
    return (
        <section className="relative w-full overflow-hidden bg-[#101112]">

                {/* subtle background glow */}
                <div className="absolute inset-0 -z-10 bg-[#0b0b0d]" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(249,115,22,.10),transparent_45%),radial-gradient(55%_55%_at_100%_0%,rgba(168,85,247,.10),transparent_55%)]" />

                    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
                    {/* Header */}
                    <header className="mb-4 flex items-center gap-3">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                            <ArrowLeft className="h-4 w-4 -rotate-45 text-white/80" />
                        </span>
                        <h2 className="text-lg font-semibold tracking-wide text-white">{title}</h2>
                    </header>

                    {/* Copy */}
                    <div className="mt-4 sm:mt-6 max-w-4xl space-y-5 text-[13px] sm:text-sm leading-relaxed text-neutral-300">
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
        </section>
    );
}
