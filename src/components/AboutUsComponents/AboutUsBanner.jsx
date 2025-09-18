import { ABOUT_IMAGES } from "@/constants/branding";

export default function AboutUsBanner({ title = "ABOUT US" }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-center bg-cover md:py-20"
      style={{ backgroundImage: `url(${ABOUT_IMAGES.AboutBanner})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="relative z-10 grid place-items-center px-4"
        style={{ minHeight: "clamp(180px, 28vh, 360px)" }}
      >
        <h1
          className="text-center font-extrabold tracking-wide text-white [text-wrap:balance]"
          style={{ fontSize: "clamp(24px, 6vw, 44px)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
