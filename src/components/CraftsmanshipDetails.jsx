import React from 'react'
import { Sparkles, Compass, Shield, Maximize2 } from 'lucide-react'

export default function CraftsmanshipDetails() {
  const details = [
    {
      title: "Picture-Frame Perimeter Borders",
      category: "Architectural Bordering",
      image: "/images/projects/project_03.jpg",
      description: "Crisp 45-degree mitered border boards frame the deck footprint, concealing rough board ends and creating a tailored furniture-grade look."
    },
    {
      title: "Integrated Under-Deck Storage",
      category: "Functional Carpentry",
      image: "/images/projects/project_08.jpg",
      description: "Custom slatted skirt walls with seamless latching access doors turn unused slope space into dry, ventilated lawn and equipment storage."
    },
    {
      title: "Custom Built-In Perimeter Benches",
      category: "Built-In Elements",
      image: "/images/projects/project_05.jpg",
      description: "Structural wrap-around seating built directly from matching composite lumber, eliminating cluttered outdoor furniture."
    },
    {
      title: "Double Staircases & Baluster Rhythms",
      category: "Egress & Elevation",
      image: "/images/projects/project_15.jpg",
      description: "Symmetrical stair runs with closed stringers, code-compliant riser heights, and continuous handrail ergonomics for maximum comfort."
    }
  ]

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
              The Details That Matter
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-2">
              Carpentry Built for Inspection Up Close.
            </h2>
            <p className="font-sans text-stone-600 text-base mt-3 leading-relaxed">
              Anyone can screw boards together. What separates Conick Construction is the precision of every joint, concealed fastener, and custom-crafted detail.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-xs font-mono text-[#73828C]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B87333]" />
              Zero Exposed Surface Fasteners
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#B87333]" />
              Expansion-Calibrated Tolerances
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#11181C] mb-2 group-hover:text-[#B87333] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
