interface GalleryProps {
  language: "en" | "ar";
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
};

// Static array of furniture images with real placeholder URLs
const furnitureImages = [
  {
    id: 1,
    query: "bedroom",
    imageUrl: "data:image/jpeg;base64,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 ",
  },
  {
    id: 2,
    query: "living-room",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIwxTUNWDPMukrSj2nzHWBaUAX-83TX5Jjw&s",
  },
  {
    id: 3,
    query: "office",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TstRnRYUiGgkcZLuFWo4yWYBEYonM1Ks3Q&s",
  },
  {
    id: 4,
    query: "kitchen",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdT3RLdDgtmVYoRhwCtesmYY_8_rBMfTwmTwY46b-c6UBjFfIkIqABDbvRU_0p5bbl5m4&usqp=CAU",
  },
  {
    id: 5,
    query: "sofa",
    imageUrl: "https://content.jdmagicbox.com/comp/faridabad/g2/011pxx11.xx11.120817073154.d6g2/catalogue/nisha-electronics-old-faridabad-faridabad-electronic-goods-showrooms-2fpt9jn-250.jpg",
  },
  {
    id: 6,
    query: "dining",
    imageUrl: "https://frequip.com/wp-content/uploads/2024/03/Shahberi-Furniture-Market-2.jpg",
  },
  {
    id: 7,
    query: "cabinet",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4e3D5u59nxo3fN9QlSJ_ZIrn8LHIo3g7mEQ&s",
  },
  {
    id: 8,
    query: "desk",
    imageUrl: "https://www.doodledash.co.uk/cdn/shop/articles/424897562_831709968970164_671874420631076093_n_1080x.jpg?v=1706983772",
  },
];

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          {t.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {t.description}
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {furnitureImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer h-64"
            >
              <img
                src={image.imageUrl}
                alt={`Used ${image.query} furniture`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}