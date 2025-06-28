"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Clock, Users, ArrowRight } from "lucide-react"
import { coursesData } from "@/lib/courses-data"

export default function FeaturedCourses() {
  // Obtener solo los cursos populares
  const featuredCourses = coursesData.filter((course) => course.popular)

  return (
    <section className="relative py-16 sm:py-20 bg-white dark:bg-gray-900 z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border-prolab-violet/20 font-body">
            Los más demandados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">Cursos Más Elegidos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Descubre los programas de formación con mayor demanda y mejores resultados de inserción laboral
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {featuredCourses.map((course) => (
            <Card
              key={course.slug}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-prolab-violet/30 transition-all duration-300 relative flex flex-col"
            >

              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={course.heroImage}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2 text-prolab-violet border-prolab-violet/30 font-body">
                    {course.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-prolab-black dark:text-white mb-2 font-heading">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-body">{course.description}</p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-body">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-body">{course.students}</span>
                  </div>
                </div>



                <div className="flex gap-3 mt-auto pt-4">
                  <Link href={`/cursos/${course.slug}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-prolab-violet text-prolab-violet hover:bg-prolab-violet hover:text-white font-body font-semibold"
                    >
                      Consultar
                    </Button>
                  </Link>
                  <Link href={`/cursos/${course.slug}`} className="flex-1">
                    <Button className="bg-prolab-violet hover:bg-prolab-violet/80 text-white w-full font-body font-semibold">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}
