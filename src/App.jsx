import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Clients from './components/Clients.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import WhyAurex from './components/WhyAurex.jsx'
import Team from './components/Team.jsx'
import Reviews from './components/Reviews.jsx'
import Pricing from './components/Pricing.jsx'
import Industries from './components/Industries.jsx'
import Checklist from './components/Checklist.jsx'
import FAQ from './components/FAQ.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import ContactBar from './components/ContactBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Helmet>
        <title>Aurex Cleaning Services | Commercial Cleaning Calgary, AB</title>
        <meta
          name="description"
          content="Aurex Cleaning Services delivers commercial janitorial cleaning for offices, retail, medical, and industrial facilities across Calgary, Alberta. Free quotes within 24 hours."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
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
        <Footer />
      </div>
    </>
  )
}

export default App
