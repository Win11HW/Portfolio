"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUp, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en');
    }
  }, []);

  const t = useMemo(() => {
    if (lang === 'ar') {
      return {
        tagline: 'مطور واجهات أمامية شغوف يصنع تجارب ويب جميلة وعملية باستخدام تقنيات حديثة.',
        quickLinks: 'روابط سريعة',
        home: 'الرئيسية',
        about: 'نبذة',
        skills: 'المهارات',
        projects: 'المشاريع',
        contact: 'تواصل',
        contactInfo: 'معلومات الاتصال',
        city: 'ليبيا، طرابلس',
        rights: 'جميع الحقوق محفوظة.',
      }
    }
    return {
      tagline: 'A passionate frontend developer creating beautiful and functional web experiences with modern technologies.',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      contactInfo: 'Contact Info',
      city: 'Libya, Tripoli',
      rights: 'All rights reserved.',
    }
  }, [lang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#08080c] pt-16 pb-8 border-t border-white/[0.05] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              <span className="gradient-text">Dev</span>
              <span className="text-white">Portfolio</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed" suppressHydrationWarning>{t.tagline}</p>
            <div className="flex gap-3">
              <a href="https://github.com/Win11HW" target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card hover:bg-white/[0.08] transition-colors">
                <Github size={18} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4" suppressHydrationWarning>{t.quickLinks}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    <span suppressHydrationWarning>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4" suppressHydrationWarning>{t.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-purple-400" />
                <a href="mailto:aybqam@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">aybqam@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-purple-400" />
                <a href="tel:+218948606475" className="text-gray-400 hover:text-white transition-colors text-sm">(+218) 948606475</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-purple-400" />
                <span className="text-gray-400 text-sm" suppressHydrationWarning>{t.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Ayoub Alayoubi. {t.rights}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="p-3 glass-card hover:bg-white/[0.08] transition-all group"
          >
            <ArrowUp size={18} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
