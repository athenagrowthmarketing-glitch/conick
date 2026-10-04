import React, { useState, useRef, useCallback } from 'react'
import { ArrowLeftRight, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            Framing to Finish Proof
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3 mb-4">
            Look Beneath the Surface: The Anatomy of Integrity.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Drag the slider to compare our precision heavy-gauge framing stage with the finished custom estate deck. We take as much pride in what's underneath as the final luxury finish.
          </p>
        </div>

        {/* Comparison Header Labels Outside Photo */}
        <div className="max-w-5xl mx-auto flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-1.5 bg-[#FAF9F6] border border-stone-200 px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider text-[#B87333]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Structural Framing Stage</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#FAF9F6] border border-stone-200 px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider text-[#1E2D35]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Finished Estate Deck</span>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-stone-300"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src="/images/projects/project_14.jpg"
              alt="Finished Conick luxury estate deck with grand staircases"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Before Image (Clipped by slider position) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/projects/project_01.jpg"
                alt="Conick structural deck framing in progress"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ 
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none'
                }}
                loading="lazy"
              />
            </div>

            {/* Divider Line & Knob */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1E2D35] border-2 border-white shadow-xl flex items-center justify-center text-white">
                <ArrowLeftRight className="w-4 h-4 text-[#B87333]" />
              </div>
            </div>

          </div>

          {/* Quick Slider Helper Instructions */}
          <div className="flex items-center justify-between mt-4 px-2 text-xs font-sans text-[#73828C]">
            <span>&larr; Drag left for finished luxury</span>
            <span className="font-mono text-[#B87333] font-semibold">Touch or drag anywhere on image</span>
            <span>Drag right for structural framing &rarr;</span>
          </div>

          {/* Value callout banner */}
          <div className="mt-8 bg-[#FAF9F6] border border-stone-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1E2D35] text-[#B87333] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#11181C]">
                  Authentic Conick Construction Project
                </h4>
                <p className="text-xs text-[#4A5860]">
                  Multi-tier brick mansion estate build featuring dual grand staircases, reinforced framing spans, and custom white balusters.
                </p>
              </div>
            </div>
            <a
              href="#estimate"
              className="bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded shrink-0 transition-colors"
            >
              Consult with Renato
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
