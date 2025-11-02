interface HeroProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Buy Used Electronics and Furnitures in Tabuk",
    subtitle: "Your trusted partner for quality used electronics, appliances, and home goods",
    cta: "Get Started",
  },
  ar: {
    title: "شراء الأجهزة الإلكترونية والأثاث المستعمل في تبوك",
    subtitle: "شركتك الموثوقة للأثاث المستعمل والأجهزة الكهربائية والعفش المنزلي",
    cta: "ابدأ الآن",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=electronics-store)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.title}</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">{t.subtitle}</p>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-lg">
          {t.cta}
        </button>
      </div>
    </section>
  )
}
