import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HOME_IMAGES } from "@/constants/branding";





/* ---------- Small, reusable typewriter ---------- */
function Typewriter({
    text = "",
    speed = 28,          // ms per character
    startDelay = 0,      // ms before starting
    as = "span",
    className = "",
    showCursor = false,  // show a blinking caret while typing
    onDone,
}) {
    const Comp = as;
    const [out, setOut] = useState("");
    const idxRef = useRef(0);
    const timerRef = useRef(null);
    const startRef = useRef(null);

    useEffect(() => {
        // reset on text change
        setOut("");
        idxRef.current = 0;

        startRef.current = setTimeout(() => {
            timerRef.current = setInterval(() => {
                idxRef.current += 1;
                setOut(text.slice(0, idxRef.current));
                if (idxRef.current >= text.length) {
                    clearInterval(timerRef.current);
                    onDone && onDone();
                }
            }, Math.max(8, speed));
        }, Math.max(0, startDelay));

        return () => {
            clearTimeout(startRef.current);
            clearInterval(timerRef.current);
        };
    }, [text, speed, startDelay, onDone]);

    return (
        <Comp className={className}>
            {out}
            {showCursor && out.length < text.length ? (
                <span className="inline-block w-[0.6ch] -translate-y-[1px] animate-pulse">
                    |
                </span>
            ) : null}
        </Comp>
    );
}

/* ---------- Slides (your original) ---------- */
const DEFAULT_SLIDES = [
    {
        id: 1,
        title: "India's Top Rated ",
        emphasis: "Digital Transformations Company",
        subtitle:
            "Thancos Tech is a global services based in India crafting research-driven and user-friendly digital products.",
        cta: { label: "Contact Now", href: "/contact-us" },
        video: HOME_IMAGES.Video,
        muted: true,
        loop: true,
        controls: false,
    },
];


export default function TechBanner({
    slides = DEFAULT_SLIDES,
    interval = 6000,
    accentClass = "text-orange-500",
}) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    const goTo = (i) => setIndex((i + slides.length) % slides.length);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useEffect(() => {
        if (paused) return;
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, interval);
        return () => clearInterval(timerRef.current);
    }, [index, paused, interval]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index]);

    const slide = slides[index];

    /* compute sequential delays so typing happens one after another */
    const titleSpeed = 60;
    const emSpeed = 60;
    const baseDelay = 120; // delay before title starts

    const delayTitle = baseDelay;
    const delayEmphasis = delayTitle + slide.title.length * titleSpeed + 120;
    const delaySubtitle =
        delayEmphasis + slide.emphasis.length * emSpeed + 200;

    return (
        <section
            className="relative isolate w-full overflow-hidden bg-neutral-950"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative w-full">
                <AnimatePresence mode="wait">
                    {slide.video ? (
                        <motion.video
                            key={`v-${slide.id}`}
                            src={slide.video}
                            autoPlay
                            muted={slide.muted ?? true}
                            loop={slide.loop ?? true}
                            playsInline
                            className="block w-full h-auto select-none"
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    ) : (
                        <motion.img
                            key={`i-${slide.id}`}
                            src={slide.image}
                            alt=""
                            className="block w-full h-auto select-none"
                            draggable={false}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    )}
                </AnimatePresence>

                {/* overlays */}
                <div className="pointer-events-none absolute inset-0 bg-black/60" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-400/10 to-transparent" />

                {/* Content with typing text (LEFT-ALIGNED) */}
                <div className="max-w-7xl mx-auto absolute inset-0 z-10 flex items-center md:items-start md:top-20 justify-start">
                    <motion.div
                        key={`content-${slide.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full pl-4 pr-4 sm:pl-8 sm:pr-6 lg:pl-16 lg:pr-8"
                    >
                        <div className="max-w-2xl">
                            <h1 className="text-left text-xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                                {/* title then emphasis, typed sequentially */}
                                <Typewriter
                                    key={`t-${slide.id}`}
                                    text={slide.title + " "}
                                    speed={titleSpeed}
                                    startDelay={delayTitle}
                                />
                                <Typewriter
                                    key={`e-${slide.id}`}
                                    text={slide.emphasis}
                                    speed={emSpeed}
                                    startDelay={delayEmphasis}
                                    className={accentClass}
                                    showCursor={false}
                                />
                            </h1>

                            {slide.subtitle ? (
                                <Typewriter
                                    key={`s-${slide.id}`}
                                    as="p"
                                    className="mt-4 max-w-xl text-left text-sm text-neutral-300 sm:text-base md:text-lg"
                                    text={slide.subtitle}
                                    speed={18}
                                    startDelay={delaySubtitle}
                                    showCursor={true}
                                />
                            ) : null}

                            {slide.cta && (
                                <div className="mt-6">
                                    <Link
                                        to={slide.cta.href}
                                        className="pointer-events-auto inline-flex items-center rounded-full bg-purple-700 px-4 md:px-5 py-1.5 md:py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                                    >
                                        {slide.cta.label}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>


                {/* Controls */}
                {/* <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={prev}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M15.78 4.72a.75.75 0 0 1 0 1.06L9.56 12l6.22 6.22a.75.75 0 1 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" /></svg>
                    </button>
                    <button
                        onClick={next}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M8.22 19.28a.75.75 0 0 1 0-1.06L14.44 12 8.22 5.78a.75.75 0 1 1 1.06-1.06l6.75 6.75c.3.3.3.77 0 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" /></svg>
                    </button>
                </div> */}

                {/* Dots */}
                {slides.length > 1 && <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
                    <div className="flex gap-2">
                        {slides.map((s, i) => (
                            <button
                                key={s.id}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => setIndex((i + slides.length) % slides.length)}
                                className={[
                                    "h-1.5 md:h-2.5 w-1.5 md:w-2.5 rounded-full transition",
                                    i === index ? "bg-white" : "bg-white/40 hover:bg-white/70",
                                ].join(" ")}
                            />
                        ))}
                    </div>
                </div>}
            </div>
        </section>
    );
}
