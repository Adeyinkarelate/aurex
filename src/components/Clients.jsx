import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function Clients() {
  return (
    <section className="border-y border-border-light bg-cream py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">
            Trusted alongside Calgary operators
          </p>
        </ScrollReveal>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap sm:gap-12 lg:gap-16">
          <ScrollReveal className="flex flex-col items-center">
            <span className="rounded-2xl border border-border bg-white px-10 py-6 font-display text-xl font-bold tracking-wide text-navy shadow-card">
              Milestones
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Hospitality partner
            </span>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center">
            <span className="rounded-2xl border border-border bg-white px-10 py-6 font-display text-xl font-bold tracking-wide text-navy shadow-card">
              Alloy Dining
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Restaurant group
            </span>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col items-center">
            <span className="rounded-2xl border border-dashed border-teal/40 bg-teal/10 px-10 py-6 font-display text-lg font-semibold text-teal-deeper">
              + more across Calgary
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Offices · Retail · Medical · Industrial
            </span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
