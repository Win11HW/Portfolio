"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import { GrLanguage } from "react-icons/gr"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('en')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections.reverse()) {
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.05] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold group">
            <span className="gradient-text">
              Dev
            </span>
            <span className="text-white group-hover:text-gray-300 transition-colors">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${activeSection === link.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <span suppressHydrationWarning>{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons + Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Win11HW"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <button
              type="button"
              onClick={() => switchLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
              aria-label="Toggle language"
            >
              <GrLanguage size={14} />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.05] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeSection === link.id 
                    ? 'text-white bg-white/[0.05]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <span suppressHydrationWarning>{link.name}</span>
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.05]">
              <a
                href="https://github.com/Win11HW"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <button
                type="button"
                onClick={() => switchLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
                aria-label="Toggle language"
              >
                <GrLanguage size={16} />
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
