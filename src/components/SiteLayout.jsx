import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'

export default function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div id="top" className="h-px w-full shrink-0 scroll-mt-0" aria-hidden />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}
