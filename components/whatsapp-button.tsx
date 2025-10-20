"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  // const phoneNumber = "8801335625127"
  const phoneNumber = "8801831621815"
  const message = "Hello, I am interested in your furniture services."

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed right-6 bottom-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
