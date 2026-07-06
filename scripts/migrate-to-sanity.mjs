import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
  projectId: 'cib888ut',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  token: 'sk75z2C7McvJG6ETvZFGrTsL2LWxu58JiaIymgdkMYqKsCXemKSrQYEhObRptV9M5eAT9qCeo6erghsL6Pgcx8RfsmiBu0QrIZUQDdAaHgS1KYRfISFCbOxaY9CeyHpzpPhgkXlybfg7gKNylnEYnBFeoDmmW5TOXK1j7xZfe5msuc3UdmPL',
})

const coursesData = [
  {
    slug: "psicologia-social",
    title: "Diplomatura en Psicología Social",
    category: "Psicología",
    description: "Explorá el comportamiento humano en sociedad: vínculos, grupos, conflictos y transformación social.",
    duration: "8 meses",
    modality: "Online en vivo (Meet)",
    schedule: "Lunes 19:00hs",
    startDate: "10 de Agosto",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    icon: "Users",
    heroImage: "/psicologia-social.png",
    overview: "La Diplomatura en Psicología Social te invita a comprender lo invisible que guía lo visible. Explorarás cómo las dinámicas sociales, los grupos, los vínculos y los conflictos impactan nuestra identidad, nuestras decisiones y nuestra vida cotidiana. Una formación que combina teoría y práctica para desarrollar una mirada crítica y transformadora de la realidad social.",
    benefits: [
      "1 clase en vivo por semana con profesor (Meet)",
      "Material y prácticos en campus virtual",
      "Grupo de WhatsApp para consultas",
      "Clases grabadas para ver cuando quieras",
      "Acceso a la plataforma las 24hs",
      "Certificación nacional e internacional",
    ],
    whatIncludes: [
      "1 clase semanal en vivo de 90 minutos",
      "Material descargable en PDF",
      "Campus virtual con acceso 24/7",
      "Grupo de WhatsApp de apoyo",
      "Clases grabadas disponibles",
      "Certificado nacional e internacional",
    ],
    jobOpportunities: [
      "Intervención Comunitaria: ONGs, municipios o centros comunitarios",
      "Ámbito Educativo: escuelas, instituciones educativas, programas de formación",
      "Consultoría y Recursos Humanos: empresas con foco en dinámicas grupales y clima laboral",
    ],
  },
  {
    slug: "psicologia-adicciones",
    title: "Diplomatura en Psicología de las Adicciones",
    category: "Psicología",
    description: "Herramientas concretas para acompañar y orientar a personas con consumos problemáticos.",
    duration: "6 meses",
    modality: "Online en vivo (Meet)",
    schedule: "Jueves 19:00hs",
    startDate: "23 de Julio",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    icon: "Heart",
    heroImage: "/psicologia-adicciones.png",
    overview: "La Diplomatura en Psicología de las Adicciones te permite incorporar herramientas concretas para acompañar y orientar a personas con consumos problemáticos. Una formación que te ayuda a posicionarte mejor en el área y sumar valor real a tu perfil, aplicable en ONGs, equipos interdisciplinarios y espacios comunitarios.",
    benefits: [
      "1 clase en vivo por semana con profesor (Meet)",
      "Material y prácticos en campus virtual",
      "Grupo de WhatsApp para consultas",
      "Clases grabadas para ver cuando quieras",
      "Acceso a la plataforma las 24hs",
      "Certificación nacional e internacional",
    ],
    whatIncludes: [
      "1 clase semanal en vivo de 90 minutos",
      "Material descargable en PDF",
      "Campus virtual con acceso 24/7",
      "Grupo de WhatsApp de apoyo",
      "Clases grabadas disponibles",
      "Certificado nacional e internacional",
    ],
    jobOpportunities: [
      "ONGs y centros de día: acompañamiento, contención y seguimiento de personas en tratamiento",
      "Equipos interdisciplinarios junto a psicólogos, trabajadores sociales y profesionales de salud",
      "Proyectos y espacios comunitarios: prevención, talleres, charlas y acciones de concientización",
    ],
  },
  {
    slug: "ansiedad-estres-regulacion",
    title: "Diplomatura en Psicología de la Ansiedad, el Estrés y la Regulación Emocional",
    category: "Psicología",
    description: "Transformá el caos en comprensión. Herramientas para comprender y acompañar procesos emocionales.",
    duration: "6 meses",
    modality: "Online en vivo (Meet)",
    schedule: "Martes 17:30hs",
    startDate: "7 de Julio",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    icon: "Brain",
    heroImage: "/ansiedad-estres.png",
    overview: "La Diplomatura en Psicología de la Ansiedad, el Estrés y la Regulación Emocional brinda herramientas para comprender procesos emocionales y desarrollar estrategias de acompañamiento. Una formación de utilidad para docentes, acompañantes terapéuticos, coaches, counselors y profesionales del área social.",
    benefits: [
      "1 clase en vivo por semana con profesor (Meet)",
      "Material y prácticos en campus virtual",
      "Grupo de WhatsApp para consultas",
      "Clases grabadas para ver cuando quieras",
      "Acceso a la plataforma las 24hs",
      "Certificación nacional e internacional",
    ],
    whatIncludes: [
      "1 clase semanal en vivo de 90 minutos",
      "Material descargable en PDF",
      "Campus virtual con acceso 24/7",
      "Grupo de WhatsApp de apoyo",
      "Clases grabadas disponibles",
      "Certificado nacional e internacional",
    ],
    jobOpportunities: [
      "Espacios educativos y actividades comunitarias",
      "Acompañamiento terapéutico y grupos de apoyo",
      "Ámbitos laborales y de atención al público",
      "Talleres y espacios de bienestar emocional",
      "Formación para docentes, coaches, counselors y profesionales del área social",
    ],
  },
  {
    slug: "desarrollo-infantil-adolescente",
    title: "Diplomatura en Psicología del Desarrollo Infantil y Adolescente",
    category: "Psicología",
    description: "Comprendé cómo crecen, sienten y construyen su identidad niños y adolescentes.",
    duration: "6 meses (a tu ritmo)",
    modality: "100% Online Asincrónica",
    schedule: "Acceso 24/7 – Completamente flexible",
    startDate: "Ingreso inmediato",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    icon: "BookOpen",
    heroImage: "/desarrollo-infantil.png",
    overview: "La Diplomatura en Psicología del Desarrollo Infantil y Adolescente es 100% online y flexible. Comprendé cómo crecen, sienten y construyen su identidad niños y adolescentes. Formación para comprender, herramientas para transformar. Con acceso inmediato a la plataforma y duración de hasta 6 meses (aunque muchas personas la finalizan antes).",
    benefits: [
      "18 clases grabadas para ver a tu ritmo",
      "Material descargable en PDF",
      "4 trabajos prácticos",
      "Acceso a la plataforma las 24hs, también desde el celular",
      "Acceso a la Biblioteca de Psicología Aplicada de ProLab",
      "Acompañamiento del equipo durante toda la cursada",
      "Certificación nacional e internacional",
    ],
    whatIncludes: [
      "18 clases grabadas",
      "Material descargable en PDF",
      "4 trabajos prácticos",
      "Acceso a la plataforma 24/7 (también desde el celular)",
      "Acceso a Biblioteca de Psicología Aplicada de ProLab",
      "Examen final con varias oportunidades (desde la plataforma)",
      "Certificado nacional e internacional",
    ],
    jobOpportunities: [
      "Instituciones educativas: escuelas, jardines, secundarios",
      "Centros de salud mental infantojuvenil",
      "ONGs y organizaciones de niñez y familia",
      "Acompañamiento terapéutico en contextos escolares",
      "Consultoría familiar y orientación parental",
    ],
  },
]

