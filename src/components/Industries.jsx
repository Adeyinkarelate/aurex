import {
  Building2,
  Dumbbell,
  School,
  Scissors,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Warehouse,
} from 'lucide-react'
import { industriesData } from '../data/industriesData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const iconMap = {
  Building2,
  UtensilsCrossed,
  Stethoscope,
  Store,
  Dumbbell,
  School,
  Warehouse,
  Scissors,
}

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Sector playbooks that respect regulators, customers, and staff alike.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon]
            return (
              <ScrollReveal key={ind.title}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-cream p-6 shadow-card transition hover:-translate-y-1 hover:border-teal/35 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-teal shadow-sm ring-1 ring-border-light">
                    {Icon && <Icon className="h-5 w-5" aria-hidden />}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{ind.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{ind.description}</p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
