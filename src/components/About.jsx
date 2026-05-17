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
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="section-eyebrow">About Aurex</p>
              <h2 className="section-title mt-5">Five years of raising the bar in Calgary.</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Aurex began as a small team focused on doing what we said we would—showing up on time, using the right
                products and methods, and treating every entrance the way we would want ours treated. Today we serve
                dozens of long-term clients across the city, from creative studios to industrial corridors.
              </p>
              <blockquote className="relative mt-10 overflow-hidden rounded-2xl border border-teal/15 bg-teal-faint/50 px-8 py-7 font-sans text-xl font-medium leading-snug tracking-tight text-navy ring-1 ring-teal/10">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal to-teal-dark" aria-hidden />
                <span className="relative">
                  To make every Calgary business we serve proud of the space they walk into every morning.
                </span>
              </blockquote>
              <a
                href="#quote"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white shadow-card transition duration-300 hover:bg-navy-mid hover:shadow-lift active:scale-[0.98]"
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
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delayMs={i * 50}>
                  <div className="card-surface card-surface-hover p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted">{stat.label}</p>
                    <p className="mt-2 font-sans text-3xl font-bold tracking-tight text-navy">{stat.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="rounded-2xl border border-teal/20 bg-gradient-to-br from-teal-faint to-white p-8 shadow-card ring-1 ring-teal/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-dark">Mission</p>
                <p className="mt-4 text-lg italic leading-relaxed text-navy">
                  “To make every Calgary business we serve proud of the space they walk into every morning.”
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-20 overflow-x-auto pb-2">
          <div className="relative mx-auto min-w-[640px] px-2 lg:min-w-0">
            <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-border to-transparent lg:top-6" aria-hidden />
            <div className="relative grid grid-cols-5 gap-4">
              {TIMELINE.map((m, i) => (
                <ScrollReveal key={m.year} className="text-center" delayMs={i * 40}>
                  <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-teal shadow-[0_0_0_6px_rgba(255,255,255,0.95)] ring-2 ring-teal/30 lg:h-6 lg:w-6">
                    <span className="sr-only">{m.label}</span>
                  </div>
                  <p className="mt-5 font-sans text-sm font-semibold text-navy lg:text-base">{m.year}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-teal-dark">{m.label}</p>
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

