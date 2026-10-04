import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Owner Presence */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-stone-200 bg-white">
              <img
                src="/images/renato-batista.png"
                alt="Renato Batista - Founder and Lead Carpenter of Conick Construction"
                className="w-full h-[460px] object-cover object-top"
                loading="lazy"
              />
              <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#11181C]">Renato Batista</h4>
                  <p className="font-sans text-xs text-[#73828C]">Founder & Master Carpenter</p>
                </div>
                <span className="font-mono text-[11px] text-[#B87333] font-semibold tracking-wider uppercase">On-Site Every Job</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Standards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20 self-start mb-3">
              Our Story & Philosophy
            </span>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mb-6">
              A Builder Who Still Works with His Hands.
            </h2>

            <div className="space-y-4 text-stone-600 font-sans text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Conick Construction was founded on a simple realization: too many homeowners hire a general contractor only to find the owner disappears after signing the contract, handing off the job to unvetted subcontractors who rush through framing and hide mistakes behind fascia board.
              </p>
              <p>
                Renato Batista founded Conick Construction in Woodruff, South Carolina to do the exact opposite. We deliberately keep our operation focused. We don’t try to be painters one week, roofers the next, and carpet layers the week after. We dedicate our craft exclusively to custom decks, covered porches, and outdoor carpentry.
              </p>
              <p>
                When you hire Conick Construction, Renato is on your jobsite. He personally verifies beam notches, footer depths, joist flashing tape, and every single miter joint. That direct accountability is why our decks feel rock-solid from the first step.
              </p>
            </div>

            {/* Checklist Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#11181C] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Direct owner communication</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#11181C] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Heavy-gauge framing standard</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#11181C] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Clean daily jobsite protocol</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#11181C] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Locally based in Woodruff, SC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/about"
                className="bg-[#1E2D35] hover:bg-[#131E24] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3.5 rounded text-center transition-colors"
              >
                Learn More About Our Team
              </Link>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] py-3 transition-colors"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
