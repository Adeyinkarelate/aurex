import { Phone } from 'lucide-react'
import InquiryForm from './InquiryForm.jsx'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

export default function QuoteForm() {
  return (
    <section id="quote" className="scroll-mt-28 bg-cream-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <ScrollReveal>
            <p className="section-eyebrow">Quote</p>
            <h2 className="section-title mt-5">Get a detailed Calgary quote within 24 hours.</h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              Tell us about your facility and priorities—we route every submission to our Calgary team with context
              already attached, so follow-up stays focused and fast.
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
              <InquiryForm variant="light" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
