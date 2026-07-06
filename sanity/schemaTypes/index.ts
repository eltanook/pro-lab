import { type SchemaTypeDefinition } from 'sanity'
import { courseType } from './courseType'
import { representanteType } from './representanteType'
import { siteSettingsType } from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courseType, representanteType, siteSettingsType],
}
