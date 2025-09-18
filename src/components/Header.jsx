import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const AUTOMATION_NAV_ITEMS = [
  { label: "Home", to: "/automations" },
  { label: "About us", to: "/automations/about-us" },
  { label: "Services", to: "/automations/our-services" },
  { label: "Projects", to: "/automations/our-projects" },
  { label: "Blogs", to: "/automations/blogs" },
  { label: "Careers", to: "/automations/careers" },
];

const TECH_NAV_ITEMS = [
  { label: "Home", to: "/tech-services" }, // if your route is /techservices, change this & others below
  { label: "About us", to: "/tech-services/about-us" },
  { label: "Services", to: "/tech-services/our-services" },
  { label: "Careers", to: "/tech-services/careers" },
];

const desktopClass = ({ isActive }) =>
  [
    "text-sm transition-colors",
    isActive ? "text-orange-500" : "text-neutral-400 hover:text-white",
  ].join(" ");

const mobileClass = ({ isActive }) =>
  [
    "block rounded-md px-3 py-2 text-sm",
    isActive
      ? "text-orange-500"
      : "text-neutral-300 hover:text-white hover:bg-neutral-900",
  ].join(" ");



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // robust section detection
  const isAutomations = pathname.startsWith("/automations");
  const isTech =
    pathname.startsWith("/tech-services") || pathname.startsWith("/techservices");

  const NAV_ITEMS = isAutomations ? AUTOMATION_NAV_ITEMS : TECH_NAV_ITEMS;

  // Send logo to the current section's home (nice UX)
  const logoHref = isAutomations ? "/automations" : isTech ? "/tech-services" : "/";

  return (
    <header className="bg-neutral-950 text-neutral-200 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src='/assets/ThancosLogo1.webp'
              alt="Thancos Tech"
              className="w-30 rounded-md object-contain shadow-sm transition
               group-hover:ring-white/30"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Center: Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={desktopClass}
                  // only Home should be exact; others should stay active on nested routes
                  end={item.label === "Home"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact-us"
              className="inline-flex items-center rounded-xl bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25c0-.414.336-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden border-t border-neutral-800">
            <ul className="flex flex-col gap-2 py-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={mobileClass}
                    end={item.label === "Home"}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="px-3 pt-1">
                <Link
                  to="/contact-us"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}



// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { setLanguage } from "../i18n"; // adjust path if needed

// const NAV_ITEMS = [
//   { key: "home", to: "/" },
//   { key: "about", to: "/about-us" },
//   { key: "services", to: "/our-services" },
//   { key: "projects", to: "/our-projects" },
//   { key: "tech", to: "/tech-services" },
//   { key: "blogs", to: "/blogs" },
//   { key: "careers", to: "/careers" },
// ];

// const desktopClass = ({ isActive }) =>
//   ["text-sm transition-colors", isActive ? "text-orange-500" : "text-neutral-400 hover:text-white"].join(" ");

// const mobileClass = ({ isActive }) =>
//   ["block rounded-md px-3 py-2 text-sm", isActive ? "text-orange-500" : "text-neutral-300 hover:text-white hover:bg-neutral-900"].join(" ");

// const LANGS = [
//   { code: "en", label: "English", flag: "🇬🇧" },
//   { code: "es", label: "Español", flag: "🇪🇸" },
//   { code: "fr", label: "Français", flag: "🇫🇷" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const onLangChange = (e) => setLanguage(e.target.value);

//   return (
//     <header className="bg-neutral-950 text-neutral-200 w-full">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Left: Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <span className="h-7 w-7 rounded-sm bg-purple-700 group-hover:bg-purple-600 transition-colors" />
//             <span className="text-sm font-medium tracking-wide text-neutral-300 group-hover:text-white">LOGO</span>
//           </Link>

//           {/* Center: Desktop menu */}
//           <ul className="hidden md:flex items-center gap-8">
//             {NAV_ITEMS.map((item) => (
//               <li key={item.key}>
//                 <NavLink to={item.to} className={desktopClass} end>
//                   {t(`nav.${item.key}`)}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Right: Lang + CTA (desktop) */}
//           <div className="hidden md:flex items-center gap-3">
//             {/* Language Select */}
//             <div className="relative">
//               <select
//                 aria-label="Select language"
//                 value={i18n.language.slice(0, 2)}
//                 onChange={onLangChange}
//                 className="appearance-none rounded-md border border-white/15 bg-neutral-900/60 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 {LANGS.map((l) => (
//                   <option key={l.code} value={l.code} className="bg-neutral-900 text-white">
//                     {l.flag} {l.label}
//                   </option>
//                 ))}
//               </select>
//               <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
//             </div>

//             <Link
//               to="/contact-us"
//               className="inline-flex items-center rounded-xl bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
//             >
//               {t("nav.contact")}
//             </Link>
//           </div>

//           {/* Mobile hamburger */}
//           <button
//             onClick={() => setOpen((s) => !s)}
//             className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
//               {open ? (
//                 <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
//               ) : (
//                 <path fillRule="evenodd" d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25c0-.414.336-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z" clipRule="evenodd" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu panel */}
//         {open && (
//           <div className="md:hidden border-t border-neutral-800">
//             <ul className="flex flex-col gap-2 py-3">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.key}>
//                   <NavLink
//                     to={item.to}
//                     className={mobileClass}
//                     end
//                     onClick={() => setOpen(false)}
//                   >
//                     {t(`nav.${item.key}`)}
//                   </NavLink>
//                 </li>
//               ))}

//               {/* Language picker (mobile) */}
//               <li className="px-3">
//                 <div className="flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2">
//                   <span className="text-xs text-neutral-400">Language</span>
//                   <select
//                     aria-label="Select language"
//                     value={i18n.language.slice(0, 2)}
//                     onChange={(e) => { onLangChange(e); setOpen(false); }}
//                     className="ml-auto appearance-none rounded-sm border border-white/15 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   >
//                     {LANGS.map((l) => (
//                       <option key={l.code} value={l.code} className="bg-neutral-900 text-white">
//                         {l.flag} {l.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </li>

//               <li className="px-3 pt-1">
//                 <Link
//                   to="/contact-us"
//                   className="inline-flex w-full items-center justify-center rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
//                   onClick={() => setOpen(false)}
//                 >
//                   {t("nav.contact")}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }







// // Navbar.jsx (simplified to show the changes)
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { translateTo, normalizeLang, getSavedLang } from "../googleTranslate";

// const NAV_ITEMS = [
//   { label: "Home", to: "/" },
//   { label: "About us", to: "/about-us" },
//   { label: "Services", to: "/our-services" },
//   { label: "Projects", to: "/our-projects" },
//   { label: "Tech Services", to: "/tech-services" },
//   { label: "Blogs", to: "/blogs" },
//   { label: "Careers", to: "/careers" },
// ];

// const LANGS = [
//   { code: "en", label: "English", flag: "🇬🇧" },
//   { code: "es", label: "Español", flag: "🇪🇸" },
//   { code: "fr", label: "Français", flag: "🇫🇷" },
// ];

// const desktopClass = ({ isActive }) =>
//   ["text-sm transition-colors", isActive ? "text-orange-500" : "text-neutral-400 hover:text-white"].join(" ");

// const mobileClass = ({ isActive }) =>
//   ["block rounded-md px-3 py-2 text-sm", isActive ? "text-orange-500" : "text-neutral-300 hover:text-white hover:bg-neutral-900"].join(" ");

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [lang, setLang] = useState(() => normalizeLang(getSavedLang() || "en"));

//   const onLangChange = (e) => {
//     const newLang = normalizeLang(e.target.value);
//     setLang(newLang);
//     translateTo(newLang, { soft: false }); // hard reload for reliability
//   };

//   return (
//     <header className="bg-neutral-950 text-neutral-200 w-full relative z-50">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Left: Logo (not translated) */}
//           <Link to="/" className="flex items-center gap-3 group notranslate">
//             <span className="h-7 w-7 rounded-sm bg-purple-700 group-hover:bg-purple-600 transition-colors" />
//             <span className="text-sm font-medium tracking-wide text-neutral-300 group-hover:text-white">
//               LOGO
//             </span>
//           </Link>

//           {/* Center: Desktop menu (auto-translated) */}
//           <ul className="hidden md:flex items-center gap-8">
//             {NAV_ITEMS.map((item) => (
//               <li key={item.to}>
//                 <NavLink to={item.to} className={desktopClass} end>
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Right: language + CTA (CTA text will be auto-translated) */}
//           <div className="hidden md:flex items-center gap-3">
//             <div className="relative">
//               <select
//                 aria-label="Select language"
//                 value={lang}
//                 onChange={onLangChange}
//                 className="appearance-none rounded-md border border-white/15 bg-neutral-900/60 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
//               >
//                 {LANGS.map((l) => (
//                   <option key={l.code} value={l.code} className="bg-neutral-900 text-white">
//                     {l.flag} {l.label}
//                   </option>
//                 ))}
//               </select>
//               <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400">
//                 ▾
//               </span>
//             </div>

