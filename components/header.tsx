"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  language: "en" | "ar"
  setLanguage: (lang: "en" | "ar") => void
}

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    videos: "Videos",
    blog: "Blog",
    contact: "Contact",
  },
  ar: {
    home: "الرئيسية",
    about: "عن الشركة",
    services: "الخدمات",
    gallery: "المعرض",
    videos: "الفيديوهات",
    blog: "المدونة",
    contact: "اتصل بنا",
  },
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">{language === "ar" ? "تبوك حراج" : "Tabuk Haraj"}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition">
              {t.home}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              {t.about}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition">
              {t.services}
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition">
              {t.gallery}
            </a>
            <a href="#videos" className="text-foreground hover:text-primary transition">
              {t.videos}
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition">
              {t.blog}
            </a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              {language === "en" ? "العربية" : "English"}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <a href="#home" className="text-foreground hover:text-primary transition py-2">
              {t.home}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition py-2">
              {t.about}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition py-2">
              {t.services}
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition py-2">
              {t.gallery}
            </a>
            <a href="#videos" className="text-foreground hover:text-primary transition py-2">
              {t.videos}
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition py-2">
              {t.blog}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
