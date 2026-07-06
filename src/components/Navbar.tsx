import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone } from 'lucide-react'
import { SITE } from '../site'
import { Cuore } from './Cuore'

const voci = [
  { label: 'La casa', href: '#la-casa' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Dove siamo', href: '#dove-siamo' },
  { label: 'Contatti', href: '#contatti' },
]

export function Navbar() {
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
      style={{ backgroundColor: bg, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <motion.a
          href="#home"
          style={{ color: colore }}
          className="flex items-center gap-1.5 font-script text-3xl font-semibold"
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

        <a
          href={`tel:${SITE.telefono1.tel}`}
          className="flex items-center gap-2 rounded-full bg-brick px-4 py-2 text-sm text-white shadow-md transition-colors hover:bg-brick-dark"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Prenota</span>
        </a>
      </nav>
    </motion.header>
  )
}
