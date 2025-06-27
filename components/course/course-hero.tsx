import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Award } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseHeroProps {
  course: Course
}

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={course.heroImage || "/placeholder.svg"}
          alt={`${course.title} background`}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-4">
              <Badge className="bg-[#009c48] hover:bg-[#007a38] text-white">{course.category}</Badge>
              {course.popular && (
                <Badge variant="outline" className="border-white text-white">
                  Más Elegido
                </Badge>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {course.title}
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#009c48]" />
                <div>
                  <div className="text-sm opacity-80">Duración</div>
                  <div className="font-semibold">{course.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[#009c48]" />
                <div>
                  <div className="text-sm opacity-80">Modalidad</div>
                  <div className="font-semibold">{course.modality}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#009c48]" />
                <div>
                  <div className="text-sm opacity-80">Estudiantes</div>
                  <div className="font-semibold">{course.students}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <div>
                  <div className="text-sm opacity-80">Rating</div>
                  <div className="font-semibold">{course.rating}/5</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button size="lg" className="bg-[#009c48] hover:bg-[#007a38] text-white w-full sm:w-auto">
                Inscribirme Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#023a5d] w-full sm:w-auto"
              >
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
