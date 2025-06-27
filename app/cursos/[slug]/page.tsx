import { notFound } from "next/navigation"
import { getCourseBySlug, getRelatedCourses } from "@/lib/courses-data"
import CourseHero from "@/components/course/course-hero"
import CourseOverview from "@/components/course/course-overview"
import CourseCurriculum from "@/components/course/course-curriculum"
import CourseInfo from "@/components/course/course-info"
import RelatedCourses from "@/components/course/related-courses"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import BackButton from "@/components/ui/back-button"

interface CoursePageProps {
  params: {
    slug: string
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
      <RelatedCourses courses={relatedCourses} />
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
