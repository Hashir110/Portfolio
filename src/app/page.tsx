"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Star,
  ArrowRight,
  Monitor,
  CheckCircle,
  X,
  Phone,
  MapIcon,
  Sun,
  Moon,
  Calendar,
  Clock,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const sections = [
      {
        id: "hero",
        title: "Hashir Dev - Full Stack Developer",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",
        description:
          "Professional portfolio of Hashir Dev, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
      },
      {
        id: "about",
        title: "About - Hashir Dev",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",

        description:
          "Learn more about Hashir Dev's experience, skills, and passion for full-stack development and modern web technologies.",
      },
      {
        id: "skills",
        title: "Skills & Technologies - Hashir Dev",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",

        description:
          "Explore Hashir Dev's technical skills including React, Node.js, TypeScript, databases, and modern development tools.",
      },
      {
        id: "services",
        title: "Services - Hashir Dev",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",

        description:
          "Professional web development services including full-stack applications, mobile apps, and custom solutions by Hashir Dev.",
      },
      {
        id: "projects",
        title: "Projects - Hashir Dev",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",

        description:
          "Featured projects and portfolio showcasing Hashir Dev's expertise in web development, mobile apps, and full-stack solutions.",
      },
      {
        id: "contact",
        title: "Contact - Hashir Dev",
        icon: "/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png",

        description:
          "Get in touch with Hashir Dev for web development projects, collaborations, and professional opportunities.",
      },
    ];

    const updateTitle = () => {
      const scrollPosition = window.scrollY + 100;

      // Default to hero section
      let currentSection = sections[0];

      // Check each section to find which one is currently visible
      sections.forEach((section) => {
        const element = document.getElementById(
          section.id === "hero" ? "" : section.id
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            currentSection = section;
          }
        }
      });

      // Update document title and meta description
      document.title = currentSection.title;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", currentSection.description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", currentSection.description);
        document.head.appendChild(metaDescription);
      }
    };

    // Update title on scroll
    window.addEventListener("scroll", updateTitle);
    // Update title on initial load
    updateTitle();

    return () => {
      window.removeEventListener("scroll", updateTitle);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-serif font-bold text-xl bg-gradient-to-r from-gray-400 via-primary to-amber-800  bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            &lt; Hashir <span className="text-amber-600">/</span> &gt;
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105 "
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105 "
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105 "
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105 "
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#blog"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105 "
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center">
            <button
              // onClick={toggleTheme}
              className="p-2 rounded-lg  transition-colors disabled:cursor-not-allowed cursor-not-allowed"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#hero"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#blog"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blogs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/me2jpg.jpg"
                alt="Hashir"
                className="w-56 h-56 rounded-full mx-auto mb-6 object-cover border-4 border-amber-600/70 shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-amber-600/20"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-background animate-pulse"></div>
            </div>
          </div>
          <h1
            className="font-serif font-bold text-5xl md:text-7xl mb-6 
  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Full Stack Developer
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with
            modern technologies. I build scalable web & mobile applications that
            solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-400 via-primary to-amber-700 hover:from-primary/90 hover:to-amber-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300 hover:scale-105 group bg-transparent"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 bg-gradient-to-r from-card/50 to-muted/30"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2
                className="font-serif font-bold text-4xl md:text-5xl mb-8  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
              >
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 1+ years of experience in full-stack development, I
                specialize in building modern web applications using React,
                Node.js, and cloud technologies. I'm passionate about clean
                code, user experience, and continuous learning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in the power of technology to solve complex problems
                and create meaningful impact. When I'm not coding, you'll find
                me exploring new frameworks, contributing to open source, or
                mentoring aspiring developers.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10 hover:border-primary hover:text-amber-600 transition-all duration-300 hover:scale-105 bg-transparent "
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.open("https://github.com/Hashir110")}
                  >
                    GitHub
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/10 hover:border-primary hover:text-amber-600 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/muhammad-hashir-shaikh-%F0%9F%93%8C-b94854340/"
                      )
                    }
                  >
                    LinkedIn
                  </span>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="/me1.jpg"
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-amber-500/5">
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-primary to-amber-700 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Code className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Framer Motion
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-amber-500/5">
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-primary to-amber-700 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Database className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center cursor-pointer group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-amber-500/5">
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-primary to-amber-700  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Globe className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">
                  CCO - Computer Certified Operator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Word
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Excel
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Power Point
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    inPage
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 hover:from-primary/5 hover:to-amber-500/5">
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-primary to-amber-700 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Smartphone className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">
                  Mobile & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    React Native
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Git
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Github
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Figma
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="hover:bg-primary/20 transition-colors"
                  >
                    Firebase
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Services Section  */}
      <section
        id="services"
        className="py-24 px-4 bg-gradient-to-r from-card/30 to-muted/20"
      >
        <div className="container max-w-6xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Application Service */}
            <Card
              className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 
