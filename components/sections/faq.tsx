"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "¿Los cursos tienen certificación oficial?",
    answer:
      "Sí, todos nuestros cursos están certificados por Pro-Lab Educativa con validez nacional e internacional, avalados por organismos oficiales de capacitación profesional.",
  },
  {
    question: "¿Puedo estudiar si trabajo o tengo responsabilidades familiares?",
    answer:
      "Absolutamente. Nuestros cursos están diseñados con modalidad online flexible. Las clases en vivo se graban para que puedas verlas cuando tengas tiempo disponible.",
  },
  {
    question: "¿Cuánto tiempo necesito dedicar por semana?",
    answer:
      "Recomendamos entre 4-6 horas semanales. Esto incluye clases en vivo, estudio del material y realización de actividades prácticas.",
  },
  {
    question: "¿Ofrecen ayuda para conseguir trabajo después del curso?",
    answer:
      "Sí, tenemos una bolsa de trabajo exclusiva para egresados, networking con empresas del sector y orientación profesional para potenciar tu inserción laboral.",
  },

  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Sí, ofrecemos diferentes planes de financiación y opciones de pago. Contactanos para conocer las modalidades disponibles según tu situación.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 bg-prolab-violet/5 text-prolab-violet border border-prolab-violet/10 font-body">
            Resolvemos tus dudas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white mb-4 font-display">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-body">
            Encuentra respuestas a las consultas más comunes sobre nuestros cursos y metodología de enseñanza
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-prolab-pink/30"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-prolab-violet dark:text-white text-sm sm:text-base pr-4 font-body">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-prolab-pink flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-prolab-pink flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
