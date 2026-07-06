import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'cib888ut',
  dataset: 'production',
  apiVersion: '2024-03-20',
  token: 'sk75z2C7McvJG6ETvZFGrTsL2LWxu58JiaIymgdkMYqKsCXemKSrQYEhObRptV9M5eAT9qCeo6erghsL6Pgcx8RfsmiBu0QrIZUQDdAaHgS1KYRfISFCbOxaY9CeyHpzpPhgkXlybfg7gKNylnEYnBFeoDmmW5TOXK1j7xZfe5msuc3UdmPL',
  useCdn: false,
})

const defaultSettings = {
  _id: 'siteSettings', // Document ID fijo para Singleton
  _type: 'siteSettings',
  title: 'Configuración Global',
  hero: {
    title: 'Pro-Lab Educativa',
    subtitle: 'Psicología aplicada para la vida real',
    buttonText: 'Ver Cursos',
    // La imagen se omite por ahora, el usuario la subirá en el Sanity Studio
  },
  about: {
    subtitle: '¿Quiénes Somos?',
    title: 'Formando Profesionales',
    description: 'En Pro-Lab Educativa nos dedicamos a la formación integral de profesionales en el ámbito de la psicología y la salud mental. Nuestra misión es brindar herramientas prácticas y conocimientos actualizados que permitan a nuestros estudiantes destacarse en su campo laboral y personal.',
    features: [
      'Docentes especializados y con amplia experiencia',
      'Metodología práctica y orientada a resultados',
      'Comunidad de aprendizaje activa',
      'Material de estudio actualizado',
    ],
  },
  certifications: {
    subtitle: 'Certificación Oficial',
    title: 'Avales y Respaldos',
    description: 'Nuestros cursos cuentan con certificaciones oficiales y respaldos de importantes instituciones del ámbito educativo y profesional.',
    list: [
      'Certificado Avalado a Nivel Nacional',
      'Registro oficial de matriculación',
      'Respaldo de instituciones educativas de primer nivel',
      'Validez para currículum y presentación laboral',
    ],
    buttonText: 'Consultar por avales',
  },
  contact: {
    email: 'direccion@prolab.com.ar',
    phone: '+54 342 503-0140',
    phoneRaw: '5493425030140',
    address: 'Av. Ejercito Argentino 2515, Primer Piso, Santo Tomé, Santa Fe',
    mapUrl: 'https://maps.google.com/maps?q=Av.%20Ejercito%20Argentino%202515,%20Santo%20Tom%C3%A9,%20Santa%20Fe&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  social: {
    instagram: 'https://www.instagram.com/prolab_educativa?igsh=MTduZmpmMG9jdzR6Zg==',
    facebook: 'https://www.facebook.com/profile.php?id=61576344784873',
    whatsapp: 'https://wa.me/5493425030140',
  },
  footer: {
    copyrightText: '© 2026 Pro-Lab Educativa. Todos los derechos reservados.',
  }
}

async function initSettings() {
  try {
    const existing = await client.getDocument('siteSettings')
    if (existing) {
      console.log('El documento siteSettings ya existe, actualizando...')
      await client.patch('siteSettings').set(defaultSettings).commit()
      console.log('¡Documento actualizado exitosamente!')
    } else {
      console.log('Creando documento siteSettings...')
      await client.create(defaultSettings)
      console.log('¡Documento creado exitosamente!')
    }
  } catch (error) {
    console.error('Error al inicializar siteSettings:', error)
  }
}

initSettings()
