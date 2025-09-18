import { ABOUT_IMAGES } from "@/constants/branding";

export default function AboutAutomation({
  label = "ABOUT US",
  title = "We Are Into Industrial Automation",
  copy = `At Trancos Automation, we strive to innovate towards the future of industrial and factory automation. Established with a vision to revolutionize manufacturing processes, we offer a comprehensive suite of services tailored to meet the evolving needs of the industry.
At Trancos Automation, we're committed to excellence in every project we undertake. Our experienced team is dedicated to delivering innovative and customized solutions, ensuring seamless integration with minimal disruption, and providing ongoing support and maintenance to keep your operations running smoothly. Together, we'll drive your business to new heights of success.`,
  image = ABOUT_IMAGES.AboutUs,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#2D2D3B]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:gap-14 lg:px-12 lg:py-14">
        {/* Text */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#ff7a00]">{label}</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[44px]">
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
          <div className="rounded-[28px] bg-gradient-to-br from-[#6a3ce8]/35 via-[#2d2a42]/5 to-[#ff7a00]/40 p-[10px]">
            <div className="rounded-[22px] bg-[#1a1b1f] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
              <img
                src={image}
                alt="Industrial robot arm"
                className="block h-auto w-full rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}