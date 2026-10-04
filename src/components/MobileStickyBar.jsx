import React from 'react'
import { Phone, Calculator } from 'lucide-react'

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#131E24]/95 backdrop-blur-md border-t border-white/10 p-3 lg:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:+17813991906"
          className="bg-white/10 hover:bg-white/15 text-white py-2.5 px-3 rounded text-xs font-sans font-semibold flex items-center justify-center gap-2 border border-white/10 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#B87333]" />
          <span>Call (781) 399-1906</span>
        </a>

        <a
          href="#estimate"
          className="bg-[#B87333] hover:bg-[#965B27] text-white py-2.5 px-3 rounded text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Get Free Estimate</span>
        </a>
      </div>
    </div>
  )
}
