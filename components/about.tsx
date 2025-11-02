interface AboutProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "About Tabuk Haraj",
    description:
      "Welcome to Tabuk Haraj, your specialized company for buying used electronics. We are one of the most important and best stores and showrooms for buying home and office electronics, electrical appliances, used air conditioners, and majlis electronics and furnitures in Tabuk.",
    features: ["Best Prices", "Quality Assurance", "Fast Service", "Professional Team"],
  },
  ar: {
    title: "عن تبوك حراج",
    description:
      "أهلا وسهلا بكم في شركة شراء الاثاث المستعمل بتبوك، شركة متخصصة لبيع وشراء الأثاث المستعمل حيث تعد محلات شراء اثاث مستعمل بتبوك، من أهم وأفضل محلاث ومعارض شراء وبيع الاثاث المنزلى والمكتبى وشراء وبيع الاجهزة الكهربائية.",
    features: ["أفضل الأسعار", "ضمان الجودة", "خدمة سريعة", "فريق محترف"],
  },
}

export default function About({ language }: AboutProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{t.title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* <img src="/hero-1.jpeg" alt="Showroom" className="rounded-lg shadow-lg" /> */}
             <video 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[70vh] rounded"
                src='/video-1.mp4'
              ></video>
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
