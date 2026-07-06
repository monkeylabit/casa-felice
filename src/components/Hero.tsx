import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, ChevronDown } from 'lucide-react'
import { SITE } from '../site'
import { Cuore } from './Cuore'

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

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, y: bgY, willChange: 'transform' }}
      >
        <img
          src="/img/hero-casa.jpg"
          alt="Casa Felice vista dall'alto al tramonto"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/60" />

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
              animate={{ opacity: 1, y: 0, rotate: 0 }}
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
            animate={{ opacity: 1, scale: 1 }}
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
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href={`tel:${SITE.telefono1.tel}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full bg-brick px-9 py-4 text-lg font-medium text-white shadow-xl shadow-ink/30 transition-colors hover:bg-brick-dark"
          >
            <Phone className="h-5 w-5" />
            Prenota {SITE.telefono1.label}
          </motion.a>
          <motion.a
            href={`mailto:${SITE.email}?subject=Informazioni%20altri%20appartamenti`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 rounded-full border-2 border-cream/80 bg-cream/10 px-8 py-4 text-lg font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-brick"
          >
            <Mail className="h-5 w-5" />
            Contattaci per altri appartamenti
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#la-casa"
        aria-label="Scorri per scoprire la casa"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        style={{ opacity: fadeOut }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  )
}
