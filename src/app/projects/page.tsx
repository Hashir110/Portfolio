"use client";

import { useEffect } from "react";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Muhammad Hashir - Software Engineer";
  }, []);

  return <ProjectsSection />;
}
