import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"
import ContactInfo from "@/components/sections/contact-info"
import ContactBenefits from "@/components/sections/contact-benefits"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import { getCourses, getSiteSettings } from "@/lib/sanity-queries"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Consultas e Información | Pro-Lab Educativa",
  description: "Ponte en contacto con Pro-Lab Educativa. Consultas sobre cursos, precios, modalidades de pago. WhatsApp, email y más formas de comunicación.",
  keywords: "contacto pro-lab educativa, consultas cursos, información precios, whatsapp, email, formación laboral argentina",
  openGraph: {
    title: "Contacto | Pro-Lab Educativa",
    description: "Ponte en contacto con nosotros para consultas sobre nuestros cursos de formación laboral.",
    url: "https://prolabeducativa.com/contacto",
    images: [
      {
        url: "/2.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Pro-Lab Educativa",
      },
    ],
  },
  alternates: {
    canonical: "https://prolabeducativa.com/contacto",
  },
}

export default async function ContactoPage() {
  const [courses, settings] = await Promise.all([
    getCourses(),
    getSiteSettings()
  ])

  return (
    <>
      <ContactHero settings={settings} />
      <div className="py-12 sm:py-16 lg:py-20 relative z-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <ContactForm courses={courses} />
            </div>
            <div className="lg:col-span-4">
              <ContactInfo settings={settings} />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 sm:mt-12">
            <ContactBenefits settings={settings} />
          </div>

          {/* Integrated Map Section */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Ubicación Pro-Lab Educativa"
                src={settings?.contact?.mapUrl || "https://maps.google.com/maps?q=Av.%20Ejercito%20Argentino%202515,%20Santo%20Tom%C3%A9,%20Santa%20Fe&t=&z=15&ie=UTF8&iwloc=&output=embed"}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="sm:h-96 lg:h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppFloat />
    </>
  )
}