//             <Link
//               to="/contact-us"
//               className="inline-flex items-center rounded-xl bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile hamburger */}
//           <button
//             onClick={() => setOpen((s) => !s)}
//             className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             {/* …icon svg… */}
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
//               {open ? (
//                 <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
//               ) : (
//                 <path fillRule="evenodd" d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25c0-.414.336-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z" clipRule="evenodd" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile menu panel */}
//         {open && (
//           <div className="md:hidden border-t border-neutral-800">
//             <ul className="flex flex-col gap-2 py-3">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.to}>
//                   <NavLink to={item.to} className={mobileClass} end onClick={() => setOpen(false)}>
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}

//               {/* Language picker (mobile) */}
//               <li className="px-3">
//                 <div className="flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2">
//                   <span className="text-xs text-neutral-400">Language</span>
//                   <select
//                     aria-label="Select language"
//                     value={lang}
//                     onChange={(e) => {
//                       onLangChange(e);
//                       setOpen(false);
//                     }}
//                     className="ml-auto appearance-none rounded-sm border border-white/15 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   >
//                     {LANGS.map((l) => (
//                       <option key={l.code} value={l.code} className="bg-neutral-900 text-white">
//                         {l.flag} {l.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </li>

//               <li className="px-3 pt-1">
//                 <Link
//                   to="/contact-us"
//                   className="inline-flex w-full items-center justify-center rounded-xl bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
//                   onClick={() => setOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
