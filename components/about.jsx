"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { Mail, MapPin, Download } from "lucide-react"
import Link from "next/link"

export default function About() {
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
        eyebrow: 'نبذة عني',
        title: 'مطوّر مواقع بتجربة مستخدم جميلة وعملية',
        paragraph: 'أطوّر تطبيقات ويب سريعة، متاحة، وعالية الأداء باستخدام أحدث التقنيات، مع اهتمام خاص بالجماليات وجودة الكود.',
        location: 'ليبيا، طرابلس',
        resume: 'تحميل السيرة الذاتية',
      }
    }
    return {
      eyebrow: 'About Me',
      title: 'Website Developer with a passion for creating beautiful user experiences',
      paragraph: 'I specialize in building responsive, accessible, and performant web applications using modern technologies. With a keen eye for design and a commitment to code quality, I create solutions that are both beautiful and functional.',
      location: 'Libya, Tripoli',
      resume: 'Download Resume',
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
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <section id="about" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px]" />
      
      <div className="container mx-auto">
        <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20" suppressHydrationWarning>{t.eyebrow}</span>
            <h2 className="section-title mb-4 sm:mb-6 px-2" suppressHydrationWarning>{t.title}</h2>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg leading-relaxed text-center px-2" suppressHydrationWarning>{t.paragraph}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-xl mx-auto">
            <div className="glass-card glass-card-hover p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-xl flex-shrink-0"><MapPin className="text-purple-400" size={20} /></div>
              <span className="text-gray-300 font-medium text-sm sm:text-base" suppressHydrationWarning>{t.location}</span>
            </div>
            <div className="glass-card glass-card-hover p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-xl flex-shrink-0"><Mail className="text-purple-400" size={20} /></div>
              <span className="text-gray-300 font-medium text-sm sm:text-base break-all">aybqam@gmail.com</span>
            </div>
          </div>

          <div className="text-center">
            <Link href="Ayoub Alayoubi.pdf" className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span suppressHydrationWarning>{t.resume}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
