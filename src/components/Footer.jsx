import { ArrowUpRight, Mail, Phone } from 'lucide-react'

const servicesLinks = [
  { label: 'Office Cleaning', href: '#services' },
  { label: 'Post-Construction Cleanup', href: '#services' },
  { label: 'Sanitization & Disinfection', href: '#services' },
  { label: 'Move-In / Move-Out', href: '#services' },
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Why Aurex', href: '#why-aurex' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Quote', href: '#quote' },
]

export default function Footer() {
  return (
    <footer className="bg-footer pb-16 pt-16 text-teal-pale">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 font-display font-bold text-teal ring-2 ring-teal">
              AX
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">Aurex Cleaning Services</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-teal">Calgary commercial cleaning</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-teal-pale/85">
            Reliable janitorial partners trusted by Calgary businesses for recurring stewardship and specialty resets.
          </p>
          <p className="mt-6 text-xs text-teal-pale/65">
            Site architecture credit:{' '}
            <a
              href="https://aveionstructures.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold-light underline-offset-4 hover:underline"
            >
              Aveion Structures
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-light">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {servicesLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex items-center gap-1 transition hover:text-gold-light">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-light">Company</p>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex items-center gap-1 transition hover:text-gold-light">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-light">Contact</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href="tel:+15875770208" className="flex items-center gap-2 transition hover:text-gold-light">
                <Phone className="h-4 w-4 text-teal" aria-hidden />
                (587) 577-0208
              </a>
            </li>
            <li>
              <a
                href="mailto:aurexcleanservices@gmail.com"
                className="flex items-center gap-2 transition hover:text-gold-light"
              >
                <Mail className="h-4 w-4 text-teal" aria-hidden />
                aurexcleanservices@gmail.com
              </a>
            </li>
            <li className="text-teal-pale/85">Calgary, AB</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 px-4 pt-8 text-xs text-teal-pale/60 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Aurex Cleaning Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
