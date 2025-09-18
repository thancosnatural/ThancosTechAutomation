import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedAccentLine } from "../AnimatedAccentLine";
import { HOME_IMAGES } from "@/constants/branding";

export default function CTAInvite({ data }) {
  const { label, title, subtitle, cta, gallery } = data;

  return (
    <section className="relative w-full overflow-hidden bg-[#e9edf3]">
      {/* HERO (fully responsive) */}
      <div className="relative isolate">
        {/* Background moved behind, content controls height */}
        <div className="absolute inset-0 -z-10">
          <img
            src={HOME_IMAGES.CallToUs}
            alt="Automation robots"
            className="h-full w-full object-cover"
            decoding="async"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        {/* Content box with vertical padding + min-height for hero presence */}
        <div className="relative mx-auto w-full max-w-5xl px-4 min-h-[40svh] md:min-h-[68vh] grid place-items-center">
          <div className="w-full text-center">
            <p className="font-semibold uppercase text-[#ff7a00] tracking-[0.18em] sm:tracking-[0.35em] text-[14px] sm:text-[18px] leading-tight">
              {label}
            </p>

            {/* clamp() keeps big on desktop, safe on mobile */}
            <h1
              className="mt-2 font-semibold text-white leading-[1.15] [text-wrap:balance]"
              style={{ fontSize: "clamp(22px, 6vw, 44px)" }}
            >
              {title}
            </h1>

            <p className="mx-auto mt-3 max-w-prose px-1 text-[14px] sm:text-[15px] text-white/85 leading-relaxed break-words [text-wrap:balance]">
              {subtitle}
            </p>

            {cta && (
              <div className="mt-6">
                <Link
                  to={cta.href}
                  className="inline-flex max-w-full flex-wrap items-center justify-center rounded-md bg-[#6931d4] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#5a27c2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7d56e6]"
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GALLERY (responsive slider, unchanged) */}
      <div className="mx-auto mt-10 max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <ResponsiveSlider items={gallery} />
      </div>

      <AnimatedAccentLine height={6} speed={6} colors={["#ff7300", "#805ad5"]} />
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 5.3a1 1 0 0 1 0 1.4L10.4 12l5.3 5.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z"/></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8.3 18.7a1 1 0 0 1 0-1.4L13.6 12 8.3 6.7a1 1 0 1 1 1.4-1.4l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0z"/></svg>
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
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-black/80" : "bg-black/30 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
