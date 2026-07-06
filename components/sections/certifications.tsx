"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import FadeIn from "@/components/ui/fade-in"
import type { SanitySiteSettings } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"

export default function Certifications({ settings }: { settings?: SanitySiteSettings | null }) {
  const certifications = settings?.certifications?.list || [
    "Cámara Argentina de Capacitación y Profesionalización",
    "Organización Internacional de Educación Profesional (O.I.E.P.)",
    "Comisión Psicosocial Latinoamericana (CPL)",
  ]
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-800 relative overflow-hidden z-10">
      {/* Efecto de fondo sutil y profesional */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prolab-violet/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cambiado a 12 columnas */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Certificado único a la Izquierda (en desktop) - 5 columnas */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={settings?.certifications?.image ? urlForImage(settings.certifications.image).url() : "/certificados/MUESTRA-CERTIFICADO-CAMARA-ARGENTINA_page-0001.webp"}
                    alt="Certificado Oficial"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="p-4 text-center bg-gray-50 dark:bg-gray-700">
                  <h4 className="font-semibold text-base text-prolab-black dark:text-white">
                    {certifications[0] || "Certificación Oficial"}
                  </h4>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Texto a la Derecha (en desktop) - 7 columnas */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 lg:col-span-7">
            <FadeIn direction="left">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="outline" className="bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/10 font-body">
                  {settings?.certifications?.subtitle || "Certificación Oficial"}
                </Badge>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white leading-tight font-display whitespace-pre-wrap">
                  {settings?.certifications?.title || "Certificado Con Validez Nacional E Internacional"}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body whitespace-pre-wrap">
                  {settings?.certifications?.description || "Nuestros cursos están avalados por los organismos más reconocidos del sector educativo y profesional, garantizando el reconocimiento de tu certificación en Argentina y el extranjero."}
                </p>
              </div>

              <div className="space-y-4 mt-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-prolab-violet rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-prolab-black dark:text-white text-sm sm:text-base font-body">{cert}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-prolab-violet hover:bg-prolab-violet/80 text-white w-full sm:w-auto font-body font-semibold"
                  onClick={() => (window.location.href = "/cursos")}
                >
                  {settings?.certifications?.buttonText || "Ver Cursos Certificados"}
                </Button>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  )
}
