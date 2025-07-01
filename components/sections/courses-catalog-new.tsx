"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Scale,
  Heart,
  Building2,
  Smartphone,
  Calendar,
  Award,
  Gavel,
  HandHeart,
  Dumbbell,
  Stethoscope,
  Calculator,
  Users,
  TrendingUp,
  Globe,
  Search,
} from "lucide-react"
import Link from "next/link"

const coursesData = {
  Todos: [
    {
      title: "Diplomatura en Ciencias Criminalísticas",
      description: "Análisis forense, investigación penal, técnicas periciales",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Área Jurídica y Social",
      icon: Gavel,
      slug: "criminalistica",
    },
    {
      title: "Lengua de Señas Argentina (LSA)",
      description: "Inclusión laboral y comunicación accesible",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Área Jurídica y Social",
      icon: HandHeart,
      slug: "lsa",
    },
    {
      title: "Programa de Personal Trainer",
      description: "Entrenamiento funcional, planificación deportiva",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Salud y Deporte",
      icon: Dumbbell,
      slug: "personal-trainer",
    },
    {
      title: "Técnicas de Enfermería con Orientación Geriátrica",
      description: "Cuidados especializados para adultos mayores",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Salud y Deporte",
      icon: Stethoscope,
      slug: "enfermeria-geriatrica",
    },
    {
      title: "Administración de Clínicas y Sanatorios",
      description: "Gestión eficiente de centros de salud",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Administración y Empresas",
      icon: Building2,
      slug: "administracion-clinicas",
    },
    {
      title: "Secretariado Administrativo Contable",
      description: "Manejo de finanzas, facturación, gestión documental",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Administración y Empresas",
      icon: Calculator,
      slug: "secretariado-administrativo",
    },
    {
      title: "Secretariado en Recursos Humanos",
      description: "Reclutamiento, liquidación de sueldos, clima laboral",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Administración y Empresas",
      icon: Users,
      slug: "secretariado-rrhh",
    },
    {
      title: "Marketing Digital",
      description: "Redes sociales, publicidad online, SEO",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Marketing y Tecnología",
      icon: TrendingUp,
      slug: "marketing-digital",
    },
    {
      title: "Emprendimientos Digitales",
      description: "Modelos de negocio online, e-commerce, monetización",
      duration: "8 meses",
      modality: "Online en vivo",
      category: "Marketing y Tecnología",
      icon: Globe,
      slug: "emprendimientos-digitales",
    },
  ],
}

// Create filtered data for each category
const filteredData = {
  Todos: coursesData["Todos"],
  "Área Jurídica y Social": coursesData["Todos"].filter((course) => course.category === "Área Jurídica y Social"),
  "Salud y Deporte": coursesData["Todos"].filter((course) => course.category === "Salud y Deporte"),
  "Administración y Empresas": coursesData["Todos"].filter((course) => course.category === "Administración y Empresas"),
  "Marketing y Tecnología": coursesData["Todos"].filter((course) => course.category === "Marketing y Tecnología"),
}

const categories = [
  { name: "Todos", icon: Scale },
  { name: "Área Jurídica y Social", icon: Gavel },
  { name: "Salud y Deporte", icon: Heart },
  { name: "Administración y Empresas", icon: Building2 },
  { name: "Marketing y Tecnología", icon: Smartphone },
]

export default function CoursesCatalogNew() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const coursesPerPage = 4

  // Filtrar cursos por categoría y búsqueda
  const getFilteredCourses = () => {
    let courses = activeCategory === "Todos" 
      ? coursesData["Todos"] 
      : coursesData["Todos"].filter(course => course.category === activeCategory)
    
    if (searchTerm.trim()) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return courses
  }

  const filteredCourses = getFilteredCourses()

  // Calcular cursos para la página actual
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)

  // Resetear página cuando cambie categoría o búsqueda
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prolab-black dark:text-white font-display">Catálogo De Cursos</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            {/* Buscador */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 w-full border-gray-200 dark:border-gray-700 focus:border-prolab-violet font-body"
              />
            </div>

            {/* Categorías */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-bold text-prolab-black dark:text-white mb-4 font-heading">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`w-full flex items-center space-x-3 p-2 sm:p-3 rounded-lg text-left transition-colors ${
                      activeCategory === category.name
                        ? "bg-prolab-violet dark:bg-prolab-black text-white"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {currentCourses.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
                  No se encontraron cursos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-body">
                  {searchTerm.trim() 
                    ? `No encontramos cursos que coincidan con "${searchTerm}"`
                    : "No hay cursos disponibles en esta categoría"
                  }
                </p>
                {searchTerm.trim() && (
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="mt-4"
                  >
                    Limpiar búsqueda
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {currentCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:border-prolab-pink/30 transition-colors flex flex-col h-full"
                >
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-prolab-pink/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <course.icon className="w-4 h-4 sm:w-5 sm:h-5 text-prolab-pink" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-prolab-black dark:text-white leading-tight mb-2 font-heading">
                          {course.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{course.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs border-prolab-violet/20 dark:border-gray-600 dark:text-gray-300 font-body"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {course.duration}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs border-prolab-pink/20 dark:border-gray-600 dark:text-gray-300 font-body"
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {course.modality}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link href={`/cursos/${course.slug}`}>
                      <Button
                        className="w-full bg-prolab-violet dark:bg-prolab-black hover:bg-prolab-violet/80 dark:hover:bg-prolab-violet text-white border-0 font-body font-semibold"
                        size="sm"
                      >
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            )}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-gray-200 dark:border-gray-700 dark:text-gray-300"
                >
                  Anterior
                </Button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Página {currentPage} de {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-gray-200 dark:border-gray-700 dark:text-gray-300"
                >
                  Siguiente
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
