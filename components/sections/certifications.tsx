"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import FadeIn from "@/components/ui/fade-in"
import type { SanitySiteSettings } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Maximize2, PlayCircle, X } from "lucide-react"

export default function Certifications({ settings }: { settings?: SanitySiteSettings | null }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)

  const handleOpenModal = (index: number) => {
    setInitialSlide(index)
    setModalOpen(true)
  }
  const certifications = settings?.certifications?.list || [
    "Cámara Argentina de Capacitación y Profesionalización",
    "Organización Internacional de Educación Profesional (O.I.E.P.)",
    "Comisión Psicosocial Latinoamericana (CPL)",
  ]

  const galleryItems = settings?.certifications?.gallery?.length 
    ? settings.certifications.gallery.map((item: any) => ({
        url: urlForImage(item).url(),
      }))
    : [];
    
  const videoUrl = settings?.certifications?.video?.url || "/material/video2.MP4";
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-800 relative overflow-hidden z-10">
      {/* Efecto de fondo sutil y profesional */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prolab-violet/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cambiado a 12 columnas */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Carrusel de Certificados a la Izquierda (en desktop) - 5 columnas */}
          <div className="relative order-2 lg:order-1 lg:col-span-5 px-8 sm:px-12">
            <FadeIn direction="right" delay={0.2}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div 
                        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 group cursor-pointer transition-shadow hover:shadow-lg" 
                        onClick={() => handleOpenModal(index)}
                      >
                        <div className="aspect-[4/3] relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
                          <Image
                            src={item.url}
                            alt={`Certificado ${index + 1}`}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                          <div className="absolute inset-0 bg-prolab-violet/0 group-hover:bg-prolab-violet/10 transition-colors duration-300 flex items-center justify-center z-10">
                            <Maximize2 className="text-prolab-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md w-10 h-10" />
                          </div>
                        </div>
                        <div className="p-4 text-center bg-gray-50 dark:bg-gray-700">
                          <h4 className="font-semibold text-base text-prolab-black dark:text-white">
                            {certifications[index % certifications.length] || "Certificación Oficial"}
                          </h4>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
                <div className="flex justify-center sm:hidden gap-4 mt-4">
                  <CarouselPrevious className="static translate-y-0 translate-x-0 bg-white" />
                  <CarouselNext className="static translate-y-0 translate-x-0 bg-white" />
                </div>
              </Carousel>
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

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button
                  size="lg"
                  className="bg-prolab-violet hover:bg-prolab-violet/80 text-white w-full sm:w-auto font-body font-semibold"
                  onClick={() => (window.location.href = "/cursos")}
                >
                  {settings?.certifications?.buttonText || "Ver Cursos Certificados"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-body font-semibold border-prolab-violet text-prolab-violet hover:bg-prolab-violet/5 gap-2"
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Abrir video de presentación de las certificaciones"
                >
                  <PlayCircle className="w-5 h-5" aria-hidden="true" />
                  Ver Presentación
                </Button>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>

      {/* Modal para ver Certificados en grande */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-2 sm:p-6 bg-white dark:bg-gray-900 border-none flex flex-col">
          <DialogTitle className="sr-only">Visor de Certificados</DialogTitle>
          <div className="flex-1 w-full relative px-2 sm:px-12 flex items-center justify-center min-h-0">
            {modalOpen && (
              <Carousel
                opts={{
                  align: "center",
                  startIndex: initialSlide,
                  loop: true,
                }}
                className="w-full h-full flex flex-col justify-center"
              >
                <CarouselContent>
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full flex flex-col items-center justify-center p-2">
                        <div className="relative w-full aspect-[4/3] max-h-[70vh]">
                          <Image
                            src={item.url}
                            alt={`Certificado ${index + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                          />
                        </div>
                        <h4 className="mt-6 font-semibold text-lg sm:text-xl text-prolab-black dark:text-white text-center">
                          {certifications[index % certifications.length] || "Certificación Oficial"}
                        </h4>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
                <div className="flex justify-center sm:hidden gap-4 mt-4">
                  <CarouselPrevious className="static translate-y-0 translate-x-0 bg-gray-100 dark:bg-gray-800" />
                  <CarouselNext className="static translate-y-0 translate-x-0 bg-gray-100 dark:bg-gray-800" />
                </div>
              </Carousel>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal para ver el Video */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-none overflow-hidden sm:rounded-xl">
          <DialogTitle className="sr-only">Video de Certificaciones</DialogTitle>
          <div className="relative w-full aspect-video flex items-center justify-center bg-black group/video">
            {videoModalOpen && (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
                aria-label="Reproductor de video de certificaciones"
              >
                Tu navegador no soporta el formato de video.
              </video>
            )}
            <DialogClose className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors opacity-100 focus:outline-none focus:ring-2 focus:ring-white">
              <X className="w-6 h-6" />
              <span className="sr-only">Cerrar video</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
