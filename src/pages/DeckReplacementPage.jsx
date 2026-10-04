import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react'
import EstimateSection from '../components/EstimateSection'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function DeckReplacementPage() {
  const warningSigns = [
    {
      title: "Ledger Board Flashing Failure",
      desc: "Water trapped behind the ledger rots your home's rim joist. This is the #1 cause of catastrophic deck collapse."
    },
    {
      title: "Wobbly or Spongy Railings",
      desc: "If railings give when leaned on, the post-to-frame carriage bolts or internal blocking have decayed."
    },
    {
      title: "Splintering & Warped Surface",
      desc: "Treated pine boards that have cupped, cracked, and pop screws up can injure barefoot children and pets."
    },
    {
      title: "Undersized or Sinking Footers",
      desc: "Posts resting directly on dirt or cracked, shallow concrete pads create uneven deck settling."
    }
  ]

  return (
    <div className="bg-[#FAF9F6]">
      {/* Header */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Deck Remodeling & Safety
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6">
              Deck Replacement & Structural Retrofits.
            </h1>
            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Is your existing wood deck rotting, splintering, or showing structural fatigue? Renato Batista conducts honest, thorough framing inspections across Upstate SC to determine whether your structure can be resurfaced or needs a code-compliant rebuild.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#estimate"
                className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-all"
              >
                Schedule Deck Inspection
              </a>
              <a
                href="tel:+17813991906"
                className="bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-xs px-6 py-3.5 rounded transition-all"
              >
                Call (781) 399-1906
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning Signs */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Safety Evaluation
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-2">
            Is Your Existing Deck Still Structurally Sound?
          </h2>
          <p className="font-sans text-stone-600 text-base mt-2">
            Most wood decks in South Carolina have a lifespan of 12-15 years. If you notice any of these symptoms, an inspection is critical:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {warningSigns.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </span>
                <h3 className="font-heading font-bold text-base text-[#11181C] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Comparison */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11181C]">
              Re-Decking vs. Complete Deck Replacement
            </h3>
            <p className="text-stone-600 font-sans text-sm mt-2">
              We never push a complete replacement if your existing frame is structurally sound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-stone-200">
              <h4 className="font-heading font-bold text-lg text-[#11181C] mb-2">Option A: Re-Decking (Resurfacing)</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed mb-4">
                If the underlying posts, beams, joists, and ledger connection are free of rot and meet current 12" to 16" joist spacing requirements, we strip off the old wood boards and install low-maintenance composite with new modern railings.
              </p>
              <div className="text-xs text-stone-500 font-mono">Cost: Approximately 40-50% less than full rebuild</div>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF9F6] border-2 border-[#B87333]/30">
              <h4 className="font-heading font-bold text-lg text-[#11181C] mb-2">Option B: Full Structural Rebuild</h4>
              <p className="font-sans text-xs sm:text-sm text-[#4A5860] leading-relaxed mb-4">
                If the framing has rotted joists, un-flashed ledgers, or inadequate post footers, a complete tear-down and rebuild is the only safe option. This gives you the freedom to expand the footprint, add multiple tiers, or integrate a covered porch.
              </p>
              <div className="text-xs text-[#B87333] font-mono font-bold">100% Brand New Engineered Structure</div>
            </div>
          </div>
        </div>

      </section>

      {/* Structural Proof Before/After */}
      <BeforeAfterSlider />

      {/* Estimate */}
      <EstimateSection />
    </div>
  )
}
