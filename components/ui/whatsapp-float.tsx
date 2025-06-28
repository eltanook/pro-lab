"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre los cursos de Pro-Lab Educativa. ¿Podrían brindarme información?",
    )
    window.open(`https://wa.me/5491234567890?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-prolab-pink hover:bg-prolab-black rounded-full flex items-center justify-center border border-prolab-pink hover:border-prolab-black transition-all duration-300 hover:scale-110 group shadow-lg touch-manipulation"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}
