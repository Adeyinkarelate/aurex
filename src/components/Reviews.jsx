import { Star } from 'lucide-react'
import { reviewsData } from '../data/reviewsData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-28 border-y border-border-light bg-gradient-to-b from-cream to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Trusted by Calgary businesses
            </h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-white px-6 py-5 shadow-card">
            <div>
              <p className="font-display text-4xl font-bold text-navy">5.0</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Average rating
              </p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" aria-hidden />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={`summary-${i}`} className="h-6 w-6 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" aria-hidden />
            <div>
              <p className="font-display text-xl font-bold text-navy">80+ reviews</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Google & referrals
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((r) => (
            <ScrollReveal key={`${r.name}-${r.role}`}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-teal/35 hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-faint text-xs font-bold text-teal-deeper ring-1 ring-teal/25"
                    aria-hidden
                  >
                    {r.initials}
                  </span>
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-text-muted">“{r.text}”</p>
                <div className="mt-6 border-t border-border-light pt-5">
                  <p className="font-semibold text-navy">{r.name}</p>
                  <p className="text-sm text-text-muted">{r.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
