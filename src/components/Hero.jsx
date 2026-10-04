import React from 'react'
import { ArrowRight, Phone, ShieldCheck, MapPin, CheckCircle2, Ruler } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-[#1E2D35] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-white/10">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B87333_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B87333]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-sans tracking-wide text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87333]" />
              <span className="uppercase tracking-widest font-semibold text-[11px] text-[#E0A96D]">Upstate South Carolina</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">Custom Decks & Covered Porches</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white mb-6 uppercase">
              Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#E0A96D]">
                Life Outside.
              </span>
            </h1>

            {/* Clarifying Lead Paragraph */}
            <p className="font-sans text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
              We design and construct premium custom decks, covered porches, and outdoor living structures with architectural carpentry and uncompromised structural integrity. No shortcuts. No generic kits.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#estimate"
                className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-sm tracking-wider uppercase px-7 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              
              <a
                href="tel:+17813991906"
                className="bg-white/10 hover:bg-white/15 border border-white/15 text-white font-sans font-semibold text-sm px-6 py-4 rounded transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#B87333]" />
                <span>Call (781) 399-1906</span>
              </a>
            </div>

            {/* Trust Proof Pillars (4 items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B87333]" />
                  Dedicated
                </span>
                <span className="text-xs text-white/60 mt-0.5">Decks & Porches Only</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-[#B87333]" />
                  Heavy-Gauge
                </span>
                <span className="text-xs text-white/60 mt-0.5">Architectural Framing</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                  Owner-Led
                </span>
                <span className="text-xs text-white/60 mt-0.5">Renato On Every Job</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-base flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B87333]" />
                  Upstate SC
                </span>
                <span className="text-xs text-white/60 mt-0.5">Woodruff • GVL • SPB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Real Conick Project) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src="/images/projects/project_07.jpg"
                alt="Conick Construction custom multi-tier composite deck in Woodruff SC"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
