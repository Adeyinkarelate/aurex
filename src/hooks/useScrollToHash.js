import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Smooth-scroll to `#id` when visiting `/` with a hash (e.g. from another route). */
export function useScrollToHashOnHome() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    const id = location.hash?.replace(/^#/, '')
    if (!id) return

    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])
}
