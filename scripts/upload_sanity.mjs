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
    console.log("Fetching siteSettings document...");
    const settings = await client.fetch('*[_type == "siteSettings"][0]');
    if (!settings) {
      console.log("No siteSettings document found. Exiting.");
      return;
    }
    const docId = settings._id;
    console.log("Found document ID:", docId);

    console.log("Uploading PDF 1...");
    const pdf1Path = path.resolve('public', 'material', 'Certificación O.I.E.P-104125 Priscila Denis Ginanneschi Zagarra.pdf');
    const pdf1Asset = await client.assets.upload('file', fs.createReadStream(pdf1Path), { filename: 'cert1.pdf' });

    console.log("Uploading PDF 2...");
    const pdf2Path = path.resolve('public', 'material', 'Certificación Nacional -103931 Laura Paez.pdf');
    const pdf2Asset = await client.assets.upload('file', fs.createReadStream(pdf2Path), { filename: 'cert2.pdf' });

    console.log("Uploading PNG...");
    const pngPath = path.resolve('public', 'certificados', 'Certificado CPL.png');
    const pngAsset = await client.assets.upload('image', fs.createReadStream(pngPath), { filename: 'cert3.png' });

    console.log("Uploading Video...");
    const videoPath = path.resolve('public', 'material', 'video2.MP4');
    const videoAsset = await client.assets.upload('file', fs.createReadStream(videoPath), { filename: 'video2.mp4' });

    console.log("Patching document...");
    await client
      .patch(docId)
      .setIfMissing({ 'certifications.gallery': [] })
      .set({
        'certifications.gallery': [
          { _key: 'cert1', _type: 'file', asset: { _type: 'reference', _ref: pdf1Asset._id } },
          { _key: 'cert2', _type: 'file', asset: { _type: 'reference', _ref: pdf2Asset._id } },
          { _key: 'cert3', _type: 'image', asset: { _type: 'reference', _ref: pngAsset._id } }
        ],
        'certifications.video': {
          _type: 'file',
          asset: { _type: 'reference', _ref: videoAsset._id }
        },
        'about.video': {
          _type: 'file',
          asset: { _type: 'reference', _ref: videoAsset._id }
        }
      })
      .commit();

    console.log("Upload and patch successful!");
  } catch (error) {
    console.error("Error during upload:", error);
  }
}

upload();
