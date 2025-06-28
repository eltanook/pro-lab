"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Play, ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-prolab-black overflow-hidden">
      {/* Video de fondo con attachment fixed */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-prolab-black/0 dark:bg-prolab-black/10"></div>
      </div>
      
      {/* Máscara para ocultar el video después del hero */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="h-full w-full bg-transparent"></div>
      </div>

      {/* Efecto de fondo simple y profesional */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-prolab-violet/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left space-y-6 sm:space-y-8">
            {/* Badge de estado más sobrio */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <div className="w-2 h-2 bg-prolab-violet rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-body font-medium">Inscripciones Abiertas 2024</span>
            </div>

            {/* Título principal más profesional */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight">
                <span className="block text-white">Pro-Lab Educativa</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-heading font-medium leading-relaxed">
                Formación Laboral con{" "}
                <span className="text-prolab-violet font-bold">Certificación Nacional</span>
              </p>
            </div>

            {/* Características destacadas con estilo más serio */}
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet" />
                <span className="text-gray-200 font-body">Certificaciones avaladas nacional e internacionalmente</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet" />
                <span className="text-gray-200 font-body">Modalidad online con clases en vivo</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <CheckCircle className="w-5 h-5 text-prolab-violet" />
                <span className="text-gray-200 font-body">Más de 95% de inserción laboral</span>
              </div>
            </div>

            {/* Botones más profesionales y consistentes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4">
              <Button
                size="lg"
                className="bg-prolab-violet hover:bg-prolab-violet/80 text-white border-0 group w-full sm:w-auto font-body font-semibold text-lg px-8 py-4"
                onClick={() => (window.location.href = "/cursos")}
              >
                Ver Cursos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-prolab-violet w-full sm:w-auto font-body font-semibold text-lg px-8 py-4"
                onClick={() => (window.location.href = "/contacto")}
              >
                <Play className="w-4 h-4 mr-2" />
                Conocer Más
              </Button>
            </div>
          </div>

          {/* Imagen/Gráfico del lado derecho más serio - Oculta en móvil */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <img
                src="/3.jpg"
                alt="Estudiantes de Pro-Lab Educativa"
                className="w-full rounded-2xl object-cover"
                style={{ height: "400px" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-prolab-violet text-white p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold font-display text-white">1000+</div>
                <div className="text-sm text-gray-200 font-body">Egresados Exitosos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de scroll hacia abajo - Reimplementado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNextSection}
          className="group bg-gray-800/50 backdrop-blur-md hover:bg-gray-700/60 border border-gray-600/50 rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
          aria-label="Descubre más contenido"
        >
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm font-medium">Descubre más</span>
            <ChevronDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  )
}
