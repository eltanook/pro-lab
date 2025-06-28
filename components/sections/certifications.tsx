"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle, Globe } from "lucide-react"

const certifications = [
  "Cámara Argentina de Capacitación y Profesionalización",
  "Organización Internacional de Educación Profesional (O.I.E.P.)",
  "Comisión Psicosocial Latinoamericana (CPL)",
]

export default function Certifications() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-800 relative overflow-hidden z-10">
      {/* Efecto de fondo sutil y profesional */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prolab-violet/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="outline" className="bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/10 font-body">
                Certificaciones Oficiales
              </Badge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white leading-tight font-display">
                Certificaciones Con{" "}
                <span className="text-prolab-black dark:text-gray-300"> Validez Nacional E Internacional</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body">
                Nuestros cursos están avalados por los organismos más reconocidos del sector educativo y profesional,
                garantizando la validez y reconocimiento de tu certificación en Argentina y el extranjero.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-prolab-violet rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-prolab-black dark:text-white text-sm sm:text-base font-body">{cert}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-prolab-violet hover:bg-prolab-violet/80 text-white w-full sm:w-auto font-body font-semibold"
                onClick={() => (window.location.href = "/cursos")}
              >
                Ver Cursos Certificados
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-prolab-violet text-prolab-violet hover:bg-prolab-violet hover:text-white w-full sm:w-auto font-body font-semibold"
                onClick={() => (window.location.href = "/contacto")}
              >
                Consultar Validez
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-prolab-violet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-prolab-violet" />
                </div>
                <h3 className="text-xl font-bold text-prolab-black dark:text-white mb-2 font-heading">
                  Certificación Pro-Lab Educativa
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-body">
                  Validez Nacional e Internacional
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600">
                  <CheckCircle className="w-5 h-5 text-prolab-violet" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-body">Reconocimiento oficial</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600">
                  <Globe className="w-5 h-5 text-prolab-violet" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-body">Validez internacional</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600">
                  <Award className="w-5 h-5 text-prolab-violet" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-body">Certificado digital + físico</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-prolab-violet/5 rounded-lg border border-prolab-violet/10">
                <p className="text-center text-sm text-prolab-violet dark:text-white font-medium font-body">
                  💎 Todos nuestros certificados incluyen código QR de verificación digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
