import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"
import ContactInfo from "@/components/sections/contact-info"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
            <div className="lg:col-span-4">
              <ContactInfo />
            </div>
          </div>

          {/* Integrated Map Section */}
          <div className="mt-8 sm:mt-12">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168903552!2d-58.38375908477!3d-34.60373098045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Pro-Lab Educativa"
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
