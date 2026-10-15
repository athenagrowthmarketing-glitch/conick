import React, { useState } from 'react'
import { galleryProjects } from '../data/galleryData'
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight, Check, ArrowRight, Layers, Sparkles } from 'lucide-react'

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
    { id: 'all', label: `All Projects (${galleryProjects.length})` },
    { id: 'decks', label: 'Composite Decks' },
    { id: 'porches', label: 'Covered Porches' },
    { id: 'framing', label: 'Structural Framing' },
    { id: 'details', label: 'Custom Details' }
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
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Authentic Jobsite Portfolio
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3">
              {title || 'Over 100+ Completed Upstate SC Projects.'}
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              {subtitle || 'Explore our complete library of real, verified builds across Woodruff, Greenville, Spartanburg, and Anderson. Zero stock imagery.'}
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
                  className={`px-3.5 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded transition-all duration-200 ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalIndex(idx)}
              className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-[#1E2D35]/85 backdrop-blur-sm text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10">
                  {project.category}
                </div>

                {/* Hover Maximize Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-sm text-[#1E2D35] text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Inspect</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#11181C] line-clamp-1 group-hover:text-[#B87333] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-200/70">
                  <span className="text-[10px] font-mono text-stone-500 block truncate">
                    {project.specs}
                  </span>
                </div>
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
              <span>Load More Projects ({filtered.length - visibleCount} Remaining)</span>
              <ArrowRight className="w-4 h-4 text-[#B87333]" />
            </button>
          </div>
        )}

      </div>

      {/* High-Resolution Modal Lightbox */}
      {currentProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalIndex(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#B87333] font-bold">
                  {currentProject.category.toUpperCase()}
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs font-sans text-stone-600">
                  Conick Construction Verified Project
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevModal}
                  aria-label="Previous Project"
                  className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextModal}
                  aria-label="Next Project"
                  className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  aria-label="Close Modal"
                  className="w-8 h-8 rounded-full bg-[#1E2D35] hover:bg-[#131E24] text-white flex items-center justify-center transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Viewport */}
            <div className="relative bg-stone-950 flex items-center justify-center flex-1 max-h-[60vh] sm:max-h-[68vh] overflow-hidden">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Modal Bottom Content */}
            <div className="p-6 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-[#11181C]">
                  {currentProject.title}
                </h3>
                <p className="font-sans text-xs text-stone-500 mt-1">
                  {currentProject.specs} • Built by Conick Construction LLC
                </p>
              </div>

              <a
                href="#estimate"
                onClick={() => setActiveModalIndex(null)}
                className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3 rounded text-center transition-colors"
              >
                Request Similar Build
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
