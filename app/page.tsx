import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import About from "@/components/sections/about"
import Certifications from "@/components/sections/certifications"
import FAQ from "@/components/sections/faq"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Certifications />
      <FAQ />
      <WhatsAppFloat />
    </>
  )
}
