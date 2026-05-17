import { CheckCircle2 } from 'lucide-react'
import { checklistData } from '../data/checklistData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

function ChecklistBlock({ title, items }) {
  return (
    <div className="card-surface p-8">
      <h3 className="font-sans text-lg font-semibold tracking-tight text-navy">{title}</h3>
      <ul className="mt-6 space-y-3">
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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="section-eyebrow">Scope clarity</p>
          <h2 className="section-title mt-5">Representative cleaning checklists—tailored during onboarding.</h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <ScrollReveal>
              <ChecklistBlock title="Offices & Common Areas" items={checklistData.officesCommon} />
            </ScrollReveal>
            <ScrollReveal delayMs={80}>
              <ChecklistBlock title="Washrooms" items={checklistData.washrooms} />
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            <ScrollReveal delayMs={40}>
              <ChecklistBlock title="Kitchen & Break Rooms" items={checklistData.kitchenBreak} />
            </ScrollReveal>
            <ScrollReveal delayMs={120}>
              <div className="card-surface p-8">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-navy">Deep clean add-ons</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  Layer these onto any recurring program when quarterly resets or inspections demand more than daily
                  upkeep.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {checklistData.deepAddons.map((addon) => (
                    <span
                      key={addon}
                      className="rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-navy transition hover:border-teal/25 hover:bg-teal-faint"
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

