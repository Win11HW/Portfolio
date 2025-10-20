"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const PRIMARY_GRADIENT = "bg-gradient-to-r from-purple-600 to-blue-600";
const SECONDARY_BG = "bg-gray-800 hover:bg-gray-700";
const TEXT_PRIMARY = "text-white";
const TEXT_SECONDARY = "text-gray-300";
const TEXT_TERTIARY = "text-gray-400";

export default function Hero() {
  const textRef = useRef(null);

  const [lang, setLang] = useState("en");
  useEffect(() => {
    if (typeof document !== "undefined") {
      setLang(document.documentElement.lang === "ar" ? "ar" : "en");
    }
  }, []);

  const t = useMemo(() => {
    if (lang === "ar") {
      return {
        welcome: "مرحبًا بكم في معرض أعمالي",
        hiPrefix: "مرحبًا، أنا",
        imA: "أنا",
        roles: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
        paragraph:
          "أبني تجارب ويب جذّابة وسريعة الاستجابة وسهلة الاستخدام باستخدام تقنيات حديثة وكود نظيف.",
        viewWork: "شاهد أعمالي",
        contactMe: "تواصل معي",
      };
    }
    return {
      welcome: "Welcome to my portfolio",
      hiPrefix: "Hi, I'm",
      imA: "I'm a",
      roles: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
      paragraph:
        "I create engaging, responsive, and user-friendly web experiences with modern technologies and clean code.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    };
  }, [lang]);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const roles = t.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;
      typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, [t.roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-transparent"
    >
      <div className="container px-4 md:px-6 z-10">
        <span suppressHydrationWarning className={`px-4 py-1 mb-4 rounded-full text-sm font-medium ${SECONDARY_BG} ${TEXT_SECONDARY}`}>
          {t.welcome}
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" suppressHydrationWarning>
          {t.hiPrefix} <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Ayoub Alayoubi
          </span>
        </h1>

        <div className={`text-xl md:text-2xl ${TEXT_SECONDARY} mb-8 h-8`} suppressHydrationWarning>
          {t.imA} <span ref={textRef} className={`${TEXT_PRIMARY} font-medium`}></span>
        </div>

        <p className={`max-w-2xl ${TEXT_TERTIARY} mb-10 mx-auto`} suppressHydrationWarning>
          {t.paragraph}
        </p>

        <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
          <Link
            href="#projects"
            className={`px-6 py-3 rounded-lg ${PRIMARY_GRADIENT} ${TEXT_PRIMARY} font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105`}
          >
            <span suppressHydrationWarning>{t.viewWork}</span>
          </Link>
          <Link
            href="#contact"
            className={`px-6 py-3 rounded-lg ${SECONDARY_BG} ${TEXT_PRIMARY} font-medium transition-all hover:scale-105`}
          >
            <span suppressHydrationWarning>{t.contactMe}</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className={`${TEXT_TERTIARY} hover:${TEXT_PRIMARY} transition-colors`}>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
