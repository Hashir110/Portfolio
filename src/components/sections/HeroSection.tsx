"use client";

import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  Github,
  Linkedin,
  Mail,
  Rocket,
  Briefcase,
  Video,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useSite, useThemeStyles } from "@/context/site-context";

interface HeroSectionProps {
  showVideoIntro?: boolean;
}

export function HeroSection({ showVideoIntro = false }: HeroSectionProps) {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);

  const [text] = useTypewriter({
    words: t.hero.roles,
    loop: 0,
    typeSpeed: 60,
    deleteSpeed: 35,
    delaySpeed: 2500,
  });

  return (
    <section className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b ${themeStyles.border} ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Outline Name Header */}
        <div className="select-none text-center overflow-hidden">
          <h1 className={`text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight ${isDarkMode ? "stroke-text-dark" : "stroke-text-light"}`}>
            Muhammad Hashir
          </h1>
        </div>

        {/* HERO MAIN ROW: Text Quote + Photo + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Eyebrow + Title + Quote Block + CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Open to new ventures & full-time roles</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Engineer Who{" "}
              <span className="text-amber-500 underline decoration-amber-500/30 decoration-wavy decoration-2">
                Speaks Business
              </span>
            </h2>

            {/* Left Accent Quote Box (Inspired by mhsaeed.com/about) */}
            <div className={`border-l-4 border-amber-500/80 pl-5 py-2 space-y-2 text-base leading-relaxed italic ${themeStyles.muted}`}>
              <p>“Clean code only matters when it solves the right problem.”</p>
              <p>
                I help founders turn ideas into scalable products, businesses optimize daily operations, and engineering teams ship dependable software.
              </p>
              <p className={`font-bold not-italic ${isDarkMode ? "text-neutral-100" : "text-neutral-900"}`}>
                I bring direct communication, thoughtful technical challenge, and engineering shaped around your commercial goals.
              </p>
            </div>

            {/* Specialization Typewriter */}
            <div className="pt-1 flex items-center gap-2 text-sm font-mono text-amber-500 font-semibold">
              <span>{t.hero.specialization}:</span>
              <span>
                {text}
                <Cursor cursorStyle="|" cursorColor="#f59e0b" />
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Start a Conversation</span>
              </Link>

              <Link
                href="/projects"
                className={`px-6 py-3 rounded-xl border font-bold text-sm transition-all flex items-center gap-2 ${
                  isDarkMode
                    ? "border-neutral-700/80 hover:border-neutral-500 text-neutral-200 hover:bg-neutral-800/50"
                    : "border-neutral-300 hover:border-neutral-400 text-neutral-800 hover:bg-neutral-100"
                }`}
              >
                <Briefcase className="w-4 h-4 text-amber-500" />
                <span>View My Work</span>
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Hashir110"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border transition-colors ${
                    isDarkMode
                      ? "border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white"
                      : "border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-black"
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border transition-colors ${
                    isDarkMode
                      ? "border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white"
                      : "border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-black"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@mhhashir.me"
                  className={`p-3 rounded-xl border transition-colors ${
                    isDarkMode
                      ? "border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white"
                      : "border-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-black"
                  }`}
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Photo Frame with Ambient Glow & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-[320px] sm:max-w-[350px]">
              {/* Background ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/40 via-amber-600/20 to-amber-500/10 rounded-[32px] blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500" />

              {/* Main Card Frame */}
              <div
                className={`relative p-2.5 rounded-[28px] border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-neutral-900/90 border-neutral-800/90 shadow-2xl shadow-amber-500/5"
                    : "bg-white border-neutral-200 shadow-xl"
                }`}
              >
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] w-full">
                  <img
                    src="/Me.PNG"
                    alt="Muhammad Hashir"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 flex items-center gap-3 text-white shadow-xl">
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-white text-sm">2+ Years Exp.</span>
                      <span className="text-neutral-300 text-[11px]">Building software since 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Quick Introduction (Video Container) - Only shown when showVideoIntro is true */}
        {showVideoIntro && (
          <div className="pt-8 border-t border-neutral-800/40 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-amber-500 uppercase">
              <span>// MEET MUHAMMAD HASHIR</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              A <span className="text-amber-500">Quick Introduction</span>
            </h3>
            <p className={`${themeStyles.muted} max-w-xl mx-auto text-sm sm:text-base`}>
              A brief introduction to who I am, my software engineering background, and how I work with client teams.
            </p>

            <div className={`relative aspect-video max-w-3xl mx-auto overflow-hidden rounded-2xl border shadow-2xl group ${
              isDarkMode ? "bg-neutral-900/90 border-neutral-800" : "bg-neutral-100 border-neutral-200"
            }`}>
              <img
                src="/Me.PNG"
                alt="Muhammad Hashir Video Thumbnail"
                className="w-full h-full object-cover object-top opacity-40 blur-xs transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110">
                  <Video className="w-7 h-7 text-amber-400" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                  Video Intro Coming Soon
                </span>
              </div>
            </div>
          </div>
        )}



        {/* SECTION 4: Key Stats Bar */}
        <div className={`p-8 rounded-2xl border ${
          isDarkMode ? "bg-neutral-900/80 border-neutral-800" : "bg-neutral-50 border-neutral-200"
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/50">
            <div className="pt-4 sm:pt-0 sm:px-4">
              <AnimatedCounter className="text-4xl sm:text-5xl font-black text-amber-500 font-mono" value={t.hero.stats.projects} />
              <h4 className="text-sm font-bold text-neutral-200 mt-2">{t.hero.stats.projectsLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-1`}>{t.hero.stats.projectsSub}</p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-4">
              <AnimatedCounter className="text-4xl sm:text-5xl font-black text-amber-500 font-mono" value={t.hero.stats.experience} />
              <h4 className="text-sm font-bold text-neutral-200 mt-2">{t.hero.stats.experienceLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-1`}>{t.hero.stats.experienceSub}</p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-4">
              <AnimatedCounter className="text-4xl sm:text-5xl font-black text-amber-500 font-mono" value={t.hero.stats.quality} />
              <h4 className="text-sm font-bold text-neutral-200 mt-2">{t.hero.stats.qualityLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-1`}>{t.hero.stats.qualitySub}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
