import React from 'react'
import { Hammer, UserCheck, ShieldAlert, Sparkles } from 'lucide-react'

export default function TrustStrip() {
  const pillars = [
    {
      icon: Hammer,
      title: "Outdoor Living Specialists",
      subtitle: "Focused Trade Excellence",
      description: "We don't juggle 20 different remodeling trades. We focus 100% on custom decks, covered porches, and outdoor carpentry."
    },
    {
      icon: UserCheck,
      title: "Owner-Led Supervision",
      subtitle: "Renato Batista On-Site",
      description: "You deal directly with the builder. Every ledger attachment, framing span, and miter joint is inspected personally."
    },
    {
      icon: ShieldAlert,
      title: "Built for Carolina Weather",
      subtitle: "Humidity & UV Resilient",
      description: "Engineered joist tape, proper water diversion, galvanized/stainless fasteners, and premium composite decking built to last."
    },
    {
      icon: Sparkles,
      title: "Clean Jobsite Protocol",
      subtitle: "Respect for Your Property",
      description: "Daily magnetic sweeps for stray screws, protected turf paths, organized materials, and clear daily communication."
    }
  ]

  return (
    <section className="bg-white py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx} 
                className="flex flex-col p-6 rounded-lg bg-[#FAF9F6] border border-stone-200/80 hover:border-[#B87333]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded bg-[#1E2D35] flex items-center justify-center text-[#B87333] mb-4 group-hover:bg-[#B87333] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B87333] font-semibold mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
