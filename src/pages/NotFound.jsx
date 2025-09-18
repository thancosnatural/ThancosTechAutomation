// NotFound.jsx
import { useEffect } from "react";
import { ArrowLeft, Home, Mail, Search } from "lucide-react";

export default function NotFound({
  heroSrc,                         // optional: show a banner image (w-full, h-auto)
  homeHref = "/",
  contactHref = "/contact",
  searchPath = "/search",          // where to send ?q= searches (optional)
  title = "Page not found",
  subtitle = "We can’t find the page you’re looking for."
}) {
  useEffect(() => {
    const prev = document.title;
    document.title = "404 – Page not found";
    return () => { document.title = prev; };
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim();
    if (!q) return;
    // Simple redirect to /search?q=...
    window.location.href = `${searchPath}?q=${encodeURIComponent(q)}`;
  };

  return (
    <section className="w-full bg-neutral-50 dark:bg-neutral-950">
      {/* Optional hero image */}
      {heroSrc && (
        <div className="relative w-full">
          <img
            src={heroSrc}
            alt=""
            className="block w-full h-auto select-none"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/25" />
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        {/* Big 404 with gradient text */}
        <div className="text-center">
          <span
            className="inline-block bg-gradient-to-br from-orange-500 via-rose-500 to-fuchsia-600 bg-clip-text
                       text-transparent text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight"
          >
            404
          </span>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            {subtitle} Check the URL, try a search, or head back home.
          </p>
        </div>

        {/* Search */}
        <form onSubmit={onSearch} className="mx-auto mt-6 flex max-w-xl gap-2">
          <div className="relative flex-1">
            <input
              name="q"
              type="search"
              placeholder="Search our site"
              autoComplete="off"
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm
                         shadow-sm outline-none placeholder:text-neutral-400
                         focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200
                         dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500
                         dark:focus:ring-neutral-800"
            />
            <Search className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow
                       hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300
                       dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Search
          </button>
        </form>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-sm
                       text-neutral-900 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-200
                       dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus:ring-neutral-800"
          >
            <ArrowLeft className="h-4 w-4" /> Go back
          </button>

          <a
            href={homeHref}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-medium text-white shadow
                       hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <Home className="h-4 w-4" /> Home
          </a>

          <a
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-neutral-900 shadow-sm
                       border border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-200
                       dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus:ring-neutral-800"
          >
            <Mail className="h-4 w-4" /> Contact support
          </a>
        </div>

        {/* Helpful links */}
        <ul className="mx-auto mt-8 max-w-2xl list-disc pl-6 text-sm text-neutral-600 dark:text-neutral-300 space-y-1.5">
          <li>If you typed the address, make sure it’s spelled correctly.</li>
          <li>Looking for something specific? Use the search above.</li>
          <li>Still stuck? <a className="underline hover:no-underline" href={contactHref}>Get in touch</a>.</li>
        </ul>
      </div>
    </section>
  );
}
