import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, SunMedium, Umbrella, Wind, CheckCircle2 } from 'lucide-react'

export default function PorchesShowcase() {
  const features = [
    {
      icon: Umbrella,
      title: "Architectural Roofline Integration",
      description: "Custom tie-ins for gable, hip, and shed roof designs that match your home's shingles, slope pitch, and gutters with guaranteed leak-free flashing."
    },
    {
      icon: Wind,
      title: "Screened-In Living Rooms",
      description: "Tight fiberglass screen systems, custom heavy-duty screen doors, and sealed perimeter framing to enjoy outdoor dining free of Carolina mosquitoes."
    },
    {
      icon: SunMedium,
      title: "Finished Wood Ceilings & Electrics",
      description: "Stained tongue-and-groove pine or cedar, painted beadboard, recessed LED lighting, and reinforced junction boxes for outdoor ceiling fans and heaters."
    }
  ]

  return (
    <section id="porches" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Authentic Porch Photos) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-stone-300 shadow-xl group">
              <img
                src="/images/projects/porch-covered-outdoor-living-kitchen.jpg"
                alt="Conick Construction full-width covered porch with outdoor kitchen and dining in Upstate SC"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#1E2D35]/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold">
                Covered Porch & Outdoor Kitchen
              </div>
            </div>

            {/* Supporting Secondary Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 group">
                <img
                  src="/images/projects/porch-screened-room-combo.jpg"
                  alt="Screened porch room and open sun deck combination"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider">
                  Screened Room + Deck
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 group">
                <img
                  src="/images/projects/deck-twostory-covered-lower.jpg"
                  alt="Two-story covered deck and lower patio living structure"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider">
                  2-Story Covered Living
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Porch Value */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3.5 py-1 rounded-full border border-[#B87333]/20 self-start">
              Sheltered Comfort
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3 mb-6">
              Covered Porches & Screened Retreats.
            </h2>
            
            <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
              Extend your living space beyond interior walls. Whether you want a full-width covered porch with an outdoor kitchen to escape the summer sun or a vaulted screened room for mosquito-free evenings, we build outdoor additions that blend seamlessly into your home.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B87333]/10 text-[#B87333] flex items-center justify-center shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#11181C] mb-1">
                        {feature.title}
                      </h4>
                      <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/covered-porches"
                className="bg-[#1E2D35] hover:bg-[#11181C] text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all flex items-center gap-2"
              >
                <span>View Porch Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#B87333]" />
              </Link>
              <a
                href="#estimate"
                className="text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] flex items-center gap-1 transition-colors"
              >
                <span>Request Porch Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
