"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 1000, suffix: "+", label: "Estudiantes Egresadas", description: "mujeres capacitadas exitosamente" },
  { value: 15, suffix: "+", label: "Cursos Especializados", description: "en áreas de alta demanda laboral" },
  { value: 95, suffix: "%", label: "Inserción Laboral", description: "de nuestras graduadas trabajan" },
  { value: 3, suffix: "", label: "Certificaciones Oficiales", description: "nacional e internacional" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#023a5d] dark:text-white">
      {count}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#009c48]/5 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white mb-4">
            Descubrí por qué Miles de Mujeres Eligen
            <span className="text-[#009c48]"> Pro-Lab Educativa</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nuestros números reflejan el compromiso con la excelencia educativa y la inserción laboral efectiva de
            nuestras estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#009c48]/30 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-base sm:text-lg font-semibold text-[#023a5d] dark:text-white mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
