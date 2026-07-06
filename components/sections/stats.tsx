"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Users, ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import type { SanityCourse } from "@/lib/sanity-queries"
import { urlForImage } from "@/sanity/lib/image"

export default function Stats({ courses }: { courses: SanityCourse[] }) {
  // Tomar los primeros 4 cursos del catálogo
  const featuredCourses = courses.slice(0, 4)

  return (
    <section className="relative py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border-prolab-violet/20 font-body">
              Los más demandados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">
              Cursos Más Elegidos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
              Descubrí los programas de formación con mayor demanda y mejores resultados de inserción laboral
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredCourses.map((course, idx) => (
            <FadeIn key={course._id} direction="up" delay={idx * 0.1} fullWidth>
              <Card
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-prolab-violet/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={course.heroImage ? urlForImage(course.heroImage).url() : "/placeholder.png"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-3">
                    <Badge variant="outline" className="mb-2 text-prolab-violet border-prolab-violet/30 font-body text-xs">
                      {course.category}
                    </Badge>
                    <h3 className="text-base font-bold text-prolab-black dark:text-white mb-2 font-heading leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-body line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-body">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span className="font-body">{course.students || "Online"}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link href={`/cursos/${course.slug.current}`}>
                      <Button
                        className="w-full bg-prolab-violet hover:bg-prolab-violet/80 text-white font-body font-semibold group/btn"
                        size="sm"
                      >
                        Ver Detalles
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
