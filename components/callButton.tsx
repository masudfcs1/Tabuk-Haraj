"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function ContactButtons() {
  const phoneNumber = "+9660562036954"
  const message = `
شراء أثاث وأجهزة إلكترونية مستعملة في تبوك

أشتري مكيفات، ثلاجات، غسالات، غرف نوم، مطابخ، كنب، وجميع أنواع الأثاث. للتواصل 0562036954
`

//   const handleWhatsAppClick = () => {
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
//     window.open(whatsappUrl, "_blank")
//   }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      {/* <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </button> */}

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 flex items-center justify-center"
        aria-label="Call us"
        title="Call us directly"
      >
        <Phone size={28} />
      </button>
    </div>
  )
}