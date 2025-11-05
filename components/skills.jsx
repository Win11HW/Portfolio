"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaPhp, FaBootstrap, FaNpm, FaDocker} from "react-icons/fa"
import { SiNextdotjs, SiMysql, SiTailwindcss, SiMongodb, SiRedux, SiJest, SiWebpack, SiVercel, SiFirebase, SiFramer, SiSass, } from "react-icons/si"
import { RiFirebaseFill } from "react-icons/ri"
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" size={36} /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-500" size={36} /> },
    { name: "php", icon: <FaPhp className="text-[#8892BF]" size={24} /> },
    { name: "Mysql", icon: <SiMysql className="text-[#F29111]" size={24} /> },
    { name: "Mongodb", icon: <SiMongodb className="text-[#47A248]" size={24} /> },
  ]

  const technologies = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={24} /> },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    { name: "Docker", icon: <FaDocker className="text-[#1572B6]" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" suppressHydrationWarning>
            {t.headingMy}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" suppressHydrationWarning>
            {t.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center" suppressHydrationWarning>{t.core}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center" suppressHydrationWarning>{t.tools}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

