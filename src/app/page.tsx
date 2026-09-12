"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  useEffect(() => {
    const sections = [
      { id: "about", title: "Muhammad Hashir - Software Engineer" },
      { id: "services", title: "Services | Muhammad Hashir - Software Engineer" },
      { id: "projects", title: "Projects | Muhammad Hashir - Software Engineer" },
      { id: "experience", title: "Experience | Muhammad Hashir - Software Engineer" },
      { id: "testimonials", title: "Testimonials | Muhammad Hashir - Software Engineer" },
      { id: "skills", title: "Skills | Muhammad Hashir - Software Engineer" },
      { id: "blog", title: "Journal | Muhammad Hashir - Software Engineer" },
      { id: "contact", title: "Contact | Muhammad Hashir - Software Engineer" },
    ];

    const updateTitle = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            currentSection = section;
          }
        }
      });
      document.title = currentSection.title;
    };

    window.addEventListener("scroll", updateTitle);
    updateTitle();
    return () => window.removeEventListener("scroll", updateTitle);
  }, []);

  return (
    <>
      <div id="about">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
