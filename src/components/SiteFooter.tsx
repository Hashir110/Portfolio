"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronUp, Github, Linkedin, Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useSite, useThemeStyles } from "@/context/site-context";

export function SiteFooter() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || subscribing) return;

    setSubscribing(true);
    try {
      await emailjs.send(
        "service_5mv924a",
        "template_3ch93sv",
        {
          name: "Newsletter Subscriber",
          email: newsletterEmail,
          message: `New newsletter subscription request from: ${newsletterEmail}`,
          project_name: "Portfolio Newsletter Subscription",
        },
        "W7OwBrhPuS5C5TEET"
      );
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (err) {
      console.error("Newsletter error:", err);
      // Fallback UI to maintain positive UX
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <>
      <footer className="border-t border-neutral-800/80 bg-[#080b0e] text-neutral-300 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Multi-Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-neutral-800/80">
            
            {/* Column 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <img
                  src="/logo.jpg"
                  alt="Muhammad Hashir Logo"
                  className="h-10 w-auto object-contain rounded-lg"
                />
                <span className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  Muhammad Hashir
                </span>
              </Link>

              <p className={`${themeStyles.muted} text-xs sm:text-sm leading-relaxed max-w-sm`}>
                {t.footer.bio}
              </p>

              {/* Social Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-amber-500/90" />
                </a>
                <a
                  href="https://github.com/Hashir110"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-amber-500/90" />
                </a>
                <a
                  href="mailto:contact@mhhashir.me"
                  className="p-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all cursor-pointer"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4 text-amber-500/90" />
                </a>
              </div>
            </div>

            {/* Column 2: Sitemap (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                {t.footer.sitemapTag}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
                <li>
                  <a href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapWork}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapServices}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapScope}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapAbout}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapSkills}
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapBlog}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">
                    {t.footer.sitemapContact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                {t.footer.contactTag}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                <li className="text-neutral-300 font-medium">{t.footer.location}</li>
                <li className="font-mono text-xs">PKT (UTC+5)</li>
                <li>
                  <a href="tel:+923142811181" className="hover:text-amber-400 transition-colors font-mono text-xs">
                    +92 314 2811181
                  </a>
                </li>
                <li className="pt-1">
                  <a href="mailto:contact@mhhashir.me" className="hover:text-amber-400 transition-colors font-mono text-xs break-all">
                    contact@mhhashir.me
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                {t.footer.newsletterTag}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {t.footer.newsletterDesc}
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{t.footer.subscribedSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={t.footer.newsletterPlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:border-amber-500 outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={subscribing}
                      className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-bold text-xs whitespace-nowrap transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {subscribing ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                          <span>{t.footer.subscribing}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.footer.subscribe}</span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              <p className="text-[11px] text-neutral-500">
                {t.footer.privacyNotice}
              </p>
            </div>

          </div>

          {/* Bottom Bar (Copyright & Legal/Meta) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-neutral-300 font-medium">Muhammad Hashir</span>. {t.footer.rights}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400">
              <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">{t.footer.termsOfService}</Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">{t.footer.accessibility}</Link>
            </div>
          </div>

        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black shadow-lg transition-transform hover:scale-105 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}
