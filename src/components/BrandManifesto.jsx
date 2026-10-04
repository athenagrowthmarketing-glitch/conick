import React from 'react'
import { Quote, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BrandManifesto() {
  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Eyebrow Label */}
          <div className="text-center mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              The Conick Standard
            </span>
          </div>

          {/* Editorial Headline */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#11181C] text-center tracking-tight leading-tight mb-8">
            An outdoor living space should feel like a natural extension of your home, not an afterthought.
          </h2>

          {/* Editorial Copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4A5860] font-sans text-base sm:text-lg leading-relaxed mb-12">
            <p>
              In Upstate South Carolina, backyards endure relentless summer sun, humid air, and torrential thunderstorms. Building an outdoor structure that lasts decades requires more than basic carpentry—it demands engineered water deflection, proper joist tape protection, code-compliant load paths, and precise expansion gaps for composite materials.
            </p>
            <p>
              At Conick Construction, we deliberately avoid generic, high-volume cookie-cutter installs. Every custom deck and covered porch we undertake is designed specifically for your home's rooflines, topography, and the way your family actually gathers outside.
            </p>
          </div>

          {/* Quote Card from Renato Batista */}
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-stone-200/90 shadow-sm relative">
            <div className="flex items-center justify-between mb-5">
              <Quote className="w-8 h-8 text-[#B87333]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400 font-medium">Founder Statement</span>
            </div>
            
            <p className="font-heading italic text-lg sm:text-xl text-[#1E2D35] leading-relaxed mb-6">
              "When we build a deck or covered porch, we know your children will run across it, your friends will celebrate birthdays on it, and your family will gather there after long days. We don't take shortcuts behind the fascia boards—because the structural framing you never see is what keeps your home safe."
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-stone-100">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/renato-batista.png"
                  alt="Renato Batista"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#B87333]/40 shadow-sm shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#11181C]">Renato Batista</h4>
                  <span className="text-xs text-[#73828C] font-sans">Founder & Lead Carpenter, Conick Construction LLC</span>
                </div>
              </div>

              <Link
                to="/about"
                className="text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:text-[#965B27] flex items-center gap-1.5 transition-colors"
              >
                <span>Read Our Craft Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
