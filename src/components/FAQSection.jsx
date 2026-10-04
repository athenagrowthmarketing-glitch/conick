import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: "Do I need a building permit for a custom deck or covered porch in South Carolina?",
      a: "Yes. In Greenville, Spartanburg, and Anderson counties, structural additions, elevated decks over 30 inches, and roofed porches require municipal building permits and inspections. We ensure your structural engineering, footing depth, ledger attachments, and railing heights meet or exceed all current IRC (International Residential Code) requirements."
    },
    {
      q: "Composite vs. Pressure-Treated Pine: Which is better for Upstate SC weather?",
      a: "While pressure-treated pine is cost-effective initially, South Carolina's intense summer heat, high humidity, and frequent rain cause natural wood to cup, check, and splinter within a few years unless religiously sealed every 12 to 18 months. Premium composite decking (like Trex or TimberTech) never requires sanding, staining, or sealing, remains splinter-free for bare feet, and carries 25 to 50-year manufacturer warranties."
    },
    {
      q: "Can you re-deck on top of my existing deck framing, or does it require a full teardown?",
      a: "It depends entirely on the structural condition of your existing frame. During our on-site inspection, Renato tests the ledger connection, joist spacing (composite requires 12\" to 16\" on-center), post rot, and footing stability. If the sub-structure is rock-solid, re-decking can save thousands. If the framing has rot or inadequate spans, we recommend a safe, code-compliant replacement."
    },
    {
      q: "How long does a typical custom deck or covered porch construction take?",
      a: "Once permits are approved and materials are delivered, a standard custom deck typically takes 1 to 2 weeks of active construction. Multi-level estate decks and complex covered porches with tongue-and-groove ceilings and electrical rough-ins usually take 2 to 3 weeks. We work continuously on your project rather than bouncing between jobs."
    },
    {
      q: "Will Renato Batista actually be on my jobsite during construction?",
      a: "Yes. Unlike large corporate contractors where the salesperson hands your project over to random subcontractors you've never met, Renato personally supervises and works on our jobsites. He inspects footer depth, beam notches, flashing tape, and every finish miter."
    },
    {
      q: "What is your typical project starting investment?",
      a: "Our custom ground-up deck projects generally begin around $12,000 to $18,000 depending on elevation, size, and material tier. Large multi-tier composite structures and covered porches with custom ceilings and lighting typically range between $25,000 and $55,000+. We provide complete, transparent, line-item specifications before any work begins."
    }
  ]

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            Clear Answers
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3 mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Straightforward answers to the most common questions homeowners have about building a custom deck or covered porch in Upstate SC.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#11181C]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#1E2D35] text-white' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm font-sans text-[#4A5860] leading-relaxed border-t border-stone-100 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
