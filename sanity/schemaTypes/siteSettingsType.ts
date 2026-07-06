import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Ajustes Generales',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Sitio',
      type: 'string',
      description: 'Solo para uso interno en Sanity',
      initialValue: 'Configuración Global',
    }),
    
    // HERO SECTION
    defineField({
      name: 'hero',
      title: 'Sección Principal (Hero)',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'title', title: 'Título Principal', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string' }),
        defineField({ name: 'buttonText', title: 'Texto del Botón', type: 'string' }),
        defineField({ name: 'image', title: 'Imagen de Fondo/Principal', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // ABOUT SECTION
    defineField({
      name: 'about',
      title: 'Sección Nosotros',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'subtitle', title: 'Subtítulo (ej. ¿Quiénes Somos?)', type: 'string' }),
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text' }),
        defineField({ 
          name: 'features', 
          title: 'Características Destacadas', 
          type: 'array', 
          of: [{ type: 'string' }] 
        }),
        defineField({ name: 'image', title: 'Imagen', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // CERTIFICATIONS SECTION
    defineField({
      name: 'certifications',
      title: 'Sección Certificaciones',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'subtitle', title: 'Subtítulo (ej. Certificación Oficial)', type: 'string' }),
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text' }),
        defineField({ 
          name: 'list', 
          title: 'Lista de Avales/Certificaciones', 
          type: 'array', 
          of: [{ type: 'string' }] 
        }),
        defineField({ name: 'buttonText', title: 'Texto del Botón', type: 'string' }),
        defineField({ name: 'image', title: 'Muestra de Certificado', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // CONTACT SECTION
    defineField({
      name: 'contact',
      title: 'Información de Contacto',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'phone', title: 'Teléfono (Formato visual)', type: 'string', description: 'Ej: +54 342 503-0140' }),
        defineField({ name: 'phoneRaw', title: 'Teléfono (Formato link)', type: 'string', description: 'Ej: 5493425030140 sin espacios' }),
        defineField({ name: 'address', title: 'Dirección Física', type: 'string' }),
        defineField({ name: 'mapUrl', title: 'URL de Google Maps (Iframe SRC)', type: 'url' }),
        defineField({
          name: 'phonesList',
          title: 'Lista de Teléfonos (Contacto e Inscripciones)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'department', title: 'Departamento / Área', type: 'string' }),
              defineField({ name: 'numbers', title: 'Números y Nombres', type: 'array', of: [{ type: 'string' }] }),
            ]
          }]
        }),
        defineField({
          name: 'schedule',
          title: 'Horarios de Atención',
          type: 'array',
          of: [{ type: 'string' }]
        }),
      ],
    }),

    // SOCIAL NETWORKS
    defineField({
      name: 'social',
      title: 'Redes Sociales',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'whatsapp', title: 'WhatsApp URL (Api Link)', type: 'url' }),
      ],
    }),

    // FOOTER
    defineField({
      name: 'footer',
      title: 'Pie de Página (Footer)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'copyrightText', title: 'Texto de Derechos de Autor', type: 'string' }),
      ],
    }),

    // HEADER
    defineField({
      name: 'header',
      title: 'Cabecera (Header)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'campusButtonText', title: 'Texto del Botón Campus', type: 'string' }),
        defineField({ name: 'campusUrl', title: 'URL del Campus Virtual', type: 'url' }),
      ],
    }),
    // JOB BOARD (Bolsa de Trabajo)
    defineField({
      name: 'jobBoard',
      title: 'Bolsa de Trabajo (Job Board)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'badge', title: 'Badge Superior', type: 'string' }),
        defineField({ name: 'title', title: 'Título', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Texto Destacado del Título', type: 'string' }),
        defineField({ name: 'description', title: 'Descripción', type: 'text' }),
        defineField({
          name: 'stats',
          title: 'Estadísticas (Max 3)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Valor (Ej: 95%, 200+)', type: 'string' }),
              defineField({ name: 'label', title: 'Etiqueta (Ej: Inserción laboral)', type: 'string' }),
            ]
          }]
        }),
        defineField({ name: 'buttonText', title: 'Texto del Botón', type: 'string' }),
        defineField({ name: 'buttonUrl', title: 'URL del Botón', type: 'url' }),
        defineField({ name: 'image', title: 'Imagen Principal', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // COURSES PAGE
    defineField({
      name: 'coursesHero',
      title: 'Cabecera Página Cursos',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'titlePart1', title: 'Título (Parte 1)', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Título (Destacado)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text' }),
        defineField({ name: 'image', title: 'Imagen de Fondo', type: 'image', options: { hotspot: true } }),
      ],
    }),

    // SEDES PAGE
    defineField({
      name: 'sedesHero',
      title: 'Cabecera Página Sedes',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'titlePart1', title: 'Título (Parte 1: Nuestros)', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Título (Parte Destacada: Representantes)', type: 'string' }),
        defineField({ name: 'titlePart2', title: 'Título (Parte 2: y Sedes)', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text' }),
        defineField({ name: 'image', title: 'Imagen de Fondo', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'features',
          title: 'Características (Máx 3)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Título', type: 'string' }),
              defineField({ name: 'description', title: 'Descripción', type: 'string' }),
            ]
          }]
        }),
      ],
    }),

    // CONTACT PAGE
    defineField({
      name: 'contactPage',
      title: 'Página de Contacto (Cabecera y Beneficios)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heroTitle', title: 'Título de Cabecera', type: 'string' }),
        defineField({ name: 'heroImage', title: 'Imagen de Cabecera', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'benefitsTitle', title: 'Título de Beneficios', type: 'string' }),
        defineField({
          name: 'benefits',
          title: 'Lista de Beneficios',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Título', type: 'string' }),
              defineField({ name: 'description', title: 'Descripción', type: 'string' }),
            ]
          }]
        }),
      ],
    }),
  ],
})
