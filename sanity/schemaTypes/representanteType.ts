import { defineField, defineType } from 'sanity'

export const representanteType = defineType({
  name: 'representante',
  title: 'Representantes / Sedes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Representante',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sede',
      title: 'Nombre de la Sede',
      type: 'string',
      description: 'Ej: Sede 2, Sede 4, Sede Central',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación (Provincia/Ciudad)',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono (WhatsApp sin el +)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Foto del Representante',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
