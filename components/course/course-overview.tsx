import { CheckCircle, Star } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseOverviewProps {
  course: Course
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white font-display">
              Resumen del Curso
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-prolab-black dark:text-white font-heading">Objetivos Del Curso</h3>
              <ul className="space-y-3">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-prolab-pink mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-body">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-prolab-black dark:text-white mb-4 font-heading">
                Información Del Curso
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-body">Duración:</span>
                  <span className="font-semibold text-prolab-violet dark:text-white font-body">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-body">Modalidad:</span>
                  <span className="font-semibold text-prolab-violet dark:text-white font-body">{course.modality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-body">Estudiantes:</span>
                  <span className="font-semibold text-prolab-violet dark:text-white font-body">{course.students}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 font-body">Valoración:</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-prolab-violet dark:text-white font-display">{course.rating}/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
