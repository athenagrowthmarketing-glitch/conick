import React from 'react'
import { Link } from 'react-router-dom'
import { Check, Shield, Layers, Sparkles, ArrowRight, Phone } from 'lucide-react'
import EstimateSection from '../components/EstimateSection'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import MasterGallery from '../components/MasterGallery'

export default function DecksPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Custom Deck Construction
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6">
              Engineered Decks Built for Upstate Living.
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              We design and build custom decks tailored to your home's architecture and backyard grade. From multi-tiered composite terraces to elevated second-story outdoor living areas, our carpentry is engineered to endure South Carolina weather.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#estimate"
                className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-all"
              >
                Get Custom Deck Estimate
              </a>
              <a
                href="tel:+17813991906"
                className="bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-xs px-6 py-3.5 rounded transition-all"
              >
                Call Renato: (781) 399-1906
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deck Styles Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
            Deck Configurations
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-2">
            Built Around How Your Family Entertains.
          </h2>
          <p className="font-sans text-stone-600 text-base mt-2">
            Every home site is unique. We configure stairs, elevations, and traffic flow to maximize usable space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm flex flex-col sm:flex-row">
            <div className="sm:w-1/2 h-64 sm:h-auto relative">
              <img
                src="/images/projects/deck-twotier-brick-angle.jpg"
                alt="Multi-level custom deck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B87333] font-bold">Sloped Lot Solution</span>
                <h3 className="font-heading font-bold text-xl text-[#11181C] mt-1 mb-2">Multi-Tier Composite Decks</h3>
                <p className="font-sans text-xs text-[#4A5860] leading-relaxed mb-4">
                  Multi-level decks create distinct zones for open-air grilling, outdoor dining, and lounging around fire tables while smoothly stepping down steep backyard terrain.
                </p>
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 font-sans pt-2 border-t border-stone-100">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Symmetrical grand staircases</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Integrated low-voltage step lights</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm flex flex-col sm:flex-row">
            <div className="sm:w-1/2 h-64 sm:h-auto relative">
              <img
                src="/images/projects/deck-composite-side-view.jpg"
                alt="Elevated second-story deck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B87333] font-bold">Second-Story Elevation</span>
                <h3 className="font-heading font-bold text-xl text-[#11181C] mt-1 mb-2">Elevated & Stilt Decks</h3>
                <p className="font-sans text-xs text-[#4A5860] leading-relaxed mb-4">
                  Engineered with reinforced structural timber posts and diagonal bracing. Underneath, custom slatted skirting provides dry, ventilated yard equipment storage.
                </p>
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 font-sans pt-2 border-t border-stone-100">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Custom latching storage doors</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Code-compliant load paths</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Material Comparison: Composite vs Natural Wood */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
              Material Selection
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11181C] mt-1">
              Composite Decking vs. Pressure-Treated Pine
            </h3>
            <p className="text-stone-600 font-sans text-sm mt-2">
              Understanding long-term maintenance in South Carolina's climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF9F6] p-6 rounded-xl border-2 border-[#B87333]/30 relative">
              <span className="absolute top-4 right-4 bg-[#B87333] text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                Most Popular
              </span>
              <h4 className="font-heading font-bold text-lg text-[#11181C] mb-1">
                Premium Capped Composite (Trex / TimberTech)
              </h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Best for long-term barefoot living and zero maintenance.</p>
              <ul className="space-y-2 text-xs font-sans text-[#4A5860]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 25 to 50-year manufacturer stain & fade warranty</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Zero painting, staining, or sanding required</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Concealed fasteners for a clean screw-free surface</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Resists warping, rot, and Carolina humidity</li>
              </ul>
            </div>

            <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200">
              <h4 className="font-heading font-bold text-lg text-[#11181C] mb-1">
                Pressure-Treated Southern Yellow Pine
              </h4>
              <p className="text-xs text-stone-500 font-sans mb-4">Classic natural timber feel with lower initial upfront cost.</p>
              <ul className="space-y-2 text-xs font-sans text-[#4A5860]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-stone-600 shrink-0" /> Authentic natural wood grain texture</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-stone-600 shrink-0" /> Lower initial investment for budget-conscious homeowners</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-stone-600 shrink-0" /> Can be stained or painted in custom colors</li>
                <li className="flex items-center gap-2 text-amber-700"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Requires periodic washing and sealing every 1-2 years</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Before/After */}
      <BeforeAfterSlider />

      {/* Real Deck Builds Gallery */}
      <MasterGallery 
        title="Authentic Upstate SC Custom Deck Projects"
        subtitle="Explore our library of multi-level terraces, low-maintenance composite builds, and custom stair runs."
        maxInitial={16}
        showFilters={false}
      />

      {/* Estimate Section */}
      <EstimateSection />
    </div>
  )
}
