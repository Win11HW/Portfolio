"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

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
        live: 'الموقع المباشر',
        source: 'المصدر',
        viewAll: 'عرض كل المشاريع',
      }
    }
    return {
      heading: 'My Projects',
      subtitle: "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.",
      live: 'Live Demo',
      source: 'Source Code',
      viewAll: 'View All Projects',
    }
  }, [lang])

  const baseProjects = useMemo(() => ([
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information with a modern design.",
      image: "/protfolio.webp",
      tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://dev-portfolio-work.vercel.app/",
      githubUrl: "https://github.com/Win11HW/Portfolio",
    },
    {
      title: "Movie Website",
      description:
        "Your ultimate destination for discovering amazing movies, trailers, and detailed information.",
      image: "/movie.png",
      tags: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "axios", "shadcn"],
      liveUrl: "https://movielify.vercel.app/",
      githubUrl: "https://github.com/Win11HW/Movie",
    },
    {
      title: "E-Commerce Website",
      description:
        "An online store that showcases products with the ability to purchase, add to favorites, and search easily. It features a seamless interface and additional services that enhance the user experience.",
      image: "/store.webp",
      tags: ["HTML", "CSS", "JavaScript", "php", "mysql"],
      liveUrl: "http://ecommerce-your-choice.atwebpages.com/",
      githubUrl: "https://github.com/Win11HW/Ecommerce/",
    },
    {
      title: "E-Commerce Dashboard Website",
      description:
        "Dashboard for admin and User to add or delete or Edite and many tools",
      image: "/dashboard.webp",
      tags: ["HTML", "CSS", "JavaScript", "php", "mysql"],
      liveUrl: "http://ecommerce-your-choice.atwebpages.com/dashboard",
      githubUrl: "https://github.com/Win11HW/Ecommerce/",
    },
    {
      title: "pharmacy Website",
      description:
        "Your trusted partner in integrated healthcare. We offer you the finest medicines and medical products with outstanding 24/7 consultation service.",
      image: "/Health.webp",
      tags: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "axios", "shadcn"],
      liveUrl: "https://alshifa-pharmacy.vercel.app/",
    },
    {
      title: "Shipping company Website",
      description:
        "We offer integrated sea freight solutions and professional logistics services to transport your goods worldwide with the highest standards of quality and safety.",
      image: "/Ship.webp",
      tags: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "axios", "shadcn"],
      liveUrl: "https://sea-phrase.vercel.app",
    },
  ]), [])

  const projects = useMemo(() => {
    if (lang !== 'ar') return baseProjects
    return [
      {
        ...baseProjects[0],
        title: 'موقع معرض أعمال',
        description: 'موقع شخصي لعرض المشاريع والمهارات ومعلومات التواصل بتصميم حديث وتجربة استخدام مريحة.',
      },
      {
        ...baseProjects[1],
        title: 'موقع افلام',
        description: 'وجهتك النهائية لاكتشاف الأفلام المذهلة والمقاطع الدعائية والمعلومات التفصيلية.',
      },
      {
        ...baseProjects[2],
        title: 'موقع تجارة إلكترونية',
        description: 'متجر إلكتروني يعرض المنتجات مع إمكانية الشراء، والإضافة للمفضّلة، والبحث بسهولة. يتميز بواجهة سلسة وخدمات إضافية تحسّن تجربة المستخدم.',
      },
      {
        ...baseProjects[3],
        title: 'لوحة تحكّم للتجارة الإلكترونية',
        description: 'لوحة تحكّم للمشرف والمستخدم لإضافة العناصر أو حذفها أو تعديلها، مع العديد من الأدوات المساعدة لإدارة المتجر.',
      },
      {
        ...baseProjects[4],
        title: 'موقع الصيدلية الإلكتروني',
        description: 'شريكك الموثوق في الرعاية الصحية المتكاملة نقدم لكم أجود الأدوية والمستحضرات الطبية مع خدمة استشارية متميزة على مدار الساعة',
      },
      {
        ...baseProjects[5],
        title: 'موقع شركة الشحن',
        description: 'نقدم حلول شحن بحري متكاملة وخدمات لوجستية احترافية لنقل بضائعك إلى جميع أنحاء العالم بأعلى معايير الجودة والأمان',
      },
    ]
  }, [lang, baseProjects])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span suppressHydrationWarning>{t.heading}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            <span suppressHydrationWarning>{t.subtitle}</span>
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span suppressHydrationWarning>{t.live}</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span suppressHydrationWarning>{t.source}</span>
                  </a>
                )}
              </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span suppressHydrationWarning>{t.viewAll}</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

