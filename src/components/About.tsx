import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'

export function About() {
  return (
    <section id="la-casa" className="relative overflow-hidden">
      {/* Aloni morbidi di colore sullo sfondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-blush/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cream-dark blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-script text-3xl text-brick">
                <span aria-hidden className="h-px w-10 bg-brick/40" />
                benvenuti in
                <Cuore className="h-5 w-5" />
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                una casa che vi farà sentire…{' '}
                <span className="relative inline-block whitespace-nowrap font-script text-5xl text-brick md:text-6xl">
                  felici
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
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 leading-relaxed text-ink-soft">
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
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink-soft/70">
                  La vostra ospite
                </p>
                <p className="mt-1 font-script text-4xl text-ink">
                  Giovanna <Cuore className="h-7 w-7 align-middle" />
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative">
                {/* Cornice rosa ruotata dietro la foto */}
                <div
                  aria-hidden
                  className="absolute -inset-3 rotate-2 rounded-3xl bg-blush/70 md:-inset-4"
                />
                <motion.img
                  src="/img/terrazzo-tavolino.jpg"
                  alt="Angolo relax sul terrazzo di Casa Felice"
                  className="relative w-full rounded-3xl object-cover shadow-2xl shadow-ink/15"
                  whileHover={{ scale: 1.02, rotate: 0.4 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </Reveal>
            <Reveal delay={0.4} className="absolute -bottom-10 -left-6 hidden w-48 md:block">
              <motion.img
                src="/img/benvenuto.jpg"
                alt="Il benvenuto di Casa Felice"
                className="-rotate-3 rounded-2xl border-4 border-cream object-cover shadow-xl"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.4 }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
