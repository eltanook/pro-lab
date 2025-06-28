"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, BookOpen, Users, Award } from "lucide-react"

export default function About() {
  return (
    <section id="about-section" className="relative py-16 sm:py-20 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/20 px-4 py-2 rounded-full text-sm font-medium font-body">
                ¿Quiénes Somos?
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-display">
                <span className="text-prolab-black dark:text-white">No Nos Conformamos Con Transmitir Conocimientos:</span>{" "}
                <span className="text-prolab-black dark:text-white">Te Enseñamos Haciendo</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-body">
                En Pro-Lab Educativa, nuestras capacitaciones están diseñadas para que cada
                alumno termine sus estudios con herramientas prácticas, experiencia aplicada y la
                capacidad de resolver problemas reales en su campo laboral.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet mt-0.5" />
                <p className="text-gray-700 dark:text-gray-200 font-body">
                  Cámara Argentina de Capacitación y Profesionalización
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet mt-0.5" />
                <p className="text-gray-700 dark:text-gray-200 font-body">
                  O.I.E.P. (Organización Internacional de Educación Profesional)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet mt-0.5" />
                <p className="text-gray-700 dark:text-gray-200 font-body">
                  Comisión Psicosocial Latinoamericana (CPL)
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-prolab-violet hover:bg-prolab-violet/80 text-white font-body font-semibold"
              onClick={() => (window.location.href = "/contacto")}
            >
              Conocé Nuestros Avales
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
              <img
                src="/5.jpg"
                alt="Pro-Lab Educativa - Biblioteca"
                className="w-full h-80 sm:h-96 object-cover"
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-prolab-black/20"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-prolab-violet font-display">15+ años</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-body">de experiencia educativa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6 text-prolab-violet" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-heading">
              Clases en Vivo + Grabadas
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-body">
              Flexibilidad total para estudiar a tu ritmo sin perderte ningún contenido
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-prolab-violet" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-heading">
              Profesores Expertos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-body">
              Aprendé de profesionales activos en cada área de especialización
            </p>
          </div>

          <div className="text-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-prolab-violet/10 dark:bg-prolab-violet/20 rounded-lg flex items-center justify-center mx-auto">
              <Award className="w-6 h-6 text-prolab-violet" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-heading">
              Certificaciones Oficiales
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-body">
              Doble aval nacional e internacional para mayor inserción laboral
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
