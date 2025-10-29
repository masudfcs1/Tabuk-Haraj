import { useState } from 'react'

interface VideosProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Video Showcase",
    description: "Watch our classic electronics and furnitures collections and customer testimonials",
    close: "Close"
  },
  ar: {
    title: "عرض الفيديوهات",
    description: "شاهد مجموعاتنا الكلاسيكية وشهادات العملاء",
    close: "إغلاق"
  },
}

export default function Videos({ language }: VideosProps) {
  const t = translations[language]
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")
  
  const videos = [
    { 
      id: 1, 
      title: language === "en" ? "Vintage AC Collection" : "مجموعة المكيفات القديمة",
     videoSrc: "/video-1.mp4",    },
    { 
      id: 2, 
      title: language === "en" ? "Classic electronics and furnitures Tour" : "جولة الأجهزة الكلاسيكية",
     videoSrc: "/video-2.mp4",  
    },
    { 
      id: 3, 
      title: language === "en" ? "Retro AC Restoration" : "ترميم المكيفات القديمة",
      videoSrc: "/video-3.mp4",  
    },
    // { 
    //   id: 4, 
    //   title: language === "en" ? "Vintage Cooling Systems" : "أنظمة التبريد القديمة",
    //   videoSrc: "/video-1.mp4",  
    // },
  ]

  const openVideo = (videoSrc: string, title: string) => {
    setSelectedVideo(videoSrc)
    setSelectedTitle(title)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    setSelectedTitle("")
  }

  return (
    <>
      <section id="videos" className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">{t.title}</h2>
          <p className="text-center text-muted-foreground mb-12">{t.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideo(video.videoSrc, video.title)}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 h-80 flex items-center justify-center"
              >
                {/* Play Button Container */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">{video.title}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {language === "en" ? "Click to play" : "انقر للتشغيل"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div 
            className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">{selectedTitle}</h3>
              <button
                onClick={closeVideo}
                className="text-gray-400 hover:text-white text-2xl font-bold w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-full transition"
              >
                ×
              </button>
            </div>
            <div className="p-2">
              <video 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[70vh] rounded"
                src={selectedVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}