import React, { useState } from 'react'
import { Calendar, PenTool, FileCheck, HardHat, Sparkles, Check, ArrowRight, Phone } from 'lucide-react'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: "consultation",
      tabTitle: "1. Consultation",
      headline: "Phase 1: Lifestyle Goals & On-Site Evaluation",
      description: "The consultation stage is all about understanding your family's vision and how you plan to enjoy your outdoor living space. Renato visits your home to evaluate your property's unique topography, sun exposure, and architectural style.",
      points: [
        "In-depth discussion of your lifestyle needs, aesthetic preferences, and investment range",
        "Laser-accurate measurements and high-resolution site photography",
        "Thorough assessment of grade slopes, soil conditions, and residential roofline tie-ins",
        "Transparent walkthrough of material options (TimberTech composite, Trex, pressure-treated pine)"
      ],
      image: "/images/projects/drone-geometric-chevron-deck.jpg",
      imageCaption: "Conick Construction site assessment and geometric deck layout in Upstate SC"
    },
    {
      id: "design",
      tabTitle: "2. Planning & Design",
      headline: "Phase 2: Architectural Layout & Material Curation",
      description: "We translate your ideas into a detailed construction blueprint. We consider every traffic flow path, stair transition, railing style, and low-voltage lighting accent to maximize usable square footage and visual balance.",
      points: [
        "Custom architectural plan tailored specifically to your home's exterior elevations",
        "Curated material samples: composite board hues, fascia wraps, and baluster finishes",
        "Structural engineering calculations for load paths, frost footers, and cantilevers",
        "Lighting design for step risers, post caps, and ambient under-rail evening glow"
      ],
      image: "/images/projects/detail-switchback-stairs-overhead.jpg",
      imageCaption: "Dual-landing switchback composite stairs engineered with picture-frame bordering"
    },
    {
      id: "proposal",
      tabTitle: "3. Authorize Proposal",
      headline: "Phase 3: Itemized Scope, Permits & Clear Schedule",
      description: "No vague contractor estimates or surprise change orders. You receive a comprehensive, itemized agreement detailing every component from footer depth to fastener clips, along with a locked-in timeline.",
      points: [
        "100% transparent pricing with guaranteed line-item material and labor breakdown",
        "We handle all Spartanburg, Greenville, and Anderson County building permits & HOA submissions",
        "Clear deposit schedule tied directly to verifiable construction milestones",
        "Confirmed start date and dedicated project timeline"
      ],
      image: "/images/projects/detail-joist-tape-foundation.jpg",
      imageCaption: "Engineered joist protection with protective butyl barrier tape"
    },
    {
      id: "prep",
      tabTitle: "4. Project Prep",
      headline: "Phase 4: Site Protection & Structural Foundation",
      description: "Before driving a single screw, we prep your property with extreme care. We designate protected staging areas, protect existing lawn and landscaping, and pour deep frost-line concrete footers.",
      points: [
        "Lawn and landscape protection protocols to minimize turf disruption",
        "Staging of premium, kiln-dried structural framing lumber and composite decking",
        "Excavation and pouring of reinforced concrete footers below SC frost depth",
        "City/County building official inspection sign-off before framing proceeds"
      ],
      image: "/images/projects/detail-heavy-timber-framing.jpg",
      imageCaption: "Heavy-duty structural posts notched and secured with heavy hardware"
    },
    {
      id: "build",
      tabTitle: "5. Build Your Dream",
      headline: "Phase 5: Master Carpentry & Final Walkthrough",
      description: "Our dedicated master carpentry crew works on your project continuously without jumping between jobsites. Every miter is cut with cabinet-grade precision, followed by daily magnetic cleanups and a rigorous owner-led walkthrough.",
      points: [
        "Continuous on-site progress with owner Renato Batista inspecting daily build quality",
        "Concealed clip fasteners with zero exposed screw heads across deck surface",
        "Daily jobsite magnetic nail sweeps to protect pets, tires, and family members",
        "Comprehensive final walkthrough, maintenance orientation, and 10-Year Warranty delivery"
      ],
      image: "/images/projects/deck-luxury-composite-grey.jpg",
      imageCaption: "Finished luxury composite deck with modern white rails and picture-frame border"
    }
  ]

  const current = steps[activeStep]

  return (
    <section id="process" className="bg-[#1A262C] text-white py-16 lg:py-24 border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
            The Conick Experience
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-4">
            Our Proven 5-Step Process.
          </h2>
          <p className="font-sans text-stone-300 text-base sm:text-lg leading-relaxed">
            Homeowners often fear contractor unpredictability. We run our projects with a structured, transparent process that eliminates stress and delivers an exceptional space on time.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-3.5 sm:p-4 rounded-lg border transition-all duration-200 ${
                activeStep === idx 
                  ? 'bg-[#B87333] border-[#B87333] text-white shadow-lg' 
                  : 'bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                activeStep === idx ? 'text-white/80' : 'text-stone-500'
              }`}>
                Step 0{idx + 1}
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm block mt-0.5 truncate">
                {step.tabTitle.replace(/^\d+\.\s*/, '')}
              </span>
            </button>
          ))}
        </div>

        {/* Step Detail Content Card */}
        <div className="bg-[#24343D] border border-white/15 rounded-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Details & Bullets */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E0A96D] font-bold block mb-2">
                Step 0{activeStep + 1} of 05
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                {current.headline}
              </h3>
              <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="space-y-3 mb-8">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#B87333]/20 text-[#E0A96D] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-stone-200 leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="#estimate"
                  className="inline-flex items-center gap-2 bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-all active:scale-[0.98]"
                >
                  <span>Book Your Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+17813991906"
                  className="inline-flex items-center gap-2 text-stone-300 hover:text-white font-sans text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>Questions? Call (781) 399-1906</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Jobsite Asset */}
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-[480px] relative border-t lg:border-t-0 lg:border-l border-white/10">
              <img
                src={current.image}
                alt={current.imageCaption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 bg-black/60 backdrop-blur-sm p-3 rounded border border-white/15">
                <span className="font-mono text-[10px] uppercase text-[#E0A96D] font-bold block mb-0.5">
                  Verified Conick Build
                </span>
                {current.imageCaption}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
