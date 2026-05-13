import {
  Building2,
  HardHat,
  Leaf,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from 'lucide-react'
import { servicesData } from '../data/servicesData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const iconMap = {
  Building2,
  HardHat,
  ShieldCheck,
  Store,
  Truck,
  Leaf,
  Sparkles,
}

function tagStyles(tag) {
  if (tag === 'Recurring') return 'bg-teal/15 text-teal-deeper ring-teal/25'
  if (tag === 'One-time') return 'bg-navy/10 text-navy ring-navy/15'
  return 'bg-gold/15 text-gold ring-gold/30'
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Programs engineered for Calgary traffic—not residential shortcuts.
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Choose recurring stewardship, targeted one-time resets, or specialty add-ons layered onto your core scope.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.icon]
            return (
              <ScrollReveal key={svc.title}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-cream p-7 shadow-card transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal shadow-sm ring-1 ring-border-light">
                      {Icon && <Icon className="h-6 w-6" aria-hidden />}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ring-1 ${tagStyles(svc.tag)}`}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{svc.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{svc.description}</p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
