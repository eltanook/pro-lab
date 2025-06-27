import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Briefcase, FileText } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseInfoProps {
  course: Course
}

export default function CourseInfo({ course }: CourseInfoProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Requirements */}
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-[#009c48]" />
              <h3 className="text-base sm:text-lg font-semibold text-[#023a5d] dark:text-white">Requisitos</h3>
            </div>
            <ul className="space-y-3">
              {course.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#009c48] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Benefits */}
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-[#009c48]" />
              <h3 className="text-base sm:text-lg font-semibold text-[#023a5d] dark:text-white">Beneficios</h3>
            </div>
            <ul className="space-y-3">
              {course.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#009c48] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Job Opportunities */}
          <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-3 mb-4">
              <Briefcase className="w-6 h-6 text-[#009c48]" />
              <h3 className="text-base sm:text-lg font-semibold text-[#023a5d] dark:text-white">Salida Laboral</h3>
            </div>
            <ul className="space-y-3">
              {course.jobOpportunities.map((job, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#009c48] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{job}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Certification */}
        <div className="mt-12 text-center">
          <Card className="p-6 sm:p-8 bg-gradient-to-r from-[#023a5d] to-[#034a70] dark:from-gray-800 dark:to-gray-900 text-white border-0 max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#009c48] mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold">Certificación Oficial</h3>
              <p className="text-gray-200 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                {course.certification}
              </p>
              <Button size="lg" className="bg-[#009c48] hover:bg-[#007a38] text-white mt-4 sm:mt-6 w-full sm:w-auto">
                Inscribirme Ahora
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
