import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const CARDS = [
  {
    number: '01',
    title: 'Season-smart cleaning',
    description:
      'Schedules and floor care that account for Calgary realities—mud, road salt, and dust—so finishes last and spaces stay presentable.',
  },
  {
    number: '02',
    title: 'Clear quotes',
    description:
      'Every proposal spells out products, scope, and how we handle problems. No vague checklists or surprise line items.',
  },
  {
    number: '03',
    title: 'Trained, professional crews',
    description:
      'Uniformed staff trained on WHMIS-aligned products, solid documentation habits, and respectful presence in your workplace.',
  },
  {
    number: '04',
    title: 'We fit your schedule',
    description:
      'Early openings, after-hours cleaning, or phased weekend work—we align with how your building actually runs.',
  },
]

const PILLS = ['Fully insured', 'Background-checked', 'Eco-friendly', 'Free quotes', 'No contracts']

export default function WhyAurex() {
  return (
    <section id="why-aurex" className="scroll-mt-28 relative overflow-hidden bg-navy py-20 text-slate-300 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-95" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">
            Why Aurex
          </p>
          <h2 className="section-title mt-6 text-white">
            Commercial cleaning you can stand behind—whether it is an inspection, a landlord walk-through, or your own team.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.number} delayMs={i * 55}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal/35 hover:bg-white/[0.06] hover:shadow-lift">
                <span className="font-sans text-4xl font-bold text-gold/90 transition duration-300 group-hover:text-gold-light">
                  {card.number}
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16">
          <div className="flex flex-wrap justify-center gap-3">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300 ring-1 ring-white/5 transition duration-300 hover:border-teal/30 hover:text-teal-pale"
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

