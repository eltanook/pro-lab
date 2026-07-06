"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Award, Users, LucideIcon } from "lucide-react"
import type { SanitySiteSettings } from "@/lib/sanity-queries"

export default function ContactBenefits({ settings }: { settings?: SanitySiteSettings | null }) {
  const defaults = {
    benefits: [
      { title: "Respuesta Inmediata" },
      { title: "Asesoramiento Personalizado" },
      { title: "Seguimiento Continuo" }
    ]
  }
  const contactPage = settings?.contactPage || defaults
  const iconMap: Record<number, LucideIcon> = { 0: CheckCircle, 1: Award, 2: Users }

  return (
    <Card className="p-6 bg-prolab-violet dark:bg-gray-800 text-white border-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {contactPage.benefits?.map((benefit, index) => {
          const Icon = iconMap[index] || CheckCircle
          return (
            <div key={index} className="flex items-center space-x-3 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base">{benefit.title}</h4>
            </div>
          )
        })}
      </div>
    </Card>
  )
}