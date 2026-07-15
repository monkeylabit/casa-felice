import { SITE } from '../site'
import { Cuore } from './Cuore'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dark/80 px-5 py-10 text-center">
      <p className="font-script text-4xl">
        Casa Felice <Cuore className="h-8 w-8 align-middle" />
      </p>
      <p className="mt-2 text-sm text-ink-soft">{SITE.indirizzo}</p>
      <p className="mt-1 text-sm text-ink-soft">
        {SITE.telefono1.label} · {SITE.telefono2.label} · {SITE.email}
      </p>
      <p className="mt-4 text-xs text-ink-soft/60">
        © {new Date().getFullYear()} Casa Felice — Casa turistica a Santa
        Teresa di Spoltore
      </p>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-ink-soft/60">
        Sito creato da{' '}
        <a
          href="https://monkeylab.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline hover:text-ink-soft"
        >
          <img
            src="/img/icon.png"
            alt="Monkey Lab"
            className="h-5 w-5 rounded-full object-cover"
          />
          Monkey Lab
        </a>
      </p>
    </footer>
  )
}
