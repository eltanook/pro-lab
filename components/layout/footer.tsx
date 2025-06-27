"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#023a5d] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#009c48] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Pro-Lab Educativa</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              Formación laboral con certificación nacional e internacional. Transformamos vidas a través de la educación
              práctica.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-[#009c48] p-1 sm:p-2 border border-transparent hover:border-white/50 dark:hover:border-gray-600 rounded-full"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-[#009c48] border border-transparent hover:border-white/50 dark:hover:border-gray-600 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-[#009c48] border border-transparent hover:border-white/50 dark:hover:border-gray-600 rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegación</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Inicio
              </Link>
              <Link
                href="/cursos"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Cursos
              </Link>
              <Link
                href="/contacto"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Contacto
              </Link>
              <Link
                href="/certificaciones"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Certificaciones
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cursos Destacados</h3>
            <div className="space-y-2">
              <Link
                href="/cursos/criminalistica"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm"
              >
                Ciencias Criminalísticas
              </Link>
              <Link
                href="/cursos/marketing-digital"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm"
              >
                Marketing Digital
              </Link>
              <Link
                href="/cursos/personal-trainer"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm"
              >
                Personal Trainer
              </Link>
              <Link
                href="/cursos/enfermeria"
                className="block text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm"
              >
                Enfermería Geriátrica
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-[#009c48]" />
                <span className="text-gray-300 dark:text-gray-400">+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-[#009c48]" />
                <span className="text-gray-300 dark:text-gray-400">info@prolabeducativa.com.ar</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-[#009c48] mt-0.5" />
                <span className="text-gray-300 dark:text-gray-400">
                  Av. Corrientes 1234
                  <br />
                  CABA, Buenos Aires
                </span>
              </div>
            </div>
            <Button
              className="bg-[#009c48] hover:bg-[#007a38] text-white w-full text-sm sm:text-base py-2 sm:py-3"
              onClick={() => window.open("https://campus.prolabeducativa.com", "_blank")}
            >
              Campus Virtual
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-600 dark:border-gray-700 py-6">
          <div className="text-center">
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Pro-Lab Educativa. Todos los derechos reservados. Desarrollado por{" "}
              <a
                href="https://nexiumsolutions.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009c48] hover:text-[#007a38] transition-colors underline"
              >
                Nexium Solutions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
