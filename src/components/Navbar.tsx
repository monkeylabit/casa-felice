import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { SITE } from '../site'
import { Cuore } from './Cuore'

const voci = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Dove siamo', href: '#dove-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export function Navbar() {
  const [aperto, setAperto] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 120], ['rgba(250,246,241,0)', 'rgba(250,246,241,0.95)'])
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ['0 0 0 rgba(0,0,0,0)', '0 2px 18px rgba(33,28,25,0.08)'],
  )
  const colore = useTransform(scrollY, [0, 120], ['#faf6f1', '#211c19'])

  return (
    <motion.header
      style={{ backgroundColor: aperto ? '#faf6f1' : bg, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <motion.a
          href="#home"
          style={{ color: aperto ? '#211c19' : colore }}
          className="flex items-center gap-1.5 font-script text-3xl font-semibold"
          onClick={() => setAperto(false)}
        >
          Casa Felice
          <motion.span
            className="inline-flex"
            animate={{ scale: [1, 1.25, 1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
              repeatDelay: 2.2,
              ease: 'easeInOut',
            }}
          >
            <Cuore className="h-6 w-6" />
          </motion.span>
        </motion.a>

        <div className="hidden items-center gap-7 md:flex">
          {voci.map((v) => (
            <motion.a
              key={v.href}
              href={v.href}
              style={{ color: colore }}
              className="text-sm tracking-wide transition-opacity hover:opacity-70"
            >
              {v.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.telefono1.tel}`}
            className="flex items-center gap-2 rounded-full bg-brick px-4 py-2 text-sm text-white shadow-md transition-colors hover:bg-brick-dark"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Prenota</span>
          </a>

          <motion.button
            type="button"
            onClick={() => setAperto((v) => !v)}
            aria-label={aperto ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={aperto}
            style={{ color: aperto ? '#211c19' : colore }}
            className="-mr-2 flex items-center justify-center rounded-full p-2 md:hidden"
          >
            {aperto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {aperto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
          >
            <div className="flex flex-col px-5 py-2">
              {voci.map((v) => (
                <a
                  key={v.href}
                  href={v.href}
                  onClick={() => setAperto(false)}
                  className="border-b border-ink/5 py-3.5 text-base text-ink last:border-0"
                >
                  {v.label}
                </a>
              ))}
              <a
                href={`tel:${SITE.telefono1.tel}`}
                onClick={() => setAperto(false)}
                className="mt-4 mb-3 flex items-center justify-center gap-2 rounded-full bg-brick px-4 py-3 text-base font-medium text-white shadow-md"
              >
                <Phone className="h-4 w-4" />
                Prenota {SITE.telefono1.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
