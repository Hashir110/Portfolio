"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, languages, translations } from "@/lib/translations";

type SiteContextValue = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  lang: Language;
  changeLanguage: (newLang: Language) => void;
  currentLangObj: (typeof languages)[number];
  t: (typeof translations)["en"];
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState<Language>("en");

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
  };

  const t = translations[lang] || translations.en;
  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <SiteContext.Provider
      value={{ isDarkMode, toggleTheme, lang, changeLanguage, currentLangObj, t }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export function useThemeStyles(isDarkMode: boolean) {
  return {
    background: isDarkMode ? "bg-[#0b0f12]" : "bg-[#f8f9fa]",
    text: isDarkMode ? "text-[#f3f4f6]" : "text-[#111827]",
    card: isDarkMode
      ? "bg-[#111718] border-neutral-800/80 hover:border-amber-500/30"
      : "bg-white border-gray-200 shadow-sm",
    testimonialBg: isDarkMode
      ? "bg-[#111718] border border-neutral-800/80 hover:border-amber-500/30"
      : "bg-white border border-gray-200 shadow-sm",
    techCardBg: isDarkMode
      ? "bg-[#111718] border border-neutral-800/80"
      : "bg-white border border-gray-200 shadow-sm",
    muted: isDarkMode ? "text-neutral-400" : "text-gray-600",
    border: isDarkMode ? "border-neutral-800/80" : "border-gray-200",
    header: isDarkMode ? "bg-[#0b0f12]/90 border-neutral-800/60" : "bg-white/90 border-gray-200",
  };
}
