import React from 'react'
import { Star, ShieldCheck, ThumbsUp, Quote } from 'lucide-react'

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Marcus & Elena T.",
      location: "Simpsonville, SC",
      project: "Multi-Tier Composite Deck & Railings",
      rating: 5,
      quote: "Renato and his team transformed our sloping backyard into the most used space in our house. The attention to detail on the 45-degree miter joints and hidden fasteners was incredible. Most contractors disappear for days, but Conick showed up every morning until it was finished."
    },
    {
      name: "David K.",
      location: "Woodruff, SC",
      project: "Custom Elevated Deck & Under-Deck Storage",
      rating: 5,
      quote: "Finding an honest, skilled carpenter in Upstate SC is tough. Renato walked our property, pointed out elevation challenges that two other builders missed, and engineered a rock-solid deck. The under-deck storage enclosure looks like a piece of high-end furniture."
    },
    {
      name: "Sarah L.",
      location: "Greenville, SC",
      project: "Covered Porch Addition",
      rating: 5,
      quote: "Our new covered porch looks like it was built with the original house. The roofline tie-in is flawless, zero leaks through heavy summer downpours, and the tongue-and-groove ceiling is stunning. Cleaned up every single nail every single afternoon."
    }
  ]

  return (
    <section id="reviews" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            Client Experiences
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3 mb-4">
            Built on Trust and Proven Craftsmanship.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Real feedback from Upstate South Carolina homeowners who trusted Conick Construction with their outdoor living projects.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#B87333]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#B87333] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-sans text-sm text-[#4A5860] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#11181C]">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-[#73828C] block">
                    {rev.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B87333] font-semibold block uppercase">
                    Verified Build
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {rev.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Strip */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 font-sans">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B87333]" />
            Direct Owner Communication on Every Project
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-[#B87333]" />
            Clean Daily Jobsite Protocol
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#B87333] fill-current" />
            100% Dedicated to Decks & Covered Porches
          </span>
        </div>

      </div>
    </section>
  )
}
