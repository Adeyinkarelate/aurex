import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Clients() {
  return (
    <section className="border-y border-border-light bg-white/60 py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="section-eyebrow mx-auto">Trusted alongside Calgary operators</p>
        </ScrollReveal>
        <div className="mt-12 flex flex-col items-center justify-center gap-10 sm:flex-row sm:flex-wrap sm:gap-14 lg:gap-20">
          <ScrollReveal className="flex flex-col items-center" delayMs={80}>
            <span className="rounded-2xl border border-border-light bg-white px-12 py-7 font-sans text-xl font-semibold tracking-tight text-navy shadow-card transition duration-300 hover:border-teal/25 hover:shadow-lift">
              Milestones
            </span>
            <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
              Hospitality client
            </span>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center" delayMs={140}>
            <span className="rounded-2xl border border-border-light bg-white px-12 py-7 font-sans text-xl font-semibold tracking-tight text-navy shadow-card transition duration-300 hover:border-teal/25 hover:shadow-lift">
              Alloy Dining
            </span>
            <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
              Restaurant group
            </span>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center" delayMs={200}>
            <span className="rounded-2xl border border-dashed border-teal/35 bg-teal-faint/80 px-10 py-7 font-sans text-lg font-semibold text-teal-deeper transition duration-300 hover:border-teal/50 hover:bg-teal-faint">
              + more across Calgary
            </span>
            <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
              Offices · Retail · Medical · Industrial
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

