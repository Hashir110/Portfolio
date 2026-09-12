"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Monitor,
  Smartphone,
  Server,
  Sparkles,
  ArrowRight,
  CheckCircle,
  X,
  Zap,
} from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

type ServiceKey = "web" | "mobile" | "backend" | "ai";

export function ServicesSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const [activeModal, setActiveModal] = useState<ServiceKey | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  const modalData: Record<ServiceKey, { title: string; desc: string; points: string[] }> = {
    web: {
      title: t.modals?.webTitle || "Web Application Development",
      desc: t.modals?.webDesc || "Full-stack web application development tailored to scalable business requirements.",
      points: t.modals?.webPoints || [],
    },
    mobile: {
      title: t.modals?.mobileTitle || "Mobile Development",
      desc: t.modals?.mobileDesc || "Cross-platform mobile applications for iOS and Android engineered with React Native & Expo.",
      points: t.modals?.mobilePoints || [],
    },
    backend: {
      title: t.modals?.backendTitle || "Backend Systems",
      desc: t.modals?.backendDesc || "Robust, scalable backend architecture, microservices, and database engineering using NestJS & PostgreSQL.",
      points: t.modals?.backendPoints || [],
    },
    ai: {
      title: t.modals?.aiTitle || "AI & Automation",
      desc: t.modals?.aiDesc || "Smart AI integrations, LLM workflows, and automated pipelines to optimize business operations.",
      points: t.modals?.aiPoints || [],
    },
  };

  const currentModal = activeModal ? modalData[activeModal] : null;

  return (
    <section className={`py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b ${themeStyles.border} ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-amber-500 font-bold tracking-widest uppercase block mb-2">// {t.services.tag}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Applications */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-amber-500/40 transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl`}
            onClick={() => setActiveModal("web")}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.web.num}</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase tracking-wider">
                  Full Stack
                </span>
              </div>
              <div className="my-5 p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.web.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.web.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 pt-2 border-t border-neutral-800/40">
              <span>{t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* Mobile Development */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-amber-500/40 transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl`}
            onClick={() => setActiveModal("mobile")}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.mobile.num}</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase tracking-wider">
                  iOS & Android
                </span>
              </div>
              <div className="my-5 p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.mobile.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.mobile.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 pt-2 border-t border-neutral-800/40">
              <span>{t.services.mobile.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* Backend Systems */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-amber-500/40 transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl`}
            onClick={() => setActiveModal("backend")}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.backend.num}</span>
                <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">
                  APIs & Data
                </span>
              </div>
              <div className="my-5 p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.backend.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.backend.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 pt-2 border-t border-neutral-800/40">
              <span>{t.services.backend.action || t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform rtl:rotate-180" />
            </div>
          </div>

          {/* AI & Automation */}
          <div
            className={`p-7 rounded-2xl ${themeStyles.card} border hover:border-amber-500/40 transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl`}
            onClick={() => setActiveModal("ai")}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-amber-500 transition-colors">{t.services.ai.num}</span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold uppercase tracking-wider">
                  Production Ready
                </span>
              </div>
              <div className="my-5 p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors">
                {t.services.ai.title}
              </h3>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mb-6`}>
                {t.services.ai.desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 pt-2 border-t border-neutral-800/40">
              <span>{t.services.ai.action || t.services.web.action}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform rtl:rotate-180" />
            </div>
          </div>
        </div>
      </div>

      {/* Render Modal into document.body using Portal */}
      {mounted && activeModal && currentModal && createPortal(
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99999] flex items-center justify-center p-4 transition-all"
          onClick={() => setActiveModal(null)}
        >
          <div
            className={`max-w-xl w-full ${
              isDarkMode ? "bg-neutral-900 border-neutral-800 text-neutral-100" : "bg-white border-neutral-200 text-neutral-900"
            } p-8 rounded-2xl border space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-xl hover:bg-neutral-800/80 text-neutral-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest block">SERVICE BREAKDOWN</span>
                <h3 className="text-xl font-bold text-amber-500">{currentModal.title}</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className={isDarkMode ? "text-neutral-300" : "text-neutral-700"}>{currentModal.desc}</p>
              
              <div className={`p-4 rounded-xl border space-y-3 ${
                isDarkMode ? "bg-neutral-950/60 border-neutral-800" : "bg-neutral-50 border-neutral-200"
              }`}>
                <span className="text-xs font-mono font-bold tracking-wider text-amber-500 uppercase block">Key Deliverables</span>
                <ul className="space-y-2 text-xs font-medium">
                  {(currentModal.points || []).map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className={isDarkMode ? "text-neutral-200" : "text-neutral-800"}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="/contact"
                className="w-full sm:flex-1 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-xs rounded-xl cursor-pointer transition-all shadow-md"
                onClick={() => setActiveModal(null)}
              >
                {t.nav?.getInTouch || "Start a Project"}
              </a>
              <button
                onClick={() => setActiveModal(null)}
                className={`w-full sm:w-auto px-5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  isDarkMode ? "border-neutral-700 hover:border-neutral-500 text-neutral-300" : "border-neutral-300 hover:border-neutral-400 text-neutral-700"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

