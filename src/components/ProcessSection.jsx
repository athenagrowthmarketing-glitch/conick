import React from 'react'
import { Calendar, FileText, Hammer, CheckCircle2 } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "On-Site Consultation & Site Assessment",
      description: "Renato visits your property across Woodruff, Greenville, Spartanburg, or Anderson. We assess yard topography, door thresholds, sun angles, and understand how your family wants to use the space."
    },
    {
      num: "02",
      icon: FileText,
      title: "Detailed Engineering & Transparent Scope",
      description: "You receive a clear, comprehensive project specification. We detail footers, framing dimensions, composite board lines, railing types, and realistic timelines. No vague allowances or hidden surprise fees."
    },
    {
      num: "03",
      icon: Hammer,
      title: "Dedicated Build & Clean Jobsite Protocol",
      description: "Construction begins on schedule. Our focused crew works continuously without abandoning your job. Structural framing, flashing, and miters are executed with precision, with daily magnetic cleanups."
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Owner Walkthrough & Satisfaction Sign-Off",
      description: "Before final completion, Renato walks every inch of the structure with you. We check every miter, test every gate, verify every handrail, and ensure your absolute satisfaction."
    }
  ]

  return (
    <section className="bg-[#1E2D35] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B87333_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            The Construction Experience
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-3 mb-4">
            Predictable, Organized, and Built with Respect.
          </h2>
          <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed">
            Homeowners often dread contractor disorganization. We run our jobsites with strict scheduling, direct owner communication, and meticulous craftsmanship from day one.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-bold text-2xl text-[#B87333]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-[11px] font-mono text-white/50">
                  <span>Phase {step.num} Standard</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-white">
              Ready to discuss your backyard project?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-sans mt-0.5">
              Initial site visits are scheduled directly with Renato Batista across Upstate SC.
            </p>
          </div>
          <a
            href="#estimate"
            className="bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3.5 rounded shadow-lg transition-all shrink-0"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  )
}
