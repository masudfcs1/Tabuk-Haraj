interface TestimonialsProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Customer Testimonials",
    testimonials: [
      {
        name: "Ahmed Al-Otaibi",
        text: "Excellent service and best prices in Tabuk. Highly recommended!",
        rating: 5,
      },
      {
        name: "Fatima Al-Shammari",
        text: "Very professional team. They helped me sell my electronics and furnitures quickly.",
        rating: 5,
      },
      {
        name: "Mohammed Al-Dosari",
        text: "Great quality electronics and furnitures at affordable prices. Will buy again!",
        rating: 5,
      },
    ],
  },
  ar: {
    title: "آراء العملاء",
    testimonials: [
      {
        name: "أحمد العتيبي",
        text: "خدمة ممتازة وأفضل الأسعار في تبوك. أنصح بهم بشدة!",
        rating: 5,
      },
      {
        name: "فاطمة الشمري",
        text: "فريق احترافي جداً. ساعدوني في بيع أثاثي بسرعة.",
        rating: 5,
      },
      {
        name: "محمد الدوسري",
        text: "أثاث عالي الجودة بأسعار معقولة. سأشتري منهم مرة أخرى!",
        rating: 5,
      },
    ],
  },
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
