import { Check } from 'lucide-react'
import { pricingData } from '../data/pricingData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Pricing() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Pricing frameworks</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Cadence discounts for recurring Calgary partnerships.
          </h2>
          <p className="mt-4 text-teal-pale/85">
            Final proposals reflect square footage, specialty scopes, and ingress windows—submit the quote form for an
            exact figure within 24 hours.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingData.map((plan) => (
            <ScrollReveal key={plan.id}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border bg-navy-mid/70 p-8 shadow-card backdrop-blur transition hover:-translate-y-1 hover:shadow-lift ${
                  plan.highlighted
                    ? 'border-gold/50 ring-2 ring-gold/35'
                    : 'border-white/10 hover:border-teal/35'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-navy">
                    {plan.badge}
                  </span>
                )}
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-white">{plan.title}</h3>
                  <p className="mt-3 inline-flex rounded-full bg-teal/15 px-4 py-1 text-sm font-bold text-teal-pale ring-1 ring-teal/25">
                    {plan.discountLabel}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-teal-pale/80">{plan.description}</p>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-teal-pale/90">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={`mt-10 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-px ${
                    plan.highlighted
                      ? 'bg-teal text-white hover:bg-teal-dark'
                      : 'border border-white/20 bg-white/5 text-white hover:border-teal hover:bg-teal/10'
                  }`}
                >
                  Request this cadence
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
