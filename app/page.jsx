"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import DarkVeil from '@/components/DarkVeil';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className={`transition-opacity duration-700 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="relative min-h-screen">
          <DarkVeil />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

