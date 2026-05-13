import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

const GALLERY = [
  {
    url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
    label: 'Move-in ready floors',
    tall: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    label: 'Washroom detailing',
  },
  {
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    label: 'Kitchen & break rooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80',
    label: 'Lobby presentation',
  },
  {
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    label: 'Deep-clean resets',
  },
]

export default function Gallery() {
  const [featured, ...rest] = GALLERY
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-dark">Gallery</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Calgary spaces kept audit-calm and visitor-confident.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <ScrollReveal className="lg:row-span-2">
            <figure className="group relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-border bg-navy shadow-card lg:min-h-[520px]">
              <img
                src={featured.url}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/90 via-navy/20 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  {featured.label}
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:row-span-2">
            {rest.map((item) => (
              <ScrollReveal key={item.url}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-white shadow-card">
                  <img
                    src={item.url}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/85 via-transparent to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur sm:text-sm">
                      {item.label}
                    </span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
