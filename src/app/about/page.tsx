"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroSection showVideoIntro={true} />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
