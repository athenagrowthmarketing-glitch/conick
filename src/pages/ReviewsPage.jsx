import React from 'react'
import { Star, ShieldCheck, ThumbsUp, Quote } from 'lucide-react'
import ReviewsSection from '../components/ReviewsSection'
import EstimateSection from '../components/EstimateSection'

export default function ReviewsPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-20 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Client Testimonials
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4 mb-4">
            Words from Upstate Homeowners.
          </h1>
          <p className="font-sans text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Read honest feedback from clients across Woodruff, Greenville, Simpsonville, Spartanburg, and Anderson who chose Conick Construction for their outdoor living projects.
          </p>
        </div>
      </section>

      {/* Main Reviews Component */}
      <ReviewsSection />

      {/* Estimate */}
      <EstimateSection />
    </div>
  )
}
