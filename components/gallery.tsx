interface GalleryProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Our Gallery",
    description: "Browse our collection of quality used furniture",
  },
  ar: {
    title: "معرضنا",
    description: "تصفح مجموعتنا من الأثاث المستعمل عالي الجودة",
  },
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    query: ["bedroom", "living-room", "office", "kitchen", "sofa", "dining", "cabinet", "desk"][i],
  }))

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">{t.title}</h2>
        <p className="text-center text-muted-foreground mb-12">{t.description}</p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer h-64"
            >
              <img
                src={`/.jpg?height=300&width=300&query=${image.query}-furniture`}
                alt={`Furniture ${image.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
