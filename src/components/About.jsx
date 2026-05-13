import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const TIMELINE = [
  { year: '2020', label: 'Founded', detail: 'Launched with Calgary-first recurring programs.' },
  { year: '2021', label: 'Scale', detail: 'Expanded sanitization protocols for essential workplaces.' },
  { year: '2023', label: 'Momentum', detail: 'Crossed hundreds of recurring cleans city-wide.' },
  { year: '2024', label: 'Depth', detail: 'Formalized deep-clean & post-construction specialties.' },
  { year: '2025', label: 'Today', detail: '400+ clients trusting Aurex with daily impressions.' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">About Aurex</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Five years of raising the bar in Calgary.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Aurex began as a tight crew obsessed with predictable outcomes—showing up on time, documenting chemistry,
                and treating every foyer like it belongs on an investor tour. Today we steward dozens of recurring
                footprints across the city, from creative studios to industrial corridors.
              </p>
              <blockquote className="mt-8 border-l-4 border-teal pl-6 font-display text-xl font-semibold leading-snug text-navy">
                To make every Calgary business we serve proud of the space they walk into every morning.
              </blockquote>
              <a
                href="#quote"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-px hover:bg-navy-light"
              >
                Partner with Aurex
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Clients served', value: '400+' },
                { label: 'Google rating', value: '5★' },
                { label: 'Satisfaction', value: '100%' },
              ].map((stat) => (
                <ScrollReveal key={stat.label}>
                  <div className="rounded-3xl border border-border bg-cream p-6 shadow-card transition hover:-translate-y-1 hover:border-teal/35 hover:shadow-lift">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">{stat.label}</p>
                    <p className="mt-2 font-display text-3xl font-bold text-navy">{stat.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="rounded-3xl border border-teal/25 bg-teal-faint p-8 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">Mission</p>
                <p className="mt-3 text-lg italic leading-relaxed text-navy">
                  “To make every Calgary business we serve proud of the space they walk into every morning.”
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 overflow-x-auto pb-2">
          <div className="relative mx-auto min-w-[640px] px-2 lg:min-w-0">
            <div className="absolute left-0 right-0 top-5 h-px bg-border lg:top-6" aria-hidden />
            <div className="relative grid grid-cols-5 gap-4">
              {TIMELINE.map((m) => (
                <ScrollReveal key={m.year} className="text-center">
                  <div className="mx-auto h-4 w-4 rounded-full bg-teal shadow-card ring-4 ring-white lg:h-5 lg:w-5" />
                  <p className="mt-4 font-display text-sm font-bold text-navy lg:text-base">{m.year}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-teal-dark">{m.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">{m.detail}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
