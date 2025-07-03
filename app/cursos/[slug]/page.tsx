import { notFound } from "next/navigation"
import { getCourseBySlug, getRelatedCourses } from "@/lib/courses-data"
import CourseHero from "@/components/course/course-hero"
import CourseOverview from "@/components/course/course-overview"
import CourseCurriculum from "@/components/course/course-curriculum"
import CourseInfo from "@/components/course/course-info"
import RelatedCourses from "@/components/course/related-courses"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import BackButton from "@/components/ui/back-button"
import type { Metadata } from "next"

interface CoursePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourseBySlug(params.slug)
  
  if (!course) {
    return {
      title: "Curso no encontrado | Pro-Lab Educativa",
      description: "El curso que buscas no existe o ha sido removido.",
    }
  }

  return {
    title: `${course.title} - Curso Online con Certificación Nacional | Pro-Lab Educativa`,
    description: `${course.description}. Duración: ${course.duration}. Modalidad: ${course.modality}. Certificación nacional e internacional. Clases online en vivo con docentes expertos.`,
    keywords: `${course.title.toLowerCase()}, ${course.category.toLowerCase()}, curso online, certificación nacional, certificación internacional, ${course.modality.toLowerCase()}, formación laboral, capacitación profesional, santo tomé, santa fe`,
    openGraph: {
      title: `${course.title} | Pro-Lab Educativa - Formación Laboral Certificada`,
      description: course.description,
      url: `https://prolab-educativa.com/cursos/${course.slug}`,
      type: 'article',
      images: [
        {
          url: course.heroImage,
          width: 1200,
          height: 630,
          alt: `${course.title} - Pro-Lab Educativa`,
        },
      ],
      siteName: 'Pro-Lab Educativa',
      locale: 'es_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | Pro-Lab Educativa`,
      description: course.description,
      images: [course.heroImage],
      creator: '@prolab_educativa',
      site: '@prolab_educativa',
    },
    alternates: {
      canonical: `https://prolab-educativa.com/cursos/${course.slug}`,
      languages: {
        'es-AR': `https://prolab-educativa.com/cursos/${course.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    category: 'education',
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseBySlug(params.slug)
  const relatedCourses = getRelatedCourses(params.slug)

  if (!course) {
    notFound()
  }

  return (
    <>
      <BackButton />
      <CourseHero course={course} />
      <CourseOverview course={course} />
      <CourseCurriculum course={course} />
      <CourseInfo course={course} />
      <RelatedCourses currentCourse={course} />
      <WhatsAppFloat />
    </>
  )
}

export async function generateStaticParams() {
  const { coursesData } = await import("@/lib/courses-data")

  return coursesData.map((course) => ({
    slug: course.slug,
  }))
}
