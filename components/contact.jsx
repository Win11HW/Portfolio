"use client";

import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import React, { useRef, useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef(null);
  const [lang, setLang] = useState("en");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setLang(document.documentElement.lang === "ar" ? "ar" : "en");
    }
  }, []);

  const t = useMemo(() => {
    if (lang === "ar") {
      return {
        headingA: "تواصل",
        headingB: "معي",
        intro: "هل لديك مشروع أو ترغب في التعاون؟ تواصل معي عبر النموذج أدناه أو من خلال معلومات الاتصال.",
        contactInfo: "معلومات الاتصال",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        namePlaceholder: "أدخل اسمك",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subjectPlaceholder: "موضوع الرسالة",
        messagePlaceholder: "اكتب رسالتك هنا...",
        send: "إرسال الرسالة",
        city: "ليبيا، طرابلس",
      };
    }
    return {
      headingA: "Get In",
      headingB: "Touch",
      intro: "Have a project in mind or want to collaborate? Feel free to reach out using the form below.",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      yourName: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      city: "Libya, Tripoli",
    };
  }, [lang]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current || isSubmitting) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Configuration error. Please try again.", { position: "top-center", theme: "dark", transition: Bounce });
      return;
    }

    setIsSubmitting(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!", { position: "top-center", theme: "dark", transition: Bounce });
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", { position: "top-center", theme: "dark", transition: Bounce });
        console.error("EmailJS error:", error);
      })
      .finally(() => setIsSubmitting(false));
  };

  const contactItems = [
    { icon: Mail, label: t.email, value: "aybqam@gmail.com", href: "mailto:aybqam@gmail.com" },
    { icon: Phone, label: t.phone, value: "(+218) 948606475", href: "tel:+218948606475" },
    { icon: MapPin, label: t.location, value: t.city },
  ];

  return (
    <section id="contact" className="section-padding bg-[#08080c] relative overflow-hidden">
      <ToastContainer />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />

      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">Contact</span>
          <h2 className="section-title mb-3 sm:mb-4">
            <span suppressHydrationWarning>{t.headingA} </span>
            <span className="gradient-text" suppressHydrationWarning>{t.headingB}</span>
          </h2>
          <p className="section-subtitle" suppressHydrationWarning>{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Stack on mobile, side column on desktop */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6" suppressHydrationWarning>{t.contactInfo}</h3>
            {contactItems.map((item) => (
              <div key={item.label} className="glass-card glass-card-hover p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group">
                <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                  <item.icon className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm sm:text-base text-gray-200 hover:text-purple-400 transition-colors flex items-center gap-1 group/link truncate">
                      <span className="truncate">{item.value}</span>
                      <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form ref={form} onSubmit={sendEmail} className="glass-card p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">{t.yourName}</label>
                  <input type="text" name="name" required placeholder={t.namePlaceholder} className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">{t.yourEmail}</label>
                  <input type="email" name="email" required placeholder={t.emailPlaceholder} className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">{t.subject}</label>
                <input type="text" name="subject" required placeholder={t.subjectPlaceholder} className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">{t.message}</label>
                <textarea name="message" rows={4} required placeholder={t.messagePlaceholder} className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : t.send}
                <Send size={14} className="sm:w-4 sm:h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
