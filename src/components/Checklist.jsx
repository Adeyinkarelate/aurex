import { CheckCircle2 } from 'lucide-react'
import { checklistData } from '../data/checklistData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

function ChecklistBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-7 shadow-card">
      <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Checklist() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">Scope clarity</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Representative cleaning checklists—tailored during onboarding.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <ScrollReveal>
              <ChecklistBlock title="Offices & Common Areas" items={checklistData.officesCommon} />
            </ScrollReveal>
            <ScrollReveal>
              <ChecklistBlock title="Washrooms" items={checklistData.washrooms} />
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            <ScrollReveal>
              <ChecklistBlock title="Kitchen & Break Rooms" items={checklistData.kitchenBreak} />
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-3xl border border-border bg-white p-7 shadow-card">
                <h3 className="font-display text-lg font-semibold text-navy">Deep clean add-ons</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Layer these onto any recurring program when quarterly resets or inspections demand more than daily
                  upkeep.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {checklistData.deepAddons.map((addon) => (
                    <span
                      key={addon}
                      className="rounded-full bg-navy/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy ring-1 ring-navy/10"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
