"use client";

import { useEffect } from "react";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function SkillsPage() {
  useEffect(() => {
    document.title = "Skills | Muhammad Hashir - Software Engineer";
  }, []);

  return <SkillsSection />;
}
