export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Image with fixed attachment */}
      <div className="fixed inset-0 z-0">
        <img
          src="/2.jpg"
          alt="Contacto background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        {/* Responsive Dark Overlay */}
        <div className="absolute inset-0 bg-prolab-black/40 dark:bg-prolab-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Contáctanos</h1>
        </div>
      </div>
    </section>
  )
}
