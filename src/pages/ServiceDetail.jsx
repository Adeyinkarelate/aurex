import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowRight,
  Building,
  Building2,
  Check,
  HardHat,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from 'lucide-react'
import { getServiceBySlug } from '../data/servicesData'
import InquiryForm from '../components/InquiryForm.jsx'
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

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? getServiceBySlug(slug) : null

  if (!service) {
    return <Navigate to="/" replace />
  }

  const Icon = iconMap[service.icon]

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <main>
        <section className="relative isolate min-h-[min(88vh,920px)] overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.heroImageAlt}
            decoding="async"
            className="hero-animated-bg absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(37,99,235,0.06),transparent)]"
            aria-hidden
          />

          <div className="relative mx-auto flex min-h-[min(88vh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
            <nav className="mb-auto mt-0 text-xs font-semibold text-white/85 drop-shadow-[0_1px_3px_rgba(15,23,42,0.65)]">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-white/40">
                  /
                </li>
                <li>
                  <Link to="/#services" className="transition hover:text-white">
                    Services
                  </Link>
                </li>
                <li aria-hidden className="text-white/40">
                  /
                </li>
                <li className="text-white">{service.title}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="section-eyebrow border-white/20 bg-white/10 text-white backdrop-blur-sm">
                Commercial cleaning · Calgary, AB
              </p>
              <h1 className="mt-6 font-sans text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">{service.description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <span
                  className={`inline-flex w-fit rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ring-1 backdrop-blur-sm ${tagStyles(service.tag)} bg-white/90`}
                >
                  {service.tag}
                </span>
                <div className="flex flex-wrap gap-3">
                  <a href="#inquiry" className="btn-primary px-6 py-3 shadow-glow">
                    Request a quote
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a href="tel:+15875770208" className="btn-secondary border-white/25 bg-white/10 text-white shadow-none ring-1 ring-white/15 backdrop-blur-sm hover:border-teal/50 hover:bg-white/15 hover:text-white">
                    <Phone className="h-4 w-4 text-teal-pale" aria-hidden />
                    (587) 577-0208
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-28 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <ScrollReveal>
                  <div className="sticky top-28 space-y-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-faint text-teal-dark ring-1 ring-teal/15">
                      {Icon && <Icon className="h-7 w-7" aria-hidden />}
                    </span>
                    <h2 className="section-title">How we deliver this service</h2>
                    <ul className="space-y-4 text-text-muted">
                      {service.overview.map((p) => (
                        <li key={p.slice(0, 48)} className="text-lg leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
              <div className="space-y-12 lg:col-span-7">
                <ScrollReveal>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-navy">Key benefits</h3>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {service.benefits.map((b, i) => (
                      <ScrollReveal key={b.title} delayMs={i * 70}>
                        <div className="card-surface card-surface-hover h-full p-7">
                          <p className="font-sans text-lg font-semibold text-navy">{b.title}</p>
                          <p className="mt-3 text-sm leading-relaxed text-text-muted">{b.description}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-navy">What&apos;s included</h3>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 rounded-2xl border border-border-light bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-faint text-teal-dark ring-1 ring-teal/15">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-navy" aria-hidden />
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-teal/15 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to scope {service.title.toLowerCase()} for your building?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Share your square footage, schedule preferences, and any compliance notes—we respond with a clear
                Calgary proposal, not a generic template.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <a href="#inquiry" className="btn-primary px-8 py-3.5 shadow-glow">
                  Start your inquiry
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <Link to="/#quote" className="btn-secondary border-white/15 bg-white/10 text-white hover:border-teal/40 hover:bg-white/15 hover:text-white">
                  View full quote page
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-28 bg-cream-warm py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
              <ScrollReveal>
                <p className="section-eyebrow">Inquiry</p>
                <h2 className="section-title mt-5">Tell us about your facility.</h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  We route every submission to our Calgary team with context already attached—your preferred service,
                  timing windows, and building nuances—so follow-up stays focused and fast.
                </p>
                <div className="mt-10 space-y-4 rounded-2xl border border-border-light bg-white p-8 shadow-card">
                  <p className="text-sm font-semibold text-navy">Prefer to talk?</p>
                  <a
                    href="tel:+15875770208"
                    className="inline-flex items-center gap-3 text-lg font-semibold text-teal-deeper transition hover:text-teal-dark"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-faint text-teal-dark ring-1 ring-teal/15">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    (587) 577-0208
                  </a>
                  <p className="text-sm leading-relaxed text-text-muted">
                    Typical response time for quote requests: within 24 business hours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delayMs={80}>
                <div className="rounded-2xl border border-border-light bg-white p-8 shadow-lift sm:p-10">
                  <InquiryForm key={service.slug} defaultService={service.title} variant="light" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
