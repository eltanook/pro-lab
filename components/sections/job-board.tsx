"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Briefcase, TrendingUp, Users } from "lucide-react"

export default function JobBoard() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <img
              src="/4.jpg"
              alt="Bolsa de trabajo"
              className="rounded-2xl w-full border border-gray-200 dark:border-gray-700 object-cover"
              style={{ maxHeight: '420px', minHeight: '420px', height: '420px' }}
            />
            <div className="absolute -top-6 -right-6 bg-[#009c48] text-white p-4 rounded-xl border border-[#009c48]">
              <Briefcase className="w-8 h-8 mb-2" />
              <div className="text-lg font-bold">500+</div>
              <div className="text-xs">ofertas laborales</div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-[#009c48]/10 text-[#009c48] px-4 py-2 rounded-full text-sm font-medium">
                Bolsa de Trabajo
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white leading-tight">
                Tu próximo trabajo
                <span className="text-[#009c48]"> te está esperando</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Accedé a nuestra bolsa de trabajo exclusiva con ofertas laborales de empresas aliadas que buscan
                profesionales con nuestras certificaciones.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-[#009c48] mb-2" />
                <div className="text-lg sm:text-xl font-bold text-[#023a5d] dark:text-white">95%</div>
                <div className="text-xs sm:text-xs text-gray-600 dark:text-gray-400">Inserción laboral</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <Users className="w-8 h-8 mx-auto text-[#009c48] mb-2" />
                <div className="text-xl font-bold text-[#023a5d] dark:text-white">200+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Empresas aliadas</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <Briefcase className="w-8 h-8 mx-auto text-[#009c48] mb-2" />
                <div className="text-xl font-bold text-[#023a5d] dark:text-white">500+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Ofertas activas</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#009c48] hover:bg-[#007a38] text-white"
              onClick={() => window.open("https://bolsadetrabajo.prolabeducativa.com", "_blank")}
            >
              Acceder a Bolsa de Trabajo
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
