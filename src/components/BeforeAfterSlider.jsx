import React, { useState, useRef, useCallback } from 'react'
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react'

export default function BeforeAfterSlider() {
  const [activeJob, setActiveJob] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const jobs = [
    {
      id: "grey-composite",
      tabTitle: "Deck Replacement 01",
      title: "Weathered Deck ➔ Modern Composite Living",
      beforeLabel: "Before: Rotting & Splintered Wood",
      afterLabel: "After: Low-Maintenance Composite",
      beforeImg: "/images/projects/before-rotted-deck-grey.jpg",
      afterImg: "/images/projects/deck-luxury-composite-grey.jpg",
      details: "Replaced decayed wood boards and unstable railing with premium composite decking, concealed clip fasteners, perimeter picture-frame borders, and modern white rails with black aluminum balusters."
    },
    {
      id: "brick-twotier",
      tabTitle: "Deck Replacement 02",
      title: "Failing Elevated Deck ➔ Two-Tier Natural Wood",
      beforeLabel: "Before: Unsafe Elevated Framing",
      afterLabel: "After: Multi-Level Custom Deck",
      beforeImg: "/images/projects/before-rotted-deck-brick.jpg",
      afterImg: "/images/projects/after-twotier-wood-deck-brick.jpg",
      details: "Demolished unsafe rotting elevated structure and engineered a custom two-tier natural wood deck featuring notched 6x6 posts, switchback stairs, and continuous baluster rhythms."
    },
    {
      id: "green-elevated",
      tabTitle: "Deck Replacement 03",
      title: "Weathered Steps ➔ Heavy-Post Elevated Deck",
      beforeLabel: "Before: Rotted Wood Steps",
      afterLabel: "After: Engineered Hillside Deck",
      beforeImg: "/images/projects/before-steps-green-house.jpg",
      afterImg: "/images/projects/after-elevated-deck-green-house.jpg",
      details: "Transformed steep decaying entrance steps into an expansive elevated deck supported by heavy timber posts, under-deck ventilation skirting, and architectural aluminum railing."
    }
  ]

  const currentJob = jobs[activeJob]

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
    <section id="before-after" className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3.5 py-1 rounded-full border border-[#B87333]/20">
            Real Jobsite Transformations
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#11181C] tracking-tight mt-3 mb-4">
            See The Transformation Up Close.
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Drag the slider across genuine Before & After photos taken from identical angles on real homes across Woodruff, Greenville, and Spartanburg, SC.
          </p>
        </div>

        {/* Job Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {jobs.map((job, idx) => (
            <button
              key={job.id}
              onClick={() => {
                setActiveJob(idx)
                setSliderPosition(50)
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                activeJob === idx
                  ? 'bg-[#1E2D35] text-white shadow-md'
                  : 'bg-[#FAF9F6] border border-stone-200 text-stone-600 hover:border-stone-400'
              }`}
            >
              {job.tabTitle}
            </button>
          ))}
        </div>

        {/* Job Headline */}
        <div className="max-w-5xl mx-auto text-center mb-6">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#11181C]">
            {currentJob.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mt-1">
            {currentJob.details}
          </p>
        </div>

        {/* Comparison Header Labels Outside Photo */}
        <div className="max-w-5xl mx-auto flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider text-rose-800">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>{currentJob.beforeLabel}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{currentJob.afterLabel}</span>
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
              src={currentJob.afterImg}
              alt={currentJob.afterLabel}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Before Image (Clipped by slider position) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentJob.beforeImg}
                alt={currentJob.beforeLabel}
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

          <p className="text-center font-mono text-[11px] text-stone-500 uppercase tracking-widest mt-4">
            ↔ Drag the center circle left or right to reveal before & after transformation
          </p>
        </div>

      </div>
    </section>
  )
}
