import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

async function upload() {
  try {
    const settings = await client.fetch('*[_type == "siteSettings"][0]');
    if (!settings) return;
    const docId = settings._id;

    const png1Path = path.resolve('public', 'certificados', 'Certificación O.I.E.P-104125 Priscila Denis Ginanneschi Zagarra.png');
    const png1Asset = await client.assets.upload('image', fs.createReadStream(png1Path), { filename: 'cert1.png' });

    const png2Path = path.resolve('public', 'certificados', 'Certificación Nacional -103931 Laura Paez.png');
    const png2Asset = await client.assets.upload('image', fs.createReadStream(png2Path), { filename: 'cert2.png' });

    const png3Path = path.resolve('public', 'certificados', 'Certificado CPL.png');
    const png3Asset = await client.assets.upload('image', fs.createReadStream(png3Path), { filename: 'cert3.png' });

    await client
      .patch(docId)
      .set({
        'certifications.gallery': [
          { _key: 'cert1', _type: 'image', asset: { _type: 'reference', _ref: png1Asset._id } },
          { _key: 'cert2', _type: 'image', asset: { _type: 'reference', _ref: png2Asset._id } },
          { _key: 'cert3', _type: 'image', asset: { _type: 'reference', _ref: png3Asset._id } }
        ]
      })
      .commit();

    console.log("Images upload and patch successful!");
  } catch (error) {
    console.error("Error:", error);
  }
}

upload();
