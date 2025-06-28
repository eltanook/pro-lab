"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, User } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    alert("¡Gracias por tu consulta! Nos contactaremos contigo pronto.")
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
      <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-prolab-black dark:text-white mb-2 font-heading">¿Tenés Alguna Consulta?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Completá el formulario y nos pondremos en contacto con vos a la brevedad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <Input
              type="text"
              placeholder="Tu nombre completo"
              className="pl-10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <Input
              type="tel"
              placeholder="Tu número de teléfono"
              className="pl-10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <Input
            type="email"
            placeholder="tu@email.com"
            className="pl-10 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>

        <Select>
          <SelectTrigger className="dark:bg-gray-800 dark:border-gray-600 dark:text-white">
            <SelectValue placeholder="Seleccioná un curso" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
            <SelectItem value="criminalistica" className="dark:text-white dark:focus:bg-gray-700">
              Diplomatura en Ciencias Criminalísticas
            </SelectItem>
            <SelectItem value="marketing" className="dark:text-white dark:focus:bg-gray-700">
              Marketing Digital
            </SelectItem>
            <SelectItem value="personal-trainer" className="dark:text-white dark:focus:bg-gray-700">
              Personal Trainer
            </SelectItem>
            <SelectItem value="enfermeria" className="dark:text-white dark:focus:bg-gray-700">
              Técnicas de Enfermería Geriátrica
            </SelectItem>
            <SelectItem value="administracion" className="dark:text-white dark:focus:bg-gray-700">
              Administración de Clínicas
            </SelectItem>
            <SelectItem value="secretariado" className="dark:text-white dark:focus:bg-gray-700">
              Secretariado Administrativo
            </SelectItem>
            <SelectItem value="rrhh" className="dark:text-white dark:focus:bg-gray-700">
              Secretariado en RRHH
            </SelectItem>
            <SelectItem value="emprendimientos" className="dark:text-white dark:focus:bg-gray-700">
              Emprendimientos Digitales
            </SelectItem>
            <SelectItem value="lsa" className="dark:text-white dark:focus:bg-gray-700">
              Lengua de Señas Argentina
            </SelectItem>
            <SelectItem value="consulta" className="dark:text-white dark:focus:bg-gray-700">
              Consulta general
            </SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Contanos sobre tu situación actual y qué te gustaría lograr con nuestros cursos"
          rows={4}
          className="dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />

        <Button
          type="submit"
          size="lg"
                      className="w-full bg-prolab-violet dark:bg-prolab-black hover:bg-prolab-violet/80 dark:hover:bg-prolab-violet text-white py-3 sm:py-4 font-body font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Consulta"}
        </Button>
      </form>
    </div>
  )
}
