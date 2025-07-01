"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { Award } from "lucide-react"
import Image from "next/image"

const certifications = [
  "Cámara Argentina de Capacitación y Profesionalización",
  "Organización Internacional de Educación Profesional (O.I.E.P.)",
  "Comisión Psicosocial Latinoamericana (CPL)",
]

const certificateImages = [
  {
    src: "/certificados/MUESTRA-CERTIFICADO-CAMARA-ARGENTINA_page-0001.webp",
    alt: "Certificado Cámara Argentina de Capacitación y Profesionalización",
    title: "Cámara Argentina"
  },
  {
    src: "/certificados/Certificado CPL.png",
    alt: "Certificado Comisión Psicosocial Latinoamericana",
    title: "CPL"
  },
  {
    src: "/certificados/oiep-certificado.webp",
    alt: "Certificado Organización Internacional de Educación Profesional",
    title: "O.I.E.P."
  }
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

          {/* Carousel de Certificados */}
          <div className="relative">
            <Carousel 
              className="w-full max-w-2xl mx-auto"
              opts={{
                loop: true,
                align: "start"
              }}
            >
              <CarouselContent>
                {certificateImages.map((certificate, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={certificate.src}
                            alt={certificate.alt}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                        <div className="p-4 text-center bg-gray-50 dark:bg-gray-700">
                          <h4 className="font-semibold text-base text-prolab-black dark:text-white">
                            {certificate.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/10 hover:bg-prolab-violet hover:text-white" />
              <CarouselNext className="right-4 bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/10 hover:bg-prolab-violet hover:text-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
