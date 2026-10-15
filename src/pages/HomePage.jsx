import React from 'react'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import BrandManifesto from '../components/BrandManifesto'
import DecksShowcase from '../components/DecksShowcase'
import PorchesShowcase from '../components/PorchesShowcase'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import CraftsmanshipDetails from '../components/CraftsmanshipDetails'
import PortfolioGrid from '../components/PortfolioGrid'
import MasterGallery from '../components/MasterGallery'
import ProcessSection from '../components/ProcessSection'
import ReviewsSection from '../components/ReviewsSection'
import AboutSection from '../components/AboutSection'
import ServiceAreas from '../components/ServiceAreas'
import EstimateSection from '../components/EstimateSection'
import FAQSection from '../components/FAQSection'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <BrandManifesto />
      <DecksShowcase />
      <PorchesShowcase />
      <BeforeAfterSlider />
      <CraftsmanshipDetails />
      <PortfolioGrid />
      <MasterGallery 
        title="Complete Upstate SC Project Archive (100+ Real Builds)"
        subtitle="Filter by composite decks, covered porches, engineered framing, custom carpentry, and drone surveys. No stock photos."
        maxInitial={12}
        showFilters={true}
      />
      <ProcessSection />
      <ReviewsSection />
      <AboutSection />
      <ServiceAreas />
      <EstimateSection />
      <FAQSection />
      <FinalCTA />
    </main>
  )
}
