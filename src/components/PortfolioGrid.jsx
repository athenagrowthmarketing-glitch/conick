import React, { useState } from 'react'
import { Maximize2, X, Check, ArrowRight } from 'lucide-react'

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      category: 'decks',
      title: "The Multi-Level Estate Deck",
      image: "/images/projects/deck-twotier-brick-angle.jpg",
      gallery: ["/images/projects/deck-twotier-brick-angle.jpg", "/images/projects/deck-luxury-composite-grey.jpg", "/images/projects/deck-composite-woodland-view.jpg"],
      specs: "Multi-tier layout • Low-maintenance composite • Powder-coated black railings • Integrated LED post caps",
      description: "An expansive multi-level composite deck designed to solve yard elevation transitions while creating distinct zones for dining, grilling, and evening relaxation."
    },
    {
      id: 2,
      category: 'decks',
      title: "The High-Stilt Deck & Weatherproof Storage",
      image: "/images/projects/deck-composite-side-view.jpg",
      gallery: ["/images/projects/deck-composite-side-view.jpg", "/images/projects/detail-understair-composite-soffit.jpg", "/images/projects/deck-composite-stairs-ground.jpg"],
      specs: "Elevated framing • Custom horizontal slatted skirting • Hinged latch storage door • Fall foliage views",
      description: "Elevated second-story deck build engineered with heavy-duty structural posts and a ventilated under-deck enclosure for lawn mower and garden tool storage."
    },
    {
      id: 3,
      category: 'decks',
      title: "The Brick Manor Grand Terrace",
      image: "/images/projects/drone-brick-manor-full.jpg",
      gallery: ["/images/projects/drone-brick-manor-full.jpg", "/images/projects/drone-estate-brick-terrace.jpg", "/images/projects/deck-estate-sunlight.jpg"],
      specs: "Dual grand staircases • Symmetrical egress • Custom balusters • Reinforced foundation footers",
      description: "A showpiece luxury deck built onto a grand brick estate, featuring twin curved staircases meeting at a center landing and picture-frame mitered borders."
    },
    {
      id: 4,
      category: 'details',
      title: "Custom Built-In Perimeter Lounge Deck",
      image: "/images/projects/drone-geometric-chevron-deck.jpg",
      gallery: ["/images/projects/drone-geometric-chevron-deck.jpg", "/images/projects/deck-composite-bench-solar-caps.jpg", "/images/projects/detail-composite-bench-corner.jpg"],
      specs: "Integrated L-bench • Stone retaining wall tie-in • Solar cap lights • Concealed clip system",
      description: "Custom carpentry featuring integrated continuous bench seating around deck perimeter, maximizing usable square footage without requiring loose furniture."
    },
    {
      id: 5,
      category: 'porches',
      title: "Two-Story Deck & Covered Lower Veranda",
      image: "/images/projects/porch-covered-outdoor-living-kitchen.jpg",
      gallery: ["/images/projects/porch-covered-outdoor-living-kitchen.jpg", "/images/projects/deck-twostory-covered-lower.jpg"],
      specs: "Upper sun deck • Sheltered lower patio • Architectural post wrapping • Moisture drainage barrier",
      description: "A comprehensive two-story outdoor living structure providing open-sky dining on the upper level and cool, sheltered relaxation on the ground patio."
    },
    {
      id: 6,
      category: 'porches',
      title: "Architectural Roofline Porch Addition",
      image: "/images/projects/porch-screened-room-combo.jpg",
      gallery: ["/images/projects/porch-screened-room-combo.jpg", "/images/projects/porch-screened-side-elevation.jpg"],
      specs: "Heavy timber posts • Seamless roofline tie-in • Exterior trim integration • Weatherproof flashing",
      description: "Engineered covered porch extension designed to match existing residential roof pitch and provide dependable year-round weather protection."
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Verified Real Projects
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3">
              Craftsmanship Across Upstate South Carolina.
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Every photo shown here is an authentic Conick Construction jobsite. No stock photos. No 3D mockups passed off as real work.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'decks', label: 'Custom Decks' },
              { id: 'porches', label: 'Covered Porches' },
              { id: 'details', label: 'Custom Carpentry' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#1E2D35] text-white shadow'
                    : 'bg-[#FAF9F6] text-stone-600 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1E2D35] text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2 group-hover:text-[#B87333] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A5860] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/80">
                  <span className="text-[11px] font-mono text-[#73828C] block truncate">
                    {project.specs}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Project Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#131E24]/80 hover:bg-[#131E24] text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Photo */}
              <div className="relative h-72 sm:h-96 w-full bg-stone-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-heading font-extrabold text-2xl text-[#11181C] mb-3">
                  {selectedProject.title}
                </h3>
                
                <p className="font-sans text-[#4A5860] text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Specs Box */}
                <div className="bg-[#FAF9F6] p-4 rounded-lg border border-stone-200 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B87333] font-bold block mb-1">
                    Project Specifications:
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-stone-700">
                    {selectedProject.specs}
                  </p>
                </div>

                {/* Additional Gallery Photos if available */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="mb-6">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] block mb-3">
                      Jobsite Perspectives:
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.gallery.map((imgUrl, i) => (
                        <div key={i} className="h-24 rounded-lg overflow-hidden border border-stone-200">
                          <img src={imgUrl} alt="perspectives" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200">
                  <div className="text-xs text-stone-500 font-sans">
                    Inspected & Built by Conick Construction LLC
                  </div>
                  <a
                    href="#estimate"
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors text-center"
                  >
                    Request Similar Build
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
