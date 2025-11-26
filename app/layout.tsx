import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Tabuk Haraj – تابوك هراج | Buy & Sell Used Furniture & Electronics in تبوك",
    template: "%s | Tabuk Haraj",
  },
  description:
      "Trusted service to buy and sell used furniture & electronics in Tabuk 🇸🇦 | خدمة موثوقة لشراء وبيع الأثاث والإلكترونيات المستعملة في تبوك. Fair prices • Fast pickup • Easy process.",

  keywords: [
    // English keywords
    "buy used furniture Tabuk",
    "sell used electronics Tabuk",
    "used furniture buyer Tabuk",
    "second-hand electronics Saudi Arabia",
    "furniture haraj Tabuk",
    "sell old sofa Tabuk",
    "used home appliances Tabuk",
      '+966 0562036954',
      "0562036954",
      'Tabuk Haraj',
      'تابوك هراج',
      'tabukharaj.shop',
      'www.tabukharaj.shop',
      'https://www.tabukharaj.shop',
      'www.tabukharaj.shop/',
      'https://www.tabukharaj.shop/',
      'tabukharaj.shop/',
      'electronics',
      'furniture',
      'used furniture',
      'used electronics',
      'furniture tabuk',
      'electronics tabuk',
      'used furniture tabuk',
      'used electronics tabuk',
      'best prices',
      'best deals',
      'best offers',
      'best furniture',
      'best electronics',
      'best tabuk',
      'best tabuk deals',
      'electronics haraj',
      'furniture haraj',
      'electronics tabuk haraj',
      'furniture tabuk haraj',
      'electronics haraj tabuk',
      'furniture haraj tabuk',
      'haraj tabuk',
      'electronics haraj saudi',
      'furniture haraj saudi',
      'electronics haraj saudi arabia',
      'furniture haraj saudi arabia',
      'electronics haraj ksa',
      'furniture haraj ksa',
      'electronics haraj kingdom',
      'furniture haraj kingdom',
      'electronics furniture haraj etc',
      'electronics furniture haraj etc tabuk',

    // Arabic keywords
    "شراء أثاث مستعمل تبوك",
    "بيع إلكترونيات مستعملة تبوك",
    "هراج أثاث تبوك",
    "شركة شراء أثاث قديم تبوك",
    "بيع أثاث منزلي مستعمل",
    "تاجر أثاث مستعمل تبوك",
    "شراء كنب مستعمل تبوك"
  ],

  authors: [{ name: "Tabuk Haraj Team | فريق تابوك هراج" }],
  creator: "Tabuk Haraj | تابوك هراج",
  publisher: "Tabuk Haraj | تابوك هراج",

  alternates: {
    canonical: "https://www.tabukharaj.shop", // 👈 Replace with your real domain
    languages: {
      "en-SA": "https://www.tabukharaj.shop",
      "ar-SA": "https://www.tabukharaj.shop",
    },
  },

  openGraph: {
    title: "Tabuk Haraj – تابوك هراج | Used Furniture & Electronics Marketplace in Tabuk",
    description:
        "Buy or sell used furniture & electronics in Tabuk with fair prices and instant pickup 🇸🇦 | اشترِ أو بعْ أثاثك وإلكترونياتك المستعملة في تبوك بأسعار عادلة واستلام فوري.",
    url: "https://www.tabukharaj.shop",
    siteName: "Tabuk Haraj | تابوك هراج",
    locale: "ar-SA", // Primary audience is Arabic, but content is bilingual
    type: "website",
    images: [
      {
        url: "https://www.tabukharaj.shop/", // 👈 Add a high-quality OG image
        width: 1200,
        height: 630,
        alt: "Tabuk Haraj – Used Furniture & Electronics in Tabuk | تابوك هراج – أثاث وإلكترونيات مستعملة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tabuk Haraj – تابوك هراج | Sell Used Items in Tabuk",
    description:
        "Fast, fair, and easy way to sell or buy used furniture & electronics in Tabuk 🇸🇦 | طريقة سريعة وعادلة لبيع أو شراء الأثاث المستعمل في تبوك.",
  },

  robots: {
    index: true,
    follow: true,
  },

  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
