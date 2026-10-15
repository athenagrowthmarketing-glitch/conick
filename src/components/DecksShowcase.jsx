import React from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Layers, Shield, Sparkles, SlidersHorizontal, Sun, Home, ShieldAlert } from 'lucide-react'

export default function DecksShowcase() {
  const specializations = [
    {
      title: "Heavy Structural Framing",
      description: "We build with notched 6x6 posts, engineered concrete footers below frost depth, and protective butyl flashing tape on every joist to eliminate structural rot.",
      image: "/images/projects/detail-heavy-timber-framing.jpg",
      tag: "Structural Foundation"
    },
    {
      title: "Premium Composite & PVC Decking",
      description: "Low-maintenance TimberTech and Trex composite boards that resist Upstate SC heat, humidity, and UV fade. Installed with concealed clips for barefoot comfort.",
      image: "/images/projects/deck-luxury-composite-grey.jpg",
      tag: "Decking Surfaces"
    },
    {
      title: "Modern Railings & Drink Rails",
      description: "Matte black powder-coated aluminum balusters, sleek modern cable rail, and broad composite cocktail drink rails that frame your outdoor views.",
      image: "/images/projects/deck-estate-white-railing.jpg",
      tag: "Safety & Style"
    },
    {
      title: "Built-In Seating & Lounges",
      description: "Custom continuous perimeter benches, planter integrations, and fire table spaces crafted seamlessly from matching composite lumber.",
      image: "/images/projects/deck-composite-bench-solar-caps.jpg",
      tag: "Custom Details"
    },
    {
      title: "Multi-Tier & Sloping Lots",
      description: "Engineered multi-level decks designed for steep topography, creating distinct zones for outdoor dining, grilling, and evening relaxation.",
      image: "/images/projects/deck-twotier-brick-angle.jpg",
      tag: "Architectural Layout"
    },
    {
      title: "Integrated Low-Voltage Lighting",
      description: "Subtle stair riser LED lights, under-rail illumination, and solar-powered post caps that extend your outdoor living deep into the night.",
      image: "/images/projects/deck-perimeter-white-rail.jpg",
      tag: "Evening Ambiance"
    }
  ]

  const anatomyPoints = [
    {
      icon: Shield,
      title: "Engineered Concrete Footers",
      text: "Deep poured footers below frost depth with elevated post bases to prevent ground moisture wicking."
    },
    {
      icon: Layers,
      title: "Notched Beam Framing & Hardware",
      text: "Beams rest directly on notched structural posts (never bolted to the side) with heavy hurricane ties."
    },
    {
      icon: Sparkles,
      title: "Joist Protection & Flashing Tape",
      text: "Self-sealing protective butyl tape applied across all joists and ledger boards to block water rot."
    },
    {
      icon: SlidersHorizontal,
      title: "Concealed Fastening & Miters",
      text: "No visible surface screw heads. Picture-frame perimeter boards with tight 45° architectural miter joints."
    }
  ]

  return (
    <section id="decks" className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3.5 py-1 rounded-full border border-[#B87333]/20">
              Primary Specializations
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3">
              Custom Decks Built for Upstate Living.
            </h2>
            <p className="font-sans text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
              Every home and lot in Upstate SC is unique. We build tailored outdoor spaces engineered to handle summer heat, heavy rain, and steep slopes.
            </p>
          </div>

          <Link
            to="/decks"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] shrink-0 transition-colors self-start md:self-end"
          >
            <span>Explore Deck Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specializations.map((spec, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1E2D35]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {spec.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#11181C] mb-2 group-hover:text-[#B87333] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framing Anatomy Deep Dive */}
        <div className="bg-[#1E2D35] text-white rounded-2xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Structural Anatomy
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mt-3 mb-2">
              What Separates Conick From Standard Builders
            </h3>
            <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed">
              Decks fail not because of boards, but because of improper ledger flashing, weak post connections, and lack of joist protection. We build framing designed to outlast ordinary construction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
            {anatomyPoints.map((point, idx) => {
              const Icon = point.icon
              return (
                <div key={idx} className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[#B87333]/20 text-[#E0A96D] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white mb-1.5">{point.title}</h4>
                  <p className="font-sans text-xs text-stone-300 leading-relaxed">{point.text}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
