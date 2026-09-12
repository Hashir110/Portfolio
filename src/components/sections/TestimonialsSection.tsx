"use client";

import { Linkedin, ExternalLink, Quote } from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

export function TestimonialsSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.testimonials.titlePrefix} <span className="text-amber-400">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className={`${themeStyles.muted} text-sm sm:text-base mt-3 max-w-xl mx-auto`}>
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          <div className={`p-8 lg:p-10 rounded-3xl ${themeStyles.testimonialBg} relative overflow-hidden transition-all duration-300`}>
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-amber-500/5 pointer-events-none rtl:right-auto rtl:-left-4" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4 flex flex-col items-start space-y-4 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-neutral-800/80 pb-6 lg:pb-0 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
                <div className="flex items-center gap-4">
                  <img
                    src="/bhai.jpg"
                    alt={t.testimonials.items[0].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/40 ring-2 ring-amber-500/20 shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">{t.testimonials.items[0].name}</h3>
                    <span className="text-xs font-medium text-amber-400 block">{t.testimonials.items[0].role}</span>
                    <p className="text-xs text-neutral-400">{t.testimonials.items[0].company}</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-medium text-amber-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.testimonials.verified}</span>
                  <ExternalLink className="w-3 h-3 text-amber-400/80" />
                </a>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg font-serif italic text-neutral-200 leading-relaxed">
                  {t.testimonials.items[0].quote}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-8 rounded-3xl ${themeStyles.testimonialBg} relative overflow-hidden flex flex-col justify-between space-y-6 transition-all duration-300`}>
              <Quote className="absolute -top-3 -right-3 w-24 h-24 text-amber-500/5 pointer-events-none rtl:right-auto rtl:-left-3" />
              <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-relaxed relative z-10">
                {t.testimonials.items[1].quote}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/saeed.png"
                    alt={t.testimonials.items[1].name}
                    className="w-11 h-11 rounded-full object-cover border border-amber-500/40 ring-1 ring-amber-500/20 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.testimonials.items[1].name}</h4>
                    <span className="text-[11px] text-amber-400 font-medium">{t.testimonials.items[1].role}</span>
                    <p className="text-[11px] text-neutral-400">{t.testimonials.items[1].company}</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${themeStyles.testimonialBg} relative overflow-hidden flex flex-col justify-between space-y-6 transition-all duration-300`}>
              <Quote className="absolute -top-3 -right-3 w-24 h-24 text-amber-500/5 pointer-events-none rtl:right-auto rtl:-left-3" />
              <p className="text-sm sm:text-base font-serif italic text-neutral-200 leading-relaxed relative z-10">
                {t.testimonials.items[2].quote}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/eeiyan.png"
                    alt={t.testimonials.items[2].name}
                    className="w-11 h-11 rounded-full object-cover border border-amber-500/40 ring-1 ring-amber-500/20 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.testimonials.items[2].name}</h4>
                    <span className="text-[11px] text-amber-400 font-medium">{t.testimonials.items[2].role}</span>
                    <p className="text-[11px] text-neutral-400">{t.testimonials.items[2].company}</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-amber-500/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
