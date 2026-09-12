"use client";

import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useSite, useThemeStyles } from "@/context/site-context";

export function HeroSection() {
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
    <section className={`py-20 lg:py-28 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="select-none mb-12 text-center overflow-hidden">
          <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight ${isDarkMode ? "stroke-text-dark" : "stroke-text-light"}`}>
            Muhammad Hashir
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
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
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs transition-all shadow-sm"
              >
                {t.hero.viewWork}
              </Link>

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
              <AnimatedCounter className="text-4xl font-extrabold text-amber-500 font-mono" value={t.hero.stats.projects} />
              <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.projectsLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.projectsSub}</p>
            </div>

            <div>
              <AnimatedCounter className="text-4xl font-extrabold text-amber-500 font-mono" value={t.hero.stats.experience} />
              <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.experienceLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.experienceSub}</p>
            </div>

            <div>
              <AnimatedCounter className="text-4xl font-extrabold text-amber-500 font-mono" value={t.hero.stats.quality} />
              <h4 className="text-sm font-semibold text-neutral-200 mt-1">{t.hero.stats.qualityLabel}</h4>
              <p className={`${themeStyles.muted} text-xs mt-0.5`}>{t.hero.stats.qualitySub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
