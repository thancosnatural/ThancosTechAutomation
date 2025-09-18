// // src/GoogleTranslateProvider.jsx
// import { useEffect } from "react";
// import { translateTo, normalizeLang } from "./googleTranslate";

// export default function GoogleTranslateProvider({ included = "en,es,fr", defaultLang = "en" }) {
//   useEffect(() => {
//     // Create a global init callback for Google
//     window.__googleTranslateElementInit = () => {
//       /* global google */
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: included,
//           autoDisplay: false,
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );

//       // Apply saved language or default
//       const saved = localStorage.getItem("lng") || defaultLang;
//       translateTo(normalizeLang(saved), { soft: true }); // try soft first
//     };

//     // Load Google script once
//     const s = document.createElement("script");
//     s.src = "//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit";
//     s.async = true;
//     document.body.appendChild(s);

//     return () => {
//       delete window.__googleTranslateElementInit;
//     };
//   }, [included, defaultLang]);

//   // Hide the native widget; we’ll drive it ourselves
//   return (
//     <>
//       <div id="google_translate_element" style={{ display: "none" }} />
//       <style>{`
//         .goog-te-banner-frame, .goog-te-gadget-icon { display: none !important; }
//         body { top: 0 !important; }
//       `}</style>
//     </>
//   );
// }





// src/GoogleTranslateProvider.jsx
import { useEffect } from "react";
import { translateTo, normalizeLang, getSavedLang } from "./googleTranslate";

export default function GoogleTranslateProvider({
  included = "en,es,fr",
  defaultLang = "en",
}) {
  useEffect(() => {
    // Init callback for Google script
    window.__googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: included,
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
      const lng = normalizeLang(getSavedLang() || defaultLang);
      translateTo(lng, { soft: true });
      hideGoogleUI();
    };

    // Load script
    const s = document.createElement("script");
    s.src =
      "//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);

    // Keep killing any UI Google injects later
    const obs = new MutationObserver(hideGoogleUI);
    obs.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // First pass
    hideGoogleUI();

    return () => {
      delete window.__googleTranslateElementInit;
      obs.disconnect();
    };
  }, [included, defaultLang]);

  return (
    <>
      {/* Required container for Google widget (hidden) */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </>
  );
}

/* Remove banner + menu frames and reset body offset */
function hideGoogleUI() {
  try {
    const banner = document.querySelector("iframe.goog-te-banner-frame");
    if (banner) banner.remove();

    const menu = document.querySelector("iframe.goog-te-menu-frame");
    if (menu) menu.remove();

    const tooltip = document.getElementById("goog-gt-tt");
    if (tooltip) tooltip.remove();

    // Google sometimes sets inline offset on body
    if (document.body && document.body.style.top) {
      document.body.style.top = "0px";
    }
  } catch {}
}
