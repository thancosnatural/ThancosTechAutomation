
import RecentProjects from "@/components/LandingPageComponents/Projects";
import ProjectsBanner from "@/components/ProjectsComponents/ProjectsBanner";
import TopNotchServices from "@/components/ProjectsComponents/TopNotchServices";
import { HOME_IMAGES, PROJECTS_IMAGES } from "@/constants/branding";
import { useEffect, useRef, useState } from "react";

const AUTOMATION_FEATURES = [
    { title: "Tailored Solutions" },
    { title: "Cutting-Edge Technology" },
    { title: "Skilled Team" },
    { title: "Cliend-Centric Approach" },
    { title: "Proven Results" },
];


const DEFAULT_GALLERY = [
  {
    src: HOME_IMAGES.Slider1,
    alt: "India chip silicon board",
  },
  {
    src: HOME_IMAGES.Slider2,
    alt: "Gears automation tablet",
  },
  {
    src:  HOME_IMAGES.Slider3,
    alt: "CNC machining center",
  },
    {
    src:  HOME_IMAGES.Slider4,
    alt: "CNC machining center",
  },
    {
    src:  HOME_IMAGES.Slider5,
    alt: "CNC machining center",
  },
];

export default function Projects() {

    const topNotchAutomationServices = {
        title: "Thancos Tech builds automations that save hours and scale",
        body:
            "At Thancos Tech, we design end-to-end automations that remove manual work and connect your stack—from lead capture to fulfillment and invoicing. We combine process mapping, API integrations, RPA, and AI agents so data flows instantly and reliably. Our approach: map the process, automate the hand-offs, add human-in-the-loop checks, and instrument everything with monitoring. Result: fewer errors, faster cycles, and measurable ROI.",
        features: AUTOMATION_FEATURES, // or keep DEFAULT_FEATURES if your UI expects it
        image: PROJECTS_IMAGES.ProjectsAutomation
    };

    return (
        <section className="w-full bg-[#0D0D0D] ">

            <ProjectsBanner />

            <RecentProjects />

            {/* Automation */}
            <TopNotchServices data={topNotchAutomationServices} />

            {/* GALLERY (responsive slider, unchanged) */}
            <div className="mx-auto mt-10 max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <ResponsiveSlider items={DEFAULT_GALLERY} />
            </div>

        </section>
    );
}



/* ---------------- Slider (your existing one) ---------------- */

function ResponsiveSlider({ items = [], interval = 4000 }) {
    const trackRef = useRef(null);
    const [spv, setSpv] = useState(1);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
        document.head.appendChild(style);
        return () => style.remove();
    }, []);

    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w >= 1024) setSpv(3);
            else if (w >= 640) setSpv(2);
            else setSpv(1);
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, []);

    const scrollToIndex = (i) => {
        const track = trackRef.current;
        if (!track) return;
        const clamped = Math.max(0, Math.min(i, Math.max(0, items.length - spv)));
        const child = track.children[clamped];
        if (child) {
            track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
            setIndex(clamped);
        }
    };

    useEffect(() => {
        if (paused || items.length <= spv) return;
        const pages = Math.max(1, items.length - spv + 1);
        const id = setInterval(() => {
            const next = (index + 1) % pages;
            scrollToIndex(next);
        }, interval);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, paused, spv, items.length, interval]);

    const prev = () => scrollToIndex(index - 1);
    const next = () => scrollToIndex(index + 1);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let rAF = 0;
        const onScroll = () => {
            cancelAnimationFrame(rAF);
            rAF = requestAnimationFrame(() => {
                const children = Array.from(track.children);
                const closest = children.reduce(
                    (best, el, i) => {
                        const d = Math.abs(el.offsetLeft - track.scrollLeft);
                        return d < best.d ? { i, d } : best;
                    },
                    { i: 0, d: Infinity }
                );
                setIndex(closest.i);
            });
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(rAF);
            track.removeEventListener("scroll", onScroll);
        };
    }, []);

    const totalPages = Math.max(1, items.length - spv + 1);

    return (
        <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
        >
            <div
                ref={trackRef}
                className="no-scrollbar flex snap-x snap-mandatory scroll-smooth gap-6 overflow-x-auto [scroll-padding-left:0.5rem]"
            >
                {items.map((g) => (
                    <figure
                        key={g.alt}
                        className="snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 rounded-[14px] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.15)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.18)]"
                    >
                        <div className="p-2">
                            <div className="overflow-hidden rounded-[10px]">
                                <img
                                    src={g.src}
                                    alt={g.alt}
                                    className="h-44 w-full object-cover sm:h-48 md:h-52"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </figure>
                ))}
            </div>

            {items.length > spv && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 5.3a1 1 0 0 1 0 1.4L10.4 12l5.3 5.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z" /></svg>
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8.3 18.7a1 1 0 0 1 0-1.4L13.6 12 8.3 6.7a1 1 0 1 1 1.4-1.4l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0z" /></svg>
                    </button>
                </>
            )}

            {totalPages > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-black/80" : "bg-black/30 hover:bg-black/50"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}