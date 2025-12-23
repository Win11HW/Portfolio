"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [lang, setLang] = useState('en')
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en')
    }
  }, [])

  const t = useMemo(() => {
    if (lang === 'ar') {
      return {
        heading: 'مشاريعي',
        subtitle: 'بعض من أعمالي الأخيرة التي تُظهر مهارات وتقنيات متنوعة تعاملت معها.',
        live: 'معاينة',
        source: 'الكود',
        viewAll: 'عرض كل المشاريع',
      }
    }
    return {
      heading: 'Featured Projects',
      subtitle: "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.",
      live: 'Live Demo',
      source: 'Source',
      viewAll: 'View All Projects',
    }
  }, [lang])

  const baseProjects = useMemo(() => ([
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      image: "/protfolio.webp",
      tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://dev-portfolio-work.vercel.app/",
      githubUrl: "https://github.com/Win11HW/Portfolio",
    },
    {
      title: "Movie Website",
      description: "Your ultimate destination for discovering amazing movies, trailers, and detailed information.",
      image: "/movie.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://movielify.vercel.app/",
      githubUrl: "https://github.com/Win11HW/Movie",
    },
    {
      title: "E-Commerce Website",
      description: "An online store with product showcase, favorites, and search functionality with a seamless interface.",
      image: "/store.webp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "http://ecommerce-your-choice.atwebpages.com/",
      githubUrl: "https://github.com/Win11HW/Ecommerce/",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, users, and orders with comprehensive tools.",
      image: "/dashboard.webp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "http://ecommerce-your-choice.atwebpages.com/dashboard",
      githubUrl: "https://github.com/Win11HW/Ecommerce/",
    },
    {
      title: "Pharmacy Website",
      description: "Healthcare platform offering medicines and medical products with 24/7 consultation service.",
      image: "/Health.webp",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://alshifa-pharmacy.vercel.app/",
    },
    {
      title: "Shipping Company",
      description: "Sea freight solutions and logistics services for worldwide cargo transportation.",
      image: "/Ship.webp",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://sea-phrase.vercel.app",
    },
  ]), [])

  const projects = useMemo(() => {
    if (lang !== 'ar') return baseProjects
    return [
      { ...baseProjects[0], title: 'موقع معرض أعمال', description: 'موقع شخصي لعرض المشاريع والمهارات ومعلومات التواصل بتصميم حديث.' },
      { ...baseProjects[1], title: 'موقع افلام', description: 'وجهتك لاكتشاف الأفلام المذهلة والمقاطع الدعائية والمعلومات التفصيلية.' },
      { ...baseProjects[2], title: 'موقع تجارة إلكترونية', description: 'متجر إلكتروني يعرض المنتجات مع إمكانية الشراء والإضافة للمفضّلة.' },
      { ...baseProjects[3], title: 'لوحة تحكّم', description: 'لوحة تحكّم للمشرف والمستخدم لإدارة المنتجات والطلبات.' },
      { ...baseProjects[4], title: 'موقع الصيدلية', description: 'شريكك الموثوق في الرعاية الصحية المتكاملة مع خدمة استشارية متميزة.' },
      { ...baseProjects[5], title: 'شركة الشحن', description: 'حلول شحن بحري متكاملة وخدمات لوجستية احترافية.' },
    ]
  }, [lang, baseProjects])

  return (
    <section id="projects" className="section-padding bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]" />
      
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-3 sm:mb-4"
          >
            <span suppressHydrationWarning>{t.heading}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            <span suppressHydrationWarning>{t.subtitle}</span>
          </motion.p>
        </div>

        <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                {/* Show buttons always on mobile, hover on desktop */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/30 sm:hover:bg-white/20 transition-colors">
                      <ExternalLink size={14} className="sm:w-4 sm:h-4 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/30 sm:hover:bg-white/20 transition-colors">
                      <Github size={14} className="sm:w-4 sm:h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/[0.05] rounded-md text-[10px] sm:text-xs text-gray-400">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/[0.05] rounded-md text-[10px] sm:text-xs text-gray-500">+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a href="#" className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors group">
            <span suppressHydrationWarning>{t.viewAll}</span>
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
