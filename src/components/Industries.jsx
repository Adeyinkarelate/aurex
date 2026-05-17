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
    <section id="industries" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="section-eyebrow">Industries</p>
          <h2 className="section-title mt-5">
            Sector playbooks that respect regulators, customers, and staff alike.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industriesData.map((ind, i) => {
            const Icon = iconMap[ind.icon]
            return (
              <ScrollReveal key={ind.title} delayMs={i * 45}>
                <article className="group card-surface card-surface-hover flex h-full flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-faint text-teal-dark ring-1 ring-teal/15 transition duration-300 group-hover:scale-[1.05]">
                    {Icon && <Icon className="h-5 w-5" aria-hidden />}
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-navy">{ind.title}</h3>
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

