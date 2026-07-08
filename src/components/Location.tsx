import { MapPin, Waves, Mountain, Plane } from 'lucide-react'
import { Reveal } from './Reveal'
import { SITE } from '../site'

const dintorni = [
  { icona: Plane, testo: 'Aeroporto di Pescara a soli 3 km, 10 minuti d’auto' },
  { icona: Waves, testo: 'Mare e spiagge di Pescara a 8 km' },
  { icona: Mountain, testo: 'Colline e borghi d’Abruzzo tutt’intorno' },
]

export function Location() {
  return (
    <section id="dove-siamo" className="bg-cream-dark/60 px-5 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="font-script text-3xl text-brick">dove siamo</p>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
            Santa Teresa di Spoltore
          </h2>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-ink/10">
              <iframe
                title="Mappa di Casa Felice — Via Metauro 14, Spoltore"
                src={SITE.mapsEmbed}
                className="h-[280px] w-full border-0 sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.15}>
              <p className="flex items-start gap-3 text-lg">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brick" />
                <span>
                  {SITE.indirizzo}
                  <br />
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brick underline underline-offset-4 hover:text-brick-dark"
                  >
                    Apri in Google Maps
                  </a>
                </span>
              </p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {dintorni.map((d, i) => (
                <Reveal key={d.testo} delay={0.25 + i * 0.1}>
                  <p className="flex items-center gap-3 text-ink-soft">
                    <span className="inline-flex rounded-xl bg-blush p-2 text-brick">
                      <d.icona className="h-5 w-5" />
                    </span>
                    {d.testo}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
