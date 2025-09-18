/**
 * ALSO — Tech services for your business (pixel‑matched)
 * - Left: orange micro‑label, bold headline, multi‑paragraph body
 * - Right: framed image (soft rounded border)
 * - Responsive: 1‑col on mobile, 2‑col on md+
 */
export default function AlsoTechServices({
  label = "ALSO",
  title = "We Provide Tech services for your Business",
  copy = `At Trancos Tech, we are passionate creators, problem solvers, and innovators dedicated to building digital experiences that connect, inspire, and deliver results. We specialize in UX/UI design and web development, helping startups, enterprises, and brands craft seamless digital products that users love. We believe great digital solutions lie at the intersection of design, technology, and human behavior. Our approach combines user‑centered design principles with robust engineering practices to create products that are not only beautiful but also functional and scalable.`,
  image = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#121216]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:gap-14 lg:px-12 lg:py-14">
        {/* Text */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#ff7a00]">{label}</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[42px]">
            {title}
          </h2>
          <div className="mt-5 space-y-3 text-[13.5px] leading-6 text-white/80 sm:text-[14.5px] sm:leading-7">
            {copy.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Image frame */}
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-[26px] bg-gradient-to-br from-[#6a3ce8]/35 via-[#2d2a42]/5 to-[#ff7a00]/40 p-[10px]">
            <div className="rounded-[20px] bg-[#1a1b1f] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
              <img
                src={image}
                alt="Tech services illustration"
                className="block h-auto w-full rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Usage
<AlsoTechServices />

// With custom assets/text
<AlsoTechServices
  title="We Provide Tech Services for Your Business"
  image="/assets/ux-ui-mobile.jpg"
  copy={`Paragraph 1...\nParagraph 2...`}
/>
*/
