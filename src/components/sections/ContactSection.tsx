"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useSite, useThemeStyles } from "@/context/site-context";

export function ContactSection() {
  const { isDarkMode, t } = useSite();
  const themeStyles = useThemeStyles(isDarkMode);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(null), 4500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) {
      setSending(false);
      showToast("error", (t.contact as any).toastFormError || "Form is not available. Please refresh and try again.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_5mv924a",
        "template_3ch93sv",
        formRef.current,
        "W7OwBrhPuS5C5TEET"
      );

      showToast("success", (t.contact as any).toastSuccess || "Thank you! Your message has been sent successfully.");
      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error?.text ?? error);
      showToast("error", (t.contact as any).toastError || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={`py-24 px-6 ${themeStyles.background} ${themeStyles.text}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-amber-500 font-semibold tracking-wider uppercase block mb-2">{t.contact.tag}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {t.contact.title}
              </h2>
              <p className={`${themeStyles.muted} text-sm leading-relaxed mt-3`}>
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.email}</span>
                  <a href="mailto:contact@mhhashir.me" className="text-sm font-bold hover:text-amber-400 transition-colors">
                    contact@mhhashir.me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.phone}</span>
                  <a href="tel:+923142811181" className="text-sm font-bold hover:text-amber-400 transition-colors">
                    +92-314-2811181
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-800/80 rounded-lg text-amber-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block uppercase">{t.contact.location}</span>
                  <span className="text-sm font-bold">
                    {t.contact.locationVal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`p-8 rounded-2xl ${themeStyles.card} border`}>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <input type="hidden" name="project_name" value="Portfolio Website Inquiry" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                      {t.contact.yourName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                      {t.contact.yourEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                    {t.contact.yourMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 focus:border-amber-500 focus:outline-none text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  {sending ? t.contact.sending : t.contact.send}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed top-24 right-6 sm:top-24 sm:right-8 rtl:right-auto rtl:left-6 rtl:sm:left-8 z-[100] animate-in fade-in slide-in-from-top-5 duration-300 max-w-sm sm:max-w-md">
          <div className={`p-4 rounded-2xl backdrop-blur-xl border shadow-2xl flex items-center gap-3.5 ${
            isDarkMode
              ? "bg-[#111718]/95 border-amber-500/40 text-white shadow-amber-500/10"
              : "bg-white/95 border-amber-500/40 text-neutral-900 shadow-xl"
          }`}>
            {toast.type === "success" ? (
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-amber-400" />
              </div>
            ) : (
              <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 flex-shrink-0">
                <X className="w-5 h-5 text-rose-500" />
              </div>
            )}
            <div className="flex-1 pr-2 rtl:pr-0 rtl:pl-2">
              <h4 className="text-[11px] font-bold font-mono tracking-wider uppercase text-amber-400">
                {toast.type === "success" ? "Success" : "Notice"}
              </h4>
              <p className="text-xs font-medium text-neutral-200 mt-0.5 leading-snug">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="p-1.5 rounded-lg hover:bg-neutral-800/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
