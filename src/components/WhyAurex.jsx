import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const CARDS = [
  {
    number: '01',
    title: 'Calibrated cadence',
    description:
      'Programs tuned to prairie seasons—spring mud, winter salt, and summer dust—so your floors and finishes survive Calgary’s swing.',
  },
  {
    number: '02',
    title: 'Transparent stewardship',
    description:
      'Quotes outline chemistry, dwell times, and escalation paths. No vague scopes or mystery invoices.',
  },
  {
    number: '03',
    title: 'Compliance-ready crews',
    description:
      'Uniformed professionals trained on WHMIS-aligned products, documentation habits, and respectful onsite presence.',
  },
  {
    number: '04',
    title: 'Partner mindset',
    description:
      'We integrate with your facilities rhythm—whether that means 5 a.m. ingress or phased weekend resets—without drama.',
  },
]

const PILLS = ['Fully insured', 'Background-checked', 'Eco-friendly', 'Free quotes', 'No contracts']

export default function WhyAurex() {
  return (
    <section id="why-aurex" className="scroll-mt-28 bg-navy py-20 text-teal-pale sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Why Aurex</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Stewardship that survives scrutiny—from procurement decks to surprise tenant tours.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <ScrollReveal key={card.number}>
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-navy-mid/80 p-7 shadow-card transition hover:-translate-y-1 hover:border-gold/35 hover:shadow-lift">
                <span className="font-display text-4xl font-bold text-gold/90">{card.number}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-teal-pale/85">{card.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-teal-pale ring-1 ring-white/5"
              >
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
