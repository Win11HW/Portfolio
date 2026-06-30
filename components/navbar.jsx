"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Github, Download } from "lucide-react"
import { GrLanguage } from "react-icons/gr"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredLink, setHoveredLink] = useState(null)
  const navRefs = useRef({})
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en')
    }
  }, [])

  useEffect(() => {
    const el = navRefs.current[activeSection]
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [activeSection])

  const switchLang = (target) => {
    if (typeof document === 'undefined') return
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `lang=${target}; path=/; expires=${expires.toUTCString()}`
    window.location.reload()
  }

  const navLinks = useMemo(() => {
    if (lang === 'ar') {
      return [
        { name: "الرئيسية", href: "#home", id: "home" },
        { name: "نبذة", href: "#about", id: "about" },
        { name: "المهارات", href: "#skills", id: "skills" },
        { name: "المشاريع", href: "#projects", id: "projects" },
        { name: "تواصل", href: "#contact", id: "contact" },
      ]
    }
    return [
      { name: "Home", href: "#home", id: "home" },
      { name: "About", href: "#about", id: "about" },
      { name: "Skills", href: "#skills", id: "skills" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Contact", href: "#contact", id: "contact" },
    ]
  }, [lang])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-lg shadow-black/20"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] object-contain"
              priority
            />
            <span className="text-lg sm:text-xl font-bold hidden sm:block">
              <span className="gradient-text">Dev</span>
              <span className="text-white group-hover:text-gray-300 transition-colors duration-300">Portfolio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center relative">
            <div className="flex items-center gap-1 relative">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  ref={(el) => (navRefs.current[link.id] = el)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg z-10 ${activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  <span suppressHydrationWarning>{link.name}</span>
                </Link>
              ))}
              {/* Sliding active indicator */}
              <span
                className="absolute bottom-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
              {/* Hover highlight */}
              {hoveredLink && navRefs.current[hoveredLink] && (
                <span
                  className="absolute inset-0 bg-white/[0.04] rounded-lg transition-all duration-200"
                  style={{
                    left: navRefs.current[hoveredLink].offsetLeft,
                    width: navRefs.current[hoveredLink].offsetWidth,
                  }}
                />
              )}
            </div>
          </nav>

          {/* Social Icons + Language + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Win11HW"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <button
              type="button"
              onClick={() => switchLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              aria-label="Toggle language"
            >
              <GrLanguage size={14} />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <div className="w-px h-5 bg-white/[0.1]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}>
                <Menu size={20} className={isOpen ? 'hidden' : ''} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}>
                <X size={20} className={isOpen ? '' : 'hidden'} />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 min-h-[52vh] ${isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="container mx-auto px-4 pt-4 pb-5">
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${activeSection === link.id
                  ? 'text-white bg-white/[0.06] border-l-2 border-purple-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                }}
              >
                <span suppressHydrationWarning>{link.name}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Win11HW"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <button
                type="button"
                onClick={() => switchLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                aria-label="Toggle language"
              >
                <GrLanguage size={16} />
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
