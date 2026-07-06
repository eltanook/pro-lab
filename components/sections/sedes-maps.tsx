"use client"

import FadeIn from "@/components/ui/fade-in"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Instagram, Facebook } from "lucide-react"

export default function SedesMaps() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border-prolab-violet/20 font-body">
              Sede Central
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">
              Oficina Principal
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
              Acercate a nuestra sede central o contactanos por cualquiera de nuestros canales de comunicación.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">

              {/* Header */}
              <div className="bg-gradient-to-r from-prolab-violet to-prolab-blue p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Pro-Lab Educativa
                  </h3>
                </div>
                <p className="text-white/80 font-body text-sm ml-13">
                  Santo Tomé, Santa Fe — Argentina
                </p>
              </div>

              {/* Contact Info */}
              <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-5">
                {/* Dirección */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Dirección</p>
                    <p className="text-prolab-black dark:text-white font-body font-medium leading-snug">
                      Av. Ejercito Argentino 2515<br />
                      Primer Piso, Santo Tomé<br />
                      Santa Fe, Argentina
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Teléfono</p>
                    <a
                      href="tel:+543425030140"
                      className="text-prolab-black dark:text-white font-body font-medium hover:text-prolab-violet transition-colors"
                    >
                      3425 030140
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Email</p>
                    <a
                      href="mailto:direccion@prolabeducativa.com"
                      className="text-prolab-black dark:text-white font-body font-medium hover:text-prolab-violet transition-colors text-sm"
                    >
                      direccion@prolabeducativa.com
                    </a>
                  </div>
                </div>

                {/* Web */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Campus Virtual</p>
                    <a
                      href="https://prolabaulavirtual.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-prolab-black dark:text-white font-body font-medium hover:text-prolab-violet transition-colors"
                    >
                      prolabaulavirtual.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Instagram</p>
                    <a
                      href="https://instagram.com/prolab_educativa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-prolab-black dark:text-white font-body font-medium hover:text-prolab-violet transition-colors"
                    >
                      @prolab_educativa
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Facebook className="w-4 h-4 text-prolab-violet" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-1">Facebook</p>
                    <a
                      href="https://facebook.com/prolabEducativa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-prolab-black dark:text-white font-body font-medium hover:text-prolab-violet transition-colors"
                    >
                      Pro-Lab Educativa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
