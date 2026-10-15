import React from 'react'
import { Star, ShieldCheck, ThumbsUp, Quote } from 'lucide-react'
import ReviewsSection from '../components/ReviewsSection'
import EstimateSection from '../components/EstimateSection'

export default function ReviewsPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-center text-white overflow-hidden border-b border-white/10 text-center">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/deck-composite-woodland-view.jpg')",
            backgroundPosition: 'center 45%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 bg-[#B87333]/25 border border-[#B87333]/50 text-[#E0A96D] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md mb-4 font-semibold">
            Client Testimonials
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md mt-2 mb-5">
            Words from Upstate Homeowners.
          </h1>
          <p className="font-sans text-white/95 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow font-normal">
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
