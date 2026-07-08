"use client"

import { useState } from "react"
import { CheckCircle, PlayCircle, X } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import type { SanitySiteSettings } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function About({ settings }: { settings?: SanitySiteSettings | null }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const videoUrl = settings?.about?.video?.url || "/material/video2.MP4";
  return (
    <section id="about-section" className="relative py-16 sm:py-20 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          {/* Left Content */}
          <FadeIn direction="right">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/20 px-4 py-2 rounded-full text-sm font-medium font-body">
                  {settings?.about?.subtitle || "¿Quiénes Somos?"}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-display">
                  <span className="text-prolab-black dark:text-white whitespace-pre-wrap">
                    {settings?.about?.title || "Aprendé haciendo,\nno solo escuchando"}
                  </span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body whitespace-pre-wrap">
                  {settings?.about?.description || "En Pro-Lab Educativa formamos profesionales con herramientas prácticas y experiencia aplicada, listos para resolver desafíos reales en el mundo laboral."}
                </p>
              </div>

              <div className="space-y-4">
                {(settings?.about?.features || [
                  "Cámara Argentina de Capacitación y Profesionalización",
                  "O.I.E.P. (Organización Internacional de Educación Profesional)",
                  "Comisión Psicosocial Latinoamericana (CPL)",
                  "Clases en Vivo + Grabadas: flexibilidad total para estudiar a tu ritmo"
                ]).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-prolab-violet mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-200 font-body">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div 
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setVideoModalOpen(true)}
                role="button"
                aria-label="Reproducir video institucional"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setVideoModalOpen(true)}
              >
                <img
                  src={settings?.about?.image ? urlForImage(settings.about.image).url() : "/5.jpg"}
                  alt={settings?.about?.title ? `Imagen de ${settings.about.title}` : "Estudiantes en Pro-Lab Educativa"}
                  className="w-full h-96 sm:h-[26rem] md:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay for better text contrast & dimming on hover */}
                <div className="absolute inset-0 bg-prolab-black/30 group-hover:bg-prolab-black/40 transition-colors duration-300"></div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-xl" aria-hidden="true" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Modal para ver el Video */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-none overflow-hidden sm:rounded-xl">
          <DialogTitle className="sr-only">Video Institucional</DialogTitle>
          <div className="relative w-full aspect-video flex items-center justify-center bg-black group/video">
            {videoModalOpen && (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
                aria-label="Reproductor de video institucional"
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