import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-teal-deeper via-teal-dark to-teal py-12 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(212,165,116,0.12)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-sans text-xl font-semibold tracking-tight sm:text-2xl">Ready to get started?</p>
        <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center sm:gap-12">
          <a
            href="tel:+15875770208"
            className="group flex items-center gap-3 transition hover:text-navy"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 transition group-hover:bg-white/25">
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
            </span>
            (587) 577-0208
          </a>
          <a
            href="mailto:aurexcleanservices@gmail.com"
            className="group flex items-center gap-3 transition hover:text-navy"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20 transition group-hover:bg-white/25">
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
            </span>
            aurexcleanservices@gmail.com
          </a>
          <span className="flex items-center gap-3 text-white/95">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden />
            </span>
            Calgary, AB
          </span>
        </div>
      </div>
    </section>
  )
}

