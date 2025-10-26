interface ServicesProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Our Services",
    services: [
      {
        title: "Buy Used electronics",
        description: "We buy all types of used electronics at the best prices",
        icon: "🛋️",
      },
      {
        title: "Sell Used electronics",
        description: "Sell your electronics quickly and easily with us",
        icon: "💰",
      },
      {
        title: "Electrical Appliances",
        description: "Buy and sell used electrical appliances",
        icon: "⚡",
      },
      {
        title: "Air Conditioners",
        description: "Specialized in buying and selling used AC units",
        icon: "❄️",
      },
      {
        title: "Office electronics",
        description: "Complete office electronics solutions",
        icon: "🏢",
      },
      {
        title: "Home Delivery",
        description: "Fast and reliable delivery service",
        icon: "🚚",
      },
    ],
  },
  ar: {
    title: "خدماتنا",
    services: [
      {
        title: "شراء الأثاث المستعمل",
        description: "نشتري جميع أنواع الأثاث المستعمل بأفضل الأسعار",
        icon: "🛋️",
      },
      {
        title: "بيع الأثاث المستعمل",
        description: "بيع أثاثك بسرعة وسهولة معنا",
        icon: "💰",
      },
      {
        title: "الأجهزة الكهربائية",
        description: "شراء وبيع الأجهزة الكهربائية المستعملة",
        icon: "⚡",
      },
      {
        title: "المكيفات الهوائية",
        description: "متخصصون في شراء وبيع المكيفات المستعملة",
        icon: "❄️",
      },
      {
        title: "أثاث المكاتب",
        description: "حلول أثاث مكتبي متكاملة",
        icon: "🏢",
      },
      {
        title: "التوصيل المنزلي",
        description: "خدمة توصيل سريعة وموثوقة",
        icon: "🚚",
      },
    ],
  },
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language]

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
