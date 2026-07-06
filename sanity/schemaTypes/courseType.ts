import { defineField, defineType } from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Cursos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
    }),
    defineField({
      name: 'overview',
      title: 'Descripción Completa (Overview)',
      type: 'text',
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
    }),
    defineField({
      name: 'modality',
      title: 'Modalidad',
      type: 'string',
    }),
    defineField({
      name: 'schedule',
      title: 'Horario',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'benefits',
      title: 'Beneficios',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'jobOpportunities',
      title: 'Salida Laboral',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatIncludes',
      title: '¿Qué Incluye?',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'popular',
      title: '¿Es popular? (Destacado)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'rating',
      title: 'Calificación (ej. 4.9)',
      type: 'number',
    }),
    defineField({
      name: 'isAsync',
      title: '¿Es asincrónica?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      title: 'Icono (ej. Brain, Heart)',
      type: 'string',
    }),
    defineField({
      name: 'requirements',
      title: 'Requisitos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'certification',
      title: 'Certificación',
      type: 'text',
    }),
    defineField({
      name: 'methodology',
      title: 'Metodología',
      type: 'text',
    }),
    defineField({
      name: 'targetAudience',
      title: 'Público Objetivo',
      type: 'text',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'website', type: 'string', title: 'Sitio Web' },
        { name: 'phone', type: 'string', title: 'Teléfono' },
        { name: 'socialMedia', type: 'string', title: 'Redes Sociales' },
      ],
    }),
  ],
})
