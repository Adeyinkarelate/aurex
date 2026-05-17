import { Star } from 'lucide-react'
import { reviewsData } from '../data/reviewsData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-28 border-y border-border-light bg-gradient-to-b from-white via-cream to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="max-w-xl">
            <p className="section-eyebrow">Social proof</p>
            <h2 className="section-title mt-5">
              Some of our clients include Milestones, Alloy, and others.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap items-center gap-8 rounded-2xl border border-border-light bg-white px-8 py-6 shadow-card">
            <div>
              <p className="font-sans text-4xl font-bold tracking-tight text-navy">5.0</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                Average rating
              </p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" aria-hidden />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={`summary-${i}`} className="h-6 w-6 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" aria-hidden />
            <div>
              <p className="font-sans text-xl font-semibold tracking-tight text-navy">80+ reviews</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                Google & referrals
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsData.map((r, i) => (
            <ScrollReveal key={`${r.name}-${r.role}`} delayMs={i * 70}>
              <article className="card-surface card-surface-hover flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-faint text-xs font-bold text-teal-deeper ring-1 ring-teal/20"
                    aria-hidden
                  >
                    {r.initials}
                  </span>
                </div>
                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-text-muted">“{r.text}”</p>
                <div className="mt-8 border-t border-border-light pt-6">
                  <p className="font-semibold text-navy">{r.name}</p>
                  <p className="mt-0.5 text-sm text-text-muted">{r.role}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

