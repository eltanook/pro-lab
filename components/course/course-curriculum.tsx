"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import type { Course } from "@/lib/courses-data"

interface CourseCurriculumProps {
  course: Course
}

export default function CourseCurriculum({ course }: CourseCurriculumProps) {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set())

  const toggleModule = (index: number) => {
    const newOpenModules = new Set(openModules)
    if (newOpenModules.has(index)) {
      newOpenModules.delete(index)
    } else {
      newOpenModules.add(index)
    }
    setOpenModules(newOpenModules)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">Plan De Estudios</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
              Descubre el contenido completo del curso y los módulos que te llevarán desde principiante hasta experto.
            </p>
          </div>

          <div className="space-y-4">
            {course.curriculum.map((curriculumItem, index) => (
              <Collapsible key={index} className="w-full">
                <CollapsibleTrigger
                  className="w-full bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-prolab-pink/30 transition-all duration-300 text-left"
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-prolab-pink" />
                      <span className="font-medium text-prolab-violet dark:text-white text-sm sm:text-base pr-2 font-body">{curriculumItem.module}</span>
                    </div>
                    {openModules.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-prolab-pink flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-prolab-pink flex-shrink-0" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700 mt-2">
                    <div className="space-y-3">
                      {curriculumItem.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-prolab-pink rounded-full flex-shrink-0 mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-body">
                              {topic}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
