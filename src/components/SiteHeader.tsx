"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  CheckCircle,
  Download,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { languages } from "@/lib/translations";
import { useSite, useThemeStyles } from "@/context/site-context";

export function SiteHeader() {
  const { isDarkMode, toggleTheme, lang, changeLanguage, currentLangObj, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navItems = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.work, href: "/projects" },
    { name: t.nav.experience, href: "/experience" },
    { name: t.nav.testimonials, href: "/testimonials" },
    { name: t.nav.skills, href: "/skills" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${themeStyles.header} backdrop-blur-md transition-all`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 gap-4">
        <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="Muhammad Hashir Logo"
            className="h-9 sm:h-10 w-auto object-contain"
          />
          <span className="font-bold whitespace-nowrap">Muhammad Hashir</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 rtl:space-x-reverse flex-shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs xl:text-sm font-medium whitespace-nowrap transition-colors hover:text-amber-500 ${themeStyles.muted}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 flex-shrink-0">
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
                    onClick={() => {
                      changeLanguage(l.code);
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-left rtl:text-right text-xs font-medium flex items-center justify-between hover:bg-neutral-800/80 transition-colors cursor-pointer ${lang === l.code ? "text-amber-400 font-bold bg-amber-500/10" : "text-neutral-300"
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

          <a
            href="/Muhammad Hashir'Resume.pdf"
            download="Muhammad Hashir'Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-700/80 hover:border-amber-500/60 text-xs font-semibold whitespace-nowrap transition-all hover:bg-amber-500/10"
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.nav.resume}</span>
          </a>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold whitespace-nowrap transition-all shadow-sm"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-800/60 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-800 text-neutral-300 cursor-pointer"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`lg:hidden ${themeStyles.background} border-b ${themeStyles.border} py-6 px-6`}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
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
  );
}
