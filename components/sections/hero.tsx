"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="none"
          volume={0}
          onLoadedData={(e) => {
            e.currentTarget.muted = true
            e.currentTarget.volume = 0
          }}
          onPlay={(e) => {
            e.currentTarget.muted = true
            e.currentTarget.volume = 0
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6 sm:space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-[#009c48] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Certificación Nacional e Internacional</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transforma tu Futuro con
                <span className="block text-[#009c48]">Pro-Lab Educativa</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                Formación práctica y especializada para mujeres que buscan una salida laboral concreta. Aprende haciendo
                con certificaciones reconocidas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#009c48]" />
                  <span className="text-sm">Clases en Vivo + Grabadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#009c48]" />
                  <span className="text-sm">Profesores Expertos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#009c48]" />
                  <span className="text-sm">95% Inserción Laboral</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-[#009c48] hover:bg-[#007a38] text-white border-0 group w-full sm:w-auto"
                >
                  Ver Cursos Disponibles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#023a5d] dark:hover:text-[#011d2e] w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => {
            // Buscar la siguiente sección después del hero
            const heroSection = document.querySelector('section[class*="min-h-screen"]');
            const nextSection = heroSection?.nextElementSibling as HTMLElement;
            
            if (nextSection) {
              nextSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            } else {
              // Fallback: buscar cualquier sección que no sea hero
              const sections = document.querySelectorAll('section');
              const nonHeroSection = Array.from(sections).find(section => 
                !section.className.includes('min-h-screen') && 
                !section.className.includes('hero')
              ) as HTMLElement;
              
              if (nonHeroSection) {
                nonHeroSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }
          }}
          className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">
            Descubre más
          </span>
          <div className="relative">
            <ChevronDown 
              className="w-8 h-8 animate-bounce" 
              strokeWidth={1.5}
            />
            <ChevronDown 
              className="w-8 h-8 absolute top-0 left-0 animate-bounce opacity-50" 
              strokeWidth={1.5}
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </button>
      </div>
    </section>
  )
}