border-0 bg-gradient-to-br from-amber-400 via-primary to-amber-600  hover:from-primary/10 hover:to-amber-800/40 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Monitor className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">
                  Web Application
                </CardTitle>
                <CardDescription className="text-base">
                  Full-stack web development solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent cursor-pointer"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Mobile App Development Service */}
            <Card
              className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 
border-0 bg-gradient-to-br from-amber-400 via-primary to-amber-600  hover:from-primary/10 hover:to-amber-800/40 cursor-pointer"
              onClick={() => setIsMobileModalOpen(true)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Smartphone className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">
                  Mobile App Development
                </CardTitle>
                <CardDescription className="text-base">
                  Cross-platform mobile applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent cursor-pointer"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* More Services */}
            <Card
              className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 
border-0 bg-gradient-to-br from-amber-400 via-primary to-amber-600  hover:from-primary/10 hover:to-amber-800/40 cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Star className="relative w-16 h-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="font-serif text-xl">
                  More Services
                </CardTitle>
                <CardDescription className="text-base">
                  Additional development services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full cursor-not-allowed opacity-60 bg-transparent"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal for Web Application Service */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-gray-100">
          <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-gray-100">
                  Web Application Development
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="hover:bg-primary/10 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Custom Web Applications
                    </h4>
                    <p className="text-muted-foreground">
                      Build scalable, responsive web applications tailored to
                      your business needs using modern technologies like React,
                      Next.js, and Node.js.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Full-Stack Development
                    </h4>
                    <p className="text-muted-foreground">
                      Complete end-to-end development including frontend
                      interfaces, backend APIs, database design, and deployment
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      E-commerce Solutions
                    </h4>
                    <p className="text-muted-foreground">
                      Develop robust e-commerce platforms with payment
                      integration, inventory management, and user-friendly
                      shopping experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Performance Optimization
                    </h4>
                    <p className="text-muted-foreground">
                      Optimize existing applications for better performance,
                      SEO, and user experience with modern best practices and
                      tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button
                  className="w-full cursor-pointer bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] py-3"
                  onClick={() => {
                    setIsModalOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Mobile App Development Service */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-gray-100">
          <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-gray-100">
                  Mobile App Development
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileModalOpen(false)}
                  className="hover:bg-primary/10 rounded-full text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Cross-Platform Development
                    </h4>
                    <p className="text-muted-foreground">
                      Build native-quality mobile apps for both iOS and Android
                      using React Native and Expo, ensuring consistent user
                      experience across platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Native Features Integration
                    </h4>
                    <p className="text-muted-foreground">
                      Integrate device-specific features like camera, GPS, push
                      notifications, biometric authentication, and offline
                      storage for enhanced functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      App Store Deployment
                    </h4>
                    <p className="text-muted-foreground">
                      Complete app store submission process including
                      optimization, testing, and deployment to both Google Play
                      Store and Apple App Store.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Performance & Security
                    </h4>
                    <p className="text-muted-foreground">
                      Optimize app performance, implement secure authentication,
                      data encryption, and follow mobile security best practices
                      for user protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 cursor-pointer text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] py-3"
                  onClick={() => {
                    setIsMobileModalOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 bg-gradient-to-r from-card/30 to-muted/20"
      >
        <div className="container max-w-6xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden ">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/roziAndFrame.png"
                  alt="Rozi Web Application"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Rozi Web Application
                </CardTitle>
                <CardDescription className="text-base">
                  The best services platform, The best market place for service
                  providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Nest.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Multiple Gateway
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-not-allowed opacity-60 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r cursor-pointer from-gray-400 via-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open("https://roziapp.com/", "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/whiterockcompanionend.jpg"
                  alt="Whiterock Companion App"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Whiterock Companion App
                </CardTitle>
                <CardDescription className="text-base">
                  A mobile app for Whiterock Community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    React Native
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Expo
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Node js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Libraries
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-not-allowed opacity-60 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-not-allowed opacity-60 bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/Register V1.png"
                  alt="Taska Web Application"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Taska Web Application
                </CardTitle>
                <CardDescription className="text-base">
                  A web application for task management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    React js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Local Storage
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    CRUD
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Tailwind CSS
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="hover:scale-105 cursor-pointer transition-all duration-300 bg-transparent"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://github.com/Hashir110/figma-task",
                        "_blank"
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r cursor-pointer from-gray-400 via-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open("https://taskaa-task.netlify.app/", "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/Screenshot 2025-08-26 110838.png"
                  alt="Vehicle Vins Report"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Vehicle Vins Report
                </CardTitle>
                <CardDescription className="text-base">
                  Let's Verify Your Car History is a global service that aims to
                  enhance transparency in the used car market and promote road
                  safety on a global scale by providing comprehensive vehicle
                  histories.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Next js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Stripe
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Email JS
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="hover:scale-105 cursor-pointer transition-all duration-300 bg-transparent"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://github.com/Hashir110/vehicle-project",
                        "_blank"
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code on Github
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r cursor-pointer from-gray-400 via-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open("https://vehiclevinsreport.com/", "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/Screenshot 2025-08-26 114443.png"
                  alt="Vehicle Vins Report"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  HERO VILLAIN REPUBLIC
                </CardTitle>
                <CardDescription className="text-base">
                  Join us on this epic journey as we redefine the boundaries of
                  imagination and breathe life into legendary heroes and
                  villains like never before.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Rect js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Blog
                  </Badge>
                  {/* <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Email JS
                  </Badge> */}
                </div>
                <div className="flex gap-3">
                  <Button
                    className="cursor-not-allowed opacity-60 bg-transparent"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://github.com/Hashir110/vehicle-project",
                        "_blank"
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r cursor-pointer from-gray-400 via-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open("https://www.hvrai.app/", "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src="/Screenshot 2025-08-26 115602.png"
                  alt="Vehicle Vins Report"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  BC APPA ADMIN PORTAL
                </CardTitle>
                <CardDescription className="text-base">
                  BC Appa is a very large project. I worked on the frontend of
                  its admin portal. It also has a mobile app and a job portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Rect js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Node js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Other...
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    className="cursor-not-allowed opacity-60 bg-transparent"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://github.com/Hashir110/vehicle-project",
                        "_blank"
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r cursor-pointer from-gray-400 via-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 transition-all duration-300 hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://admin.bcappa.com/dashboard/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center">
                  <Code className="w-16 h-16 text-primary/60" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Coming Soon</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>5 min read</span>
                </div>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Getting Started with React 18
                </CardTitle>
                <CardDescription className="text-base">
                  Learn about the latest features and improvements in React 18,
                  including concurrent rendering and automatic batching.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Frontend
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full cursor-not-allowed opacity-60 bg-transparent"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center">
                  <Database className="w-16 h-16 text-primary/60" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Coming Soon</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>8 min read</span>
                </div>
                <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                  Building Scalable APIs with Node.js
                </CardTitle>
                <CardDescription className="text-base">
                  Best practices for creating robust and scalable REST APIs
                  using Node.js, Express, and modern database solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    API
                  </Badge>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary/10 transition-colors"
                  >
                    Backend
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full cursor-not-allowed opacity-60 bg-transparent"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-serif font-semibold text-2xl mb-6 bg-gradient-to-r from-gray-800 via-primary to-amber-700 bg-clip-text text-transparent">
                Let's work together
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <span
                    className="text-lg cursor-pointer hover:text-primary transition-colors"
                    onClick={() => {
                      open("mailto:shaikhhashir034@email.com");
                    }}
                  >
                    shaikhhashir034@email.com
                    <p className="text-sm text-muted-foreground text-gray-400">
                      Send me your query anytime!
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg cursor-pointer hover:text-primary transition-colors">
                    +92-3304201181
                    <p className="text-sm text-muted-foreground text-gray-400">
                      Mon to Fri 9am to 10pm - Sat to Sun 24h available
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg cursor-pointer hover:text-primary transition-colors">
                    Sindh, Pakistan
                    <p className="text-sm text-muted-foreground text-gray-400">
                      Hirabad City, Hyderabad
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-serif text-2xl bg-gradient-to-r from-gray-800 via-primary to-amber-700 bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-500 via-primary cursor-pointer to-amber-700 hover:from-primary/90 hover:to-amber-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-gradient-to-r from-card/50 to-muted/30">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-lg font-serif cursor-pointer">
            &copy; {new Date().getFullYear()} &lt;{" "}
            <span className="font-bold bg-gradient-to-r from-gray-800 via-primary to-amber-700 bg-clip-text text-transparent">
              Muhammad Hashir
            </span>{" "}
            <span className="text-amber-600">/</span> &gt; All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
