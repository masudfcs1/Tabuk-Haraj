interface FooterProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    company: "Tabuk Haraj",
    description: "Your trusted partner for buying used electronics and furnitures in Tabuk",
    quickLinks: "Quick Links",
    contact: "Contact",
    phone: "+966 562036954",
    email: "info@tabukharaj.com",
    address: "Tabuk, Saudi Arabia",
    rights: "© 2025 Tabuk Haraj. All rights reserved.",
    location: "Our Location",
    openInMaps: "Open in Google Maps",
  },
  ar: {
    company: "تبوك حراج",
    description: "شركتك الموثوقة لشراء وبيع الأثاث المستعمل في تبوك",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    phone: "+966 562036954",
    email: "info@tabukharaj.com",
    address: "تبوك، المملكة العربية السعودية",
    rights: "© 2025 تبوك حراج. جميع الحقوق محفوظة.",
    location: "موقعنا",
    openInMaps: "افتح في خرائط جوجل",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]
  
  // Correct Google Maps coordinates: 28.3817236,36.5590533
  const latitude = 28.385504
  const longitude = 36.5585954
  
  // Direct Google Maps link (will open in Google Maps app or website)
  const directMapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17&hl=${language}`
  
  // Correct Google Maps embed URL (iframe version)
  const embedMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed&hl=${language}`
  
  // Alternative embed URL format
  const embedMapUrl2 = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${latitude},${longitude}&zoom=17&language=${language}`
  
  // If you don't have API key, use this simple embed
  const simpleEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed&hl=${language}`

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t.company}</h3>
            <p className="text-sm opacity-90 mb-4">{t.description}</p>
            
            {/* Map Section */}
            <div className="mt-6">
              <h4 className="font-bold mb-4">{t.location}</h4>
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-secondary-foreground/20 bg-gray-100">
                {/* Option 1: Simple Google Maps embed without API key */}
                <iframe
                  src={simpleEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tabuk Haraj Location"
                  className="absolute inset-0"
                />
                
                {/* Fallback if iframe doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center p-4">
                    <p className="mb-2 font-medium">
                      {language === "en" ? "Tabuk Haraj Location" : "موقع تبوك حراج"}
                    </p>
                    <p className="text-xs opacity-75">
                      {latitude.toFixed(6)}° N, {longitude.toFixed(6)}° E
                    </p>
                    <p className="text-xs mt-2">
                      {t.address}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Direct link to Google Maps */}
              <div className="mt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <a 
                  href={directMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {t.openInMaps}
                </a>
              </div>
              
              {/* Coordinates display */}
              <p className="text-xs opacity-75 mt-1">
                {latitude.toFixed(6)}° N, {longitude.toFixed(6)}° E
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  {language === "en" ? "Home" : "الرئيسية"}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  {language === "en" ? "About" : "من نحن"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  {language === "en" ? "Services" : "الخدمات"}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  {language === "en" ? "Gallery" : "المعرض"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t.phone}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.email}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">
              {language === "en" ? "Follow Us" : "تابعنا"}
            </h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.facebook.com/morshed.alam.970289?mibextid=ZbWKwL" 
                className="flex items-center gap-2 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/morshed5496?igsh=Y3VsY3hybHlnemxm" 
                className="flex items-center gap-2 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.snapchat.com/add/morsheda8274?share_id=_SiwQ84WSjw&locale=en-GB" 
                className="flex items-center gap-2 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                Snapchat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>{t.rights}</p>
          <p className="text-xs opacity-75 mt-1">
            {language === "en" ? "Location: " : "الموقع: "}
            {latitude.toFixed(6)}° N, {longitude.toFixed(6)}° E • {t.address}
          </p>
        </div>
      </div>
    </footer>
  )
}