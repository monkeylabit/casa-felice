/** Deriva il percorso della versione WebP a partire da un JPG/PNG originale. */
export function toWebp(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}
