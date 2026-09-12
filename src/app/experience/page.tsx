"use client";

import { useEffect } from "react";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function ExperiencePage() {
  useEffect(() => {
    document.title = "Experience | Muhammad Hashir - Software Engineer";
  }, []);

  return <ExperienceSection />;
}
