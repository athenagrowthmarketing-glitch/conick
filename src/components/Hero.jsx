import React from 'react'

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
      {/* Floating Vertical Right Tab: GET A CONSULTATION */}
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

      {/* Main Full-Bleed Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[88vh] flex flex-col justify-center text-white overflow-hidden">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/hero-composite-sunset.jpg')",
            backgroundPosition: 'center 45%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70 pointer-events-none" />

        {/* Centered Hero Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 sm:py-28">
          
          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.12] mb-5 drop-shadow-md">
            Custom Outdoor Living, <br className="hidden sm:inline" />
            Designed for the Way You Live
          </h1>

          {/* Sub-headline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow">
            Thoughtfully Designed. Expertly Built. Professionally Managed.
          </p>

          {/* Centered CTA Button */}
          <div className="flex items-center justify-center">
            <a
              href="#estimate"
              onClick={scrollToEstimate}
              className="inline-block border-2 border-white/90 hover:border-[#B87333] bg-black/40 hover:bg-[#B87333] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-widest px-9 sm:px-11 py-4 sm:py-4.5 rounded shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              GET A CONSULTATION
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
