"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

interface StatCardProps {
  end: number
  label: string
  description: string
}

function StatCard({ end, label, description }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const increment = end / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, end])

  return (
    <div
      ref={ref}
      className="text-center bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-prolab-violet/20 transition-all duration-300"
    >
      <div ref={ref} className="text-4xl md:text-5xl font-bold text-prolab-violet dark:text-white font-display">
        {count}{label}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 font-body">{description}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden z-10">
      {/* Efecto de fondo sutil y profesional */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-prolab-violet/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border-prolab-violet/10 font-body">
            Resultados que hablan por sí solos
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">
            El Éxito De{" "}
            <span className="text-prolab-black dark:text-gray-300"> Pro-Lab Educativa</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Nuestros números reflejan el compromiso con la excelencia educativa y la inserción laboral exitosa de
            nuestros estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCard end={1000} label="+" description="Estudiantes Graduados" />
          <StatCard end={95} label="%" description="Inserción Laboral" />
          <StatCard end={15} label="+" description="Cursos Especializados" />
          <StatCard end={98} label="%" description="Satisfacción del Cliente" />
        </div>
      </div>
    </section>
  )
}
