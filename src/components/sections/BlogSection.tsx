"use client";

import { useSite, useThemeStyles } from "@/context/site-context";

export function BlogSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
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
  );
}
