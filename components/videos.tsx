interface VideosProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Video Showcase",
    description: "Watch our latest electronics collections and customer testimonials",
  },
  ar: {
    title: "عرض الفيديوهات",
    description: "شاهد مجموعاتنا الأخيرة وشهادات العملاء",
  },
}

export default function Videos({ language }: VideosProps) {
  const t = translations[language]
  const videos = [
    { id: 1, title: language === "en" ? "Showroom Tour" : "جولة المعرض" },
    { id: 2, title: language === "en" ? "Customer Review" : "تقييم العميل" },
    { id: 3, title: language === "en" ? "New Collection" : "المجموعة الجديدة" },
    { id: 4, title: language === "en" ? "Delivery Service" : "خدمة التوصيل" },
  ]

  return (
    <section id="videos" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">{t.title}</h2>
        <p className="text-center text-muted-foreground mb-12">{t.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer bg-black h-80"
            >
              <img
                src={`/electronics-video-.jpg?height=400&width=600&query=electronics-video-${video.id}`}
                alt={video.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white font-semibold">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
