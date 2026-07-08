import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const dir = process.argv[2]
if (!dir) {
  console.error('Uso: node optimize-images.mjs <cartella>')
  process.exit(1)
}

const files = await readdir(dir)
const sorgenti = files.filter((f) => /\.(jpe?g|png)$/i.test(f))

let totalePrima = 0
let totaleDopo = 0

for (const file of sorgenti) {
  const input = path.join(dir, file)
  const output = path.join(dir, file.replace(/\.(jpe?g|png)$/i, '.webp'))
  const { size: sizePrima } = await stat(input)

  await sharp(input).webp({ quality: 82 }).toFile(output)

  const { size: sizeDopo } = await stat(output)
  totalePrima += sizePrima
  totaleDopo += sizeDopo

  console.log(
    `${file} -> ${path.basename(output)}: ${(sizePrima / 1024).toFixed(0)}KB -> ${(sizeDopo / 1024).toFixed(0)}KB (-${(100 - (sizeDopo / sizePrima) * 100).toFixed(0)}%)`,
  )
}

console.log(
  `\nTotale: ${(totalePrima / 1024 / 1024).toFixed(2)}MB -> ${(totaleDopo / 1024 / 1024).toFixed(2)}MB`,
)
