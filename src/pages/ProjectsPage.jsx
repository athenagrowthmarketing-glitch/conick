import React from 'react'
import MasterGallery from '../components/MasterGallery'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import EstimateSection from '../components/EstimateSection'

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-center text-white overflow-hidden border-b border-white/10 text-center">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/drone-brick-manor-full.jpg')",
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 bg-[#B87333]/25 border border-[#B87333]/50 text-[#E0A96D] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md mb-4 font-semibold">
            Jobsite Portfolio
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md mt-2 mb-5">
            Real Outdoor Living Projects.
          </h1>
          <p className="font-sans text-white/95 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow font-normal">
            Explore authentic completed decks, covered porches, and custom carpentry built across Woodruff, Greenville, Spartanburg, and Anderson, South Carolina.
          </p>
        </div>
      </section>

      {/* Master Portfolio Gallery */}
      <MasterGallery 
        title="Complete Portfolio of Verified Builds"
        subtitle="Filter by composite decks, covered porches, engineered framing, and custom craftsmanship details. Every photo is an authentic Conick Construction jobsite."
        maxInitial={24}
        showFilters={true}
      />

      {/* Before / After Slider */}
      <BeforeAfterSlider />

      {/* Estimate CTA */}
      <EstimateSection />
    </div>
  )
}
