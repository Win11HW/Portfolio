"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

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
        paragraph: "أبني تجارب ويب جذّابة وسريعة الاستجابة وسهلة الاستخدام باستخدام تقنيات حديثة وكود نظيف.",
        viewWork: "شاهد أعمالي",
        contactMe: "تواصل معي",
      };
    }
    return {
      welcome: "Welcome to my portfolio",
      hiPrefix: "Hi, I'm",
      imA: "I'm a",
      roles: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
      paragraph: "I create engaging, responsive, and user-friendly web experiences with modern technologies and clean code.",
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
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 800);
  }, [t.roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* Ambient glow effects - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />
      
      <div className="container z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 mb-4 sm:mb-6 md:mb-8 rounded-full glass-card border border-purple-500/20" suppressHydrationWarning>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-400" />
          <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">{t.welcome}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight" suppressHydrationWarning>
          {t.hiPrefix}{" "}
          <span className="gradient-text block sm:inline mt-1 sm:mt-0">
            Ayoub Alayoubi
          </span>
        </h1>

        {/* Typing animation */}
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-4 sm:mb-6 md:mb-8 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 md:gap-2" suppressHydrationWarning>
          <span>{t.imA}</span>
          <span ref={textRef} className="text-white font-semibold"></span>
          <span className="w-0.5 h-4 sm:h-5 md:h-6 bg-purple-500 animate-pulse"></span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl leading-relaxed" suppressHydrationWarning>
          {t.paragraph}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <Link href="#projects" className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base">
            <span suppressHydrationWarning>{t.viewWork}</span>
          </Link>
          <Link href="#contact" className="btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base">
            <span suppressHydrationWarning>{t.contactMe}</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator - hidden on small screens */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 text-gray-500 hover:text-purple-400 transition-colors duration-300"
        >
          <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
