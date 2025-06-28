"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Briefcase } from "lucide-react"

export default function JobBoard() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen de fondo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/1.jpg"
                alt="Profesional trabajando"
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Badge flotante */}
              <div className="absolute top-6 left-6 bg-prolab-violet text-white px-4 py-3 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <div>
                    <div className="font-bold text-lg">500+</div>
                    <div className="text-sm">ofertas laborales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de la derecha */}
          <div className="space-y-6">
            {/* Badge superior */}
            <div className="inline-block">
              <span className="bg-prolab-violet/10 dark:bg-prolab-violet/20 text-prolab-violet dark:text-prolab-violet px-3 py-1 rounded-full text-sm font-medium">
                Bolsa de Trabajo
              </span>
            </div>

            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Tu Próximo Trabajo{" "}
              <span className="text-prolab-violet">Te Está Esperando</span>
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Accedé a nuestra bolsa de trabajo exclusiva con ofertas laborales de empresas 
              aliadas que buscan profesionales con nuestras certificaciones.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-prolab-violet" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Inserción laboral</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-prolab-violet" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Empresas aliadas</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="w-6 h-6 text-prolab-violet" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Ofertas activas</div>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-prolab-violet hover:bg-prolab-violet/80 text-white px-8 py-3 text-lg font-semibold"
                onClick={() => (window.location.href = "/contacto")}
              >
                Acceder a Bolsa de Trabajo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
