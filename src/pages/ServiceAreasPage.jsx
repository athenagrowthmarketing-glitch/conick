import React from 'react'
import ServiceAreas from '../components/ServiceAreas'
import EstimateSection from '../components/EstimateSection'
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

export default function ServiceAreasPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-center text-white overflow-hidden border-b border-white/10 text-center">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/drone-estate-brick-terrace.jpg')",
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 bg-[#B87333]/25 border border-[#B87333]/50 text-[#E0A96D] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md mb-4 font-semibold">
            Regional Service Territory
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md mt-2 mb-5">
            Serving Upstate South Carolina.
          </h1>
          <p className="font-sans text-white/95 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow font-normal">
            Headquartered in Woodruff, SC, Conick Construction builds custom decks, covered porches, and outdoor living structures throughout Spartanburg, Greenville, and Anderson counties.
          </p>
        </div>
      </section>

      {/* Main Service Areas component */}
      <ServiceAreas />

      {/* Direct Contact Banner */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-2xl text-[#11181C] mb-3">
            Want to Confirm Service for Your Property?
          </h3>
          <p className="font-sans text-stone-600 text-sm mb-6">
            If your property is in or immediately surrounding Woodruff, Greenville, Spartanburg, or Anderson, we would be pleased to schedule an on-site visit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans">
            <a href="tel:+17813991906" className="flex items-center gap-2 text-[#1E2D35] hover:text-[#B87333] font-semibold">
              <Phone className="w-4 h-4 text-[#B87333]" />
              <span>(781) 399-1906</span>
            </a>
            <a href="mailto:rconickconstruction@gmail.com" className="flex items-center gap-2 text-[#1E2D35] hover:text-[#B87333] font-semibold">
              <Mail className="w-4 h-4 text-[#B87333]" />
              <span>rconickconstruction@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 text-stone-600">
              <MapPin className="w-4 h-4 text-[#B87333]" />
              <span>449 Haddon Trail, Woodruff, SC 29688</span>
            </span>
          </div>
        </div>
      </section>

      {/* Estimate */}
      <EstimateSection />
    </div>
  )
}
