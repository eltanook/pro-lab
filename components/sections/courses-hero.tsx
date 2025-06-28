import { GraduationCap, Users, Award } from "lucide-react"

export default function CoursesHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image with fixed attachment */}
      <div className="fixed inset-0 z-0">
        <img
          src="/7.jpg"
          alt="Cursos background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Simplified Dark Overlay */}
        <div className="absolute inset-0 bg-prolab-black/60 dark:bg-prolab-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 text-white">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Nuestra Oferta
              <span className="text-prolab-violet"> Académica</span>
            </h1>

            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Cursos especializados diseñados para mujeres que buscan una salida laboral concreta en áreas de alta
              demanda profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">Formación Práctica</h3>
              <p className="text-sm opacity-80 text-center">Aprendé haciendo con casos reales</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">Clases en Vivo</h3>
              <p className="text-sm opacity-80 text-center">Interacción directa con profesores</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold">Certificación Oficial</h3>
              <p className="text-sm opacity-80 text-center">Nacional e internacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
