import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { CalendarClock, ClipboardCheck, Loader2, Shield, Sparkles } from 'lucide-react'
import { serviceFormOptions } from '../data/servicesData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const sendEmail = async (formData) => {
  const sentAt = new Date().toLocaleString('en-CA', {
    timeZone: 'America/Edmonton',
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  const result = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      to_email: 'aurexcleanservices@gmail.com',
      sent_at: sentAt,
      request_id: crypto.randomUUID(),
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  return result
}

const perks = [
  {
    icon: ClipboardCheck,
    title: 'No hidden fees',
    copy: 'Quotes itemize scope assumptions so finance reviews stay painless.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible scheduling',
    copy: 'Ingress windows tuned to beltline towers, suburban campuses, or overnight industrial resets.',
  },
  {
    icon: Shield,
    title: 'No lock-in contracts',
    copy: 'Earn renewal through consistency—not contractual gymnastics.',
  },
  {
    icon: Sparkles,
    title: '100% satisfaction guarantee',
    copy: 'If something misses spec, we mobilize fixes quickly with accountability baked in.',
  },
]

function validate(form) {
  const errors = {}
  if (!form.firstName.trim()) errors.firstName = 'Please enter your first name.'
  if (!form.lastName.trim()) errors.lastName = 'Please enter your last name.'
  if (!form.phone.trim()) errors.phone = 'Please enter a phone number we can reach you on.'
  if (!form.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.'
  if (!form.company.trim()) errors.company = 'Please enter your company name.'
  if (!form.service) errors.service = 'Select the service you’re interested in.'
  if (!form.message.trim()) errors.message = 'Tell us about your space, square footage, or timing needs.'
  return errors
}

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)

  const envReady = useMemo(() => {
    return Boolean(
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSubmitError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!envReady) {
      setSubmitError(
        'Email sending is not configured yet. Add your EmailJS keys to the .env file and restart the dev server.'
      )
      return
    }

    setLoading(true)
    try {
      await sendEmail(form)
      setSuccess(true)
      setForm(initialForm)
    } catch {
      setSubmitError(
        'We couldn’t send your request just now. Double-check your internet connection or EmailJS credentials and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const btnLabel = success
    ? '✓ Request Sent — We\'ll be in touch within 24 hours'
    : loading
      ? 'Sending…'
      : 'Submit quote request'

  return (
    <section id="quote" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">Quote</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Secure a Calgary proposal within 24 hours.
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Share your footprint and priorities—we’ll reply with scope clarity, not cookie-cutter fluff.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            {perks.map(({ icon: Icon, title, copy }) => (
              <ScrollReveal key={title}>
                <div className="flex gap-4 rounded-3xl border border-border bg-cream p-5 shadow-card transition hover:-translate-y-1 hover:border-teal/35 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-teal shadow-sm ring-1 ring-border-light">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{title}</p>
                    <p className="mt-1 text-sm text-text-muted">{copy}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="rounded-3xl border border-navy/40 bg-navy p-8 shadow-lift sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      disabled={success}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                      placeholder="Jordan"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs font-medium text-gold-light">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      disabled={success}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                      placeholder="Lee"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs font-medium text-gold-light">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      disabled={success}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                      placeholder="(587) 555-0142"
                    />
                    {errors.phone && <p className="mt-1 text-xs font-medium text-gold-light">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      disabled={success}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs font-medium text-gold-light">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    disabled={success}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                    placeholder="Your organization"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs font-medium text-gold-light">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    disabled={success}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 focus:border-teal focus:ring-2 disabled:opacity-60"
                  >
                    <option value="">Select a service</option>
                    {serviceFormOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-navy">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs font-medium text-gold-light">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-teal-pale/90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    disabled={success}
                    className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-teal/30 placeholder:text-teal-pale/40 focus:border-teal focus:ring-2 disabled:opacity-60"
                    placeholder="Square footage, locations, timing windows, special considerations…"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-gold-light">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-light">
                    {submitError}
                  </p>
                )}

                {!envReady && (
                  <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-teal-pale/90">
                    Tip: copy `.env.example` to `.env`, add EmailJS keys, then restart Vite so submissions can send.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || success}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal py-3.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-px hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                  {btnLabel}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
