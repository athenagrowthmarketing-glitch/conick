import React, { useState } from 'react'
import { galleryProjects } from '../data/galleryData'
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

export default function MasterGallery({ title, subtitle, maxInitial = 16, showFilters = true }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(maxInitial)
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  // Filtered array
  const filtered = activeFilter === 'all'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeFilter)

  const currentList = filtered.slice(0, visibleCount)

  const filterTabs = [
    { id: 'all', label: `All Photos (${galleryProjects.length})` },
    { id: 'decks', label: 'Custom Decks' },
    { id: 'porches', label: 'Covered Porches' },
    { id: 'framing', label: 'Framing & Structure' }
  ]

  const handleNextModal = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filtered.length)
    }
  }

  const handlePrevModal = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filtered.length) % filtered.length)
    }
  }

  const currentProject = activeModalIndex !== null ? filtered[activeModalIndex] : null

  return (
    <section id="master-gallery" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Authentic Jobsite Portfolio
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3">
              {title || 'Completed Builds & Real Jobsite Photos'}
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              {subtitle || 'Explore our complete library of authentic builds across Upstate SC. Click any photo to view in high resolution.'}
            </p>
          </div>

          {/* Filter Tabs */}
          {showFilters && (
            <div className="flex flex-wrap gap-2">
              {filterTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id)
                    setVisibleCount(maxInitial)
                  }}
                  className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                    activeFilter === tab.id
                      ? 'bg-[#1E2D35] text-white shadow'
                      : 'bg-[#FAF9F6] text-stone-600 hover:bg-stone-200/70 border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pure Visual Photo Grid (Zero Mismatched Text, 100% Authentic Photos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentList.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={project.image}
                alt="Conick Construction real jobsite build"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Subtle hover overlay with inspect icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                <span className="bg-white/95 backdrop-blur-md text-[#11181C] text-[11px] font-heading font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>Inspect</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 16, filtered.length))}
              className="inline-flex items-center gap-2 bg-[#1E2D35] hover:bg-[#131E24] text-white text-xs font-heading font-bold uppercase tracking-wider px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <span>Load More Photos ({filtered.length - visibleCount} Remaining)</span>
              <ArrowRight className="w-4 h-4 text-[#B87333]" />
            </button>
          </div>
        )}

      </div>

      {/* High-Resolution Clean Lightbox Modal */}
      {currentProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalIndex(null)}
        >
          <div 
            className="bg-[#11181C] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-white/10 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Navigation Controls */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#162026]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/70">
                  Conick Construction LLC
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs font-mono text-[#E0A96D] font-semibold">
                  Photo {activeModalIndex + 1} of {filtered.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevModal}
                  aria-label="Previous Photo"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextModal}
                  aria-label="Next Photo"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  aria-label="Close Modal"
                  className="w-9 h-9 rounded-full bg-[#B87333] hover:bg-[#965B27] text-white flex items-center justify-center transition-colors ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Photo Viewport */}
            <div className="relative bg-black flex items-center justify-center flex-1 max-h-[66vh] sm:max-h-[72vh] p-2 overflow-hidden">
              <img
                src={currentProject.image}
                alt="Conick Construction real jobsite build"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal Bottom Content: Pure CTA Bar, Zero Fabricated Text */}
            <div className="px-6 py-4 bg-[#162026] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-sans text-xs text-white/80 text-center sm:text-left">
                Authentic custom build engineered for life outside in Upstate South Carolina.
              </p>

              <a
                href="#estimate"
                onClick={() => setActiveModalIndex(null)}
                className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-7 py-3 rounded-lg text-center transition-colors shadow-lg"
              >
                Get a Free Consultation
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
