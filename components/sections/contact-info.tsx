"use client"

import { Card } from "@/components/ui/card"
import { Phone, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <Card className="p-6 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-bold text-prolab-black dark:text-white mb-4 font-heading">Contacto e Inscripciones</h3>
      <div className="space-y-4">
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-prolab-violet dark:text-prolab-violet" />
              <p className="font-semibold text-prolab-violet dark:text-prolab-violet">Administración General:</p>
            </div>
            <p>342-5030140 (Iván Sarla)</p>
          </div>
          
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-prolab-violet dark:text-prolab-violet" />
              <p className="font-semibold text-prolab-violet dark:text-prolab-violet">Administración Académica:</p>
            </div>
            <p>342-5039644 (Yesica Britos)</p>
          </div>
          
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-prolab-violet dark:text-prolab-violet" />
              <p className="font-semibold text-prolab-violet dark:text-prolab-violet">Certificaciones:</p>
            </div>
            <p>342-5428549 (Leonela Britos)</p>
          </div>

          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-prolab-violet dark:text-prolab-violet" />
              <p className="font-semibold text-prolab-violet dark:text-prolab-violet">Asesores Educativos:</p>
            </div>
            <p>342-4286894 (Nadia Lassig)</p>
            <p>342-4352731 (Martin Niz)</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-1">
            <Clock className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            <p className="font-medium">Horarios de Atención:</p>
          </div>
          <p>Lunes a Viernes: 9:00 a 18:00 hs</p>
          <p>Sábados: 9:00 a 13:00 hs</p>
        </div>
      </div>
    </Card>
  )
}
