import CoursesHero from "@/components/sections/courses-hero"
import CursosGrid from "@/components/sections/cursos-grid"
import JobBoard from "@/components/sections/job-board"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import type { Metadata } from "next"
import { getCourses, getSiteSettings } from "@/lib/sanity-queries"

export const metadata: Metadata = {
  title: "Cursos Online con Certificación Nacional e Internacional | Pro-Lab Educativa",
  description: "Descubre nuestro catálogo completo de cursos online: Criminalística, Marketing Digital, Enfermería, Personal Trainer y más. Certificación nacional e internacional.",
  keywords: "cursos online, certificación nacional, certificación internacional, criminalística, marketing digital, enfermería, personal trainer, formación profesional, capacitación laboral",
  openGraph: {
    title: "Cursos Online con Certificación | Pro-Lab Educativa",
    description: "Descubre nuestro catálogo completo de cursos online con certificación nacional e internacional.",
    url: "https://prolabeducativa.com/cursos",
    images: [
      {
        url: "/7.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos Pro-Lab Educativa",
      },
    ],
  },
  alternates: {
    canonical: "https://prolabeducativa.com/cursos",
  },
}

export default async function CursosPage() {
  const [courses, settings] = await Promise.all([
    getCourses(),
    getSiteSettings(),
  ])

  return (
    <>
      <CoursesHero settings={settings} />
      <CursosGrid courses={courses} />
      <JobBoard settings={settings} />
      <WhatsAppFloat />
    </>
  )
}
