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
  ArrowRight,
  Monitor,
  CheckCircle,
  X,
  Phone,
  MapPin,
  Sun,
  Moon,
  Calendar,
  Clock,
  Menu,
  ChevronUp,
  Download,
  Briefcase,
  Layers,
  Sparkles,
  Server,
  ChevronDown,
  ShieldCheck,
  Terminal,
  Cpu,
  Workflow,
  Lock,
  Boxes,
  Activity,
  Layers3,
  Rocket,
  Bot,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { Language, languages, translations } from "@/lib/translations";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // i18n Language State
  const [lang, setLang] = useState<Language>("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[lang] || translations.en;
  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang") as Language | null;

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark) || !savedTheme) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
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

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    setIsLangDropdownOpen(false);
  };

  useEffect(() => {
    const sections = [
      { id: "hero", title: "Muhammad Hashir — Full Stack Engineer" },
      { id: "about", title: "About — Muhammad Hashir" },
      { id: "services", title: "Services — Muhammad Hashir" },
      { id: "projects", title: "Work — Muhammad Hashir" },
      { id: "experience", title: "Experience — Muhammad Hashir" },
      { id: "testimonials", title: "Testimonials — Muhammad Hashir" },
      { id: "skills", title: "Technical Command Center — Muhammad Hashir" },
      { id: "blog", title: "Journal — Muhammad Hashir" },
      { id: "contact", title: "Contact — Muhammad Hashir" },
    ];

    const updateTitle = () => {
      const scrollPosition = window.scrollY + 120;
      setShowScrollTop(window.scrollY > 300);

      let currentSection = sections[0];
      sections.forEach((section) => {
        const element = document.getElementById(
          section.id === "hero" ? "about" : section.id
        );
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [text] = useTypewriter({
    words: t.hero.roles,
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 35,
    delaySpeed: 2500,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) {
      setSending(false);
      alert("Form is not available. Please refresh and try again.");
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
      alert("Thank you! Your message has been sent successfully.");
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
    background: isDarkMode ? "bg-[#0b0f12]" : "bg-[#f8f9fa]",
    text: isDarkMode ? "text-[#f3f4f6]" : "text-[#111827]",
    card: isDarkMode ? "bg-[#111718] border-neutral-800/80" : "bg-white border-gray-200 shadow-sm",
    testimonialBg: isDarkMode ? "bg-[#0e1615] border border-emerald-500/20" : "bg-white border border-gray-200 shadow-sm",
    techCardBg: isDarkMode ? "bg-[#0e1615] border border-emerald-500/20" : "bg-white border border-gray-200 shadow-sm",
    muted: isDarkMode ? "text-neutral-400" : "text-gray-600",
    border: isDarkMode ? "border-neutral-800/80" : "border-gray-200",
    header: isDarkMode ? "bg-[#0b0f12]/90 border-neutral-800/60" : "bg-white/90 border-gray-200",
  };

  const baseProjects = [
    {
      id: "rozi",
      category: "Full Stack",
      image: "/roziAndFrame.png",
      tags: ["React", "Nest.js", "PostgreSQL", "Payment Gateways"],
      liveUrl: "https://roziapp.com/",
      isPrivate: true,
    },
    {
      id: "whiterock",
      category: "Mobile Apps",
      image: "/whiterockcompanionend.jpg",
      tags: ["React Native", "Expo", "Node.js", "Mobile UX"],
      isComingSoon: true,
      isPrivate: true,
    },
    {
      id: "taska",
      category: "Web Apps",
      image: "/Register V1.png",
      tags: ["React.js", "Tailwind CSS", "LocalStorage", "CRUD"],
      liveUrl: "https://taskaa-task.netlify.app/",
      codeUrl: "https://github.com/Hashir110/figma-task",
    },
    {
      id: "vehiclevins",
      category: "Full Stack",
      image: "/Screenshot 2025-08-26 110838.png",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "EmailJS"],
      liveUrl: "https://vehiclevinsreport.com/",
      codeUrl: "https://github.com/Hashir110/vehicle-project",
    },
    {
      id: "hvrai",
      category: "Web Apps",
      image: "/Screenshot 2025-08-26 114443.png",
      tags: ["React.js", "Tailwind CSS", "Blog Platform"],
      liveUrl: "https://www.hvrai.app/",
      isPrivate: true,
    },
    {
      id: "bcappa",
      category: "Full Stack",
      image: "/Screenshot 2025-08-26 115602.png",
      tags: ["React.js", "Nest.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://admin.bcappa.com/dashboard/",
      isPrivate: true,
    },
  ];

  const projects = baseProjects.map((bp) => {
    const translation = t.portfolio.projects.find((p) => p.id === bp.id) || {
      title: bp.id,
      description: "",
      category: bp.category,
    };
    return {
      ...bp,
      title: translation.title,
      description: translation.description,
      localizedCategory: translation.category || bp.category,
    };
  });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div
      dir={currentLangObj.dir}
      className={`min-h-screen ${themeStyles.background} ${themeStyles.text} transition-colors duration-300 font-sans relative selection:bg-amber-500/20 selection:text-amber-400`}
    >
      
      {/* Navigation Header */}
      <header className={`sticky top-0 z-50 w-full border-b ${themeStyles.header} backdrop-blur-md transition-all`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <a href="#about" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2 flex-shrink-0">
            <span className="font-mono text-amber-500 font-bold text-xl">&lt;/&gt;</span>
            <span className="font-bold whitespace-nowrap">Muhammad Hashir</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 rtl:space-x-reverse flex-shrink-0">
            {[
              { name: t.nav.about, href: "#about" },
              { name: t.nav.services, href: "#services" },
              { name: t.nav.work, href: "#projects" },
              { name: t.nav.experience, href: "#experience" },
              { name: t.nav.testimonials, href: "#testimonials" },
              { name: t.nav.skills, href: "#skills" },
              { name: t.nav.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs xl:text-sm font-medium whitespace-nowrap transition-colors hover:text-amber-500 ${themeStyles.muted}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-700/80 hover:border-amber-500/60 text-xs font-semibold text-neutral-300 hover:bg-neutral-800/60 transition-all cursor-pointer"
                aria-label="Language Selector"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase font-mono">{currentLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {isLangDropdownOpen && (
                <div className={`absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-36 rounded-xl ${themeStyles.card} border border-neutral-700/80 shadow-2xl py-1.5 z-50`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={`w-full px-3.5 py-2 text-left rtl:text-right text-xs font-medium flex items-center justify-between hover:bg-neutral-800/80 transition-colors cursor-pointer ${
                        lang === l.code ? "text-amber-400 font-bold bg-amber-500/10" : "text-neutral-300"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.name}</span>
                      </span>
                      {lang === l.code && <CheckCircle className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Download */}
            <a
              href="/Muhammad-Hashir's Resume.pdf"
              download="Muhammad-Hashir's Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-700/80 hover:border-amber-500/60 text-xs font-semibold whitespace-nowrap transition-all hover:bg-amber-500/10"
            >
              <Download className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.nav.resume}</span>
            </a>

            {/* Get In Touch Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold whitespace-nowrap transition-all shadow-sm"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-800/60 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-800 text-neutral-300 cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className={`lg:hidden ${themeStyles.background} border-b ${themeStyles.border} py-6 px-6`}>
            <nav className="flex flex-col space-y-4">
              {[
                { name: t.nav.about, href: "#about" },
                { name: t.nav.services, href: "#services" },
                { name: t.nav.work, href: "#projects" },
                { name: t.nav.experience, href: "#experience" },
                { name: t.nav.testimonials, href: "#testimonials" },
                { name: t.nav.skills, href: "#skills" },
                { name: t.nav.contact, href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium hover:text-amber-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-400 font-mono w-full mb-1">Language:</span>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${lang === l.code ? "bg-amber-500 text-black" : "text-neutral-300 bg-neutral-800"}`}
                  >
                    {l.flag} {l.name}
                  </button>
                ))}
              </div>

              <a
                href="/Muhammad-Hashir's Resume.pdf"
                download="Muhammad-Hashir's Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-black text-sm font-bold mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                {t.nav.resume}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero / About Section */}
      <section id="about" className="py-20 lg:py-28 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          
          <div className="select-none mb-12 text-center overflow-hidden">
            <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight ${isDarkMode ? "stroke-text-dark" : "stroke-text-light"}`}>
              Muhammad Hashir
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {t.hero.title}
              </h2>

              <p className={`${themeStyles.muted} text-base leading-relaxed`}>
                {t.hero.bio}
              </p>

              <div className="pt-1 flex items-center gap-2 text-sm font-mono text-amber-500 font-semibold">
                <span>{t.hero.specialization}:</span>
                <span>
                  {text}
                  <Cursor cursorStyle="|" cursorColor="#f59e0b" />
                </span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs transition-all shadow-sm"
                >
                  {t.hero.viewWork}
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Hashir110"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:contact@mhhashir.me"
                    className="p-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <img
                  src="/me2jpg.jpg"
                  alt="Muhammad Hashir"
                  className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover border border-neutral-800 shadow-xl mx-auto"
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6 lg:text-right rtl:lg:text-left border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-neutral-800/60 pt-6 lg:pt-0 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8">
              <div>
                <span className="text-4xl font-extrabold text-amber-500 font-mono">{t.hero.stats.projects}</span>
                <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.projectsLabel}</h4>
                <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.projectsSub}</p>
              </div>

              <div>
                <span className="text-4xl font-extrabold text-amber-500 font-mono">{t.hero.stats.experience}</span>
                <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.experienceLabel}</h4>
                <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.experienceSub}</p>
              </div>

              <div>
                <span className="text-4xl font-extrabold text-amber-500 font-mono">{t.hero.stats.quality}</span>
                <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.qualityLabel}</h4>
                <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.qualitySub}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.services.tag}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
              onClick={() => setIsModalOpen(true)}
            >
              <div>
                <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.web.num}</span>
                <div className="my-5">
                  <Monitor className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {t.services.web.title}
                </h3>
                <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                  {t.services.web.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                <span>{t.services.web.action}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </div>
            </div>

            <div
              className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
              onClick={() => setIsMobileModalOpen(true)}
            >
              <div>
                <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.mobile.num}</span>
                <div className="my-5">
                  <Smartphone className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {t.services.mobile.title}
                </h3>
                <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                  {t.services.mobile.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
                <span>{t.services.mobile.action}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </div>
            </div>

            <div className={`p-7 rounded-2xl ${themeStyles.card} border flex flex-col justify-between`}>
              <div>
                <span className="font-mono text-2xl font-bold text-neutral-600">{t.services.backend.num}</span>
                <div className="my-5">
                  <Server className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t.services.backend.title}
                </h3>
                <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                  {t.services.backend.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.services.backend.status}</span>
              </div>
            </div>

            <div className={`p-7 rounded-2xl ${themeStyles.card} border flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-neutral-600">{t.services.ai.num}</span>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {t.services.ai.badge}
                  </span>
                </div>
                <div className="my-5">
                  <Sparkles className="w-8 h-8 text-amber-500/70" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-neutral-200">
                  {t.services.ai.title}
                </h3>
                <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                  {t.services.ai.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{t.services.ai.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.portfolio.tag}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t.portfolio.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
              {["All", "Full Stack", "Web Apps", "Mobile Apps"].map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-amber-500 text-black font-bold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {t.portfolio.categories[idx] || cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`group ${themeStyles.card} overflow-hidden rounded-2xl border hover:border-neutral-700 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="relative overflow-hidden aspect-video bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-amber-400 text-[11px] font-mono px-2.5 py-0.5 rounded border border-neutral-800">
                      {project.localizedCategory}
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-lg font-bold group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className={`${themeStyles.muted} text-xs leading-relaxed mt-2`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[10px] border-neutral-800 text-neutral-300 bg-neutral-900/60"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  {project.codeUrl ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neutral-800 hover:border-neutral-600 text-xs gap-1.5 rounded-lg"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                    >
                      <Github className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{t.portfolio.source}</span>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="opacity-40 text-xs gap-1.5 rounded-lg border-neutral-800"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.portfolio.private}</span>
                    </Button>
                  )}

                  {project.liveUrl ? (
                    <Button
                      size="sm"
                      className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs gap-1.5 rounded-lg ml-auto rtl:ml-0 rtl:mr-auto"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <span>{t.portfolio.liveDemo}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="bg-neutral-800 text-neutral-500 text-xs gap-1.5 rounded-lg ml-auto rtl:ml-0 rtl:mr-auto"
                    >
                      <span>{t.portfolio.comingSoon}</span>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.experience.tag}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.experience.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.experience.roles.map((exp, idx) => (
              <div key={idx} className={`p-7 rounded-2xl ${themeStyles.card} border`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-500 font-mono text-xs font-bold uppercase">{exp.duration}</span>
                  <Briefcase className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                <p className="text-amber-400 text-xs font-medium mb-3">{exp.role}</p>
                <p className={`${themeStyles.muted} text-xs leading-relaxed mb-3`}>
                  {exp.desc}
                </p>
                {idx === 1 && (
                  <div className="flex flex-wrap gap-2 text-xs pt-1">
                    <a href="https://roziapp.com/" target="_blank" className="text-amber-400 hover:underline">Rozi</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://www.hvrai.app/" target="_blank" className="text-amber-400 hover:underline">Hvrai</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://admin.bcappa.com/dashboard/" target="_blank" className="text-amber-400 hover:underline">BC Appa</a>
                    <span className="text-neutral-600">•</span>
                    <a href="https://corp.sehatkahani.com/auth/login" target="_blank" className="text-amber-400 hover:underline">Sehat Kahani</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase block mb-2">
              {t.testimonials.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t.testimonials.titlePrefix} <span className="text-emerald-400">{t.testimonials.titleHighlight}</span>
            </h2>
            <p className={`${themeStyles.muted} text-sm sm:text-base mt-3 max-w-xl mx-auto`}>
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Top Featured Recommendation */}
            <div className={`p-8 lg:p-10 rounded-3xl ${themeStyles.testimonialBg} relative`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-4 flex flex-col items-start space-y-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-neutral-800/80 pb-6 lg:pb-0 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
                  <div className="flex items-center gap-4">
                    <img
                      src="/ethisham.png"
                      alt={t.testimonials.items[0].name}
                      className="w-14 h-14 rounded-full object-cover border border-emerald-500/30"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{t.testimonials.items[0].name}</h3>
                      <span className="text-xs font-medium text-emerald-400 block">{t.testimonials.items[0].role}</span>
                      <p className="text-xs text-neutral-400">{t.testimonials.items[0].company}</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/60 text-xs font-medium text-neutral-300 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.testimonials.verified}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-lg sm:text-xl font-serif italic text-neutral-200 leading-relaxed">
                    {t.testimonials.items[0].quote}
                  </p>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Recommendation 2 */}
              <div className={`p-8 rounded-3xl ${themeStyles.testimonialBg} flex flex-col justify-between space-y-6`}>
                <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-relaxed">
                  {t.testimonials.items[1].quote}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src="/saeed.png"
                      alt={t.testimonials.items[1].name}
                      className="w-11 h-11 rounded-full object-cover border border-emerald-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.testimonials.items[1].name}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium">{t.testimonials.items[1].role}</span>
                      <p className="text-[11px] text-neutral-400">{t.testimonials.items[1].company}</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className={`p-8 rounded-3xl ${themeStyles.testimonialBg} flex flex-col justify-between space-y-6`}>
                <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-relaxed">
                  {t.testimonials.items[2].quote}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src="/eeiyan.png"
                      alt={t.testimonials.items[2].name}
                      className="w-11 h-11 rounded-full object-cover border border-emerald-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.testimonials.items[2].name}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium">{t.testimonials.items[2].role}</span>
                      <p className="text-[11px] text-neutral-400">{t.testimonials.items[2].company}</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Technical Command Center / Skills Section (Team Lead Layout) */}
      <section id="skills" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-widest uppercase block">
              {t.techCenter.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t.techCenter.titlePrefix} <span className="text-emerald-400">{t.techCenter.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Engineering Approach */}
            <div className={`lg:col-span-4 p-8 sm:p-9 rounded-[2rem] ${themeStyles.techCardBg} flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden`}>
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300 font-semibold tracking-wide">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.techCenter.approach.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-[1.25]">
                  "{t.techCenter.approach.quotePrefix}<span className="text-emerald-400">{t.techCenter.approach.quoteHighlight}</span>{t.techCenter.approach.quoteSuffix}"
                </h3>

                <p className={`${themeStyles.muted} text-sm leading-relaxed`}>
                  {t.techCenter.approach.desc}
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="space-y-3 pt-6 border-t border-neutral-800/80 relative z-10">
                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{t.techCenter.approach.stat1Count}</h4>
                    <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat1Label}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{t.techCenter.approach.stat2Count}</h4>
                    <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat2Label}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{t.techCenter.approach.stat3Count}</h4>
                    <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat3Label}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Panel: Core Technology Stack & Strategic Capabilities */}
            <div className={`lg:col-span-8 p-8 lg:p-10 rounded-[2rem] ${themeStyles.techCardBg} flex flex-col justify-between space-y-10 shadow-xl`}>
              
              <div>
                {/* Panel Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-neutral-800/80 mb-8">
                  <div className="px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs tracking-wider">
                    &gt;_
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{t.techCenter.stack.title}</h3>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">{t.techCenter.stack.subtitle}</span>
                  </div>
                </div>

                {/* 3 Tech Stack Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Column 1: FRONTEND DEVELOPMENT */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                        {t.techCenter.stack.col1}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* React.js & Next.js */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 180 180" fill="currentColor">
                            <circle cx="90" cy="90" r="90" fill="currentColor"/>
                            <path d="M149.508 157.52L69.141 54H54V125.97H66.8141V69.948L139.73 163.504C143.149 161.737 146.417 159.733 149.508 157.52Z" fill="#000"/>
                            <rect x="115" y="54" width="12.5" height="72" fill="#000"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">React.js & Next.js</h4>
                          <span className="text-xs text-neutral-400 block">Web Applications</span>
                        </div>
                      </div>

                      {/* JavaScript & TypeScript */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#3178c6]/15 border border-[#3178c6]/30 flex items-center justify-center flex-shrink-0">
                          <span className="w-4 h-4 rounded-sm bg-[#3178c6] text-white text-[9px] font-black flex items-center justify-center font-mono leading-none">TS</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">JavaScript & TypeScript</h4>
                          <span className="text-xs text-neutral-400 block">Core Logic & Type Safety</span>
                        </div>
                      </div>

                      {/* Tailwind CSS & CSS */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Tailwind CSS & CSS</h4>
                          <span className="text-xs text-neutral-400 block">Design Systems & Styling</span>
                        </div>
                      </div>

                      {/* Bootstrap */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                          <span className="w-4 h-4 text-purple-400 font-bold text-xs flex items-center justify-center font-mono">B</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Bootstrap</h4>
                          <span className="text-xs text-neutral-400 block">UI Component Framework</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: BACKEND & DATABASES */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                        {t.techCenter.stack.col2}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* NestJS */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.5 3c-1.5 0-3 1.5-3 3 0 1.2.8 2.3 2 2.7V12c0 2.2-1.8 4-4 4s-4-1.8-4-4V8.7c1.2-.4 2-1.5 2-2.7 0-1.5-1.5-3-3-3S6.5 4.5 6.5 6c0 1.2.8 2.3 2 2.7V12c0 3.3 2.7 6 6 6s6-2.7 6-6V8.7c1.2-.4 2-1.5 2-2.7 0-1.5-1.5-3-3-3z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">NestJS</h4>
                          <span className="text-xs text-neutral-400 block">Scalable Backend APIs</span>
                        </div>
                      </div>

                      {/* PostgreSQL */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                          <Database className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">PostgreSQL</h4>
                          <span className="text-xs text-neutral-400 block">Relational Database</span>
                        </div>
                      </div>

                      {/* Supabase */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.31 2.34a1 1 0 0 1 1.38 0l9 9a1 1 0 0 1-.71 1.71H13v8.5a1 1 0 0 1-1.71.71l-9-9a1 1 0 0 1 .71-1.71H11V2.34z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Supabase</h4>
                          <span className="text-xs text-neutral-400 block">Backend & Realtime DB</span>
                        </div>
                      </div>

                      {/* Postman */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                          <Terminal className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Postman</h4>
                          <span className="text-xs text-neutral-400 block">API Testing & Integration</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: MOBILE & VERSION CONTROL */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                      <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                        {t.techCenter.stack.col3}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* React Native */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">React Native</h4>
                          <span className="text-xs text-neutral-400 block">Cross-Platform Apps</span>
                        </div>
                      </div>

                      {/* Expo */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                          <Layers3 className="w-4 h-4 text-teal-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Expo</h4>
                          <span className="text-xs text-neutral-400 block">Mobile Toolchain & Deployment</span>
                        </div>
                      </div>

                      {/* Git, GitHub & Desktop */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                          <Github className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Git, GitHub & Desktop</h4>
                          <span className="text-xs text-neutral-400 block">Version Control & Workflow</span>
                        </div>
                      </div>

                      {/* Frameworks & Libraries */}
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                          <Boxes className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Frameworks & Libraries</h4>
                          <span className="text-xs text-neutral-400 block">Ecosystem Tooling</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Strategic Capabilities Pills */}
              <div className="pt-8 border-t border-neutral-800/80 space-y-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                  {t.techCenter.capabilities.title}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-emerald-500/40 transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item1Title}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium block">{t.techCenter.capabilities.item1Desc}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-emerald-500/40 transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item2Title}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium block">{t.techCenter.capabilities.item2Desc}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-emerald-500/40 transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item3Title}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium block">{t.techCenter.capabilities.item3Desc}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-emerald-500/40 transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                      <Boxes className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item4Title}</h4>
                      <span className="text-[11px] text-emerald-400 font-medium block">{t.techCenter.capabilities.item4Desc}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Certifications (From SMIT CV) */}
              <div className="pt-8 border-t border-neutral-800/80 space-y-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                  EDUCATION & CERTIFICATIONS
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-start gap-3.5 hover:border-amber-500/40 transition-colors">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider block">2023 - 2024</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">WMA - Web & App Development</h4>
                      <p className="text-xs text-neutral-400 font-medium mt-0.5">SMIT - Saylani Mass IT Training</p>
                    </div>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-start gap-3.5 hover:border-amber-500/40 transition-colors">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider block">2021</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">CCO - Certified Computer Operator</h4>
                      <p className="text-xs text-neutral-400 font-medium mt-0.5">SMIT - Saylani Mass IT Training</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Tech Journal / Blog Section */}
      <section id="blog" className="py-24 px-6 border-b border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.journal.tag}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t.journal.title}
              </h2>
            </div>
            <p className={`${themeStyles.muted} text-sm max-w-sm`}>
              {t.journal.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.journal.posts.map((post, idx) => (
              <div key={idx} className={`p-6 rounded-2xl ${themeStyles.card} border flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-amber-500">{post.readTime}</span>
                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">{t.journal.comingSoon}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-100 mb-2">
                    {post.title}
                  </h3>
                  <p className={`${themeStyles.muted} text-xs leading-relaxed mb-6`}>
                    {post.desc}
                  </p>
                </div>
                <span className="text-xs text-neutral-500 font-medium">{t.journal.inProgress}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.contact.tag}</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {t.contact.title}
                </h2>
                <p className={`${themeStyles.muted} text-sm leading-relaxed mt-3`}>
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.email}</span>
                    <a href="mailto:contact@mhhashir.me" className="text-sm font-bold hover:text-amber-400 transition-colors">
                      contact@mhhashir.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.phone}</span>
                    <a href="tel:+923142811181" className="text-sm font-bold hover:text-amber-400 transition-colors">
                      +92-314-2811181
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.location}</span>
                    <span className="text-sm font-bold">
                      {t.contact.locationVal}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={`p-8 rounded-2xl ${themeStyles.card} border`}>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                  <input type="hidden" name="project_name" value="Portfolio Website Inquiry" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                        {t.contact.yourName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                        {t.contact.yourEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                      {t.contact.yourMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    {sending ? t.contact.sending : t.contact.send}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Web App Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-xl w-full ${themeStyles.card} p-7 rounded-2xl border space-y-5 relative`}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-amber-500">{t.modals.webTitle}</h3>
            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>{t.modals.webDesc}</p>
              <ul className="space-y-2 text-xs">
                {t.modals.webPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2.5 text-xs rounded-xl cursor-pointer"
              onClick={() => {
                setIsModalOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.nav.getInTouch}
            </Button>
          </div>
        </div>
      )}

      {/* Mobile App Modal */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-xl w-full ${themeStyles.card} p-7 rounded-2xl border space-y-5 relative`}>
            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-amber-500">{t.modals.mobileTitle}</h3>
            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>{t.modals.mobileDesc}</p>
              <ul className="space-y-2 text-xs">
                {t.modals.mobilePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2.5 text-xs rounded-xl cursor-pointer"
              onClick={() => {
                setIsMobileModalOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.nav.getInTouch}
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800/60 text-center">
        <p className={`${themeStyles.muted} text-xs`}>
          &copy; {new Date().getFullYear()} <span className="text-neutral-200 font-medium">Muhammad Hashir</span>. {t.footer.rights}
        </p>
      </footer>

      {/* Back to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black shadow-lg transition-transform hover:scale-105 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}