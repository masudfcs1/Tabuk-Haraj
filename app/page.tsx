"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Videos from "@/components/videos"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Gallery language={language} />
      {/* <Videos language={language} /> */}
      <Testimonials language={language} />
      <Blog language={language} />
      <Footer language={language} />
      <WhatsAppButton />
    </div>
  )
}
