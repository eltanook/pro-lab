import { MetadataRoute } from 'next'
import { coursesData } from '@/lib/courses-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prolab-educativa.com'
  
  // URLs estáticas
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cursos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // URLs dinámicas de cursos
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/cursos/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...courseRoutes]
} 