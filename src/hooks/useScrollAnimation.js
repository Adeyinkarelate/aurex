import { useInView } from 'react-intersection-observer'

/**
 * Fade-up when section enters viewport (cards start invisible).
 */
export function useScrollAnimation(options = {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
    ...options,
  })

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition:
      'opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1), transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
  }

  return { ref, style, inView }
}
