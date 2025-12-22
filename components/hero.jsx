"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card border border-purple-500/20" suppressHydrationWarning>
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-gray-300">{t.welcome}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight" suppressHydrationWarning>
          {t.hiPrefix}{" "}
          <span className="gradient-text">
            Ayoub Alayoubi
          </span>
        </h1>

        {/* Typing animation */}
        <div className="text-xl md:text-2xl text-gray-400 mb-8 h-10 flex items-center justify-center gap-2" suppressHydrationWarning>
          <span>{t.imA}</span>
          <span ref={textRef} className="text-white font-semibold min-w-[200px] text-left"></span>
          <span ref={cursorRef} className="w-0.5 h-6 bg-purple-500 animate-pulse"></span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 mx-auto max-w-2xl leading-relaxed" suppressHydrationWarning>
          {t.paragraph}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
          <Link href="#projects" className="btn-primary inline-flex items-center gap-2">
            <span suppressHydrationWarning>{t.viewWork}</span>
          </Link>
          <Link href="#contact" className="btn-secondary inline-flex items-center gap-2">
            <span suppressHydrationWarning>{t.contactMe}</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
