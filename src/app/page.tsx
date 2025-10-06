"use client";

import { useState } from "react";
import { Starfield } from "@/components/Starfield";
import { SpaceHeader } from "@/components/SpaceHeader";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

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
      <Starfield />
      <SpaceHeader
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      <HeroSection />
      <Skills />
      
    </main>
  );
}
