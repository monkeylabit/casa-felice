import { motion } from 'framer-motion'
import {
  Wifi,
  UtensilsCrossed,
  Sun,
  Baby,
  AirVent,
  CarFront,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'

const servizi = [
  { icona: UtensilsCrossed, titolo: 'Cucina attrezzata', testo: 'Tutto il necessario per cucinare come a casa vostra.' },
  { icona: Wifi, titolo: 'Wi-Fi gratuito', testo: 'Connessione veloce in tutta la casa.' },
  { icona: Baby, titolo: 'Adatta ai bambini', testo: 'Culla e cameretta pronte per i più piccoli.' },
  { icona: AirVent, titolo: 'Climatizzata', testo: 'Fresca d’estate e calda d’inverno.' },
  { icona: CarFront, titolo: 'Parcheggio comodo', testo: 'Si parcheggia facilmente, senza pensieri.' },
]

export function Services() {
  return (
    <section id="servizi" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute top-10 right-2 select-none md:right-12"
      >
        <Cuore className="h-36 w-36 opacity-25" />
      </span>

      <Reveal className="relative mb-14 text-center">
        <p className="font-script text-3xl text-brick">i comfort</p>
        <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
          Tutto quello che vi serve
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          Piccole attenzioni e comodità pensate per farvi stare bene, dal primo
          caffè del mattino alla buonanotte.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        {/* Card grande con la foto del terrazzo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -6 }}
          className="group relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-lg sm:col-span-2 lg:row-span-2"
        >
          <motion.img
            src="/img/terrazzo-sunset.png"
            alt="Il terrazzo panoramico di Casa Felice"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-sm font-medium text-brick">
              <Sun className="h-4 w-4" />
              il nostro fiore all'occhiello
            </span>
            <h3 className="font-script text-5xl text-cream">
              Terrazzo panoramico
            </h3>
            <p className="mt-2 max-w-md text-cream/90">
              Colazione al sole, cena sotto le stelle e la vista sui tetti di
              Santa Teresa: il posto dove passerete più tempo di quanto
              immaginate.
            </p>
          </div>
        </motion.div>

        {servizi.map((s, i) => (
          <motion.div
            key={s.titolo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.6 : -0.6 }}
            className="group flex items-start gap-5 rounded-[2rem] border border-ink/8 bg-white/80 p-7 shadow-sm transition-shadow hover:border-heart/50 hover:shadow-xl hover:shadow-blush/40"
          >
            <motion.div
              whileHover={{ rotate: [0, -12, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="shrink-0 rounded-2xl bg-gradient-to-br from-blush to-heart/60 p-3.5 text-brick shadow-inner"
            >
              <s.icona className="h-6 w-6" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold">
                {s.titolo}
                <span className="ml-1.5 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Cuore className="h-4 w-4 align-baseline" />
                </span>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {s.testo}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
