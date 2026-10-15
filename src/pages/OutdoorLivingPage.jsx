import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, ShieldCheck, CheckCircle2, ArrowRight, Star, 
  MapPin, Calendar, Sparkles, Clock, Compass, Ruler, 
  Award, Send, Check, Shield, Layers, Hammer, Umbrella, 
  ChevronRight, HeartHandshake, Eye
} from 'lucide-react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function OutdoorLivingPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityZip: '',
    projectType: 'Custom Deck Construction',
    budget: '$25,000 - $45,000',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-'
  const WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL || 'https://services.leadconnectorhq.com/hooks/BmDGr9v8BWg4jVdMTmNA/webhook-trigger/5fe7aeea-0387-4917-8baf-3c73747f6bbb'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    let token = null
    try {
      if (window.grecaptcha && window.grecaptcha.ready) {
        token = await new Promise((resolve) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_ppc_outdoor' })
              .then(tokenRes => resolve(tokenRes))
              .catch(() => resolve(null))
          })
        })
      }
    } catch (err) {
      console.warn('reCAPTCHA note:', err)
    }

    const nameParts = (formData.fullName || '').trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const leadPayload = {
      name: formData.fullName,
      fullName: formData.fullName,
      firstName,
      lastName,
      phone: formData.phone,
      email: formData.email,
      city: formData.cityZip,
      cityZip: formData.cityZip,
      projectType: formData.projectType,
      budget: formData.budget,
      notes: formData.notes,
      message: `[PPC Outdoor Living Consultation Request]\n• Project: ${formData.projectType}\n• Budget Range: ${formData.budget}\n• Location: ${formData.cityZip}\n• Notes: ${formData.notes || 'None'}`,
      source: 'Google Ads PPC - Outdoor Living Funnel (Legacy Decks Style)',
      submittedAt: new Date().toISOString(),
      recaptchaToken: token
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(leadPayload)
      })
    } catch (err) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(leadPayload)
        })
      } catch (fallbackErr) {
        console.warn('Webhook transmission note:', fallbackErr)
      }
    }

    setIsSubmitting(false)
    setSubmitted(true)
  }

  // 5-Step Process Data (Matching Legacy Decks proven architecture)
  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Site Walk',
      desc: 'We meet on-site at your home in Upstate SC. Renato Batista personally assesses your yard slope, sun angles, elevation transitions, and listens to how your family wants to live outdoors.',
      details: ['In-person yard inspection', 'Grade & slope laser measurements', 'Discussion of lifestyle & budget'],
      image: '/images/projects/deck-composite-woodland-view.jpg'
    },
    {
      step: '02',
      title: 'Planning & Design',
      desc: 'We translate your vision into a practical, buildable layout. From composite color schemes and lighting configurations to stair egress and rooflines, every detail is specified.',
      details: ['Custom material selection (Trex / TimberTech)', 'Railing & lighting layout planning', 'Engineering for local Upstate codes'],
      image: '/images/projects/drone-geometric-chevron-deck.jpg'
    },
    {
      step: '03',
      title: 'Authorize Proposal',
      desc: 'Clear, transparent pricing with zero surprise charges. You receive a comprehensive proposal detailing exact materials, scope, schedule milestones, and payment structure.',
      details: ['Itemized fixed-price proposal', 'Guaranteed milestone calendar', 'Clear material specifications'],
      image: '/images/projects/detail-heavy-timber-framing.jpg'
    },
    {
      step: '04',
      title: 'Project Prep & Permitting',
      desc: 'We pull all required building permits with your local county (Spartanburg, Greenville, Anderson), coordinate site deliveries, and schedule utility locates so construction starts seamlessly.',
      details: ['County permit procurement', 'Structural engineering sign-off', 'Jobsite material staging & prep'],
      image: '/images/projects/detail-joist-tape-foundation.jpg'
    },
    {
      step: '05',
      title: 'Build Your Dream',
      desc: 'Renato and our specialized crew execute the build with daily magnetic sweeps, heavy-gauge timber framing, and furniture-grade finish carpentry. A final walk-through guarantees your 100% satisfaction.',
      details: ['Owner-managed carpentry on-site', 'Daily jobsite cleanup & magnetic sweeps', 'Final comprehensive inspection walk'],
      image: '/images/projects/hero-composite-sunset.jpg'
    }
  ]

  // 6 Core Specializations
  const specializations = [
    {
      title: 'Structural Framing',
      subtitle: 'Engineered Foundation',
      desc: 'Heavy 6x6 timber posts, notched beam-to-post bearing connections, and weatherproofing butyl joist tape for a 30+ year structural backbone.',
      image: '/images/projects/detail-heavy-timber-framing.jpg'
    },
    {
      title: 'Composite Decking',
      subtitle: 'Barefoot Luxury',
      desc: 'Premium capped composite from Trex and TimberTech. 25-50 year stain and fade warranties with concealed clip fasteners for a pristine finish.',
      image: '/images/projects/deck-luxury-composite-grey.jpg'
    },
    {
      title: 'Architectural Railings',
      subtitle: 'Clear Sightlines',
      desc: 'Powder-coated black aluminum, horizontal cable, or low-maintenance composite railings engineered to feel rigid and look timeless.',
      image: '/images/projects/deck-estate-white-railing.jpg'
    },
    {
      title: 'Low-Voltage Lighting',
      subtitle: 'Nighttime Ambiance',
      desc: 'Recessed stair riser lights, under-rail glow, and post cap luminaires extend your outdoor living hours well into the Carolina evening.',
      image: '/images/projects/deck-composite-bench-solar-caps.jpg'
    },
    {
      title: 'Screened Porch Enclosures',
      subtitle: 'Bug-Free Living',
      desc: 'Heavy-gauge tear-resistant screens and tight seals protect your family from mosquitoes, wasps, and spring yellow pollen.',
      image: '/images/projects/porch-screened-room-combo.jpg'
    },
    {
      title: 'Covered Rooflines & Verandas',
      subtitle: 'All-Weather Shade',
      desc: 'Engineered roof additions tied seamlessly into your home’s existing shingles and siding, shielding your patio from rain and summer heat.',
      image: '/images/projects/porch-covered-outdoor-living-kitchen.jpg'
    }
  ]

  return (
    <div className="bg-[#FAF9F6] text-[#11181C]">
      
      {/* PPC Focused Header (High Conversion, Click-to-Call, No Leaks) */}
      <header className="bg-[#1E2D35] text-white py-3.5 px-4 border-b border-white/10 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-conick-horizontal.png" 
              alt="Conick Construction" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B87333]">Speak With Lead Builder</span>
              <a href="tel:+17813991906" className="text-sm font-heading font-bold text-white hover:text-[#B87333] transition-colors">
                (781) 399-1906
              </a>
            </div>

            <a
              href="#consultation-form"
              className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-4 sm:px-6 py-2.5 rounded shadow-sm hover:shadow transition-all"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Direct Consultation Form (Legacy Decks Style) */}
      <section className="bg-gradient-to-b from-[#1E2D35] via-[#22333C] to-[#1E2D35] text-white py-12 lg:py-20 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B87333_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Response Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider uppercase text-[#B87333]">
                <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                <span>Upstate SC Premier Custom Decks & Porches</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Custom Outdoor Living, <br />
                <span className="text-[#B87333]">Designed for the Way You Live.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                <strong className="text-white font-semibold">Thoughtfully Designed. Expertly Built. Professionally Managed.</strong> Turn your backyard into a luxury outdoor retreat with Conick Construction. We combine master carpentry, low-maintenance composite materials, and direct owner accountability across Upstate South Carolina.
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2 max-w-xl">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Award className="w-5 h-5 text-[#B87333] shrink-0" />
                  <span className="text-xs font-sans text-white/90 font-medium">50-Year Manufacturer Decking Warranty</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Hammer className="w-5 h-5 text-[#B87333] shrink-0" />
                  <span className="text-xs font-sans text-white/90 font-medium">Direct Founder Presence On Every Job</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Calendar className="w-5 h-5 text-[#B87333] shrink-0" />
                  <span className="text-xs font-sans text-white/90 font-medium">100% Free On-Site Consultation & Quote</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <MapPin className="w-5 h-5 text-[#B87333] shrink-0" />
                  <span className="text-xs font-sans text-white/90 font-medium">Greenville, Spartanburg & Anderson</span>
                </div>
              </div>

              {/* Social Proof Line */}
              <div className="flex items-center gap-3 pt-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-sans text-white/70">
                  Rated <strong className="text-white">5.0 Stars</strong> by Upstate Homeowners
                </span>
              </div>

            </div>

            {/* Right Column: High-Converting PPC Consultation Form */}
            <div id="consultation-form" className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-[#11181C] relative">
                
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#11181C]">
                      Consultation Request Received!
                    </h3>
                    <p className="font-sans text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting Conick Construction. Renato Batista will personally review your project details and reach out within 24 business hours to schedule your on-site consultation.
                    </p>
                    <div className="pt-4 border-t border-stone-100">
                      <a 
                        href="tel:+17813991906" 
                        className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#B87333] hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Need Immediate Assistance? Call (781) 399-1906</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#B87333] font-bold block mb-1">
                        Schedule Your Project Review
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl text-[#11181C]">
                        Request Free Consultation
                      </h3>
                      <p className="font-sans text-xs text-stone-500 mt-1">
                        Speak directly with lead builder Renato Batista. Zero obligation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Michael Smith"
                          className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(864) 000-0000"
                            className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                            City / Zip Code *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.cityZip}
                            onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                            placeholder="e.g. Woodruff, 29388"
                            className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                            Project Type
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                          >
                            <option value="Custom Deck Construction">New Custom Deck</option>
                            <option value="Covered Porch Addition">Covered Porch</option>
                            <option value="Screened-In Porch">Screened Porch</option>
                            <option value="Deck Replacement">Deck Replacement / Re-Deck</option>
                            <option value="Deck & Porch Combo">Deck & Porch Combo</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                          Estimated Investment Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full text-xs font-sans px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50"
                        >
                          <option value="$15,000 - $25,000">$15,000 – $25,000</option>
                          <option value="$25,000 - $45,000">$25,000 – $45,000</option>
                          <option value="$45,000 - $75,000">$45,000 – $75,000</option>
                          <option value="$75,000+">$75,000+ (Grand Estate Build)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-bold text-stone-700 uppercase tracking-wider mb-1">
                          Brief Project Details (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Tell us about your backyard, existing deck, or design goals..."
                          className="w-full text-xs font-sans px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B87333] bg-stone-50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-extrabold uppercase tracking-wider py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request In-Home Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 font-sans pt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Your information is strictly private. Zero spam guaranteed.</span>
                      </div>
                    </form>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars: "Why Homeowners Choose Conick Construction" (1:1 with Legacy Decks) */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            The Conick Difference
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3">
            Why Homeowners Choose Conick Construction.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base mt-2">
            Outdoor living spaces should enhance your life, not cause construction headaches. We built our entire reputation on three uncompromised pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1E2D35] text-[#B87333] flex items-center justify-center font-heading font-extrabold text-lg mb-6">
                01
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                A Clear, Proven Process
              </h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6">
                No guessing games, vague allowances, or missing timelines. From the initial yard walk to the final screw, you will always know what is happening, when it happens, and what it costs.
              </p>
            </div>
            <ul className="text-xs font-sans text-[#4A5860] space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Fixed-price transparent proposals</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Scheduled construction milestones</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> We manage all county permits & inspections</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#B87333]/30 shadow-md flex flex-col justify-between relative">
            <span className="absolute top-4 right-4 bg-[#B87333] text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold">
              Core Standard
            </span>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#B87333] text-white flex items-center justify-center font-heading font-extrabold text-lg mb-6">
                02
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                A Space That Exceeds Expectations
              </h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6">
                We don’t slap together standard builder-grade decks. We design architectural extensions of your home: picture-frame borders, furniture-grade stair runs, and clean concealed fastener lines.
              </p>
            </div>
            <ul className="text-xs font-sans text-[#4A5860] space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Trex & TimberTech premium composite</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Custom mitered perimeter borders</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Integrated low-voltage LED ambiance</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1E2D35] text-[#B87333] flex items-center justify-center font-heading font-extrabold text-lg mb-6">
                03
              </div>
              <h3 className="font-heading font-bold text-xl text-[#11181C] mb-3">
                We Stand Behind Our Work
              </h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6">
                Founder Renato Batista is physically present on your jobsite. If something isn't right, it gets solved on the spot. We stand firmly behind every joint, post, and footer we pour.
              </p>
            </div>
            <ul className="text-xs font-sans text-[#4A5860] space-y-2 pt-4 border-t border-stone-100">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Founder-led jobsite oversight</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Heavy-gauge notched timber framing</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B87333]" /> Up to 50-year manufacturer warranties</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5-Step Interactive Process Roadmap (1:1 with Legacy Decks) */}
      <section className="bg-white py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Step-By-Step Journey
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3">
              The 5-Step Process to Your Dream Backyard.
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base mt-2">
              From your initial consultation to the final ribbon-cutting walk, here is exactly how we deliver a seamless experience.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 ${
                  activeTab === idx
                    ? 'bg-[#1E2D35] text-white shadow-md'
                    : 'bg-[#FAF9F6] text-stone-600 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-mono ${
                  activeTab === idx ? 'bg-[#B87333] text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {idx + 1}
                </span>
                <span>{step.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-stone-200 shadow-sm max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B87333] font-bold uppercase tracking-widest mb-2">
                    <span>Phase {processSteps[activeTab].step}</span>
                    <span>•</span>
                    <span>Step {activeTab + 1} of 5</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11181C] mb-4">
                    {processSteps[activeTab].title}
                  </h3>
                  <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {processSteps[activeTab].desc}
                  </p>
                  
                  <div className="space-y-2.5 mb-8">
                    {processSteps[activeTab].details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-[#11181C] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                  <a
                    href="#consultation-form"
                    className="inline-flex items-center gap-2 bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
                  >
                    <span>Start Step 01</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-xs text-stone-400 font-sans">
                    Inspected by Renato Batista
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[360px] bg-stone-900">
                <img
                  src={processSteps[activeTab].image}
                  alt={processSteps[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6 Core Specializations (1:1 with Legacy Decks) */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            Comprehensive Capabilities
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3">
            Our 6 Core Outdoor Living Specializations.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base mt-2">
            Every component of your outdoor retreat is built to the highest architectural standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1E2D35]/90 backdrop-blur-sm text-[#B87333] font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {spec.subtitle}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#11181C] mb-2 group-hover:text-[#B87333] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100">
                  <a
                    href="#consultation-form"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#B87333] hover:underline uppercase tracking-wider"
                  >
                    <span>Request Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Backyard Transformations (Before/After Slider with Authentic Client Jobs) */}
      <BeforeAfterSlider />

      {/* Service Areas Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Regional Coverage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3">
              Serving Upstate South Carolina.
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base mt-2">
              Based in Woodruff, SC (449 Haddon Trail), we proudly build custom outdoor living projects across all surrounding counties.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'Woodruff, SC', note: 'Headquarters' },
              { name: 'Greenville, SC', note: 'Countywide' },
              { name: 'Spartanburg, SC', note: 'Countywide' },
              { name: 'Simpsonville, SC', note: 'Full Coverage' },
              { name: 'Greer, SC', note: 'Full Coverage' },
              { name: 'Anderson, SC', note: 'Full Coverage' }
            ].map((loc, i) => (
              <div key={i} className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200">
                <MapPin className="w-5 h-5 text-[#B87333] mx-auto mb-2" />
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#11181C]">{loc.name}</h4>
                <span className="text-[10px] font-mono text-stone-500 uppercase">{loc.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Final CTA (LeadConnector Webhook Form) */}
      <section className="bg-[#1E2D35] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
            Ready to Build?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-4 mb-4">
            Turn Your Backyard Into an Everyday Retreat.
          </h2>
          <p className="font-sans text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a free, no-obligation on-site consultation with lead carpenter Renato Batista. We'll inspect your property, discuss design options, and provide a clear, transparent quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#consultation-form"
              className="w-full sm:w-auto bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-all"
            >
              Request Free Consultation
            </a>
            <a
              href="tel:+17813991906"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B87333]" />
              <span>Call (781) 399-1906</span>
            </a>
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-sans">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#B87333]" /> Licensed & Insured in South Carolina</span>
            <span>•</span>
            <span>Owner-Managed Construction</span>
            <span>•</span>
            <span>Zero Sales Pressure</span>
          </div>
        </div>
      </section>

      {/* Mandatory Athena Growth Marketing Footer */}
      <footer className="bg-[#131E24] text-white/60 text-xs py-6 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Conick Construction LLC. 449 Haddon Trail, Woodruff, SC 29388.
          </div>
          <div>
            Developed by: <a href="https://athenagrowthmarketing.com" target="_blank" rel="noopener" className="text-white/80 hover:text-[#B87333] font-medium transition-colors">Athena Growth Marketing</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
