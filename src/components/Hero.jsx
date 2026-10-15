import React from 'react'
import { ArrowRight, Phone, ShieldCheck, MapPin, CheckCircle2, Star, Award, HardHat, Shield } from 'lucide-react'

export default function Hero() {
  const scrollToEstimate = (e) => {
    e.preventDefault()
    const target = document.getElementById('estimate')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '#estimate'
    }
  }

  return (
    <>
      {/* Floating Vertical Right Tab: GET A CONSULTATION (1:1 with Legacy Decks screenshot) */}
      <aside aria-label="Quick Consultation Access" className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <a
          href="#estimate"
          onClick={scrollToEstimate}
          className="bg-[#C5221F] hover:bg-[#A31816] text-white text-[11px] font-heading font-extrabold uppercase tracking-widest py-4 px-2.5 rounded-l shadow-2xl flex items-center justify-center [writing-mode:vertical-rl] transition-transform hover:-translate-x-1 cursor-pointer border-l border-t border-b border-red-400/30"
          style={{ textOrientation: 'mixed' }}
        >
          GET A CONSULTATION
        </a>
      </aside>

      {/* Main Full-Bleed Hero Section (Matching Screenshot media_1792075512059_abc6cbc0.png 1:1) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between text-white overflow-hidden">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/hero-composite-sunset.jpg')",
            backgroundPosition: 'center 45%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75 pointer-events-none" />

        {/* Top Spacer to balance navbar */}
        <div className="pt-12 sm:pt-16" />

        {/* Centered Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
          
          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md">
            Custom Outdoor Living, <br className="hidden sm:inline" />
            Designed for the Way You Live
          </h1>

          {/* Sub-headline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow">
            Thoughtfully Designed. Expertly Built. Professionally Managed.
          </p>

          {/* Centered CTA Button (Exact Legacy Decks Outline/Translucent Button Style) */}
          <div className="flex items-center justify-center">
            <a
              href="#estimate"
              onClick={scrollToEstimate}
              className="inline-block border-2 border-white/90 hover:border-[#B87333] bg-black/40 hover:bg-[#B87333] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-widest px-8 sm:px-10 py-3.5 sm:py-4 rounded shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              GET A CONSULTATION
            </a>
          </div>

        </div>

        {/* Bottom Trust Strip Badges (1:1 with Screenshot Badges Row) */}
        <div className="relative z-10 w-full pb-8 sm:pb-12 pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              
              {/* Badge 1: Google Reviews 5 Stars */}
              <div className="bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded shadow-lg flex flex-col items-center justify-center border border-stone-200 min-w-[130px] sm:min-w-[155px] h-[58px] sm:h-[66px] transition-transform hover:scale-105">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-700">5 Stars</span>
                  <div className="flex text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-semibold text-stone-600 uppercase tracking-wider ml-1">Reviews</span>
                </div>
              </div>

              {/* Badge 2: Approved Professional Builder */}
              <div className="bg-[#1E2D35]/95 backdrop-blur-sm border border-white/20 px-3.5 sm:px-4 py-2 rounded shadow-lg flex items-center gap-2.5 min-w-[140px] sm:min-w-[165px] h-[58px] sm:h-[66px] transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                  <HardHat className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-[#E0A96D] font-bold">APPROVED</span>
                  <span className="block text-[10px] sm:text-[11px] font-heading font-extrabold text-white leading-tight uppercase">Professional<br/>Builder</span>
                </div>
              </div>

              {/* Badge 3: TimberTech Platinum Pro Elite */}
              <div className="bg-[#141C20]/95 backdrop-blur-sm border border-[#C5A059]/50 px-3.5 sm:px-4 py-2 rounded shadow-lg flex items-center gap-2.5 min-w-[140px] sm:min-w-[165px] h-[58px] sm:h-[66px] transition-transform hover:scale-105">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#E0A96D] via-[#B87333] to-[#8C5226] flex items-center justify-center font-heading font-extrabold text-xs text-white shadow shrink-0">
                  TT
                </div>
                <div className="text-left">
                  <span className="block text-[10px] sm:text-[11px] font-heading font-bold text-[#E0A96D] tracking-wide leading-tight">TimberTech</span>
                  <span className="block text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/90 font-semibold">Platinum Pro</span>
                </div>
              </div>

              {/* Badge 4: BBB Accredited Business */}
              <div className="bg-[#005A70]/95 backdrop-blur-sm text-white px-3.5 sm:px-4 py-2 rounded shadow-lg flex items-center gap-2.5 min-w-[140px] sm:min-w-[165px] h-[58px] sm:h-[66px] border border-cyan-400/30 transition-transform hover:scale-105">
                <div className="font-serif font-black text-lg sm:text-xl tracking-tighter text-white border-r border-white/30 pr-2 shrink-0">
                  BBB
                </div>
                <div className="text-left">
                  <span className="block text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-wider text-cyan-200">Accredited</span>
                  <span className="block text-[10px] sm:text-[11px] font-heading font-extrabold text-white uppercase leading-none">Business</span>
                </div>
              </div>

              {/* Badge 5: NADRA (North American Deck and Railing Association) */}
              <div className="bg-white px-3.5 sm:px-4 py-2 rounded shadow-lg flex items-center gap-2.5 min-w-[140px] sm:min-w-[165px] h-[58px] sm:h-[66px] border border-stone-200 transition-transform hover:scale-105">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#2D5A27] flex items-center justify-center text-white font-heading font-black text-xs shrink-0 shadow-sm">
                  N
                </div>
                <div className="text-left">
                  <span className="block text-[11px] sm:text-[13px] font-heading font-black tracking-tight text-[#2D5A27] leading-none">NADRA</span>
                  <span className="block text-[8px] sm:text-[9px] font-sans text-stone-600 leading-tight">Deck & Railing Assoc.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
