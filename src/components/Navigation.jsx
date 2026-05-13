import { useCallback, useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Quote', href: '#quote' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const handleAnchorClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (ev) => ev.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border-light/80 bg-cream/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={handleAnchorClick}
          className="flex items-center gap-3 rounded-xl outline-none ring-teal/40 focus-visible:ring-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-teal shadow-card ring-2 ring-teal/40">
            AX
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-navy">Aurex Cleaning</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-dark">
              Calgary, AB
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-sm font-semibold text-navy">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleAnchorClick}
                  className="transition hover:text-teal-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+15875770208"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition hover:text-teal-dark"
          >
            <Phone className="h-4 w-4 text-teal" aria-hidden />
            (587) 577-0208
          </a>
          <a
            href="#quote"
            onClick={handleAnchorClick}
            className="inline-flex rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-px hover:bg-teal-dark"
          >
            Free Quote
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+15875770208"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-teal-dark shadow-sm"
            aria-label="Call Aurex Cleaning"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-navy shadow-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border-light bg-cream px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-base font-semibold text-navy">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleAnchorClick}
                  className="block rounded-xl px-3 py-3 hover:bg-white hover:text-teal-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            onClick={handleAnchorClick}
            className="mt-4 flex w-full justify-center rounded-full bg-teal py-3 text-center text-sm font-semibold text-white shadow-card transition hover:bg-teal-dark"
          >
            Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
