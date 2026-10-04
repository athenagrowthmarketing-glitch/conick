import React from 'react'
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-[#131E24] text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B87333]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Start Your Backyard Project
          </span>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-4 mb-6 leading-tight">
            Ready to Build More Out of Your Backyard?
          </h2>

          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact Renato Batista directly to schedule an on-site evaluation in Woodruff, Greenville, Spartanburg, Anderson, or nearby Upstate SC communities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
            <a
              href="#estimate"
              className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+17813991906"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-semibold text-sm px-7 py-4 rounded transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B87333]" />
              <span>Direct: (781) 399-1906</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-sans border-t border-white/10 pt-8">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#B87333]" />
              Based in Woodruff, SC 29688
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B87333]" />
              Owner-Inspected Craftsmanship
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Serving Upstate South Carolina</span>
          </div>

        </div>

      </div>
    </section>
  )
}
