import React from 'react'
import ServiceAreas from '../components/ServiceAreas'
import EstimateSection from '../components/EstimateSection'
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react'

export default function ServiceAreasPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-20 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Regional Service Territory
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4 mb-4">
            Serving Upstate South Carolina.
          </h1>
          <p className="font-sans text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
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
