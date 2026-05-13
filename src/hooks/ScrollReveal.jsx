import { useScrollAnimation } from './useScrollAnimation.js'

/** Wrapper for applying scroll-triggered fade-up to card-like blocks */
export function ScrollReveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const { ref, style } = useScrollAnimation()
  return (
    <Tag ref={ref} style={style} className={className} {...rest}>
      {children}
    </Tag>
  )
}
