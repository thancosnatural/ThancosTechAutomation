// LetsTalkExact.jsx
import React, { useState } from "react";

export default function LetsTalkExact({
  endpoint = "/api/contact",
  bg = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
}) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    const form = e.target;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    if (data.hp) return; // honeypot

    const req = ["name","company","email","country","phone","designation","service","message"];
    for (const k of req) {
      if (!String(data[k] || "").trim()) {
        setMsg(`Please fill ${k}.`);
        return;
      }
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      setMsg("Enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ts: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setMsg("Thanks! We’ll get back to you shortly.");
      form.reset();
    } catch {
      setMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* background + purple glow + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_0%_0%,rgba(168,85,247,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-black/80" />
      {/* top thin gradient line */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-orange-400" /> */}

      <div className="relative mx-auto max-w-[520px] px-4 py-9 sm:px-6">
        <h2 className="mb-6 text-[28px] font-extrabold tracking-tight sm:text-[32px]">
          Let’s talk!
        </h2>

        <form onSubmit={onSubmit} noValidate className="grid gap-3">
          {/* honeypot */}
          <input name="hp" className="hidden" tabIndex="-1" autoComplete="off" />

          <div className="ctrl">
            <input className="field" name="name" placeholder="Your Name*" autoComplete="name" />
          </div>

          <div className="ctrl">
            <input className="field" name="company" placeholder="Company*" autoComplete="organization" />
          </div>

          <div className="ctrl">
            <input className="field" name="email" type="email" placeholder="Email*" autoComplete="email" />
          </div>

          {/* Country ▾ + Phone */}
          <div className="grid grid-cols-[1fr_42px_1.2fr] gap-2">
            <div className="relative ctrl">
              <select name="country" defaultValue="India" className="field pr-12 appearance-none">
                {["India","United States","United Kingdom","Germany","Japan"].map(c => (
                  <option key={c} value={c} className="bg-[#0f0f11] text-white">{c}</option>
                ))}
              </select>
              {/* boxed caret */}
              <span className="caretBox">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </div>

            {/* small square like in the mock (keeps the spacing look) */}
            <div className="grid place-items-center">
              <span className="h-[42px] w-[42px] rounded-sm border border-white/35 bg-white/10 grid place-items-center">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </div>

            <div className="ctrl">
              <input className="field" name="phone" placeholder="Phone" inputMode="tel" autoComplete="tel" />
            </div>
          </div>

          <div className="ctrl">
            <input className="field" name="designation" placeholder="Designations*" />
          </div>

          <div className="relative ctrl">
            <select
              name="service"
              defaultValue="Thancos Automations services"
              className="field pr-12 appearance-none"
            >
              {[
                "Thancos Automations services",
                "UI/UX & Product Design",
                "Website / Web App",
                "Mobile App",
                "Robotics & PLC",
                "Something else",
              ].map(s => (
                <option key={s} value={s} className="bg-[#0f0f11] text-white">{s}</option>
              ))}
            </select>
            <span className="caretBox">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </div>

          <div className="ctrl">
            <textarea className="field h-28 resize-y" name="message" placeholder="Message*" />
          </div>

          <div className="min-h-5 text-sm opacity-90">{msg}</div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-[92px] items-center justify-center rounded-sm border border-white/40 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Submit"}
          </button>
        </form>
      </div>

      {/* styles to nail the thin borders + accent top line + caret box */}
      <style>{`
        .field {
          width: 100%;
          height: 42px;
          background: transparent;
          color: #fff;
          font-size: 0.9rem;
          padding: 0 0.75rem;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 2px;
          outline: none;
        }
        .field::placeholder { color: rgba(255,255,255,0.7); }
        .field:focus { box-shadow: 0 0 0 2px rgba(168,85,247,0.45); }

        /* wrapper that draws the short purple line along the top edge */
        .ctrl { position: relative; }
        .ctrl::after {
          content: "";
          position: absolute;
          right: 8px;
          top: 8px;
          width: 160px;      /* adjust to taste */
          height: 3px;
          pointer-events: none;
        }

        .caretBox {
          position: absolute;
          top: 0;
          right: 0;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.08);
          border-left: 1px solid rgba(255,255,255,0.35);
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
