"use client";

import {
  ShieldCheck,
  Rocket,
  Clock,
  Layers,
  Server,
  Smartphone,
  Database,
  Terminal,
  Layers3,
  Github,
  Boxes,
  Workflow,
  CheckCircle,
  Lock,
  Briefcase,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useSite, useThemeStyles } from "@/context/site-context";

export function SkillsSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono text-amber-500 font-semibold tracking-widest uppercase block">
            {t.techCenter.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.techCenter.titlePrefix} <span className="text-amber-400">{t.techCenter.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className={`lg:col-span-4 p-8 sm:p-9 rounded-[2rem] ${themeStyles.techCardBg} flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden`}>
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-400 font-semibold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.techCenter.approach.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-[1.25]">
                "{t.techCenter.approach.quotePrefix}<span className="text-amber-400">{t.techCenter.approach.quoteHighlight}</span>{t.techCenter.approach.quoteSuffix}"
              </h3>

              <p className={`${themeStyles.muted} text-sm leading-relaxed`}>
                {t.techCenter.approach.desc}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-neutral-800/80 relative z-10">
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide"><AnimatedCounter value={t.techCenter.approach.stat1Count} /></h4>
                  <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat1Label}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide"><AnimatedCounter value={t.techCenter.approach.stat2Count} /></h4>
                  <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat2Label}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide"><AnimatedCounter value={t.techCenter.approach.stat3Count} /></h4>
                  <span className="text-[10px] text-neutral-400 block uppercase font-mono tracking-wider">{t.techCenter.approach.stat3Label}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-8 p-8 lg:p-10 rounded-[2rem] ${themeStyles.techCardBg} flex flex-col justify-between space-y-10 shadow-xl`}>
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-neutral-800/80 mb-8">
                <div className="px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs tracking-wider">
                  &gt;_
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{t.techCenter.stack.title}</h3>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block">{t.techCenter.stack.subtitle}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                      {t.techCenter.stack.col1}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-400" viewBox="0 0 180 180" fill="currentColor">
                          <circle cx="90" cy="90" r="90" fill="currentColor" />
                          <path d="M149.508 157.52L69.141 54H54V125.97H66.8141V69.948L139.73 163.504C143.149 161.737 146.417 159.733 149.508 157.52Z" fill="#000" />
                          <rect x="115" y="54" width="12.5" height="72" fill="#000" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">React.js & Next.js</h4>
                        <span className="text-xs text-neutral-400 block">Web Applications</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#3178c6]/15 border border-[#3178c6]/30 flex items-center justify-center flex-shrink-0">
                        <span className="w-4 h-4 rounded-sm bg-[#3178c6] text-white text-[9px] font-black flex items-center justify-center font-mono leading-none">TS</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">JavaScript & TypeScript</h4>
                        <span className="text-xs text-neutral-400 block">Core Logic & Type Safety</span>
                      </div>
                    </div>

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

                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                    <Server className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                      {t.techCenter.stack.col2}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.5 3c-1.5 0-3 1.5-3 3 0 1.2.8 2.3 2 2.7V12c0 2.2-1.8 4-4 4s-4-1.8-4-4V8.7c1.2-.4 2-1.5 2-2.7 0-1.5-1.5-3-3-3S6.5 4.5 6.5 6c0 1.2.8 2.3 2 2.7V12c0 3.3 2.7 6 6 6s6-2.7 6-6V8.7c1.2-.4 2-1.5 2-2.7 0-1.5-1.5-3-3-3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">NestJS</h4>
                        <span className="text-xs text-neutral-400 block">Scalable Backend APIs</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                        <Database className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">PostgreSQL</h4>
                        <span className="text-xs text-neutral-400 block">Relational Database</span>
                      </div>
                    </div>

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

                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-800/80">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                      {t.techCenter.stack.col3}
                    </span>
                  </div>

                  <div className="space-y-4">
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

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                        <Layers3 className="w-4 h-4 text-neutral-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Expo</h4>
                        <span className="text-xs text-neutral-400 block">Mobile Toolchain & Deployment</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                        <Github className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Git, GitHub & Desktop</h4>
                        <span className="text-xs text-neutral-400 block">Version Control & Workflow</span>
                      </div>
                    </div>

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

            <div className="pt-8 border-t border-neutral-800/80 space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                {t.techCenter.capabilities.title}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-amber-500/40 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item1Title}</h4>
                    <span className="text-[11px] text-amber-400 font-medium block">{t.techCenter.capabilities.item1Desc}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-amber-500/40 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item2Title}</h4>
                    <span className="text-[11px] text-amber-400 font-medium block">{t.techCenter.capabilities.item2Desc}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-amber-500/40 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item3Title}</h4>
                    <span className="text-[11px] text-amber-400 font-medium block">{t.techCenter.capabilities.item3Desc}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 flex items-center gap-3 text-left rtl:text-right hover:border-amber-500/40 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.techCenter.capabilities.item4Title}</h4>
                    <span className="text-[11px] text-amber-400 font-medium block">{t.techCenter.capabilities.item4Desc}</span>
                  </div>
                </div>
              </div>
            </div>

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
  );
}
