import { ArrowRight, Award, Phone, ShieldCheck, Sparkles, Timer } from 'lucide-react'

/**
 * High-res interior deep-clean — static, no scaling animations (stays sharp).
 */
const HERO_BG_IMAGE = '/images/hero-deep-clean.jpg'
const HERO_BG_ALT =
  'Professional deep clean: bright window, teal interior, and detailed finish work'

const TRUST_STAGGER = [
  'motion-safe:[animation-delay:320ms]',
  'motion-safe:[animation-delay:380ms]',
  'motion-safe:[animation-delay:440ms]',
]

const PROOF_STATS = [
  { label: 'Clients', value: '400+' },
  { label: 'Rating', value: '5★' },
  { label: 'Experience', value: '20+ yrs' },
  { label: 'Satisfaction', value: '100%', valueClass: 'text-hero-line-mid' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[min(88vh,40rem)] overflow-hidden border-b border-white/10 sm:min-h-[min(90vh,44rem)] lg:min-h-[min(92vh,48rem)]"
    >
      <div className="absolute inset-0 bg-slate-200">
        <img
          src={HERO_BG_IMAGE}
          alt={HERO_BG_ALT}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-[88%_45%] contrast-[1.03] sm:object-[82%_42%] lg:object-[72%_40%]"
        />
      </div>

      {/* Light scrim — photo stays bright; text readability from softer left wash + shadows */}
      <div className="pointer-events-none absolute inset-0 bg-navy/15" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/25 to-transparent sm:from-navy/50 sm:via-navy/18 lg:via-navy/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-navy/15"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/20" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left: copy + CTAs */}
          <div className="max-w-xl lg:max-w-none">
            <p className="motion-safe:animate-fade-up text-[11px] font-semibold uppercase tracking-[0.28em] text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
              Calgary commercial cleaning
            </p>

            <div className="motion-safe:animate-fade-up motion-safe:delay-75 mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
              <Award className="h-3.5 w-3.5 text-hero-line-mid" aria-hidden />
              20+ years professional experience
            </div>

            <h1 className="mt-7 font-serif text-[2.125rem] font-bold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08] lg:text-[3.15rem] lg:leading-[1.06]">
              <span className="motion-safe:animate-fade-up motion-safe:delay-100 block text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
                A Cleaner Space.
              </span>
              <span className="motion-safe:animate-fade-up motion-safe:delay-[180ms] mt-1 block sm:mt-1.5">
                <span
                  className="inline-block bg-gradient-to-r from-[#eff6ff] via-[#93c5fd] to-[#60a5fa] bg-[length:220%_auto] bg-clip-text text-transparent motion-safe:animate-mint-shimmer [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]"
                >
                  A Better Business.
                </span>
              </span>
            </h1>

            <p className="motion-safe:animate-fade-up motion-safe:delay-150 mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg sm:leading-relaxed [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              Production-ready janitorial programs for offices, retail, medical, and industrial
              footprints across Calgary—grounded in accountability and prairie-season resilience.
            </p>

            <div className="motion-safe:animate-fade-up motion-safe:delay-200 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-hero-cta px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(59,130,246,0.55)] ring-1 ring-white/25 transition-[transform,box-shadow,background-color] duration-300 hover:bg-hero-cta-hover hover:shadow-[0_14px_44px_-8px_rgba(37,99,235,0.5)] active:scale-[0.98]"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="tel:+15875770208"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]"
              >
                <Phone className="h-4 w-4 text-hero-line-mid" aria-hidden />
                Call (587) 577-0208
              </a>
            </div>

            <div className="motion-safe:animate-fade-up motion-safe:delay-300 mt-10 flex flex-wrap gap-x-9 gap-y-3 border-t border-white/25 pt-8 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
              {[
                { icon: ShieldCheck, label: 'Fully insured & bonded' },
                { icon: Sparkles, label: 'Background-checked staff' },
                { icon: Timer, label: 'Free 24hr quotes' },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 text-sm font-medium text-white motion-safe:animate-fade-up ${TRUST_STAGGER[i]}`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-hero-line-mid" strokeWidth={2} aria-hidden />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: proof card */}
          <div className="motion-safe:animate-fade-up motion-safe:delay-150 mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="rounded-2xl border border-white/15 bg-navy/45 p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-7">
              <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-gold sm:text-[11px]">
                Proof in the field
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                {PROOF_STATS.map(({ label, value, valueClass }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/10 px-3 py-4 text-center sm:px-4 sm:py-5"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{label}</p>
                    <p
                      className={`mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-[1.65rem] ${valueClass ?? ''}`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-strip-shine relative z-10 border-t border-white/10 bg-gradient-to-r from-teal-deeper via-teal-dark to-teal px-4 py-3.5 text-center sm:px-6 sm:py-4">
        <p className="relative z-10 mx-auto max-w-3xl text-sm font-medium leading-relaxed text-white/95 motion-safe:animate-fade-in">
          <span className="font-semibold text-white">Same-week turnover or urgent coverage?</span> Call{' '}
          <a
            className="font-semibold underline decoration-white/35 underline-offset-4 transition duration-300 hover:text-white hover:decoration-white/60"
            href="tel:+15875770208"
          >
            (587) 577-0208
          </a>{' '}
          — experienced crews for rapid resets.
        </p>
      </div>
    </section>
  )
}
