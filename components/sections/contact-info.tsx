"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

export default function ContactInfo() {
  return (
    <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 bg-prolab-violet dark:bg-gray-800 text-white border-0">
        <div className="space-y-3 sm:space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                <benefit.icon className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <h3 className="text-lg font-bold text-prolab-black dark:text-white mb-4 font-heading">Otras Formas De Contacto</h3>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start border-prolab-pink text-prolab-pink hover:bg-prolab-pink hover:text-white dark:border-prolab-pink dark:text-prolab-pink text-sm sm:text-base py-2 sm:py-3 font-body"
            onClick={() => window.open("https://wa.me/5491234567890", "_blank")}
          >
            WhatsApp: +54 9 11 1234-5678
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start border-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => (window.location.href = "mailto:info@prolabeducativa.com.ar")}
          >
            Email: info@prolabeducativa.com.ar
          </Button>

          <div className="text-sm text-gray-600 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="font-medium mb-1">Horarios de Atención:</p>
            <p>Lunes a Viernes: 9:00 a 18:00 hs</p>
            <p>Sábados: 9:00 a 13:00 hs</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
