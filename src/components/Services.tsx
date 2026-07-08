import { motion } from 'framer-motion'
import {
  Wifi,
  UtensilsCrossed,
  Sun,
  Baby,
  AirVent,
  CarFront,
  PawPrint,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'

const servizi = [
  { icona: UtensilsCrossed, titolo: 'Cucina attrezzata', testo: 'Tutto il necessario per cucinare come a casa vostra.' },
  { icona: Wifi, titolo: 'Wi-Fi gratuito', testo: 'Connessione veloce in tutta la casa.' },
  { icona: Baby, titolo: 'Adatta ai bambini', testo: 'Culla e cameretta pronte per i più piccoli.' },
  { icona: AirVent, titolo: 'Climatizzata', testo: 'Fresca d’estate e calda d’inverno.' },
  { icona: CarFront, titolo: 'Parcheggio comodo', testo: 'Si parcheggia facilmente, senza pensieri.' },
  { icona: PawPrint, titolo: 'Animali ammessi', testo: 'I vostri amici a quattro zampe sono i benvenuti, senza supplemento.' },
]

export function Services() {
  return (
    <section id="servizi" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:py-20 md:py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute top-10 right-2 select-none md:right-12"
      >
        <Cuore className="h-36 w-36 opacity-25" />
      </span>
      {/* Aloni morbidi di colore sullo sfondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-32 h-80 w-80 rounded-full bg-blush/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cream-dark blur-3xl"
      />

      <Reveal className="relative mb-14 text-center">
        <p className="flex items-center justify-center gap-3 font-script text-3xl text-brick">
          <span aria-hidden className="h-px w-10 bg-brick/40" />
          i comfort
          <Cuore className="h-5 w-5" />
          <span aria-hidden className="h-px w-10 bg-brick/40" />
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Tutto quello che vi{' '}
          <span className="relative inline-block whitespace-nowrap font-script text-5xl text-brick md:text-6xl">
            serve
            <svg
              aria-hidden
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-3 w-full"
            >
              <path
                d="M2 8 C 20 2, 40 10, 60 6 S 100 2, 118 7"
                fill="none"
                stroke="#e8a9a4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-soft">
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
            className="group relative flex items-start gap-5 overflow-hidden rounded-[2rem] border border-ink/8 bg-white/80 p-7 shadow-sm transition-shadow hover:border-heart/50 hover:shadow-xl hover:shadow-blush/40"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blush/50 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <motion.div
              whileHover={{ rotate: [0, -12, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="shrink-0 rounded-2xl bg-gradient-to-br from-blush to-heart/60 p-3.5 text-brick shadow-inner ring-1 ring-heart/30"
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

      <Reveal delay={0.2} className="relative mt-12 text-center">
        <p className="font-script text-3xl text-ink-soft">
          …e mille altre piccole attenzioni{' '}
          <Cuore className="h-6 w-6 align-middle" />
        </p>
      </Reveal>
    </section>
  )
}
