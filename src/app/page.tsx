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
  ChevronUp,
  Download,
  Bot,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
// import ChatAssistant from "@/components/ui/chatComponent";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);



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
        title: "< Hashir /> - Full Stack Developer",
        icon: "/favicon.png",
        description:
          "Professional portfolio of < Hashir />, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
      },
      {
        id: "about",
        title: "About - < Hashir />",
        icon: "/favicon.png",

        description:
          "Learn more about < Hashir />, their experience, skills, and passion for full-stack development and modern web technologies.",
      },
      {
        id: "skills",
        title: "Skills & Technologies - < Hashir />",
        icon: "/favicon.png",

        description:
          "Explore < Hashir />'s technical skills including React, Node.js, TypeScript, databases, and modern development tools.",
      },
      {
        id: "services",
        title: "Services - < Hashir />",
        icon: "/favicon.png",

        description:
          "Professional web development services including full-stack applications, mobile apps, and custom solutions by < Hashir />.",
      },
      {
        id: "projects",
        title: "Portfolio - < Hashir />",
        icon: "/favicon.png",

        description:
          "Featured projects and portfolio showcasing < Hashir />'s expertise in web development, mobile apps, and full-stack solutions.",
      },
      {
        id: "blog",
        title: "Blog - < Hashir />",
        icon: "/favicon.png",

        description:
          "Latest articles, tutorials, and insights about web development, programming, and technology trends by < Hashir />.",
      },
      {
        id: "contact",
        title: "Contact - < Hashir />",
        icon: "/favicon.png",

        description:
          "Get in touch with < Hashir /> for web development projects, collaborations, and professional opportunities.",
      },
    ];

    const updateTitle = () => {
      const scrollPosition = window.scrollY + 100;

      setShowScrollTop(scrollPosition > 300);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Mobile App Developer",
      "Full Stack Developer",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 3500,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) {
      setSending(false);
      alert("Form is not available. Please refresh the page and try again.");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_5mv924a",
        "template_3ch93sv",
        formRef.current,
        "W7OwBrhPuS5C5TEET"
      );

      console.log("✅ Message sent:", result.text);


      console.log("📩 Form Data:", formData);



      alert("Message sent successfully!");
      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("❌ Error:", error?.text ?? error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const themeStyles = {
    background: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-gray-100" : "text-gray-900",
    card: isDarkMode ? "bg-gray-800" : "bg-white",
    muted: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-700" : "border-gray-200",
    header: isDarkMode ? "bg-gray-900/80" : "bg-white/80",
    gradient: isDarkMode
      ? "from-gray-900 via-gray-900 to-gray-800"
      : "from-white via-white to-gray-50",
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${themeStyles.gradient} ${themeStyles.text} transition-all duration-300`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b ${themeStyles.border} ${themeStyles.header} backdrop-blur-xl shadow-sm transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-serif font-bold text-xl hover:cursor-pointer bg-gradient-to-r from-gray-400 via-primary to-amber-800  bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            &lt; Hashir <span className="text-amber-600">/</span> &gt;
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#about"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#services"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#projects"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#blog"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className={`text-sm font-medium hover:text-amber-500 transition-all duration-300 hover:scale-105 relative group ${themeStyles.text}`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Side - Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Resume Download Button */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className={`hidden sm:flex items-center gap-2 border-amber-500/50 hover:bg-amber-100 transition-all duration-300 rounded-full px-4 ${themeStyles.text}`}
            >
              <a href="/Muhammad Hashir's Resume.pdf" download="Muhammad Hashir's Resume.pdf">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </Button>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`hover:bg-amber-500/10 rounded-full p-2 cursor-pointer ${themeStyles.text} transition-all duration-300`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 hover:underline transition-all duration-300 relative group hover:scale-105"
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
              <a
                href="/Muhammad Hashir's Resume.pdf" download="Muhammad Hashir's Resume.pdf"
                className="mt-2 flex items-center gap-2 px-6 py-2 bg-amber-500 text-white rounded-full "
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
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

          {/* Static Name */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Hi, I&apos;m Muhammad Hashir
          </h2>

          {/* Animated Titles */}
          <h1
            className="font-serif font-bold text-5xl md:text-7xl mb-6 
        bg-gradient-to-r from-gray-800 via-primary to-amber-600 
        bg-clip-text text-transparent leading-tight"
          >
            {text}
            <Cursor cursorStyle="|" cursorColor="#d97706" />
          </h1>

          <p
            className={`text-xl md:text-2xl ${themeStyles.muted} mb-10 max-w-3xl mx-auto leading-relaxed`}
          >
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
              className={`border-2 hover:bg-amber-500/5 hover:border-amber-500 transition-all duration-300 hover:scale-105 group ${themeStyles.border} ${themeStyles.text}`}
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
              <p className={`${themeStyles.muted} text-lg leading-relaxed`}>
                With over 1+ years of experience in full-stack development, I
                specialize in building modern web applications using React,
                Node.js, and cloud technologies. I'm passionate about clean
                code, user experience, and continuous learning.
              </p>
              <p className={`${themeStyles.muted} text-lg leading-relaxed`}>
                I believe in the power of technology to solve complex problems
                and create meaningful impact. When I'm not coding, you'll find
                me exploring new frameworks, contributing to open source, or
                mentoring aspiring developers.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 hover:scale-105 ${themeStyles.border} ${themeStyles.text}`}
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
                  className={`hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 hover:scale-105 ${themeStyles.border} ${themeStyles.text}`}
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
                src="/IMG_1614.JPG"
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
            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Code className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
                  Frontend
                </CardTitle>
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

            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Database className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
                  Backend
                </CardTitle>
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

            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Globe className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
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

            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Smartphone className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
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
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } cursor-pointer shadow-lg`}
              onClick={() => setIsModalOpen(true)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Monitor className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
                  Web Application
                </CardTitle>
                <CardDescription className="text-base">
                  Full-stack web development solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className={`w-full hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 ${themeStyles.border} ${themeStyles.text}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Mobile App Development Service */}
            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } cursor-pointer shadow-lg`}
              onClick={() => setIsMobileModalOpen(true)}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Smartphone className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
                  Mobile App Development
                </CardTitle>
                <CardDescription className="text-base">
                  Cross-platform mobile applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className={`w-full hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 ${themeStyles.border} ${themeStyles.text}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* More Services */}
            <Card
              className={`text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${themeStyles.card
                } ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                } cursor-pointer shadow-lg`}
            >
              <CardHeader className="pb-4">
                <div className="relative">
                  <div className="absolute inset-0  rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Star className="relative w-16 h-16 mx-auto text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`font-serif text-xl ${themeStyles.text}`}>
                  More Services
                </CardTitle>
                <CardDescription className="text-base">
                  Additional development services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className={`w-full cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
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
          <div
            className={`${themeStyles.card} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-gray-100">
                  Web Application Development
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className={`hover:bg-amber-500/10 rounded-full ${themeStyles.text}`}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Custom Web Applications
                    </h4>
                    <p className={themeStyles.muted}>
                      Build scalable, responsive web applications tailored to
                      your business needs using modern technologies like React,
                      Next.js, and Node.js.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Full-Stack Development
                    </h4>
                    <p className={themeStyles.muted}>
                      Complete end-to-end development including frontend
                      interfaces, backend APIs, database design, and deployment
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      E-commerce Solutions
                    </h4>
                    <p className={themeStyles.muted}>
                      Develop robust e-commerce platforms with payment
                      integration, inventory management, and user-friendly
                      shopping experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Performance Optimization
                    </h4>
                    <p className={themeStyles.muted}>
                      Optimize existing applications for better performance,
                      SEO, and user experience with modern best practices and
                      tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-6 border-t ${themeStyles.border}`}>
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
          <div
            className={`${themeStyles.card} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-gray-100">
                  Mobile App Development
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileModalOpen(false)}
                  className={`hover:bg-amber-500/10 rounded-full ${themeStyles.text}`}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Cross-Platform Development
                    </h4>
                    <p className={themeStyles.muted}>
                      Build native-quality mobile apps for both iOS and Android
                      using React Native and Expo, ensuring consistent user
                      experience across platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Native Features Integration
                    </h4>
                    <p className={themeStyles.muted}>
                      Integrate device-specific features like camera, GPS, push
                      notifications, biometric authentication, and offline
                      storage for enhanced functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      App Store Deployment
                    </h4>
                    <p className={themeStyles.muted}>
                      Complete app store submission process including
                      optimization, testing, and deployment to both Google Play
                      Store and Apple App Store.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-2 ${themeStyles.text}`}
                    >
                      Performance & Security
                    </h4>
                    <p className={themeStyles.muted}>
                      Optimize app performance, implement secure authentication,
                      data encryption, and follow mobile security best practices
                      for user protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-6 border-t ${themeStyles.border}`}>
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
        className={`py-24 px-4 ${isDarkMode ? "bg-gray-800/30" : "bg-gray-50/30"
          } transition-all duration-300`}
      >
        <div className="container max-w-6xl mx-auto">
          <h2
            className="font-serif font-bold text-4xl md:text-5xl text-center mb-16  bg-gradient-to-r from-gray-800 via-primary to-amber-600 
  bg-clip-text text-transparent leading-tight"
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  Rozi Web Application
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
                  The best services platform, The best market place for service
                  providers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Nest.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Multiple Gateway
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
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

            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  Whiterock Companion App
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
                  A mobile app for Whiterock Community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    React Native
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Expo
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Node js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Libraries
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  Taska Web Application
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
                  A web application for task management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    React js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Local Storage
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    CRUD
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
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

            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  Vehicle Vins Report
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
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
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Next js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Stripe
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
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

            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  HERO VILLAIN REPUBLIC
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
                  Join us on this epic journey as we redefine the boundaries of
                  imagination and breathe life into legendary heroes and
                  villains like never before.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Rect js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
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
                    className={`cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
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

            <Card
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 ${themeStyles.card} overflow-hidden shadow-lg`}
            >
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
                  BC APPA ADMIN PORTAL
                </CardTitle>
                <CardDescription className={`text-base ${themeStyles.muted}`}>
                  BC Appa is a very large project. I worked on the frontend of
                  its admin portal. It also has a mobile app and a job portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Rect js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Node js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Other...
                  </Badge>
                </div>
                <div className="flex gap-3">
                  <Button
                    className={`cursor-not-allowed opacity-60 ${themeStyles.border} ${themeStyles.text}`}
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
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
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
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
                <CardTitle
                  className={`font-serif text-xl group-hover:text-amber-700 transition-colors ${themeStyles.text}`}
                >
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
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
                  >
                    API
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`hover:bg-amber-500/10 transition-colors ${themeStyles.border} ${themeStyles.text}`}
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
              <p className={themeStyles.muted}>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary hover:text-amber-700" />
                  </div>
                  <span
                    className={themeStyles.muted}
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
                    <Phone className="w-6 h-6 text-primary hover:text-amber-700" />
                  </div>
                  <span className={themeStyles.muted}>
                    +92-3304201181
                    <p className="text-sm text-muted-foreground text-gray-400">
                      24/7 Available for call and message
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapIcon className="w-6 h-6 text-primary hover:text-amber-700" />
                  </div>
                  <span className={themeStyles.muted}>
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
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={themeStyles.muted}>
                      Name
                    </label>
                    <input type="hidden" name="project_name" value="My Portfolio Website" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      // Updated: Orange border default, Dark Orange border + ring on focus
                      className="w-full px-4 py-3 border border-orange-500 rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={themeStyles.muted}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      // Updated: Orange border default, Dark Orange border + ring on focus
                      className="w-full px-4 py-3 border border-orange-500 rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={themeStyles.muted}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      // Updated: Orange border default, Dark Orange border + ring on focus
                      className="w-full px-4 py-3 border border-orange-500 rounded-lg bg-input focus:outline-none focus:ring-2 focus:ring-orange-700/50 focus:border-orange-700 transition-all duration-300"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>


                  <Button
                    type="submit"
                    disabled={sending}
                    className={`w-full bg-gradient-to-r from-gray-500 via-primary cursor-pointer to-amber-700 text-white shadow-lg transition-all duration-300 py-3 ${sending
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-primary/90 hover:to-amber-600/90 hover:shadow-xl hover:scale-[1.02]"
                      }`}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-4 border-t bg-gradient-to-r from-card/50 to-muted/30">
        <div className="container max-w-6xl mx-auto text-center">
          <p className={themeStyles.muted}>
            &copy; {new Date().getFullYear()} &lt;{" "}
            <span className="font-bold bg-gradient-to-r from-gray-800 via-primary to-amber-700 bg-clip-text text-transparent">
              Muhammad Hashir
            </span>{" "}
            <span className="text-amber-600">/</span> &gt; All rights reserved.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 right-4 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${isDarkMode
            ? "bg-amber-600 hover:bg-amber-800 text-white cursor-pointer"
            : "bg-amber-600 hover:bg-amber-700 text-white cursor-pointer"
            }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

     {/* <ChatAssistant /> */}

      <div
        className={`fixed bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${isDarkMode ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
      >
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </div>
    </div>
  );
}


// template_zal7rvw
// service_fdx85dx
// W7OwBrhPuS5C5TEET