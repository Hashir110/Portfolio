"use client";

import { Briefcase } from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

export function ExperienceSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
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
  );
}
