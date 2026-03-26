import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const outDir = path.join(__dirname, '..', 'public', 'img')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const width = 1200
const height = 800

interface ImageConfig {
  name: string
  color: string
  text: string
}

const images: ImageConfig[] = [
  { name: 'project1', color: '#4F46E5', text: 'Proyecto 1' },
  { name: 'project2', color: '#059669', text: 'Proyecto 2' },
]

async function make() {
  for (const img of images) {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${img.color}" />
        <text x="50%" y="50%" font-size="72" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle" font-family="Arial, Helvetica, sans-serif">${img.text}</text>
      </svg>
    `

    const buffer = Buffer.from(svg)
    const pngPath = path.join(outDir, `${img.name}.png`)
    const webpPath = path.join(outDir, `${img.name}.webp`)

    await sharp(buffer).png().toFile(pngPath)
    await sharp(buffer).webp({ quality: 80 }).toFile(webpPath)

    console.log('Created', pngPath, webpPath)
  }
}

make().catch((err) => {
  console.error(err)
  process.exit(1)
})
