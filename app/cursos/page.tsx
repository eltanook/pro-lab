import CoursesHero from "@/components/sections/courses-hero"
import FeaturedCourses from "@/components/sections/featured-courses"
import CoursesCatalogNew from "@/components/sections/courses-catalog-new"
import JobBoard from "@/components/sections/job-board"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

export default function CursosPage() {
  return (
    <>
      <CoursesHero />
      <FeaturedCourses />
      <CoursesCatalogNew />
      <JobBoard />
      <WhatsAppFloat />
    </>
  )
}
