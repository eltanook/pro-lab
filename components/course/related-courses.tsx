import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface RelatedCoursesProps {
  courses: Course[]
}

export default function RelatedCourses({ courses }: RelatedCoursesProps) {
  if (courses.length === 0) return null

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white mb-4">
            Cursos Relacionados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Otros cursos que podrían interesarte para complementar tu formación profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-[#009c48]/30 transition-all duration-300 flex flex-col"
            >
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
                    {course.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-[#023a5d] dark:text-white mb-2">{course.title}</h3>
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

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <Link href={`/cursos/${course.slug}`}>
                    <Button className="w-full bg-[#009c48] hover:bg-[#007a38] text-white">Ver Curso</Button>
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
