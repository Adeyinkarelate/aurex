import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const MAIN =
  'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80'
const THUMBS = [
  'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
]

export default function Team() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <ScrollReveal>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-border-light shadow-lift lg:min-h-[480px]">
              <img src={MAIN} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-sans text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Trained & certified staff
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                  Crews arrive uniformed, badged, and briefed on your scope—no guesswork on products or procedures.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {THUMBS.map((src, i) => (
              <ScrollReveal key={src} delayMs={i * 45}>
                <div className="card-surface card-surface-hover aspect-square overflow-hidden p-0 ring-0">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

