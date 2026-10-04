import React from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Layers, Shield, Sparkles, SlidersHorizontal } from 'lucide-react'

export default function DecksShowcase() {
  const deckTypes = [
    {
      title: "Multi-Tier & Elevated Decks",
      description: "Designed for sloping Upstate SC lots. Multi-level zones create distinct areas for dining, outdoor cooking, and sunbathing while preserving yard flow.",
      image: "/images/projects/project_07.jpg",
      tag: "Architectural Layout"
    },
    {
      title: "Elevated Living & Under-Deck Storage",
      description: "High-stilt deck builds engineered with integrated under-deck skirting, weather-protected storage access, and custom security gates.",
      image: "/images/projects/project_02.jpg",
      tag: "Functional Carpentry"
    },
    {
      title: "Custom Built-In Seating & Lounges",
      description: "Handcrafted perimeter L-benches, cocktail railings, and seamless transitions into stone patios or garden hardscapes.",
      image: "/images/projects/project_05.jpg",
      tag: "Custom Details"
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
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
              Primary Specialization
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-2">
              Custom Decks Engineered for Upstate Homes.
            </h2>
            <p className="font-sans text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
              From contemporary low-maintenance composite to traditional pressure-treated timber, we engineer every deck for lifelong structural rigidity and barefoot comfort.
            </p>
          </div>
          
          <Link
            to="/decks"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] pb-1 border-b-2 border-[#B87333] transition-all self-start md:self-auto"
          >
            <span>Explore Deck Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Deck Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {deckTypes.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F6] rounded-lg overflow-hidden border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-bold block mb-1.5">
                    {item.tag}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#11181C] mb-2 group-hover:text-[#B87333] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#4A5860] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-[#1E2D35]">
                  <span>Upstate SC Project</span>
                  <span className="text-[#B87333] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Anatomy of a Conick Deck (Structural Callouts) */}
        <div className="bg-[#1E2D35] text-white rounded-xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
              Behind the Cladding
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-1 mb-3">
              The Anatomy of a Conick Structural Build
            </h3>
            <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
              A gorgeous deck surface is only as good as what lies beneath. Here is how we ensure your deck stays level, silent, and structurally sound for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anatomyPoints.map((point, idx) => {
              const Icon = point.icon
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white mb-2">
                    {point.title}
                  </h4>
                  <p className="font-sans text-xs text-white/70 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Check className="w-4 h-4 text-[#B87333]" />
              <span>Compliant with all South Carolina and local municipal building codes.</span>
            </div>
            <a
              href="#estimate"
              className="bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
            >
              Get Deck Estimate
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
