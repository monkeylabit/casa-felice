import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import { Reveal } from './Reveal'
import { SITE } from '../site'
import { Cuore } from './Cuore'

export function Contact() {
  return (
    <section id="contatti" className="relative overflow-hidden px-5 py-16 sm:py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'url(/img/vista-tetti.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-script text-4xl text-brick">prenotate da privato</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Chiamateci: è più semplice{' '}
            <Cuore className="h-9 w-9 align-middle md:h-10 md:w-10" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-soft">
            Prenotando direttamente con noi avete sempre il prezzo migliore,
            massima flessibilità e una voce amica che risponde a ogni domanda.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={`tel:${SITE.telefono1.tel}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-brick px-8 py-4 text-lg font-medium text-white shadow-xl shadow-brick/25 transition-colors hover:bg-brick-dark sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              {SITE.telefono1.label}
            </motion.a>
            <motion.a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-medium text-white shadow-xl shadow-[#25D366]/25 transition-colors hover:bg-[#1fb457] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-6 space-y-2 text-ink-soft">
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${SITE.email}`}
                className="underline underline-offset-4 hover:text-brick"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-heart/40 bg-blush/40 px-8 py-6">
            <p className="font-script text-3xl text-brick">cercate altro?</p>
            <p className="mt-2 text-ink-soft">
              Disponiamo anche di altri appartamenti in zona: scriveteci o
              chiamateci e troviamo insieme la soluzione giusta per voi.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Informazioni%20altri%20appartamenti`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-brick px-5 py-2.5 text-sm font-medium whitespace-nowrap text-brick transition-colors hover:bg-brick hover:text-white sm:px-6"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="sm:hidden">Scriveteci</span>
              <span className="hidden sm:inline">Scriveteci per altri appartamenti</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm text-ink-soft/70 underline underline-offset-4 transition-colors hover:text-ink"
          >
            Preferite le piattaforme? Trovate Casa Felice anche su Booking.com
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
