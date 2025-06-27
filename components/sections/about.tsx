import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, BookOpen } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Clases en Vivo + Grabadas",
    description: "Flexibilidad total para estudiar a tu ritmo sin perderte ningún contenido",
  },
  {
    icon: Users,
    title: "Profesores Expertos",
    description: "Aprende de profesionales activos en cada área de especialización",
  },
  {
    icon: Award,
    title: "Certificaciones Oficiales",
    description: "Doble aval nacional e internacional para mayor inserción laboral",
  },
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-[#023a5d]/10 dark:bg-gray-700/50 text-[#023a5d] dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-[#023a5d]/20 dark:border-gray-600">
                ¿Quiénes Somos?
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023a5d] dark:text-white leading-tight">
                No nos Conformamos con Transmitir Conocimientos:
                <span className="text-[#009c48]"> te Enseñamos Haciendo</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                En Pro-Lab Educativa, nuestras capacitaciones están diseñadas para que cada alumno termine sus estudios
                con herramientas prácticas, experiencia aplicada y la capacidad de resolver problemas reales en su campo
                laboral.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#009c48]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Cámara Argentina de Capacitación y Profesionalización
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#009c48]" />
                <span className="text-gray-700 dark:text-gray-300">
                  O.I.E.P. (Organización Internacional de Educación Profesional)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-[#009c48]" />
                <span className="text-gray-700 dark:text-gray-300">Comisión Psicosocial Latinoamericana (CPL)</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#023a5d] dark:bg-gray-700 hover:bg-[#034a70] dark:hover:bg-gray-600 text-white"
            >
              Conoce Nuestros Avales
            </Button>
          </div>

          <div className="relative">
            <img
              src="/1.jpg"
              alt="Estudiantes en clase"
              className="rounded-2xl w-full border border-gray-200 dark:border-gray-700 object-cover"
              style={{ maxHeight: '420px', minHeight: '420px', height: '420px' }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-[#023a5d] dark:text-white">15+ años</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">de experiencia educativa</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#009c48]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#009c48]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#009c48]" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#023a5d] dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
