"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Los cursos tienen validez oficial?",
    answer:
      "Sí, todos nuestros cursos cuentan con certificación nacional a través de la Cámara Argentina de Capacitación y Profesionalización, y certificación internacional mediante O.I.E.P. y la Comisión Psicosocial Latinoamericana.",
  },
  {
    question: "¿Puedo estudiar si trabajo full-time?",
    answer:
      "Absolutamente. Nuestras clases se dictan en vivo pero quedan grabadas para que puedas verlas cuando tengas tiempo. Además, ofrecemos horarios flexibles para adaptarnos a tu rutina laboral.",
  },
  {
    question: "¿Hay garantía de inserción laboral?",
    answer:
      "Si bien no podemos garantizar trabajo, nuestro 95% de inserción laboral se debe a que trabajamos con empresas aliadas, tenemos una bolsa de trabajo activa y te preparamos con habilidades realmente demandadas en el mercado.",
  },
  {
    question: "¿Cuánto duran los cursos?",
    answer:
      "Los cursos varían entre 2 y 6 meses dependiendo de la especialización. Son intensivos y prácticos, diseñados para que salgas preparada para trabajar en el menor tiempo posible.",
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer:
      "Sí, tenemos diferentes opciones de financiamiento y planes de pago para que puedas acceder a la formación sin que sea una carga económica. Consultanos por WhatsApp para conocer las opciones disponibles.",
  },
  {
    question: "¿Los certificados sirven para trabajar en el exterior?",
    answer:
      "Sí, nuestros certificados tienen aval internacional a través de O.I.E.P. y la Comisión Psicosocial Latinoamericana, lo que te permite trabajar en cualquier país de Latinoamérica y muchos otros países que reconocen estas certificaciones.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors bg-white dark:bg-gray-800"
        onClick={onToggle}
      >
        <span className="font-medium text-[#023a5d] dark:text-white text-sm sm:text-base pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#009c48] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#009c48] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4 bg-white dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Resolvé tus dudas sobre nuestros cursos, certificaciones y metodología de estudio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
