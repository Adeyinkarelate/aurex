import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqData } from '../data/faqData'
import { ScrollReveal } from '../hooks/ScrollReveal.jsx'

function FaqColumn({ items, offset, openIndex, onToggle }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const globalIndex = offset + i
        const open = openIndex === globalIndex
        return (
          <ScrollReveal key={item.question} delayMs={i * 35}>
            <div className="card-surface overflow-hidden transition duration-300 hover:border-teal/25">
              <button
                type="button"
                id={`faq-btn-${globalIndex}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${globalIndex}`}
                onClick={() => onToggle(globalIndex)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream/80"
              >
                <span className="font-semibold text-navy">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-teal transition-transform duration-300 ease-out ${
                    open ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-panel-${globalIndex}`}
                role="region"
                aria-labelledby={`faq-btn-${globalIndex}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-border-light px-5 pb-5 pt-3 text-sm leading-relaxed text-text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const leftCol = faqData.slice(0, 4)
  const rightCol = faqData.slice(4, 8)

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title mt-5">Questions Calgary businesses ask before they hire a cleaner.</h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <FaqColumn items={leftCol} offset={0} openIndex={openIndex} onToggle={toggle} />
          <FaqColumn items={rightCol} offset={4} openIndex={openIndex} onToggle={toggle} />
        </div>
      </div>
    </section>
  )
}

