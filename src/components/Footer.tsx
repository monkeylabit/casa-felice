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
    </footer>
  )
}