const representantesData = [
  { id: 2, sede: "Sede 2", name: "Nicolás Roldán", location: "Santa Fe", phone: "3426268498", image: "/material/Sede 2 Nicolás Roldán Santa Fe tel 3426268498.jpeg" },
  { id: 4, sede: "Sede 4", name: "Gabriel Bernabé", location: "Santa Fe", phone: "3425665495", image: "/material/Sede 4 Gabriel Bernabé Santa Fe tel 3425665495.jpg" },
  { id: 5, sede: "Sede 5", name: "Carlos Cáceres", location: "Santa Fe", phone: "3425015138", image: "/material/Sede 5 Carlos Cáceres Santa Fe Tel 3425015138.jpeg" },
  { id: 6, sede: "Sede 6", name: "Germán Bullin", location: "Santa Fe", phone: "3425983387", image: "/material/Sede 6 Germán Bullin Santa Fe 3425983387.jpeg" },
  { id: 8, sede: "Sede 8", name: "Lucas Barrientos", location: "Chaco", phone: "3794686234", image: null },
  { id: 9, sede: "Sede 9", name: "Maximiliano Gastón Frutos", location: "Santa Fe", phone: "3424292987", image: "/material/Sede 9 Maximiliano Gaston Frutos Santa Fe tel 3424292987.jpeg" },
  { id: 10, sede: "Sede 10", name: "Gabriel Aquino", location: "Santa Fe", phone: "3426507524", image: "/material/Sede 10 Gabriel Aquino Santa fe tel 3426507524.jpeg" },
  { id: 11, sede: "Sede 11", name: "Ignacio Rosas", location: "Santa Fe", phone: "3426515625", image: "/material/Sede 11 Ignacio Rosas Santa Fe tel 3426515625.jpeg" },
  { id: 13, sede: "Sede 13", name: "Martín Hernández", location: "Santa Fe", phone: "3424352731", image: "/material/Sede 13 Martin Hernández Santa fe tel 3424352731.jpeg" },
]

