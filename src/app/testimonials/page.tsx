"use client";

import { useEffect } from "react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = "Testimonials | Muhammad Hashir - Software Engineer";
  }, []);

  return <TestimonialsSection />;
}
