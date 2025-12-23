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
    <footer className="bg-[#08080c] pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-white/[0.05] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 inline-block">
              <span className="gradient-text">Dev</span>
              <span className="text-white">Portfolio</span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed" suppressHydrationWarning>{t.tagline}</p>
            <div className="flex gap-2 sm:gap-3">
              <a href="https://github.com/Win11HW" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 glass-card hover:bg-white/[0.08] transition-colors">
                <Github size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3 sm:mb-4" suppressHydrationWarning>{t.quickLinks}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    <span suppressHydrationWarning>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3 sm:mb-4" suppressHydrationWarning>{t.contactInfo}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-purple-400 flex-shrink-0" />
                <a href="mailto:aybqam@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm truncate">aybqam@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-purple-400 flex-shrink-0" />
                <a href="tel:+218948606475" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">(+218) 948606475</a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <MapPin size={12} className="sm:w-3.5 sm:h-3.5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm" suppressHydrationWarning>{t.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} Ayoub Alayoubi. {t.rights}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="p-2.5 sm:p-3 glass-card hover:bg-white/[0.08] transition-all group"
          >
            <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400 group-hover:text-purple-400 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
