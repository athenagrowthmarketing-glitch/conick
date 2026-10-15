import React from 'react'
import { Quote, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandManifesto() {
  const pillars = [
    {
      icon: Layers,
      title: "A Clear, Proven Process",
      subtitle: "Clarity & Care From Concept to Handover",
      description: "From our first consultation to the final walkthrough, everything is meticulously planned and executed. Our team coordinates permitting, material delivery, and daily site management, ensuring a smooth, stress-free build without unexpected delays."
    },
    {
      icon: Sparkles,
      title: "A Space That Exceeds Expectations",
      subtitle: "Tailored Architectural Harmony",
      description: "Thoughtful 3D design, premium TimberTech composite and heavy structural lumber, and meticulous finish carpentry come together to create an outdoor retreat that complements your home's rooflines and feels even better than you imagined."
    },
    {
      icon: ShieldCheck,
      title: "We Stand Behind Our Work",
      subtitle: "Accountability & Structural Integrity",
      description: "Custom construction requires uncompromising integrity. We never take shortcuts behind fascia boards. We communicate with total transparency, back every project with our 10-Year Craftsmanship Warranty, and take full responsibility for making things right."
    }
  ]

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Legacy Decks Aligned */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3.5 py-1 rounded-full border border-[#B87333]/20">
            Your Upstate Outdoor Living Experts
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-4 mb-5">
            Why Homeowners Choose Conick Construction.
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Create an outdoor living space that feels like a natural extension of your home. We combine intentional design, premium low-maintenance materials, and an owner-led proven process across Woodruff, Greenville, and Spartanburg, SC.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B87333] font-bold block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-stone-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote Card from Renato Batista */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 sm:p-10 border border-stone-200/90 shadow-sm relative">
          <div className="flex items-center justify-between mb-5">
            <Quote className="w-8 h-8 text-[#B87333]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 font-medium">Founder Statement</span>
          </div>
          
          <p className="font-heading italic text-lg sm:text-xl text-[#1E2D35] leading-relaxed mb-6">
            "When we build a deck or covered porch, we know your children will run across it, your friends will celebrate birthdays on it, and your family will gather there after long days. We don't take shortcuts behind the fascia boards—because the structural framing you never see is what keeps your home safe."
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-stone-100">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/renato-batista.png"
                alt="Renato Batista"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#B87333]/40 shadow-sm shrink-0"
              />
              <div>
                <h4 className="font-heading font-bold text-sm text-[#11181C]">Renato Batista</h4>
                <span className="text-xs text-stone-500 font-sans">Founder & Lead Carpenter, Conick Construction LLC</span>
              </div>
            </div>

            <Link
              to="/about"
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] flex items-center gap-1.5 transition-colors"
            >
              <span>Meet The Team Behind Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
