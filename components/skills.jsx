"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPhp, FaLaravel, FaBootstrap, FaNpm, FaDocker } from "react-icons/fa"
import { SiNextdotjs, SiMysql, SiTailwindcss, SiMongodb, SiSupabase, SiRedux, SiVercel, SiShadcnui } from "react-icons/si"
import { MdDesignServices } from "react-icons/md"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const [lang, setLang] = useState("en")

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en')
    }
  }, [])

  const t = useMemo(() => {
    if (lang === 'ar') {
      return {
        headingMy: 'مهاراتي',
        subtitle: 'عملت مع مجموعة من التقنيات في تطوير الويب. إليك نظرة عامة على مهاراتي وخبرتي.',
        core: 'المهارات الأساسية',
        tools: 'التقنيات والأدوات',
      }
    }
    return {
      headingMy: 'My Skills',
      subtitle: "I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and expertise.",
      core: 'Core Competencies',
      tools: 'Technologies & Tools',
    }
  }, [lang])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={32} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={32} /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#47A248]" size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={32} /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" size={32} /> },
    { name: "Shadcn/ui", icon: <SiShadcnui className="text-white" size={32} /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-400" size={32} /> },
    { name: "PHP", icon: <FaPhp className="text-[#8892BF]" size={32} /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#E34F26]" size={32} /> },
    { name: "MySQL", icon: <SiMysql className="text-[#F29111]" size={32} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={32} /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" size={32} /> },
  ]

  const technologies = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={22} /> },
    { name: "GitHub", icon: <FaGithub size={22} /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={22} /> },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" size={22} /> },
    { name: "Vercel", icon: <SiVercel size={22} /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" size={22} /> },
  ]

  return (
    <section id="skills" className="section-padding bg-[#08080c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px]" />

      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20" suppressHydrationWarning>{t.core}</span>
          <h2 className="section-title mb-3 sm:mb-4" suppressHydrationWarning>{t.headingMy}</h2>
          <p className="section-subtitle" suppressHydrationWarning>{t.subtitle}</p>
        </div>

        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card glass-card-hover p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">{skill.icon}</div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center text-gray-400" suppressHydrationWarning>{t.tools}</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {technologies.map((tech) => (
                <div key={tech.name} className="glass-card glass-card-hover px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                  <span className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">{tech.icon}</span>
                  <span className="text-xs sm:text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