async function uploadImage(imagePath) {
  if (!imagePath) return null
  try {
    const fullPath = path.join(__dirname, '..', 'public', imagePath)
    if (!fs.existsSync(fullPath)) {
      console.warn('Image not found:', fullPath)
      return null
    }
    const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath)
    })
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imagePath, error)
    return null
  }
}

async function migrateCourses() {
  console.log('Migrating courses...')
  for (const course of coursesData) {
    const doc = {
      _type: 'course',
      title: course.title,
      slug: { _type: 'slug', current: course.slug },
      category: course.category,
      description: course.description,
      overview: course.overview,
      duration: course.duration,
      modality: course.modality,
      schedule: course.schedule,
      startDate: course.startDate,
      price: course.price,
      benefits: course.benefits,
      jobOpportunities: course.jobOpportunities,
      whatIncludes: course.whatIncludes,
      popular: course.popular,
    }

    if (course.heroImage) {
      const assetId = await uploadImage(course.heroImage)
      if (assetId) {
        doc.heroImage = {
          _type: 'image',
          asset: { _type: 'reference', _ref: assetId }
        }
      }
    }

    const res = await client.create(doc)
    console.log('Created course:', res.title)
  }
}

async function migrateRepresentantes() {
  console.log('Migrating representantes...')
  for (const rep of representantesData) {
    const doc = {
      _type: 'representante',
      name: rep.name,
      sede: rep.sede,
      location: rep.location,
      phone: rep.phone,
    }

    if (rep.image) {
      const assetId = await uploadImage(rep.image)
      if (assetId) {
        doc.image = {
          _type: 'image',
          asset: { _type: 'reference', _ref: assetId }
        }
      }
    }

    const res = await client.create(doc)
    console.log('Created representante:', res.name)
  }
}

async function run() {
  try {
    await migrateCourses()
    await migrateRepresentantes()
    console.log('Migration completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

run()
