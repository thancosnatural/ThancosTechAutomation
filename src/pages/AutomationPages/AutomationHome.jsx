import React from "react";
import Hero from "@/components/LandingPageComponents/HeroSection";
import WhoWeAre from "@/components/LandingPageComponents/WhoWeAre";
import AutomationServices from "@/components/LandingPageComponents/AutomationServices";
import RecentProjects from "@/components/LandingPageComponents/Projects";
import BenefitsAccordion from "@/components/LandingPageComponents/Benifits";
import CTAInvite from "@/components/LandingPageComponents/CTA";
import FAQSection from "@/components/LandingPageComponents/FAQ";
import { HOME_IMAGES } from "@/constants/branding";

const DEFAULT_GALLERY = [
  {
    src: HOME_IMAGES.Slider1,
    alt: "India chip silicon board",
  },
  {
    src: HOME_IMAGES.Slider2,
    alt: "Gears automation tablet",
  },
  {
    src:  HOME_IMAGES.Slider3,
    alt: "CNC machining center",
  },
    {
    src:  HOME_IMAGES.Slider4,
    alt: "CNC machining center",
  },
    {
    src:  HOME_IMAGES.Slider5,
    alt: "CNC machining center",
  },
];

/* ===================== PAGE ===================== */
export default function AutomationHome() {

  const CTAAutomation = {
    label: "CALL TO US",
    title: "Let’s Start Automating Together",
    subtitle: "We’re ready to discuss how our automation solutions can benefit your business. Contact us today",
    cta: { label: "Get in Touch", href: "/contact-us" },
    heroImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
    gallery: DEFAULT_GALLERY,
  }

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero */}
      <Hero />

      <WhoWeAre />

      <AutomationServices />

      <RecentProjects />

      <BenefitsAccordion />

      <CTAInvite data={CTAAutomation} />

      <FAQSection data={DEFAULT_FAQ}/>

    </div>
  );
}



const DEFAULT_FAQ = [
  {
    q: "What Services does the Thancos tech offers ?",
    a: "We provide end‑to‑end product design and development: Websites, Web Apps, Mobile Apps, Dashboard & Data Viz, UX Research, and Brand/Graphic Design.",
  },
  {
    q: "How soon can you start a project?",
    a: "Typically within 1–2 weeks after scope alignment. We can accelerate for priority engagements.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Yes — our teams are structured for both rapid iteration (startups) and compliance‑heavy delivery (enterprise).",
  },
  {
    q: "What tech stack do you use?",
    a: "React, Next.js, Node/Express, PostgreSQL, GraphQL/REST, AWS, and modern CI/CD. For mobile: React Native/Flutter.",
  },
  {
    q: "Do you offer maintenance & support?",
    a: "We provide flexible retainers for updates, monitoring, and feature iterations post‑launch.",
  },
  {
    q: "Can you work with our in‑house team?",
    a: "Absolutely. We augment existing teams, share standards, and co‑own delivery milestones.",
  },
];
