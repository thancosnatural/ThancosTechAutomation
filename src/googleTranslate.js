// // src/googleTranslate.js

// // Map your UI codes to Google codes
// export function normalizeLang(lng) {
//   const m = { en: "en", es: "es", fr: "fr" };
//   return m[(lng || "").slice(0, 2)] || "en";
// }

// // Read last chosen language from localStorage or googtrans cookie
// export function getSavedLang() {
//   return localStorage.getItem("lng") || readGoogTrans();
// }

// // Switch Google Website Translator to a language
// export function translateTo(lng, { soft = false } = {}) {
//   const lang = normalizeLang(lng);

//   // Google widget picks language from this cookie
//   setGoogTransCookie(`/auto/${lang}`);
//   localStorage.setItem("lng", lang);
//   document.documentElement.lang = lang;

//   // Soft = try without reload (may miss parts of big SPAs)
//   // Hard = reliable: reload so Google re-processes the DOM
//   if (!soft) window.location.reload();
// }

// /* ---------------- internal helpers ---------------- */

// function setCookie(name, value, days = 365) {
//   const d = new Date();
//   d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = "; expires=" + d.toUTCString();
//   const path = "; path=/";

//   const host = window.location.hostname;
//   // Avoid invalid cookie domain on localhost
//   if (host && host !== "localhost") {
//     const base = host.replace(/^www\./, "");
//     document.cookie = `${name}=${value}${expires}${path}; domain=${base}`;
//   }
//   // Also set without domain to cover edge hosts
//   document.cookie = `${name}=${value}${expires}${path}`;
// }

// function readGoogTrans() {
//   const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
//   const v = m ? decodeURIComponent(m[1]) : "";
//   // format: /auto/<lang>
//   const parts = v.split("/");
//   return parts[2] || "";
// }

// function setGoogTransCookie(val) {
//   setCookie("googtrans", val);
//   // Some flows also read googprefs; safe noop value
//   setCookie("googprefs", "S:");
// }



export function normalizeLang(lng) {
  const m = { en: "en", es: "es", fr: "fr" };
  return m[(lng || "").slice(0, 2)] || "en";
}

export function getSavedLang() {
  return localStorage.getItem("lng") || readGoogTrans();
}

export function translateTo(lng, { soft = false } = {}) {
  const lang = normalizeLang(lng);
  setGoogTransCookie(`/auto/${lang}`);
  localStorage.setItem("lng", lang);
  document.documentElement.lang = lang;
  if (!soft) window.location.reload(); // reliable for SPAs
}

/* helpers */
function setCookie(name, value, days = 365) {
  const d = new Date(); d.setTime(d.getTime() + days*24*60*60*1000);
  const expires = "; expires=" + d.toUTCString();
  const path = "; path=/";
  const host = window.location.hostname;
  if (host && host !== "localhost") {
    const base = host.replace(/^www\./, "");
    document.cookie = `${name}=${value}${expires}${path}; domain=${base}`;
  }
  document.cookie = `${name}=${value}${expires}${path}`;
}
function readGoogTrans() {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  const v = m ? decodeURIComponent(m[1]) : "";
  return v.split("/")[2] || "";
}
function setGoogTransCookie(val) {
  setCookie("googtrans", val);
  setCookie("googprefs", "S:");
}
