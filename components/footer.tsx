interface FooterProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    company: "Tabuk Haraj",
    description: "Your trusted partner for buying and selling used electronics and furnitures in Tabuk",
    quickLinks: "Quick Links",
    contact: "Contact",
    phone: "+966 0562036954",
    email: "info@tabukharaj.com",
    address: "Tabuk, Saudi Arabia",
    rights: "© 2025 Tabuk Haraj. All rights reserved.",
  },
  ar: {
    company: "تبوك حراج",
    description: "شركتك الموثوقة لشراء وبيع الأثاث المستعمل في تبوك",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    phone: "+966 0562036954",
    email: "info@tabukharaj.com",
    address: "تبوك، المملكة العربية السعودية",
    rights: "© 2025 تبوك حراج. جميع الحقوق محفوظة.",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.company}</h3>
            <p className="text-sm opacity-90">{t.description}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t.phone}</li>
              <li>{t.email}</li>
              <li>{t.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80">
                Facebook
              </a>
              <a href="#" className="hover:opacity-80">
                Instagram
              </a>
              <a href="#" className="hover:opacity-80">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
