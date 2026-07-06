"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import FadeIn from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { SanityRepresentante } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"

export default function RepresentantesGrid({ representantes }: { representantes: SanityRepresentante[] }) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border-prolab-violet/20 font-body">
              Atención Personalizada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">
              Nuestros Representantes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
              Contactate directamente con el representante de tu zona para resolver todas tus dudas e inscribirte.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {representantes.map((rep, idx) => (
            <FadeIn key={rep._id} direction="up" delay={idx * 0.08} fullWidth>
              <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-prolab-violet/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                {/* Photo / Header */}
                <div className="relative h-56 sm:h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  {rep.image ? (
                    <Image
                      src={urlForImage(rep.image).url()}
                      alt={`Representante ${rep.name}`}
                      fill
                      className={`object-cover ${rep.sede === 'Sede 4' ? 'object-center' : 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-prolab-violet to-prolab-blue flex items-center justify-center">
                      <span className="text-white text-5xl font-bold font-display">
                        {rep.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 text-white">
                    <MapPin className="w-4 h-4 text-prolab-violet shrink-0" />
                    <span className="font-semibold text-base font-heading drop-shadow-md truncate">
                      {rep.sede} · {rep.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-prolab-black dark:text-white mb-1 font-display">
                      {rep.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                      Representante Oficial
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 mb-6">
                    <div className="w-8 h-8 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-prolab-violet" />
                    </div>
                    <span className="font-medium font-body">{rep.phone}</span>
                  </div>

                  <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="default"
                      className="w-full bg-[#25D366] hover:bg-[#20b958] text-white font-body font-semibold transition-colors flex items-center justify-center gap-2"
                      onClick={() => window.open(`https://wa.me/549${rep.phone}`, '_blank')}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
