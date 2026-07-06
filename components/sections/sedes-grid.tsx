"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"

const sedesData = [
  {
    id: 2,
    sede: "Sede 2",
    name: "Nicolás Roldán",
    location: "Santa Fe",
    phone: "3426268498",
    image: "/material/Sede 2 Nicolás Roldán Santa Fe tel 3426268498.jpeg",
  },
  {
    id: 4,
    sede: "Sede 4",
    name: "Gabriel Bernabé",
    location: "Santa Fe",
    phone: "3425665495",
    image: "/material/Sede 4 Gabriel Bernabé Santa Fe tel 3425665495.jpg",
  },
  {
    id: 5,
    sede: "Sede 5",
    name: "Carlos Cáceres",
    location: "Santa Fe",
    phone: "3425015138",
    image: "/material/Sede 5 Carlos Cáceres Santa Fe Tel 3425015138.jpeg",
  },
  {
    id: 6,
    sede: "Sede 6",
    name: "Germán Bullin",
    location: "Santa Fe",
    phone: "3425983387",
    image: "/material/Sede 6 Germán Bullin Santa Fe 3425983387.jpeg",
  },
  {
    id: 8,
    sede: "Sede 8",
    name: "Lucas Barrientos",
    location: "Chaco",
    phone: "3794686234",
    image: null,
    initials: "LB",
  },
  {
    id: 9,
    sede: "Sede 9",
    name: "Maximiliano Gastón Frutos",
    location: "Santa Fe",
    phone: "3424292987",
    image: "/material/Sede 9 Maximiliano Gaston Frutos Santa Fe tel 3424292987.jpeg",
  },
  {
    id: 10,
    sede: "Sede 10",
    name: "Gabriel Aquino",
    location: "Santa Fe",
    phone: "3426507524",
    image: "/material/Sede 10 Gabriel Aquino Santa fe tel 3426507524.jpeg",
  },
  {
    id: 11,
    sede: "Sede 11",
    name: "Ignacio Rosas",
    location: "Santa Fe",
    phone: "3426515625",
    image: "/material/Sede 11 Ignacio Rosas Santa Fe tel 3426515625.jpeg",
  },
  {
    id: 13,
    sede: "Sede 13",
    name: "Martín Hernández",
    location: "Santa Fe",
    phone: "3424352731",
    image: "/material/Sede 13 Martin Hernández Santa fe tel 3424352731.jpeg",
  },
]

export default function SedesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {sedesData.map((sede, idx) => (
            <FadeIn key={sede.id} direction="up" delay={idx * 0.1} fullWidth>
              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-prolab-violet/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                {/* Photo / Header */}
                <div className="relative h-56 sm:h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  {sede.image ? (
                    <Image
                      src={sede.image}
                      alt={`Representante ${sede.name}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-prolab-violet to-prolab-blue flex items-center justify-center">
                      <span className="text-white text-5xl font-bold font-display">
                        {sede.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2 text-white">
                    <MapPin className="w-5 h-5 text-prolab-violet shrink-0" />
                    <span className="font-semibold text-lg font-heading drop-shadow-md truncate">
                      {sede.sede} · {sede.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-prolab-black dark:text-white mb-1 font-display">
                      {sede.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                      Representante Oficial
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 mb-6">
                    <div className="w-8 h-8 rounded-full bg-prolab-violet/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-prolab-violet" />
                    </div>
                    <span className="font-medium font-body">{sede.phone}</span>
                  </div>

                  <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="default"
                      className="w-full bg-[#25D366] hover:bg-[#20b958] text-white font-body font-semibold transition-colors"
                      onClick={() => window.open(`https://wa.me/549${sede.phone}`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
