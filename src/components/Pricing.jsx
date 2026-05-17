import { Check } from 'lucide-react'
import { pricingData } from '../data/pricingData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-90" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            Pricing
          </p>
          <h2 className="section-title mt-6 text-white">
            Better rates when you book recurring service.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Final numbers reflect square footage, specialty work, and when crews can access your space—use the quote form
            for a firm price within 24 hours.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingData.map((plan, i) => (
            <ScrollReveal key={plan.id} delayMs={i * 80}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-white/[0.04] p-8 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  plan.highlighted
                    ? 'border-gold/40 ring-2 ring-gold/25'
                    : 'border-white/10 hover:border-teal/35'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow-card">
                    {plan.badge}
                  </span>
                )}
                <div className="text-center">
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-white">{plan.title}</h3>
                  <p className="mt-4 inline-flex rounded-full bg-teal/15 px-4 py-1.5 text-sm font-bold text-teal-pale ring-1 ring-teal/25">
                    {plan.discountLabel}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-400">{plan.description}</p>
                </div>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-slate-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={`mt-10 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-px active:scale-[0.98] ${
                    plan.highlighted
                      ? 'btn-primary shadow-glow'
                      : 'border border-white/15 bg-white/[0.06] text-white hover:border-teal/40 hover:bg-teal/10'
                  }`}
                >
                  Request this plan
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

