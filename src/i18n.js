// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About us",
        services: "Services",
        projects: "Projects",
        tech: "Tech Services",
        blogs: "Blogs",
        careers: "Careers",
        contact: "Contact",
      },
      // Add page strings as you migrate:
      hero: { title: "Unlocking Potential Through", cta: "Contact Now" },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre nosotros",
        services: "Servicios",
        projects: "Proyectos",
        tech: "Servicios tecnológicos",
        blogs: "Blogs",
        careers: "Carreras",
        contact: "Contacto",
      },
      hero: { title: "Desbloqueando el potencial a través de", cta: "Contactar ahora" },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        projects: "Projets",
        tech: "Services tech",
        blogs: "Blogs",
        careers: "Carrières",
        contact: "Contact",
      },
      hero: { title: "Libérer le potentiel grâce à", cta: "Nous contacter" },
    },
  },
};

const savedLng =
  (typeof window !== "undefined" && localStorage.getItem("lng")) ||
  (typeof navigator !== "undefined" && navigator.language?.slice(0, 2)) ||
  "en";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: ["en", "es", "fr"].includes(savedLng) ? savedLng : "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export function setLanguage(lng) {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") localStorage.setItem("lng", lng);
}

export default i18n;
