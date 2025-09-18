// src/components/ThancosFooter.jsx
import { ArrowUp, ArrowRight, Instagram, Send, Globe, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThancosFooter({
  blurb =
    "At Thancos Automation, we thrive to innovate the future of industrial and factory automation. Established with a vision to revolutionize manufacturing processes. Also We Are Digitally Give Impact In Your Businesses by our Tech services",
  links = DEFAULT_LINKS,
  email = "director@thancostech.com",
  address = [
    "Thanco Natural Foods Pvt. Ltd.",
    "1052/20, Mehta Industrial Estate,",
    "Gokul 1st Stg, Triveni Main Road,",
    "Bengaluru 560054",
  ],
  cta = { label: "Get in Touch", href: "/contact-us" },
  year = new Date().getFullYear(),
  brand = "Thancos Tech",

  // NEW: logo config (update src to your asset path)
  logo = {
    src: "/assets/ThancosLogo1.webp", // e.g. "/assets/slr_logo.png"
    alt: "Thancos Tech",
    to: "/",                              // where logo click should navigate
  },
}) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full bg-[radial-gradient(120%_120%_at_0%_0%,#201427_0%,#100f14_40%,#0b0b0e_100%)] ring-1 ring-white/10">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* left column */}
          <div className="flex flex-col gap-4">
            <Link to={logo?.to ?? "/"} className="flex items-center gap-3 group">
              {logo?.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || "Logo"}
                  className="h-8 w-auto select-none pointer-events-none"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <span className="inline-block h-7 w-7 rounded-sm bg-white/90" />
              )}
            </Link>

            <p className="max-w-xs text-[12.5px] leading-6 text-white/80">{blurb}</p>

            {/* socials */}
            <div className="mt-1 flex items-center gap-3">
              <Social icon={Instagram} href="#" />
              <Social icon={Send} href="#" />
              <Social icon={Globe} href="#" />
              <Social icon={Linkedin} href="#" />
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-[13px] text-white/85">
              {links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-1">
            <h4 className="mb-1 text-sm font-semibold text-white">Contact us</h4>
            <a href={`mailto:${email}`} className="text-[13px] text-white/85 hover:text-white">
              {email}
            </a>

            <h4 className="mt-5 mb-1 text-sm font-semibold text-white">Office Address</h4>
            <address className="not-italic text-[13px] text-white/85">
              {address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          </div>

          <div className="hidden lg:block" />
        </div>

        {/* bottom row */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[12px] text-white/70">© All Right Reserved. {year}. {brand}</p>

          <button
            onClick={scrollTop}
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/10 before:absolute before:-inset-2 before:rounded-full before:bg-white/0 hover:before:bg-white/5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 text-white/80" />
          </button>
        </div>
      </div>

      {/* CTA pill top-right */}
      {cta && (
        <div className="pointer-events-none absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-8 lg:top-7">
          <a
            href={cta.href}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-neutral-900 shadow-md transition hover:shadow-lg"
          >
            {cta.label}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-orange-500">
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </span>
          </a>
        </div>
      )}
    </footer>
  );
}

function Social({ icon: Icon, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/10 transition hover:bg-white/5"
    >
      <Icon className="h-4 w-4 text-white/80" />
    </a>
  );
}

const DEFAULT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Blogs", href: "#blogs" },
  { label: "Careers", href: "#careers" },
];
