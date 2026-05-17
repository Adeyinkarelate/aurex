import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Clients from '../components/Clients.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import WhyAurex from '../components/WhyAurex.jsx'
import Team from '../components/Team.jsx'
import Reviews from '../components/Reviews.jsx'
import Pricing from '../components/Pricing.jsx'
import Industries from '../components/Industries.jsx'
import Checklist from '../components/Checklist.jsx'
import FAQ from '../components/FAQ.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import ContactBar from '../components/ContactBar.jsx'
import { useScrollToHashOnHome } from '../hooks/useScrollToHash.js'

export default function Home() {
  useScrollToHashOnHome()

  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <About />
      <Gallery />
      <WhyAurex />
      <Team />
      <Reviews />
      <Pricing />
      <Industries />
      <Checklist />
      <FAQ />
      <QuoteForm />
      <ContactBar />
    </main>
  )
}
