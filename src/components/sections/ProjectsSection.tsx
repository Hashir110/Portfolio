"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Smartphone, X } from "lucide-react";
import { useSite, useThemeStyles } from "@/context/site-context";

interface ProjectItem {
  id: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  isPrivate?: boolean;
  isComingSoon?: boolean;
  isPlayStore?: boolean;
}

const baseProjects: ProjectItem[] = [
  {
    id: "rozi",
    category: "Full Stack",
    image: "/roziAndFrame.png",
    tags: ["React", "Nest.js", "PostgreSQL", "Payment Gateways"],
    liveUrl: "https://roziapp.com/",
    isPrivate: true,
  },
  {
    id: "whiterock",
    category: "Mobile Apps",
    image: "/whiterockcompanionend.jpg",
    tags: ["React Native", "Expo", "Node.js", "Mobile UX"],
    isPlayStore: true,
    isPrivate: true,
  },
  {
    id: "listr",
    category: "Web Apps",
    image: "/listr.live.png",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Task Management"],
    liveUrl: "https://listr.live/en",
    isPrivate: true,
  },
  {
    id: "jayakhub",
    category: "Full Stack",
    image: "/jayakHub.png",
    tags: ["React.js", "Tailwind CSS", "Authentication", "Corporate Portal"],
    liveUrl: "https://corporate.jayakhub.com/login",
    isPrivate: true,
  },
  {
    id: "hvrai",
    category: "Web Apps",
    image: "/Screenshot 2025-08-26 114443.png",
    tags: ["React.js", "Tailwind CSS", "Blog Platform"],
    liveUrl: "https://www.hvrai.app/",
    isPrivate: true,
  },
  {
    id: "bcappa",
    category: "Full Stack",
    image: "/Screenshot 2025-08-26 115602.png",
    tags: ["React.js", "Nest.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://admin.bcappa.com/dashboard/",
    isPrivate: true,
  },
];

export function ProjectsSection() {
  const { isDarkMode, t, lang } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  const projects = baseProjects.map((bp) => {
    const translation = t.portfolio.projects.find((p) => p.id === bp.id) || {
      title: bp.id,
      description: "",
      category: bp.category,
    };
    return {
      ...bp,
      title: translation.title,
      description: translation.description,
      localizedCategory: translation.category || bp.category,
    };
  });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={`py-24 px-6 border-b border-neutral-800/50 relative ${themeStyles.background} ${themeStyles.text}`}>
      {toast && (
        <div className="fixed top-24 right-6 sm:top-24 sm:right-8 z-[100] max-w-md bg-neutral-900 border border-amber-500/50 text-neutral-100 p-4 rounded-xl shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 mt-0.5 shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs leading-relaxed">
            <p className="font-bold text-amber-400 text-sm mb-1">{toast.title}</p>
            <p className="text-neutral-300">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast(null)}
            className="text-neutral-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.portfolio.tag}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t.portfolio.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            {["All", "Full Stack", "Web Apps", "Mobile Apps"].map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === cat
                  ? "bg-amber-500 text-black font-bold shadow-sm"
                  : "text-neutral-400 hover:text-white"
                  }`}
              >
                {t.portfolio.categories[idx] || cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group ${themeStyles.card} overflow-hidden rounded-2xl border hover:border-neutral-700 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="relative overflow-hidden aspect-video bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-lg font-bold group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`${themeStyles.muted} text-xs leading-relaxed mt-2`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] border-neutral-800 text-neutral-300 bg-neutral-900/60"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                {project.codeUrl ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neutral-800 hover:border-neutral-600 text-xs gap-1.5 rounded-lg"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    <Github className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t.portfolio.source}</span>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                    className="opacity-40 text-xs gap-1.5 rounded-lg border-neutral-800"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t.portfolio.private}</span>
                  </Button>
                )}

                {project.isPlayStore ? (
                  <Button
                    size="sm"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs gap-1.5 rounded-lg ml-auto rtl:ml-0 rtl:mr-auto"
                    onClick={() => {
                      const messages: Record<string, { title: string; message: string }> = {
                        ur: {
                          title: "گوگل پلے اسٹور پر دستیاب ہے",
                          message: 'یہ ایپ گوگل پلے اسٹور پر لائیو ہے۔ براہ کرم پلے اسٹور پر "Whiterock Companion App" سرچ کر کے ڈاؤن لوڈ کریں۔',
                        },
                        ar: {
                          title: "متوفر على متجر Google Play",
                          message: 'هذا التطبيق متوفر الآن! يرجى البحث عن "Whiterock Companion App" مباشرة على متجر بلاي.',
                        },
                        es: {
                          title: "Disponible en Google Play Store",
                          message: '¡Esta aplicación ya está disponible! Puedes buscar "Whiterock Companion App" directamente en Play Store.',
                        },
                        de: {
                          title: "Im Google Play Store verfügbar",
                          message: 'Diese App ist live im Google Play Store! Suchen Sie einfach nach "Whiterock Companion App" im Play Store.',
                        },
                        en: {
                          title: "Available on Google Play Store",
                          message: 'This app is live! Search for "Whiterock Companion App" directly on Google Play Store to install.',
                        },
                      };
                      setToast(messages[lang] || messages.en);
                      setTimeout(() => setToast(null), 6000);
                    }}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Play Store</span>
                  </Button>
                ) : project.liveUrl ? (
                  <Button
                    size="sm"
                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs gap-1.5 rounded-lg ml-auto rtl:ml-0 rtl:mr-auto"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <span>{t.portfolio.liveDemo}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="bg-neutral-800 text-neutral-500 text-xs gap-1.5 rounded-lg ml-auto rtl:ml-0 rtl:mr-auto"
                  >
                    <span>{t.portfolio.comingSoon}</span>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
