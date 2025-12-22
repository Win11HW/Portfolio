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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">Contact</span>
          <h2 className="section-title mb-4">
            <span suppressHydrationWarning>{t.headingA} </span>
            <span className="gradient-text" suppressHydrationWarning>{t.headingB}</span>
          </h2>
          <p className="section-subtitle" suppressHydrationWarning>{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold mb-6" suppressHydrationWarning>{t.contactInfo}</h3>
            {contactItems.map((item) => (
              <div key={item.label} className="glass-card glass-card-hover p-5 flex items-center gap-4 group">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <item.icon className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-200 hover:text-purple-400 transition-colors flex items-center gap-1 group/link">
                      {item.value}
                      <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-gray-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form ref={form} onSubmit={sendEmail} className="glass-card p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.yourName}</label>
                  <input type="text" name="name" required placeholder={t.namePlaceholder} className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.yourEmail}</label>
                  <input type="email" name="email" required placeholder={t.emailPlaceholder} className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t.subject}</label>
                <input type="text" name="subject" required placeholder={t.subjectPlaceholder} className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t.message}</label>
                <textarea name="message" rows={5} required placeholder={t.messagePlaceholder} className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none" />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : t.send}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
