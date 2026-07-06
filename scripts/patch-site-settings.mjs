import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
  console.error("Faltan variables de entorno para conectarse a Sanity")
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

async function patchSiteSettings() {
  console.log("Iniciando actualización del documento de Ajustes Generales...")
  
  try {
    const existingSettings = await client.fetch(`*[_type == "siteSettings"][0]`)
    if (!existingSettings) {
      console.error("No se encontró el documento de Ajustes Generales. Ejecuta init-site-settings.mjs primero.")
      return
    }

    const _id = existingSettings._id
    
    // Patching with exact original fields to override the previously populated incorrect ones
    await client.patch(_id)
      .set({
        jobBoard: {
          badge: "Bolsa de Trabajo",
          title: "Tu Próximo Trabajo",
          subtitle: "Te Está Esperando",
          description: "Accedé a nuestra bolsa de trabajo exclusiva con ofertas laborales de empresas aliadas que buscan profesionales con nuestras certificaciones.",
          stats: [
            { _key: "stat1", value: "95%", label: "Inserción laboral" },
            { _key: "stat2", value: "200+", label: "Empresas aliadas" },
            { _key: "stat3", value: "500+", label: "Ofertas activas" }
          ],
          buttonText: "Acceder a Bolsa de Trabajo",
          buttonUrl: "https://empleos.camaraargentina.com.ar/"
        },
        coursesHero: {
          titlePart1: "Nuestra Oferta",
          titleHighlight: "Académica",
          subtitle: "Cursos especializados diseñados para mujeres que buscan una salida laboral concreta en áreas de alta demanda profesional."
        },
        sedesHero: {
          titlePart1: "Nuestros",
          titleHighlight: "Representantes",
          titlePart2: "y Sedes",
          subtitle: "Encontrá la sede más cercana o contactá con tu representante local para recibir asesoramiento personalizado al instante.",
          features: [
            { _key: "feat1", title: "Sedes Físicas", description: "Aulas equipadas para prácticas" },
            { _key: "feat2", title: "Contacto Directo", description: "Atención vía WhatsApp al instante" },
            { _key: "feat3", title: "Alcance Nacional", description: "Representantes en todo el país" }
          ]
        },
        contactPage: {
          heroTitle: "Contáctanos",
          benefitsTitle: "¿Por qué contactarnos?",
          benefits: [
            { _key: "ben1", title: "Respuesta Inmediata", description: "Te asesoramos en el día sobre cualquier consulta." },
            { _key: "ben2", title: "Asesoramiento Personalizado", description: "Un asesor educativo te guiará en tu elección." },
            { _key: "ben3", title: "Seguimiento Continuo", description: "Te derivamos con el representante de tu zona." }
          ]
        }
      })
      .commit()

    console.log("¡Ajustes Generales parcheados exitosamente con los nuevos campos de páginas internas!")
  } catch (error) {
    console.error("Error parchando Sanity:", error)
  }
}

patchSiteSettings()
