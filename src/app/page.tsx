"use client";

import { useState } from "react";
import { Starfield } from "@/components/Starfield";
import { SpaceHeader } from "@/components/SpaceHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);

    // Smooth scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Starry background */}
      <Starfield />

      {/* Space-themed header */}
      <SpaceHeader
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Hero section */}
      <HeroSection />
      <AboutSection />
    </main>
  );
}
