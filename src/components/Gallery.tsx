import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'

/*
 * Galleria con filtri e lightbox animato.
 * Basata su "Gallery Grid with Lightbox" di reapollo (21st.dev),
 * rivisitata in stile polaroid/bacheca dei ricordi.
 * https://21st.dev/@larsen66/components/gallery-grid-block-shadcnui
 */

type Foto = { id: number; url: string; titolo: string; categoria: string }

const foto: Foto[] = [
  { id: 1, url: '/img/vista-tetti.jpg', titolo: 'La casa vista dall’alto', categoria: 'Terrazzo e vista' },
  { id: 2, url: '/img/terrazzo.jpg', titolo: 'Il terrazzo panoramico', categoria: 'Terrazzo e vista' },
  { id: 3, url: '/img/terrazzo-tavolino.jpg', titolo: 'Angolo relax sul terrazzo', categoria: 'Terrazzo e vista' },
  { id: 4, url: '/img/panorama.jpg', titolo: 'Il panorama su Santa Teresa', categoria: 'Terrazzo e vista' },
  { id: 5, url: '/img/camera-luminosa.jpg', titolo: 'Camera matrimoniale', categoria: 'Camere' },
  { id: 6, url: '/img/camera-matrimoniale.jpg', titolo: 'Camera con letto matrimoniale', categoria: 'Camere' },
  { id: 7, url: '/img/camera-armadio.jpg', titolo: 'Camera con armadio', categoria: 'Camere' },
  { id: 8, url: '/img/cameretta.jpg', titolo: 'Camera', categoria: 'Camere' },
  { id: 9, url: '/img/sala-pranzo.jpg', titolo: 'La sala da pranzo', categoria: 'Cucina e soggiorno' },
  { id: 10, url: '/img/cucina.jpg', titolo: 'La cucina attrezzata', categoria: 'Cucina e soggiorno' },
  { id: 11, url: '/img/soggiorno.jpg', titolo: 'Il soggiorno', categoria: 'Cucina e soggiorno' },
  { id: 12, url: '/img/bagno.jpg', titolo: 'Il bagno', categoria: 'Bagno' },
  { id: 13, url: '/img/bagno-1.jpg', titolo: 'Il bagno principale', categoria: 'Bagno' },
  { id: 14, url: '/img/bagno-2.jpg', titolo: 'Bagno', categoria: 'Bagno' },
  { id: 15, url: '/img/bagno-3.jpg', titolo: 'Dettaglio del bagno', categoria: 'Bagno' },
]

const categorie = ['Tutte', ...new Set(foto.map((f) => f.categoria))]

/* Rotazioni alternate per l'effetto "foto appoggiate sulla bacheca" */
const rotazioni = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1']

export function Gallery() {
  const [selezionata, setSelezionata] = useState<number | null>(null)
  const [filtro, setFiltro] = useState('Tutte')

  const fotoFiltrate =
    filtro === 'Tutte' ? foto : foto.filter((f) => f.categoria === filtro)

  const naviga = (direzione: 1 | -1) => {
    if (selezionata === null) return
    const i = fotoFiltrate.findIndex((f) => f.id === selezionata)
    const next = (i + direzione + fotoFiltrate.length) % fotoFiltrate.length
    setSelezionata(fotoFiltrate[next].id)
  }

  const fotoAperta = foto.find((f) => f.id === selezionata)

  const onCardKeyDown = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelezionata(id)
    }
  }

  return (
    <section
      id="galleria"
      className="relative overflow-hidden bg-cream-dark/60 px-4 py-24"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-16 left-4 select-none md:left-12"
      >
        <Cuore className="h-32 w-32 opacity-25" />
      </span>

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="font-script text-3xl text-brick">i nostri ricordi più belli</p>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
            La casa in immagini
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Sfogliate l'album di Casa Felice: cliccate su una foto per vederla
            da vicino.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mb-12 flex flex-wrap justify-center gap-2">
          {categorie.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              aria-pressed={filtro === cat}
              className={`rounded-full border px-5 py-2 font-script text-xl transition-all ${
                filtro === cat
                  ? 'border-brick bg-brick text-white shadow-md'
                  : 'border-ink/15 bg-white/70 text-ink-soft hover:border-brick/40 hover:text-brick'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {fotoFiltrate.map((f, index) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-6 break-inside-avoid"
              >
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
                  transition={{ type: 'spring', damping: 18, stiffness: 260 }}
                  className={`group cursor-pointer rounded-xl bg-white p-3 pb-2 shadow-md transition-shadow hover:shadow-2xl hover:shadow-ink/20 ${rotazioni[index % rotazioni.length]}`}
                  onClick={() => setSelezionata(f.id)}
                  onKeyDown={(e) => onCardKeyDown(e, f.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Apri: ${f.titolo}`}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={f.url}
                      alt={f.titolo}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1 pt-2 pb-1">
                    <p className="font-script text-2xl leading-none text-ink-soft">
                      {f.titolo}
                    </p>
                    <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Cuore className="h-5 w-5" />
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selezionata !== null && fotoAperta && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
              onClick={() => setSelezionata(null)}
              role="dialog"
              aria-modal="true"
              aria-label={fotoAperta.titolo}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-5xl"
              >
                <button
                  className="absolute -top-12 right-0 rounded-full p-2 text-cream transition-colors hover:bg-white/10 md:-right-12 md:top-0"
                  onClick={() => setSelezionata(null)}
                  aria-label="Chiudi"
                >
                  <X className="h-6 w-6" />
                </button>
                <button
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-ink/40 p-2 text-cream transition-colors hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation()
                    naviga(-1)
                  }}
                  aria-label="Foto precedente"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-ink/40 p-2 text-cream transition-colors hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation()
                    naviga(1)
                  }}
                  aria-label="Foto successiva"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>

                <motion.img
                  key={selezionata}
                  src={fotoAperta.url}
                  alt={fotoAperta.titolo}
                  className="max-h-[80vh] w-auto rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-center text-cream"
                >
                  <h3 className="font-script text-3xl">{fotoAperta.titolo}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
