"use client";

import { useState, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Server,
  Sparkles,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

type ServiceKey = "web" | "mobile" | "backend" | "ai";

export function ServicesSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const [activeModal, setActiveModal] = useState<ServiceKey | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const modalData: Record<ServiceKey, { title: string; desc: string; points: string[] }> = {
    web: {
      title: t.modals.webTitle,
      desc: t.modals.webDesc,
      points: t.modals.webPoints,
    },
    mobile: {
      title: t.modals.mobileTitle,
      desc: t.modals.mobileDesc,
      points: t.modals.mobilePoints,
    },
    backend: {
      title: t.modals.backendTitle,
      desc: t.modals.backendDesc,
      points: t.modals.backendPoints,
    },
    ai: {
      title: t.modals.aiTitle,
      desc: t.modals.aiDesc,
      points: t.modals.aiPoints,
    },
  };

  const currentModal = activeModal ? modalData[activeModal] : null;

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.services.tag}</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Applications */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
            onClick={() => setActiveModal("web")}
          >
            <div>
              <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.web.num}</span>
              <div className="my-5">
                <Monitor className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.web.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.web.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
              <span>{t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* Mobile Development */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
            onClick={() => setActiveModal("mobile")}
          >
            <div>
              <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.mobile.num}</span>
              <div className="my-5">
                <Smartphone className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.mobile.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.mobile.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
              <span>{t.services.mobile.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* Backend Systems */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
            onClick={() => setActiveModal("backend")}
          >
            <div>
              <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.backend.num}</span>
              <div className="my-5">
                <Server className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.backend.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.backend.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
              <span>{t.services.backend.action || t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* AI & Automation */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-neutral-700 transition-all cursor-pointer group flex flex-col justify-between`}
            onClick={() => setActiveModal("ai")}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.ai.num}</span>
                {t.services.ai.badge ? (
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {t.services.ai.badge}
                  </span>
                ) : null}
              </div>
              <div className="my-5">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.ai.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.ai.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500">
              <span>{t.services.ai.action || t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </div>
          </div>
        </div>
      </div>

      {activeModal && currentModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all"
          onClick={() => setActiveModal(null)}
        >
          <div
            className={`max-w-xl w-full ${themeStyles.card} p-7 rounded-2xl border space-y-5 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-amber-500">{currentModal.title}</h3>
            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>{currentModal.desc}</p>
              <ul className="space-y-2 text-xs">
                {currentModal.points.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-2.5 text-xs rounded-xl cursor-pointer"
              onClick={() => setActiveModal(null)}
            >
              {t.nav.getInTouch}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
