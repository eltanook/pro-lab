"use client"

import { Card } from "@/components/ui/card"
import { Phone, Clock } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import type { SanitySiteSettings } from "@/lib/sanity-queries"

export default function ContactInfo({ settings }: { settings?: SanitySiteSettings | null }) {
  const defaultPhones = [
    { department: "Administración General", numbers: ["342-5030140 (Iván Sarla)"] },
    { department: "Administración Académica", numbers: ["342-5039644 (Yesica Britos)"] },
    { department: "Certificaciones", numbers: ["342-5428549 (Leonela Britos)"] },
    { department: "Asesores Educativos", numbers: ["342-4286894 (Nadia Lassig)", "342-4352731 (Martin Niz)"] }
  ]
  const phonesList = settings?.contact?.phonesList || defaultPhones

  const defaultSchedule = [
    "Lunes a Viernes: 9:00 a 18:00 hs",
    "Sábados: 9:00 a 13:00 hs"
  ]
  const scheduleList = settings?.contact?.schedule || defaultSchedule

  return (
    <FadeIn direction="left" delay={0.2} fullWidth>
      <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 h-full">
        <h3 className="text-lg font-bold text-prolab-black dark:text-white mb-4 font-heading">Contacto e Inscripciones</h3>
        <div className="space-y-4">
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
            {phonesList.map((item, idx) => (
              <div key={idx} className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-prolab-violet dark:text-prolab-violet" />
                  <p className="font-semibold text-prolab-violet dark:text-prolab-violet">{item.department}:</p>
                </div>
                {item.numbers.map((number, nIdx) => (
                  <p key={nIdx}>{number}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <p className="font-medium">Horarios de Atención:</p>
            </div>
            {scheduleList.map((time, idx) => (
              <p key={idx}>{time}</p>
            ))}
          </div>
        </div>
      </Card>
    </FadeIn>
  )
}
