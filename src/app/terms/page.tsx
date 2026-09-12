"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

export default function TermsPage() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const p = (t as any).termsPage || {};

  useEffect(() => {
    document.title = `${p.title || "Terms of Service"} | Muhammad Hashir - Software Engineer`;
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
              <Scale className="w-7 h-7 text-amber-400" />
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
            <p className={`${themeStyles.muted}`}>
              {p.sec2Desc}
            </p>
            <ul className="space-y-2 text-neutral-300 pl-4 rtl:pl-0 rtl:pr-4 list-disc marker:text-amber-500">
              <li><strong className="text-white">{p.sec2Item1Title}</strong>{p.sec2Item1Desc}</li>
              <li><strong className="text-white">{p.sec2Item2Title}</strong>{p.sec2Item2Desc}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-neutral-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec3Title}
            </h2>
            <p className={`${themeStyles.muted}`}>
              {p.sec3Desc}
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-neutral-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec4Title}
            </h2>
            <p className={`${themeStyles.muted}`}>
              {p.sec4Desc}
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-neutral-800/80">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {p.sec5Title}
            </h2>
            <p className={`${themeStyles.muted}`}>
              {p.sec5Desc}
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
