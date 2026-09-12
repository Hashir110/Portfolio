"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Accessibility } from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

export default function AccessibilityPage() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const p = (t as any).accessibilityPage || {};

  useEffect(() => {
    document.title = `${p.title || "Accessibility Statement"} | Muhammad Hashir - Software Engineer`;
  }, [p.title]);

  return (
    <main className={`min-h-screen py-16 px-6 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Back Link & Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{p.backLink || "Back to Portfolio"}</span>
          </Link>

          <div className="flex items-center gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Accessibility className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {p.title}
              </h1>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                {p.lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className={`p-8 sm:p-10 rounded-3xl ${themeStyles.card} border space-y-8 leading-relaxed text-sm`}>
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec1Title}
            </h2>
            <p className={`${themeStyles.muted}`}>
              {p.sec1Desc}
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-neutral-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec2Title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{p.sec2Box1Title}</span>
                </div>
                <p className="text-xs text-neutral-400">{p.sec2Box1Desc}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{p.sec2Box2Title}</span>
                </div>
                <p className="text-xs text-neutral-400">{p.sec2Box2Desc}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{p.sec2Box3Title}</span>
                </div>
                <p className="text-xs text-neutral-400">{p.sec2Box3Desc}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{p.sec2Box4Title}</span>
                </div>
                <p className="text-xs text-neutral-400">{p.sec2Box4Desc}</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-neutral-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec3Title}
            </h2>
            <p className={`${themeStyles.muted}`}>
              {p.sec3Desc}
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 inline-block">
              contact@mhhashir.me
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}
