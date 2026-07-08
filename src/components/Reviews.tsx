import { Star } from 'lucide-react'
import { Reveal } from './Reveal'
import { Cuore } from './Cuore'
import { SITE } from '../site'

const categorie = [
  { nome: 'Staff', voto: 10 },
  { nome: 'Servizi', voto: 9.8 },
  { nome: 'Pulizia', voto: 9.8 },
  { nome: 'Comfort', voto: 9.7 },
  { nome: 'Rapporto qualità-prezzo', voto: 9.8 },
  { nome: 'Posizione', voto: 9.5 },
]

const recensioni = [
  {
    testo:
      'L’appartamento è molto confortevole, dotato di tutto ciò di cui si necessita per una piacevole vacanza. Molto luminoso ed estremamente comodo. Giovanna, la host, si è resa disponibile per ogni necessità.',
    nome: 'Piera',
    luogo: 'Italia',
  },
  {
    testo:
      'Bellissima mansarda con terrazzo esterno, tenuta davvero bene, molto pulita ed accogliente. Ottima per una coppia con bimbi. I proprietari gentilissimi, brave persone, come stare in famiglia.',
    nome: 'Alessandro',
    luogo: 'Italia',
  },
  {
    testo:
      'La struttura mi è piaciuta molto: ambiente curato e confortevole. Gli host sono stati davvero accoglienti, gentili e sempre disponibili.',
    nome: 'Noemi',
    luogo: 'Italia',
  },
  {
    testo:
      'Very nice and helpful hosts. Very clean and tidy apartments. Everything is very good and very cozy here. I recommend staying here 100 percent.',
    nome: 'Giedrius',
    luogo: 'Lituania',
  },
]

export function Reviews() {
  return (
    <section id="recensioni" className="relative overflow-hidden bg-cream-dark/60 px-5 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-blush/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="flex items-center justify-center gap-3 font-script text-3xl text-brick">
            <span aria-hidden className="h-px w-10 bg-brick/40" />
            le recensioni
            <Cuore className="h-5 w-5" />
            <span aria-hidden className="h-px w-10 bg-brick/40" />
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Quello che dicono di noi
          </h2>
        </Reveal>

        {/* Punteggio complessivo */}
        <Reveal delay={0.1}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-ink/8 bg-white/80 p-8 shadow-sm sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brick text-2xl font-semibold text-white shadow-lg shadow-brick/25">
                9,5
              </span>
              <div>
                <p className="text-lg font-semibold">Eccezionale</p>
                <p className="text-sm text-ink-soft">
                  11 recensioni su Booking.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-brick">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Voti per categoria */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            {categorie.map((c) => (
              <div key={c.nome}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-ink-soft">{c.nome}</span>
                  <span className="font-semibold text-brick">{c.voto}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-blush/60">
                  <div
                    className="h-full rounded-full bg-brick"
                    style={{ width: `${(c.voto / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Citazioni degli ospiti */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {recensioni.map((r, i) => (
            <Reveal key={r.nome} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-[2rem] border border-ink/8 bg-white/80 p-7 shadow-sm">
                <p className="leading-relaxed text-ink-soft italic">
                  «{r.testo}»
                </p>
                <p className="mt-4 text-sm font-medium text-ink">
                  {r.nome}
                  <span className="font-normal text-ink-soft"> · {r.luogo}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <a
            href={SITE.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft/70 underline underline-offset-4 transition-colors hover:text-ink"
          >
            Leggi tutte le recensioni su Booking.com
          </a>
        </Reveal>
      </div>
    </section>
  )
}
