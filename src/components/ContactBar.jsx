import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactBar() {
  return (
    <section className="bg-teal py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-display text-xl font-bold sm:text-2xl">Ready to get started?</p>
        <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center sm:gap-10">
          <a href="tel:+15875770208" className="flex items-center gap-2 transition hover:text-navy">
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            (587) 577-0208
          </a>
          <a href="mailto:aurexcleanservices@gmail.com" className="flex items-center gap-2 transition hover:text-navy">
            <Mail className="h-5 w-5 shrink-0" aria-hidden />
            aurexcleanservices@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden />
            Calgary, AB
          </span>
        </div>
      </div>
    </section>
  )
}
