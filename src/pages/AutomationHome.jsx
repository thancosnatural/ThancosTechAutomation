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

      <FAQSection />

    </div>
  );
}
