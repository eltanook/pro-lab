"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

const certifications = [
  "Cámara Argentina de Capacitación y Profesionalización",
  "O.I.E.P. (Organización Internacional de Educación Profesional)",
  "Comisión Psicosocial Latinoamericana (CPL)",
]

export default function Certifications() {
  const [showPDF, setShowPDF] = useState(false)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-[#023a5d]/10 dark:bg-gray-700/50 text-[#023a5d] dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-[#023a5d]/20 dark:border-gray-600">
                Certificaciones Oficiales
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white leading-tight">
                Tus Certificados Tienen
                <span className="text-[#009c48]"> Validez Nacional e Internacional</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Todos nuestros programas están respaldados por organismos oficiales que garantizan el reconocimiento
                profesional de tu formación tanto en Argentina como en el exterior.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#009c48] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-[#023a5d] dark:text-white text-sm sm:text-base">{cert}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setShowPDF(!showPDF)}
                className="bg-[#023a5d] dark:bg-gray-700 hover:bg-[#034a70] dark:hover:bg-gray-600 text-white border-0 w-full sm:w-auto"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPDF ? "Ocultar" : "Ver"} Certificados
              </Button>

              <Button
                variant="outline"
                className="border-[#009c48] text-[#009c48] hover:bg-[#009c48] hover:text-white dark:border-[#009c48] dark:text-[#009c48] w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar PDF
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <img
                src="/placeholder.svg?height=600&width=450"
                alt="Certificado Pro-Lab Educativa"
                className="w-full rounded-lg border border-gray-100 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
