"use client";

import { useEffect } from "react";
import { BlogSection } from "@/components/sections/BlogSection";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Journal | Muhammad Hashir - Software Engineer";
  }, []);

  return <BlogSection />;
}
