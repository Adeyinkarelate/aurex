import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2 } from 'lucide-react'
import { serviceFormOptions } from '../data/servicesData'

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
    import.meta.env.VITE_EMAILJS_PUBLIC
  )
  return result
}

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

const inputDark =
  'mt-2 w-full rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none ring-teal/20 placeholder:text-slate-500 focus:border-teal focus:ring-2 disabled:opacity-60'
const labelDark = 'text-xs font-bold uppercase tracking-wide text-teal-pale/90'

const inputLight =
  'mt-2 w-full rounded-xl border border-border bg-cream-warm px-4 py-3 text-sm text-text outline-none ring-teal/15 placeholder:text-text-muted/70 focus:border-teal focus:ring-2 disabled:opacity-60'
const labelLight = 'text-xs font-bold uppercase tracking-wide text-navy/80'

/**
 * @param {{
 *  defaultService?: string
 *  variant?: 'dark' | 'light'
 * }} props
 */
export default function InquiryForm({ defaultService = '', variant = 'dark' }) {
  const [form, setForm] = useState(() => ({ ...initialForm, service: defaultService || '' }))
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false)

  const envReady = useMemo(() => {
    return Boolean(
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC
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
      setForm({ ...initialForm, service: defaultService || '' })
    } catch {
      setSubmitError(
        'We couldn’t send your request just now. Double-check your internet connection or EmailJS credentials and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const btnLabel = success
    ? "✓ Request Sent — We'll be in touch within 24 hours"
    : loading
      ? 'Sending…'
      : 'Submit inquiry'

  const isDark = variant === 'dark'
  const inClass = isDark ? inputDark : inputLight
  const lbClass = isDark ? labelDark : labelLight
  const errorClass = isDark ? 'text-gold-light' : 'text-amber-700'
  const selectOptionClass = isDark ? 'text-navy' : 'text-navy'

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-firstName" className={lbClass}>
            First name
          </label>
          <input
            id="inq-firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            disabled={success}
            className={inClass}
            placeholder="Jordan"
          />
          {errors.firstName && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="inq-lastName" className={lbClass}>
            Last name
          </label>
          <input
            id="inq-lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            disabled={success}
            className={inClass}
            placeholder="Lee"
          />
          {errors.lastName && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-phone" className={lbClass}>
            Phone
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            disabled={success}
            className={inClass}
            placeholder="(587) 555-0142"
          />
          {errors.phone && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="inq-email" className={lbClass}>
            Email
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            disabled={success}
            className={inClass}
            placeholder="you@company.com"
          />
          {errors.email && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="inq-company" className={lbClass}>
          Company
        </label>
        <input
          id="inq-company"
          name="company"
          value={form.company}
          onChange={handleChange}
          autoComplete="organization"
          disabled={success}
          className={inClass}
          placeholder="Your organization"
        />
        {errors.company && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="inq-service" className={lbClass}>
          Service
        </label>
        <select
          id="inq-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          disabled={success}
          className={inClass}
        >
          <option value="">Select a service</option>
          {serviceFormOptions.map((opt) => (
            <option key={opt} value={opt} className={selectOptionClass}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="inq-message" className={lbClass}>
          Message
        </label>
        <textarea
          id="inq-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={success}
          className={inClass}
          placeholder="Square footage, locations, timing windows, special considerations…"
        />
        {errors.message && <p className={`mt-1 text-xs font-medium ${errorClass}`}>{errors.message}</p>}
      </div>

      {submitError && (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            isDark ? 'border-gold/40 bg-gold/10 text-gold-light' : 'border-amber-300 bg-amber-50 text-amber-900'
          }`}
        >
          {submitError}
        </p>
      )}

      {!envReady && (
        <p
          className={`rounded-xl border px-4 py-3 text-xs ${
            isDark
              ? 'border-white/15 bg-white/5 text-teal-pale/90'
              : 'border-border bg-cream-warm text-text-muted'
          }`}
        >
          Tip: copy `.env.example` to `.env`, add EmailJS keys, then restart Vite so submissions can send.
        </p>
      )}

      <button
        type="submit"
        disabled={loading || success}
        className="btn-primary w-full py-3.5 shadow-glow disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:shadow-card"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {btnLabel}
      </button>
    </form>
  )
}
