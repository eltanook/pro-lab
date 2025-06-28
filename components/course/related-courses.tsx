import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Users, Star } from "lucide-react"
import { getRelatedCourses } from "@/lib/courses-data"
import type { Course } from "@/lib/courses-data"

interface RelatedCoursesProps {
  currentCourse: Course
}

export default function RelatedCourses({ currentCourse }: RelatedCoursesProps) {
  // Obtener cursos relacionados usando la función existente
  const relatedCourses = getRelatedCourses(currentCourse.slug)

  if (relatedCourses.length === 0) return null

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">
            Cursos Relacionados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
            Descubre otros cursos que podrían interesarte y complementar tu formación profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedCourses.map((course) => (
            <Card key={course.slug} 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-prolab-pink/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-prolab-violet/90 text-white border-prolab-violet font-body">
                    {course.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <Badge variant="outline" className="mb-2 text-prolab-pink border-prolab-pink dark:border-prolab-pink font-body">
                    {course.modality}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-prolab-black dark:text-white mb-2 font-heading">{course.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 font-body">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-prolab-violet" />
                      <span className="font-body">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-prolab-violet" />
                      <span className="font-body">{course.students}</span>
                    </div>
                  </div>
                  
                  
                </div>
                
                <Link href={`/cursos/${course.slug}`}>
                  <Button className="w-full bg-prolab-violet hover:bg-prolab-violet/80 text-white font-body font-semibold">Ver Curso</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
