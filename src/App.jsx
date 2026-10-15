import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'

import HomePage from './pages/HomePage'
import OutdoorLivingPage from './pages/OutdoorLivingPage'
import DecksPage from './pages/DecksPage'
import PorchesPage from './pages/PorchesPage'
import DeckReplacementPage from './pages/DeckReplacementPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ReviewsPage from './pages/ReviewsPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  const location = useLocation()
  const isPpc = location.pathname === '/outdoor-living' || location.pathname.startsWith('/outdoor-living')

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#11181C]">
      <ScrollToTop />
      {!isPpc && <Navbar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outdoor-living" element={<OutdoorLivingPage />} />
          <Route path="/decks" element={<DecksPage />} />
          <Route path="/covered-porches" element={<PorchesPage />} />
          <Route path="/deck-replacement" element={<DeckReplacementPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      {!isPpc && <Footer />}
      {!isPpc && <MobileStickyBar />}
    </div>
  )
}
