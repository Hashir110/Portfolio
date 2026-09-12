"use client";

import { useEffect } from "react";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Muhammad Hashir - Software Engineer";
  }, []);

  return <ServicesSection />;
}
