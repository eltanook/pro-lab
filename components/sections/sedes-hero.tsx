"use client"

import FadeIn from "@/components/ui/fade-in"
import { MapPin, MessageCircle, Navigation, LucideIcon } from "lucide-react"
import type { SanitySiteSettings } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"

export default function SedesHero({ settings, sedesCount = 0 }: { settings?: SanitySiteSettings | null, sedesCount?: number }) {
  const defaults = {
    titlePart1: "Nuestros",
    titleHighlight: "Representantes",
    titlePart2: "y Sedes",
    subtitle: "Encontrá la sede más cercana o contactá con tu representante local para recibir asesoramiento personalizado al instante.",
    features: [
      { title: "Sedes Físicas", description: "Aulas equipadas para prácticas" },
      { title: "Contacto Directo", description: "Atención vía WhatsApp al instante" },
      { title: "Alcance Nacional", description: "Representantes en todo el país" }
    ]
  }
  const sedesHero = settings?.sedesHero || defaults
  const iconMap: Record<number, LucideIcon> = { 0: MapPin, 1: MessageCircle, 2: Navigation }

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image with fixed attachment to match courses-hero */}
      <div className="fixed inset-0 z-0">
        <img
          src={sedesHero.image ? urlForImage(sedesHero.image).url() : "/sedes-bg.png"}
          alt="Pro-Lab Educativa Sedes"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Simplified Dark Overlay to match courses-hero */}
        <div className="absolute inset-0 bg-prolab-black/60 dark:bg-prolab-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up" fullWidth>
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {sedesHero.titlePart1} <span className="text-prolab-violet">{sedesHero.titleHighlight}</span> {sedesHero.titlePart2}
              </h1>

              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {sedesHero.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {sedesHero.features?.slice(0, 3).map((feature, idx) => {
                const Icon = iconMap[idx] || MapPin
                return (
                  <div key={idx} className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm opacity-80 text-center">
                      {idx === 0 && sedesCount > 0 ? `Contamos con ${sedesCount} sedes activas` : feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
