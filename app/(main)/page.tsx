import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import About from "@/components/sections/about"
import Certifications from "@/components/sections/certifications"
import MapSection from "@/components/sections/map-section"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import { getCourses, getSiteSettings } from "@/lib/sanity-queries"

export default async function HomePage() {
  const [courses, settings] = await Promise.all([
    getCourses(),
    getSiteSettings()
  ])

  return (
    <>
      <Hero settings={settings} />
      <Stats courses={courses} />
      <About settings={settings} />
      <Certifications settings={settings} />
      <MapSection settings={settings} />
      <WhatsAppFloat />
    </>
  )
}
