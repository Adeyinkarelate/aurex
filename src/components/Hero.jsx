import { ArrowRight, Phone, ShieldCheck, Sparkles, Timer } from 'lucide-react'

const HERO_BG =
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative min-h-[85vh]">
        <img
          src={HERO_BG}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/88 to-navy/65" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-28 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:pt-24">
          <div className="max-w-xl lg:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-pale">
              Calgary commercial cleaning
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
              A Cleaner Space.{' '}
              <span className="text-teal">A Better Business.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-teal-pale/95">
              Production-ready janitorial programs for offices, retail, medical, and industrial
              footprints across Calgary—grounded in accountability and prairie-season resilience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-px hover:bg-teal-dark"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="tel:+15875770208"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-px hover:border-teal hover:bg-white/15"
              >
                <Phone className="h-4 w-4 text-teal-pale" aria-hidden />
                Call (587) 577-0208
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/15 pt-8">
              {[
                { icon: ShieldCheck, label: 'Fully insured & bonded' },
                { icon: Sparkles, label: 'Background-checked staff' },
                { icon: Timer, label: 'Free 24hr quotes' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-teal-pale">
                  <Icon className="h-5 w-5 shrink-0 text-teal" aria-hidden />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8 lg:max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
              Proof in the field
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wide text-teal-pale/80">Clients</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">400+</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wide text-teal-pale/80">Rating</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">5★</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wide text-teal-pale/80">Experience</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">5+ years</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <dt className="text-xs uppercase tracking-wide text-teal-pale/80">Satisfaction</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-teal">100%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-teal-deeper/30 bg-teal-deeper px-4 py-4 text-center sm:px-6">
        <p className="mx-auto max-w-4xl text-sm font-semibold text-teal-pale">
          <span className="text-white">Need urgent turnover coverage?</span> Emergency crews available for
          same-week resets—call{' '}
          <a className="underline decoration-teal-pale/40 underline-offset-4 hover:text-white" href="tel:+15875770208">
            (587) 577-0208
          </a>{' '}
          and mention “Emergency bar”.
        </p>
      </div>
    </section>
  )
}
