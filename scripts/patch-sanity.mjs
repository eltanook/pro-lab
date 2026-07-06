import { createClient } from '@sanity/client'

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
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    icon: "Users",
    requirements: [
      "Secundario completo",
      "Mayor de 18 años",
      "Computadora con conexión a internet estable",
      "Sin conocimientos previos requeridos",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización, O.I.E.P. y la Comisión Psicosocial Latinoamericana (CPL)",
    methodology: "Una clase en vivo por semana de 90 minutos a través de Google Meet. No es obligatorio asistir al vivo: las clases quedan grabadas y podés verlas cuando te convenga. La plataforma es libre, podés ingresar a la hora que quieras.",
    contactInfo: {
      email: "direccion@prolabeducativa.com",
      website: "prolabaulavirtual.com",
      phone: "3425030140",
      socialMedia: "@prolab_educativa",
    },
  },
  {
    slug: "psicologia-adicciones",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    icon: "Heart",
    requirements: [
      "Secundario completo",
      "Mayor de 18 años",
      "Computadora con conexión a internet estable",
      "Sin conocimientos previos requeridos",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización, O.I.E.P. y la Comisión Psicosocial Latinoamericana (CPL)",
    methodology: "Una clase en vivo por semana de 90 minutos a través de Google Meet. No es obligatorio asistir al vivo: las clases quedan grabadas y podés verlas cuando te convenga. La plataforma es libre, podés ingresar a la hora que quieras.",
    contactInfo: {
      email: "direccion@prolabeducativa.com",
      website: "prolabaulavirtual.com",
      phone: "3425030140",
      socialMedia: "@prolab_educativa",
    },
  },
  {
    slug: "ansiedad-estres-regulacion",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    icon: "Brain",
    requirements: [
      "Secundario completo",
      "Mayor de 18 años",
      "Computadora con conexión a internet estable",
      "Sin conocimientos previos requeridos",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización, O.I.E.P. y la Comisión Psicosocial Latinoamericana (CPL)",
    methodology: "Una clase en vivo por semana de 90 minutos a través de Google Meet. No es obligatorio asistir al vivo: las clases quedan grabadas y podés verlas cuando te convenga. La plataforma es libre, podés ingresar a la hora que quieras.",
    targetAudience: "Docentes, acompañantes terapéuticos, coaches, counselors, profesionales del área social y personas que trabajen con grupos o atención interpersonal.",
    contactInfo: {
      email: "direccion@prolabeducativa.com",
      website: "prolabaulavirtual.com",
      phone: "3425030140",
      socialMedia: "@prolab_educativa",
    },
  },
  {
    slug: "desarrollo-infantil-adolescente",
    students: "100% online, alumnos de todo el país",
    rating: 4.9,
    isAsync: true,
    icon: "BookOpen",
    requirements: [
      "Secundario completo",
      "Mayor de 18 años",
      "Computadora o celular con conexión a internet",
      "Sin conocimientos previos requeridos",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización, O.I.E.P. y la Comisión Psicosocial Latinoamericana (CPL)",
    methodology: "Completamente asincrónica y flexible. Accedés a las 18 clases grabadas cuando quieras y a tu ritmo. La duración máxima es de 6 meses, aunque muchas personas la finalizan antes. El examen final se realiza desde la misma plataforma y cuenta con varias oportunidades.",
    contactInfo: {
      email: "direccion@prolabeducativa.com",
      website: "prolabaulavirtual.com",
      phone: "3425030140",
      socialMedia: "@prolab_educativa",
    },
  },
]

async function patchCourses() {
  console.log('Patching courses...')
  for (const courseData of coursesData) {
    const query = `*[_type == "course" && slug.current == $slug][0]`
    const course = await client.fetch(query, { slug: courseData.slug })
    
    if (course) {
      await client
        .patch(course._id)
        .set({
          students: courseData.students,
          rating: courseData.rating,
          isAsync: courseData.isAsync || false,
          icon: courseData.icon,
          requirements: courseData.requirements,
          certification: courseData.certification,
          methodology: courseData.methodology,
          targetAudience: courseData.targetAudience || null,
          contactInfo: courseData.contactInfo
        })
        .commit()
      console.log('Patched course:', course.title)
    } else {
      console.warn('Course not found:', courseData.slug)
    }
  }
}

patchCourses()
