import { Helmet } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'

function App() {
  return (
    <>
      <Helmet>
        <title>Aurex Cleaning Services | Commercial Cleaning Calgary, AB</title>
        <meta
          name="description"
          content="Aurex Cleaning Services delivers commercial janitorial cleaning for offices, retail, legal, and industrial facilities across Calgary, Alberta. Free quotes within 24 hours."
        />
      </Helmet>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
