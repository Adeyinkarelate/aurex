import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building,
  Building2,
  HardHat,
  Leaf,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from 'lucide-react'
import { servicesData } from '../data/servicesData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const iconMap = {
  Building,
  Building2,
  HardHat,
  ShieldCheck,
  Store,
  Truck,
  Leaf,
  Sparkles,
}

function tagStyles(tag) {
  if (tag === 'Recurring') return 'bg-teal/15 text-teal-deeper ring-teal/20'
  if (tag === 'One-time') return 'bg-navy/[0.06] text-navy ring-navy/10'
  return 'bg-amber-500/12 text-amber-800 ring-amber-500/25'
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title mt-5">
            Built for busy commercial spaces—not residential quick cleans.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Ongoing janitorial service, one-time deep cleans, or add-ons layered onto your regular scope—whatever
            fits your building. Tap a service for scope, benefits, and a dedicated inquiry form.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((svc, i) => {
            const Icon = iconMap[svc.icon]
            return (
              <ScrollReveal key={svc.slug} delayMs={i * 60}>
                <Link
                  to={`/services/${svc.slug}`}
                  className="group card-surface card-surface-hover flex h-full flex-col p-8 text-left outline-none ring-teal/25 transition focus-visible:ring-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-faint text-teal-dark ring-1 ring-teal/15 transition duration-300 group-hover:scale-[1.03]">
                      {Icon && <Icon className="h-6 w-6" aria-hidden />}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ring-1 ${tagStyles(svc.tag)}`}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-sans text-xl font-semibold tracking-tight text-navy group-hover:text-teal-deeper">
                    {svc.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{svc.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-deeper transition group-hover:gap-3">
                    Explore service
                    <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden />
                  </p>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
