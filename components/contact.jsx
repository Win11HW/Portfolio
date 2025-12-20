"use client";

import { Send, Mail, Phone, MapPin } from "lucide-react";
import React, { useRef, useState, useEffect, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// EmailJS env variables (Next.js)
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef(null);
  const [lang, setLang] = useState("en");

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
        intro:
          "هل لديك مشروع أو ترغب في التعاون؟ تواصل معي عبر النموذج أدناه أو من خلال معلومات الاتصال.",
        contactInfo: "معلومات الاتصال",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        namePlaceholder: "Ayoub Alayoubi",
        emailPlaceholder: "ayoub@example.com",
        subjectPlaceholder: "استفسار مشروع",
        messagePlaceholder: "مرحبًا، أود التحدث حول...",
        send: "إرسال الرسالة",
        city: "ليبيا، طرابلس",
      };
    }

    return {
      headingA: "Get In",
      headingB: "Touch",
      intro:
        "Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information.",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      yourName: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Ayoub Alayoubi",
      emailPlaceholder: "ayoub@example.com",
      subjectPlaceholder: "Project Inquiry",
      messagePlaceholder: "Hello, I'd like to talk about...",
      send: "Send Message",
      city: "Libya, Tripoli",
    };
  }, [lang]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Configuration error. Please try again later.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span suppressHydrationWarning>{t.headingA} </span>
            <span
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              suppressHydrationWarning
            >
              {t.headingB}
            </span>
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            suppressHydrationWarning
          >
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3
              className="text-xl font-semibold mb-6"
              suppressHydrationWarning
            >
              {t.contactInfo}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t.email}
                  </h4>
                  <a
                    href="mailto:aybqam@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    aybqam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t.phone}
                  </h4>
                  <a
                    href="tel:+218948606475"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (+218) 948606475
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">
                    {t.location}
                  </h4>
                  <p className="text-gray-400">{t.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.yourEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder={t.subjectPlaceholder}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium flex items-center justify-center gap-2"
              >
                {t.send}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
