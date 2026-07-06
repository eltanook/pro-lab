"use client"

import { CheckCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import type { SanitySiteSettings } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"

export default function About({ settings }: { settings?: SanitySiteSettings | null }) {
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
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={settings?.about?.image ? urlForImage(settings.about.image).url() : "/5.jpg"}
                  alt={settings?.about?.title || "Pro-Lab Educativa - Biblioteca"}
                  className="w-full h-96 sm:h-[26rem] object-cover"
                />
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-prolab-black/20"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}