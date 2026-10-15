import React from 'react'
import MasterGallery from '../components/MasterGallery'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import EstimateSection from '../components/EstimateSection'

export default function ProjectsPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-20 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Jobsite Portfolio
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mt-4 mb-4">
            Real Outdoor Living Projects.
          </h1>
          <p className="font-sans text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Explore authentic completed decks, covered porches, and custom carpentry built across Woodruff, Greenville, Spartanburg, and Anderson, South Carolina.
          </p>
        </div>
      </section>

      {/* Master 101-Photo Gallery */}
      <MasterGallery 
        title="Complete Portfolio of 100+ Completed Builds"
        subtitle="Filter by composite decks, covered porches, engineered framing, and custom craftsmanship details. Every single project is an authentic Conick Construction jobsite in Upstate SC."
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
