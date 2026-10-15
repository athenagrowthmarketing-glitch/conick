import React from 'react'
import { Link } from 'react-router-dom'
import { Umbrella, Wind, SunMedium, Check, ArrowRight, ShieldCheck } from 'lucide-react'
import EstimateSection from '../components/EstimateSection'
import MasterGallery from '../components/MasterGallery'

export default function PorchesPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Sheltered Outdoor Living
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6">
              Covered Porches & Screened-In Retreats.
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Protect your family from harsh midday sun and seasonal rain while keeping Carolina bugs outside. We build covered porches that integrate seamlessly into your home’s existing rooflines.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#estimate"
                className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-all"
              >
                Estimate Your Porch Addition
              </a>
              <a
                href="tel:+17813991906"
                className="bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-xs px-6 py-3.5 rounded transition-all"
              >
                Call Renato: (781) 399-1906
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-6">
                <Umbrella className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                Open-Air Covered Porches
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed mb-6">
                Designed for continuous airflow and shade. Heavy structural timber posts, vaulted or cathedral ceilings, and custom trim work that mirrors your home’s architectural facade.
              </p>
            </div>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Flawless roofline integration</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Matching shingles and gutters</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-6">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                Screened-In Porches
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed mb-6">
                Enjoy outdoor dining and evening drinks without buzzing insects or spring yellow pollen. Built with heavy-gauge tear-resistant screens and custom-framed screen doors.
              </p>
            </div>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Tight insect barrier seals</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Pet-resistant screen options</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center mb-6">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                Two-Story Multi-Tier Additions
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed mb-6">
                Double your usable square footage. An upper-level sun deck for barbecues and sunbathing, directly over a sheltered lower patio retreat complete with under-deck drainage.
              </p>
            </div>
            <ul className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-4">
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Dry-below ceiling drainage</li>
              <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#B87333]" /> Multi-generation living space</li>
            </ul>
          </div>

        </div>

        {/* Real Porch Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md">
            <img
              src="/images/projects/porch-covered-outdoor-living-kitchen.jpg"
              alt="Two story deck and lower porch addition"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <h4 className="font-heading font-bold text-lg text-[#11181C]">Two-Story Outdoor Living Structure</h4>
              <p className="text-xs text-stone-600 mt-1">Upper deck with black aluminum railings and lower sheltered porch retreat.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md">
            <img
              src="/images/projects/porch-screened-room-combo.jpg"
              alt="Covered porch framing and roofline"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-white">
              <h4 className="font-heading font-bold text-lg text-[#11181C]">Architectural Roof Extension & Screened Room</h4>
              <p className="text-xs text-stone-600 mt-1">Engineered tie-in to residential shingles, matching overhangs and gutter runs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Porches & Screened Rooms Gallery */}
      <MasterGallery 
        title="Authentic Covered Porch & Screened Room Projects"
        subtitle="Explore our gallery of open-air shade structures, integrated rooflines, and bug-free enclosures across Upstate SC."
        maxInitial={16}
        showFilters={false}
      />

      {/* Estimate Funnel */}
      <EstimateSection />
    </div>
  )
}
