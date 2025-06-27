"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"
import { coursesData } from "@/lib/courses-data"

const featuredCourses = [
  {
    title: "Diplomatura en Ciencias Criminalísticas",
    category: "Área Jurídica",
    description:
      "Análisis forense, investigación penal y técnicas periciales. Prepárate para trabajar en el sistema judicial.",
    duration: "6 meses",
    students: "150+ estudiantes",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    slug: "criminalistica",
  },
  {
    title: "Marketing Digital",
    category: "Marketing y Tecnología",
    description: "Domina redes sociales, publicidad online y SEO. El curso más demandado del momento.",
    duration: "4 meses",
    students: "300+ estudiantes",
    rating: 4.8,
    price: "Consultar",
    popular: true,
    slug: "marketing-digital",
  },
  {
    title: "Personal Trainer",
    category: "Salud y Deporte",
    description: "Entrenamiento funcional y planificación deportiva. Convertite en entrenadora profesional.",
    duration: "3 meses",
    students: "200+ estudiantes",
    rating: 4.9,
    price: "Consultar",
    popular: false,
    slug: "personal-trainer",
  },
]

export default function FeaturedCourses() {
  const handleWhatsAppClick = (courseTitle: string) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa conocer más sobre el curso "${courseTitle}" de Pro-Lab Educativa. ¿Podrían brindarme información sobre precios y modalidades de pago?`,
    )
    window.open(`https://wa.me/5491234567890?text=${message}`, "_blank")
  }

  const featuredWithImages = featuredCourses.map((fc) => {
    const full = coursesData.find((c) => c.slug === fc.slug)
    const customLabels = {
      "criminalistica": "Investigación Criminal",
      "marketing-digital": "Marketing Digital", 
      "personal-trainer": "Fitness & Salud"
    }
    return { 
      ...fc, 
      heroImage: full?.heroImage || "/placeholder.svg",
      customLabel: customLabels[fc.slug as keyof typeof customLabels] || fc.category
    }
  })

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white mb-4">Cursos Más Elegidos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nuestras especialidades con Mayor Demanda Laboral y Mejor Inserción en el Mercado de Trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredWithImages.map((course, index) => (
            <div
              key={index}
              className="bg-[#f3f4f6] dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-[#009c48]/30 transition-all duration-300 relative flex flex-col"
            >
              {course.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-[#009c48] hover:bg-[#007a38] text-white">Más Elegido</Badge>
                </div>
              )}

              <div className="h-48 relative">
                <img
                  src={course.heroImage}
                  alt={course.title + " hero"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 text-[#009c48] border-[#009c48] dark:border-[#009c48]">
                    {course.customLabel}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-[#023a5d] dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <Button
                    className="w-full sm:w-auto bg-[#023a5d] dark:bg-[#0f2537] text-white font-semibold rounded hover:bg-[#034a70] dark:hover:bg-[#0d1e2b] border-0 shadow-none"
                    onClick={() => handleWhatsAppClick(course.title)}
                  >
                    Consultar
                  </Button>
                  <Link href={`/cursos/${course.slug}`} className="w-full sm:w-auto">
                    <Button className="bg-[#009c48] hover:bg-[#007a38] text-white w-full">Más Info</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
