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
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  }

  return { ref, style, inView }
}
