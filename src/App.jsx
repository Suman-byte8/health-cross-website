import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Subscription from './pages/Subscription.jsx'
import Contact from './pages/Contact.jsx'
import Vlogs from './pages/Vlogs.jsx'
import VlogDetail from './pages/VlogDetail.jsx'
import Footer from './components/Footer.jsx'

// Handles both "scroll to top on route change" and "scroll to the target
// section when a link carries a hash" (e.g. Navbar's Clinical Team link,
// which points at /#wellness on the Home page from anywhere in the site).
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToTarget = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      // Give the destination page a render tick before locating the element.
      requestAnimationFrame(scrollToTarget)
    } else {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/vlogs/:slug" element={<VlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
