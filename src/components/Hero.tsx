import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SITE } from '../site'
import { Cuore } from './Cuore'
import { toWebp } from '../lib/img'

/*
 * Hero con effetto parallasse allo scroll.
 * Basato su "Smooth Scroll Hero" di ishamsu (21st.dev):
 * https://21st.dev/@ishamsu/components/smooth-scroll-hero
 */
export function Hero() {
  const { scrollY } = useScroll()
  const bgScale = useTransform(scrollY, [0, 900], [1.15, 1])
  const bgY = useTransform(scrollY, [0, 900], ['0%', '12%'])
  const fadeOut = useTransform(scrollY, [0, 500], [1, 0])

  const titolo = 'Casa Felice'

  // Aspetta che il font Caveat sia pronto prima di animare il titolo,
  // per evitare che le lettere partano con il font di riserva e "saltino".
  const [fontPronto, setFontPronto] = useState(false)
  useEffect(() => {
    let attivo = true
    document.fonts.ready.then(() => {
      if (attivo) setFontPronto(true)
    })
    return () => {
      attivo = false
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY, willChange: 'transform' }}
      >
        <picture>
          <source srcSet={toWebp('/img/hero-casa.jpg')} type="image/webp" />
          <img
            src="/img/hero-casa.jpg"
            alt="Casa Felice vista dall'alto al tramonto"
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/85" />

      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 text-sm tracking-[0.35em] uppercase text-cream/85"
        >
          Benvenuti a
        </motion.p>

        <h1
          aria-label={titolo}
          className="font-script text-7xl leading-none font-semibold sm:text-8xl md:text-9xl"
        >
          {titolo.split('').map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={fontPronto ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 40, rotate: -6 }}
              transition={{
                delay: 0.5 + i * 0.06,
                type: 'spring',
                damping: 14,
                stiffness: 200,
              }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
          <motion.span
            aria-hidden
            className="ml-3 inline-block align-middle"
            initial={{ opacity: 0, scale: 0 }}
            animate={fontPronto ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.4, type: 'spring', damping: 10 }}
          >
            <Cuore className="h-12 w-12 drop-shadow-md md:h-14 md:w-14" />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-5 max-w-xl text-lg italic text-cream/90 md:text-xl"
        >
          {SITE.sottotitolo}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 px-2 sm:max-w-none sm:flex-row sm:items-center sm:gap-4 sm:px-0"
        >
          <motion.a
            href={`tel:${SITE.telefono1.tel}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 rounded-full bg-brick px-6 py-3.5 text-base font-medium whitespace-nowrap text-white shadow-xl shadow-ink/30 transition-colors hover:bg-brick-dark sm:px-9 sm:py-4 sm:text-lg"
          >
            <Phone className="h-5 w-5 shrink-0" />
            Prenota {SITE.telefono1.label}
          </motion.a>
          <motion.a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 rounded-full border-2 border-cream/80 bg-cream/10 px-6 py-3.5 text-base font-medium whitespace-nowrap text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-brick sm:px-8 sm:py-4 sm:text-lg"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            <span className="sm:hidden">Altri appartamenti</span>
            <span className="hidden sm:inline">Scrivici per altri appartamenti</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#la-casa"
        aria-label="Scorri per scoprire la casa"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-cream/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        style={{ opacity: fadeOut }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>

      {/* Onda di raccordo verso la sezione "benvenuti" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] text-cream"
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-20 w-full drop-shadow-[0_-6px_10px_rgba(33,28,25,0.25)] sm:h-24 md:h-32"
        >
          <path
            d="M0,55 C 240,95 480,20 720,40 C 960,60 1200,98 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
