import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { projectId, dataset } from './sanity/env'

import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Pro-Lab Educativa CMS',
  schema,
  plugins: [
    structureTool({ structure }),
  ],
})
