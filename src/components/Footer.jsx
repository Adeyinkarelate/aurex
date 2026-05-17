import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { servicesData } from '../data/servicesData'

const companyLinks = [
  { label: 'About', hash: 'about' },
  { label: 'Why Aurex', hash: 'why-aurex' },
  { label: 'Reviews', hash: 'reviews' },
  { label: 'FAQ', hash: 'faq' },
  { label: 'Quote', hash: 'quote' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer pb-16 pt-20 text-slate-400">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.14),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl outline-none ring-teal/30 transition hover:opacity-95 focus-visible:ring-2"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/30 to-white/5 font-sans text-base font-bold text-teal ring-1 ring-teal/40">
              AX
            </span>
            <div>
              <p className="font-sans text-lg font-semibold tracking-tight text-white">Aurex Cleaning Services</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-teal-pale/90">Calgary commercial cleaning</p>
            </div>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
            Dependable commercial cleaning for Calgary businesses—ongoing janitorial service, deep cleans, and
            specialty work when you need it.
          </p>
          <p className="mt-8 text-xs text-slate-500">
            Site architecture credit:{' '}
            <a
              href="https://aveionstructures.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              Aveion Structures
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">Services</p>
          <ul className="mt-6 space-y-3 text-sm">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-1 text-slate-300 transition hover:text-white"
                >
                  {s.title}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">Company</p>
          <ul className="mt-6 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.hash}>
                <Link
                  to={{ pathname: '/', hash: `#${l.hash}` }}
                  className="group inline-flex items-center gap-1 text-slate-300 transition hover:text-white"
                >
                  {l.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">Contact</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="tel:+15875770208" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Phone className="h-4 w-4 text-teal" aria-hidden />
                </span>
                (587) 577-0208
              </a>
            </li>
            <li>
              <a
                href="mailto:aurexcleanservices@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Mail className="h-4 w-4 text-teal" aria-hidden />
                </span>
                aurexcleanservices@gmail.com
              </a>
            </li>
            <li className="text-slate-400">Calgary, AB</li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-white/[0.06] px-4 pt-10 text-xs text-slate-500 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Aurex Cleaning Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
