import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', hash: 'services' },
  { label: 'Industries', hash: 'industries' },
  { label: 'About', hash: 'about' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Quote', hash: 'quote' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = useCallback(
    (hash) => {
      const id = hash.replace(/^#/, '')
      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash: `#${id}` })
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setOpen(false)
    },
    [location.pathname, navigate]
  )

  const handleBrandClick = useCallback(
    (e) => {
      if (location.pathname === '/' && !location.hash) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      setOpen(false)
    },
    [location.pathname, location.hash]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (ev) => ev.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={handleBrandClick}
          className="group flex items-center gap-3 rounded-2xl outline-none ring-teal/30 transition hover:opacity-95 focus-visible:ring-2"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy-mid font-sans text-base font-bold text-teal shadow-card ring-1 ring-white/10 transition duration-300 group-hover:ring-teal/40 group-hover:shadow-glow">
            <span className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="relative">AX</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-sans text-lg font-semibold tracking-tight text-navy">Aurex Cleaning</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-dark">
              Calgary, AB
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1 rounded-full border border-border-light bg-white/80 px-2 py-1.5 shadow-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <button
                  type="button"
                  onClick={() => goToSection(link.hash)}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition hover:bg-teal-faint hover:text-teal-deeper"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="tel:+15875770208"
            tabIndex={0}
            className="ml-4 inline-flex items-center gap-2 text-sm font-semibold text-text-muted transition hover:text-teal-dark"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-faint text-teal-dark ring-1 ring-teal/15">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            (587) 577-0208
          </a>
          <button type="button" onClick={() => goToSection('quote')} className="btn-primary ml-2 px-5 py-2.5">
            Free Quote
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+15875770208"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-light bg-white text-teal-dark shadow-sm transition active:scale-95"
            aria-label="Call Aurex Cleaning"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-light bg-white text-navy shadow-sm transition active:scale-95"
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
          className="border-t border-border-light bg-white/95 px-4 py-5 backdrop-blur-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-base font-semibold text-navy">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <button
                  type="button"
                  onClick={() => goToSection(link.hash)}
                  className="block w-full rounded-xl px-3 py-3 text-left transition hover:bg-cream hover:text-teal-deeper"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => goToSection('quote')} className="btn-primary mt-5 w-full py-3.5">
            Free Quote
          </button>
        </div>
      )}
    </header>
  )
}
