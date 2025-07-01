"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Award, Users } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Respuesta Inmediata",
  },
  {
    icon: Award,
    title: "Asesoramiento Personalizado",
  },
  {
    icon: Users,
    title: "Seguimiento Continuo",
  },
]

export default function ContactBenefits() {
  return (
    <Card className="p-6 bg-prolab-violet dark:bg-gray-800 text-white border-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="w-10 h-10 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
              <benefit.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-sm sm:text-base">{benefit.title}</h4>
          </div>
        ))}
      </div>
    </Card>
  )
} 