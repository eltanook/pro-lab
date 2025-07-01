import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"
import ContactInfo from "@/components/sections/contact-info"
import ContactBenefits from "@/components/sections/contact-benefits"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Consultas e Información | Pro-Lab Educativa",
  description: "Ponte en contacto con Pro-Lab Educativa. Consultas sobre cursos, precios, modalidades de pago. WhatsApp, email y más formas de comunicación.",
  keywords: "contacto pro-lab educativa, consultas cursos, información precios, whatsapp, email, formación laboral argentina",
  openGraph: {
    title: "Contacto | Pro-Lab Educativa",
    description: "Ponte en contacto con nosotros para consultas sobre nuestros cursos de formación laboral.",
    url: "https://prolab-educativa.com/contacto",
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
    canonical: "https://prolab-educativa.com/contacto",
  },
}

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <div className="py-12 sm:py-16 lg:py-20 relative z-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
            <div className="lg:col-span-4">
              <ContactInfo />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 sm:mt-12">
            <ContactBenefits />
          </div>

          {/* Integrated Map Section */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.158!2d-60.764!3d-31.642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9c7b8b0e0a1%3A0x123456789!2sAv.%20Ejercito%20Argentino%202515%2C%20Primer%20Piso%2C%20Santo%20Tom%C3%A9%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1ses!2sar!4v1647875421234"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Pro-Lab Educativa - Santo Tomé, Santa Fe"
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
