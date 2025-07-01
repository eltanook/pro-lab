"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Award, Play } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseHeroProps {
  course: Course
}

export default function CourseHero({ course }: CourseHeroProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa conocer más sobre el curso "${course.title}" de Pro-Lab Educativa. ¿Podrían brindarme información sobre precios y modalidades de pago?`
    )
    window.open(`https://wa.me/5493425030140?text=${message}`, "_blank")
  }

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden z-10">
      {/* Efectos de fondo modernos */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Badge className="bg-prolab-violet/20 text-white border-white/20 font-body">{course.category}</Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-display">
                {course.title}
              </h1>
              
              <p className="text-lg text-gray-200 leading-relaxed font-body">
                {course.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white font-body">
                  <strong>Duración:</strong> {course.duration}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-body">
                  <strong>Modalidad:</strong> {course.modality}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-body">
                  <strong>Estudiantes:</strong> {course.students}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-200 font-body">
                <strong className="text-white">{course.rating}/5</strong> (150+ reviews)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-prolab-violet hover:bg-prolab-violet/80 text-white w-full sm:w-auto font-body font-semibold"
                onClick={handleWhatsAppClick}
              >
                Inscribirme Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-prolab-violet w-full sm:w-auto font-body font-semibold"
                onClick={() => window.open(`mailto:info@prolabeducativa.com.ar?subject=Información sobre ${course.title}`, '_blank')}
              >
                <Play className="w-4 h-4 mr-2" />
                Más Información
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <img
                src={course.heroImage}
                alt={course.title}
                className="w-full rounded-xl object-cover"
                style={{ height: "400px" }}
              />
              <div className="absolute -bottom-4 -right-4 bg-prolab-violet text-white p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-white">{course.price}</div>
                  <div className="text-sm text-gray-200 font-body">Precio del curso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
