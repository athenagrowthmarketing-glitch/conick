import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, SunMedium, Umbrella, Wind, CheckCircle2 } from 'lucide-react'

export default function PorchesShowcase() {
  const features = [
    {
      icon: Umbrella,
      title: "Seamless Roofline Tie-Ins",
      description: "Engineered tie-ins for gable, shed, and hip roofs that match your existing shingles, pitch, and gutters without leak risks."
    },
    {
      icon: Wind,
      title: "Screened-In Living Rooms",
      description: "Heavy-duty fiberglass screens, custom screen doors, and sealed perimeter framing to enjoy outdoor evenings free of Carolina mosquitoes."
    },
    {
      icon: SunMedium,
      title: "Finished Architectural Ceilings",
      description: "Stained tongue-and-groove cedar, painted beadboard, recessed LED lighting, and reinforced junction boxes for ceiling fans."
    }
  ]

  return (
    <section id="porches" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (2-Story Addition & Porches) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-stone-300 shadow-xl group">
              <img
                src="/images/projects/project_16.jpg"
                alt="Conick Construction two story addition with upper deck and covered patio"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Supporting Secondary Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 group">
                <img
                  src="/images/projects/project_17.jpg"
                  alt="Covered patio construction in daylight"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 group">
                <img
                  src="/images/projects/project_09.jpg"
                  alt="Covered porch framing and roofline"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Porch Value */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
              Sheltered Comfort
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-2 mb-6">
              Covered Porches & Screened Retreats.
            </h2>
            
            <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
              Extend your living space beyond four interior walls. Whether you want a vaulted ceiling covered porch to escape midday sun or a fully screened room for mosquito-free summer evenings, we build outdoor spaces that blend seamlessly with your home's original architecture.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#11181C]">
                        {feat.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#4A5860] mt-1 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#estimate"
                className="bg-[#1E2D35] hover:bg-[#131E24] text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded text-center transition-all"
              >
                Estimate Your Porch
              </a>
              <Link
                to="/covered-porches"
                className="inline-flex items-center justify-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] py-3 transition-colors"
              >
                <span>View Porch Designs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
