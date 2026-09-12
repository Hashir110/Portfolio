"use client";

import { useEffect } from "react";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Muhammad Hashir - Software Engineer";
  }, []);

  return <ContactSection />;
}
