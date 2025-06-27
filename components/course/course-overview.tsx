import { CheckCircle } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseOverviewProps {
  course: Course
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white">
                Sobre este Curso
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{course.overview}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#023a5d] dark:text-white">Objetivos del Curso</h3>
              <div className="space-y-3">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#009c48] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={course.heroImage}
              alt="Estudiantes en clase"
              className="rounded-2xl w-full border border-gray-200 dark:border-gray-700 object-cover"
              style={{ height: '420px' }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-[#023a5d] dark:text-white">{course.rating}/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Valoración promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
