import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, UserCheck, Hammer, Sparkles, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import EstimateSection from '../components/EstimateSection'

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Owner-Led Craftsmanship
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6">
              The Story & Standard Behind Conick Construction.
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed">
              We started Conick Construction in Woodruff, South Carolina with one mission: to bring authentic master carpentry, clean jobsites, and direct owner accountability to every outdoor living project.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden shadow-xl border border-stone-200 bg-white">
              <img
                src="/images/renato-batista.png"
                alt="Renato Batista - Founder and Master Carpenter of Conick Construction"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#11181C]">Renato Batista</h4>
                  <p className="font-sans text-xs text-[#73828C]">Founder & Lead Carpenter</p>
                </div>
                <span className="font-mono text-[11px] text-[#B87333] font-semibold tracking-wider uppercase">Woodruff, SC</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#4A5860] font-sans text-base leading-relaxed">
            <h2 className="font-heading font-extrabold text-3xl text-[#11181C] tracking-tight">
              A Builder Who Cares What Goes Beneath the Surface.
            </h2>
            <p>
              In recent years, the home construction market in Upstate South Carolina has grown rapidly. But with rapid growth comes a familiar problem: large contracting companies that sell high-priced projects and then immediately subcontract the physical labor to the lowest bidder.
            </p>
            <p>
              Renato Batista established Conick Construction LLC to provide a genuine alternative. When you work with Conick, you are dealing directly with the craftsman responsible for the work. Renato personally reviews site plans, marks footing depths, verifies joist spans, and walks every job before sign-off.
            </p>
            <p>
              We specialize strictly in custom decks, covered porches, and outdoor carpentry. That singular focus allows us to master every detail of South Carolina building codes, moisture management, and composite installation systems.
            </p>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2">Direct Owner Presence</h3>
            <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
              Renato is on your jobsite. No absentee managers or rotating subcontractors who don't know your plans.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-4">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2">Heavy-Gauge Framing</h3>
            <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
              We exceed code requirements with notched beam-to-post joints, butyl joist tape, and reinforced hurricane hardware.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2">Clean Jobsite Protocol</h3>
            <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
              Daily magnetic sweeps for screws, neatly stacked lumber, and genuine respect for your family's lawn and privacy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2">Upstate SC Roots</h3>
            <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
              Located at 449 Haddon Trail in Woodruff, proudly serving Greenville, Spartanburg, and Anderson counties.
            </p>
          </div>
        </div>

      </section>

      {/* Estimate */}
      <EstimateSection />
    </div>
  )
}
