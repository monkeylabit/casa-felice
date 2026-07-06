import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'

export function About() {
  return (
    <section id="la-casa" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="font-script text-3xl text-brick">benvenuti</p>
            <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
              Una casa che vi farà sentire… felici
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Casa Felice è un luminoso appartamento mansardato a Santa Teresa
              di Spoltore, a pochi minuti da Pescara e dal mare Adriatico.
              Camere accoglienti con biancheria fresca, una cucina completa di
              tutto e un grande terrazzo con vista sui tetti del paese, perfetto
              per la colazione al sole o un bicchiere di vino al tramonto.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Vi accogliamo come amici, con un pensiero di benvenuto e tutti i
              consigli giusti per scoprire l'Abruzzo: il mare, i colli e la
              buona cucina.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 font-script text-3xl text-ink">
              Giovanna <Cuore className="h-7 w-7 align-middle" />
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={0.2}>
            <motion.img
              src="/img/terrazzo-tavolino.jpg"
              alt="Angolo relax sul terrazzo di Casa Felice"
              className="w-full rounded-3xl object-cover shadow-2xl shadow-ink/15"
              whileHover={{ scale: 1.02, rotate: 0.4 }}
              transition={{ duration: 0.4 }}
            />
          </Reveal>
          <Reveal delay={0.4} className="absolute -bottom-10 -left-6 hidden w-48 md:block">
            <motion.img
              src="/img/benvenuto.jpg"
              alt="Il benvenuto di Casa Felice"
              className="rounded-2xl border-4 border-cream object-cover shadow-xl"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.4 }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
