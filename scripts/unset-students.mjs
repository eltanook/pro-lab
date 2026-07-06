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

async function unsetStudents() {
  console.log("Iniciando eliminación del campo 'students' de los cursos...")
  
  try {
    const courses = await client.fetch(`*[_type == "course"]`)
    
    if (!courses || courses.length === 0) {
      console.log("No se encontraron cursos.")
      return
    }

    const transaction = client.transaction()
    let count = 0
    courses.forEach(course => {
      if (course.students) {
        transaction.patch(course._id, p => p.unset(['students']))
        count++
      }
    })

    if (count > 0) {
      await transaction.commit()
      console.log(`¡Campo 'students' eliminado exitosamente de ${count} cursos en Sanity!`)
    } else {
      console.log("El campo 'students' ya no existe en ningún curso.")
    }
  } catch (error) {
    console.error("Error parchando Sanity:", error)
  }
}

unsetStudents()
