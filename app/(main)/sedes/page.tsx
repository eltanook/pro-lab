import SedesHero from "@/components/sections/sedes-hero"
import SedesMaps from "@/components/sections/sedes-maps"
import RepresentantesCarousel from "@/components/sections/representantes-carousel"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import type { Metadata } from "next"
import { getRepresentantes, getSiteSettings, getSedesCount } from "@/lib/sanity-queries"

export const metadata: Metadata = {
  title: "Representantes y Sedes | Pro-Lab Educativa",
  description: "Encuentra la sede y el representante oficial de Pro-Lab Educativa más cercano a tu ubicación. Formación profesional con alcance nacional e internacional.",
  keywords: "sedes pro-lab, representantes, sucursales, contacto local, delegaciones pro-lab educativa",
  openGraph: {
    title: "Representantes y Sedes | Pro-Lab Educativa",
    description: "Contacta con nuestros representantes oficiales en tu provincia o ciudad.",
    url: "https://prolabeducativa.com/sedes",
    images: [
      {
        url: "/7.jpg",
        width: 1200,
        height: 630,
        alt: "Sedes Pro-Lab Educativa",
      },
    ],
  },
}

export default async function SedesPage() {
  const [representantes, settings, sedesCount] = await Promise.all([
    getRepresentantes(),
    getSiteSettings(),
    getSedesCount()
  ])

  return (
    <>
      <SedesHero settings={settings} sedesCount={sedesCount} />
      <SedesMaps />
      <RepresentantesCarousel representantes={representantes} />
      <WhatsAppFloat />
    </>
  )
}
