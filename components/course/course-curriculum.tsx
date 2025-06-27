"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseCurriculumProps {
  course: Course
}

function CurriculumModule({
  module,
  topics,
  isOpen,
  onToggle,
}: {
  module: string
  topics: string[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors bg-white dark:bg-gray-800"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-3">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#009c48]" />
          <span className="font-medium text-[#023a5d] dark:text-white text-sm sm:text-base pr-2">{module}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#009c48] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#009c48] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4 bg-white dark:bg-gray-800">
          <ul className="space-y-2 ml-6 sm:ml-8">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm flex items-center space-x-2"
              >
                <div className="w-1.5 h-1.5 bg-[#009c48] rounded-full flex-shrink-0"></div>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function CourseCurriculum({ course }: CourseCurriculumProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12" style={{ backgroundColor: "#fff" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] mb-4">Plan de Estudios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conocé en detalle todo lo que vas a aprender en cada módulo del curso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {course.curriculum.map((item, index) => (
            <CurriculumModule
              key={index}
              module={item.module}
              topics={item.topics}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
