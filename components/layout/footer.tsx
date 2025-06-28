"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white relative z-10">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
                             <Image
                 src="/logo2.png"
                 alt="Pro-Lab Educativa"
                 width={180}
                 height={40}
                 className="h-8 w-auto"
               />
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed font-body">
              Centro líder en formación laboral especializada con certificación nacional e internacional.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/prolab-educativa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 p-1 sm:p-2 border border-white/20 hover:border-white/40 rounded-full transition-all"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com/prolab-educativa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 border border-white/20 hover:border-white/40 rounded-full transition-all"
                style={{ padding: "6px 8px" }}
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://youtube.com/prolab-educativa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 border border-white/20 hover:border-white/40 rounded-full transition-all"
                style={{ padding: "6px 8px" }}
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-heading font-semibold">Cursos Destacados</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/cursos/criminalistica"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Ciencias Criminalísticas
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos/marketing-digital"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos/personal-trainer"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Personal Trainer
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos/lsa"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Lengua de Señas Argentina
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-heading font-semibold">Enlaces Útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cursos" className="text-gray-200 hover:text-white transition-colors font-body">
                  Todos los Cursos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-200 hover:text-white transition-colors font-body">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://campus.prolabeducativa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Campus Virtual
                </a>
              </li>
              <li>
                <a
                  href="https://prolabaulavirtual.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors font-body"
                >
                  Aula Virtual
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-heading font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/80" />
                <span className="text-gray-200 font-body">+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/80" />
                <span className="text-gray-200 font-body">direccion@prolabeducativa.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white/80 mt-0.5" />
                <span className="text-gray-200 leading-relaxed font-body">Buenos Aires, Argentina</span>
              </div>
            </div>

            <Button
              size="sm" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 w-full text-sm sm:text-base py-2 sm:py-3 font-body font-semibold"
              onClick={() => {
                const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los cursos de Pro-Lab Educativa.")
                window.open(`https://wa.me/5491234567890?text=${message}`, "_blank")
              }}
            >
              Consultá por WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-200 text-xs sm:text-sm font-body">
              © 2024 Pro-Lab Educativa. Todos los derechos reservados.
            </p>
            <p className="text-gray-200 text-xs sm:text-sm font-body">
              Desarrollado por{" "}
              <a
                href="https://nexiumsolutions.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                Nexium Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
