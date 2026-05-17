import { useScrollAnimation } from './useScrollAnimation.js'

/** Wrapper for applying scroll-triggered fade-up to card-like blocks */
export function ScrollReveal({ children, className = '', delayMs = 0, as: Tag = 'div', style: styleProp, ...rest }) {
  const { ref, style } = useScrollAnimation()
  const mergedStyle = {
    ...style,
    ...(delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {}),
    ...(styleProp || {}),
  }
  return (
    <Tag ref={ref} style={mergedStyle} className={className} {...rest}>
      {children}
    </Tag>
  )
}
