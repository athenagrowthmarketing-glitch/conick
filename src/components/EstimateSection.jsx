import React, { useState } from 'react'
import { Check, ArrowRight, ArrowLeft, Phone, Calendar, ShieldCheck, Sparkles, Building, Layers, Send } from 'lucide-react'

export default function EstimateSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: 'deck-new',
    sizeRange: '200-400',
    material: 'composite',
    addons: ['railings-black', 'lighting'],
    fullName: '',
    phone: '',
    email: '',
    cityZip: '',
    timeline: '1-2-months',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Options definitions
  const projectTypes = [
    { id: 'deck-new', title: 'New Custom Deck', desc: 'Brand new ground-up deck design and construction' },
    { id: 'deck-replace', title: 'Deck Replacement / Re-Deck', desc: 'Demolition of aged deck or resurfacing structurally sound framing' },
    { id: 'covered-porch', title: 'Covered Porch Addition', desc: 'Roofline extension, tongue-and-groove ceiling & weather shelter' },
    { id: 'screened-porch', title: 'Screened-In Porch', desc: 'Mosquito-free outdoor living room with durable screen walls' },
    { id: 'deck-porch-combo', title: 'Deck & Porch Combination', desc: 'Multi-level open-air sun deck combined with sheltered porch' }
  ]

  const sizeRanges = [
    { id: 'under-200', label: 'Compact / Bistro', sqft: 'Under 200 sq ft', range: '$12,000 – $18,000' },
    { id: '200-400', label: 'Standard Family', sqft: '200 – 400 sq ft', range: '$18,000 – $28,000' },
    { id: '400-800', label: 'Large Multi-Zone', sqft: '400 – 800 sq ft', range: '$28,000 – $48,000' },
    { id: 'over-800', label: 'Grand Estate Build', sqft: '800+ sq ft', range: '$48,000+' }
  ]

  const materials = [
    { id: 'composite', label: 'Premium Low-Maintenance Composite', desc: 'Trex / TimberTech. 25-50 yr warranty, no splintering, no staining' },
    { id: 'treated-wood', label: 'Pressure-Treated Southern Pine', desc: 'Classic natural timber, budget-conscious, requires annual sealant' },
    { id: 'undecided', label: 'Need Advice / Undecided', desc: 'Renato will bring physical material samples to your consultation' }
  ]

  const availableAddons = [
    { id: 'railings-black', label: 'Black Aluminum Architectural Railings' },
    { id: 'lighting', label: 'Integrated Post Cap & Riser LED Lighting' },
    { id: 'benches', label: 'Custom Built-In Perimeter Composite Benches' },
    { id: 'storage', label: 'Enclosed Under-Deck Skirting & Storage Access' },
    { id: 'fan-electrical', label: 'Ceiling Fan Junctions & Outdoor Outlets' },
    { id: 'grand-stairs', label: 'Double Symmetrical Grand Staircases' }
  ]

  const toggleAddon = (id) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(id) 
        ? prev.addons.filter(a => a !== id)
        : [...prev.addons, id]
    }))
  }

  // Calculate dynamic range based on choices
  const getEstimatedRange = () => {
    let baseMin = 14000
    let baseMax = 22000

    if (formData.sizeRange === 'under-200') {
      baseMin = 12000
      baseMax = 18000
    } else if (formData.sizeRange === '200-400') {
      baseMin = 18000
      baseMax = 28000
    } else if (formData.sizeRange === '400-800') {
      baseMin = 28000
      baseMax = 46000
    } else if (formData.sizeRange === 'over-800') {
      baseMin = 48000
      baseMax = 75000
    }

    if (formData.projectType.includes('porch')) {
      baseMin += 6000
      baseMax += 12000
    }

    if (formData.material === 'treated-wood') {
      baseMin = Math.round(baseMin * 0.8)
      baseMax = Math.round(baseMax * 0.85)
    }

    const addonBonus = formData.addons.length * 1200
    baseMin += addonBonus
    baseMax += addonBonus * 1.5

    return `$${(baseMin).toLocaleString()} – $${(baseMax).toLocaleString()}`
  }

  const [verificationToken, setVerificationToken] = useState(null)
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
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_estimate' })
              .then(tokenRes => resolve(tokenRes))
              .catch(() => resolve(null))
          })
        })
      }
    } catch (err) {
      console.warn('reCAPTCHA execution note:', err)
    }

    if (token) {
      setVerificationToken(token)
    }

    // Prepare LeadConnector / GoHighLevel webhook payload
    const nameParts = (formData.fullName || '').trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    const selectedProjectTitle = projectTypes.find(p => p.id === formData.projectType)?.title || formData.projectType
    const selectedSizeLabel = sizeRanges.find(s => s.id === formData.sizeRange)?.label || formData.sizeRange
    const selectedMaterialLabel = materials.find(m => m.id === formData.material)?.label || formData.material
    const selectedAddonLabels = formData.addons.map(id => availableAddons.find(a => a.id === id)?.label || id).join(', ')
    const calculatedRange = getEstimatedRange()

    const leadPayload = {
      name: formData.fullName,
      fullName: formData.fullName,
      firstName,
      lastName,
      phone: formData.phone,
      email: formData.email,
      city: formData.cityZip,
      cityZip: formData.cityZip,
      projectType: selectedProjectTitle,
      sizeRange: selectedSizeLabel,
      material: selectedMaterialLabel,
      addons: selectedAddonLabels,
      estimatedInvestment: calculatedRange,
      notes: formData.notes || '',
      message: `[Conick Estimate Request]\n• Project: ${selectedProjectTitle}\n• Size: ${selectedSizeLabel}\n• Material: ${selectedMaterialLabel}\n• Add-ons: ${selectedAddonLabels || 'None'}\n• Est. Investment: ${calculatedRange}\n• Location: ${formData.cityZip}\n• Notes: ${formData.notes || 'None'}`,
      source: 'Conick Construction Website - Estimate Funnel',
      submittedAt: new Date().toISOString(),
      recaptchaToken: token
    }

    // Transmit to LeadConnector Webhook
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
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify(leadPayload)
        })
      } catch (fallbackErr) {
        console.warn('Webhook transmission note:', fallbackErr)
      }
    }

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="estimate" className="bg-white py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
            Interactive Project Calculator
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3 mb-4">
            Plan Your Outdoor Living Investment.
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Select your preferences below for an instant preliminary cost estimate and priority scheduling with builder Renato Batista.
          </p>
        </div>

        {/* Funnel Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF9F6] border border-stone-300 rounded-2xl shadow-xl overflow-hidden">
          
          {/* Progress Header */}
          <div className="bg-[#1E2D35] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#B87333] flex items-center justify-center font-bold text-xs">
                {currentStep}
              </span>
              <div>
                <h3 className="font-heading font-bold text-base text-white">
                  {currentStep === 1 && "Step 1: Project Type & Structure"}
                  {currentStep === 2 && "Step 2: Dimensions, Materials & Features"}
                  {currentStep === 3 && "Step 3: Site Location & Contact Details"}
                </h3>
                <span className="text-xs text-white/60 font-sans">
                  {currentStep === 1 && "Select the primary scope of your outdoor build"}
                  {currentStep === 2 && "Configure square footage, decking materials and custom details"}
                  {currentStep === 3 && "Get your preliminary estimate & request your on-site consultation"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`w-6 h-1.5 rounded-full transition-colors ${currentStep >= 1 ? 'bg-[#B87333]' : 'bg-white/20'}`} />
              <span className={`w-6 h-1.5 rounded-full transition-colors ${currentStep >= 2 ? 'bg-[#B87333]' : 'bg-white/20'}`} />
              <span className={`w-6 h-1.5 rounded-full transition-colors ${currentStep >= 3 ? 'bg-[#B87333]' : 'bg-white/20'}`} />
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              
              {/* STEP 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] block mb-2">
                    What type of structure are you planning?
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectTypes.map(type => (
                      <div
                        key={type.id}
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                        className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          formData.projectType === type.id
                            ? 'bg-white border-[#B87333] shadow-md ring-2 ring-[#B87333]/20'
                            : 'bg-white/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-heading font-bold text-base text-[#11181C]">
                            {type.title}
                          </h4>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            formData.projectType === type.id
                              ? 'bg-[#B87333] border-[#B87333] text-white'
                              : 'border-stone-300 bg-white'
                          }`}>
                            {formData.projectType === type.id && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="font-sans text-xs text-[#4A5860] leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow flex items-center gap-2 transition-all"
                    >
                      <span>Continue to Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Dimensions & Materials */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  
                  {/* Size Selection */}
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] block mb-3">
                      1. Estimated Size / Square Footage
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {sizeRanges.map(size => (
                        <div
                          key={size.id}
                          onClick={() => setFormData(prev => ({ ...prev, sizeRange: size.id }))}
                          className={`p-4 rounded-lg border cursor-pointer text-center transition-all ${
                            formData.sizeRange === size.id
                              ? 'bg-white border-[#B87333] shadow-md ring-2 ring-[#B87333]/20'
                              : 'bg-white/60 border-stone-200 hover:bg-white'
                          }`}
                        >
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#11181C] block">
                            {size.label}
                          </span>
                          <span className="text-[11px] font-mono text-[#B87333] block mt-1">
                            {size.sqft}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Material Selection */}
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] block mb-3">
                      2. Decking Surface Material
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {materials.map(mat => (
                        <div
                          key={mat.id}
                          onClick={() => setFormData(prev => ({ ...prev, material: mat.id }))}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            formData.material === mat.id
                              ? 'bg-white border-[#B87333] shadow-md ring-2 ring-[#B87333]/20'
                              : 'bg-white/60 border-stone-200 hover:bg-white'
                          }`}
                        >
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#11181C] block mb-1">
                            {mat.label}
                          </span>
                          <span className="font-sans text-[11px] text-[#4A5860] leading-snug block">
                            {mat.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons Multi Select */}
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] block mb-3">
                      3. Custom Features & Enhancements (Select all that apply)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {availableAddons.map(addon => {
                        const isSelected = formData.addons.includes(addon.id)
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            className={`p-3.5 rounded-lg border cursor-pointer flex items-center justify-between gap-3 transition-all ${
                              isSelected
                                ? 'bg-white border-[#B87333] shadow-sm'
                                : 'bg-white/50 border-stone-200 hover:bg-white'
                            }`}
                          >
                            <span className="text-xs font-sans text-[#11181C] font-medium">
                              {addon.label}
                            </span>
                            <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#B87333] border-[#B87333] text-white' : 'border-stone-300'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow flex items-center gap-2 transition-all"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Info & Estimated Range */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Estimated Cost Callout */}
                  <div className="bg-[#1E2D35] text-white p-5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87333] font-semibold block">
                        Preliminary Investment Range
                      </span>
                      <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
                        {getEstimatedRange()}
                      </div>
                      <span className="text-[11px] text-white/60 font-sans block mt-1">
                        *Estimates include heavy-gauge framing, hardware, materials, and professional installation.
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="bg-[#B87333] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded font-bold">
                        Upstate SC Pricing
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Michael Smith"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(864) 000-0000"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                        Property City / Zip Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityZip}
                        onChange={e => setFormData({ ...formData, cityZip: e.target.value })}
                        placeholder="e.g. Woodruff, SC 29688"
                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                      Project Notes / Specific Ideas (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your yard slope, existing deck, or questions for Renato..."
                      className="w-full px-4 py-3 bg-white border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider px-9 py-4 rounded shadow-lg flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Estimate...</span>
                      ) : (
                        <>
                          <span>Submit & Request Site Visit</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Google reCAPTCHA v3 Compliance Notice */}
                  <div className="text-center sm:text-right pt-2">
                    <span className="text-[11px] text-stone-500 font-sans">
                      Protected by Google reCAPTCHA (v3) · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-700">Privacy</a> · <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-700">Terms</a>
                    </span>
                  </div>

                </div>
              )}

            </form>
          ) : (
            /* SUBMISSION CONFIRMATION STATE */
            <div className="p-8 sm:p-12 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B87333] font-bold block mb-1">
                  Estimate Request Received
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11181C]">
                  Thank You, {formData.fullName || 'Neighbor'}!
                </h3>
                <p className="font-sans text-stone-600 text-sm sm:text-base max-w-lg mx-auto mt-2 leading-relaxed">
                  Your project specs have been sent directly to Renato Batista. We will review your property location in <strong>{formData.cityZip || 'Upstate SC'}</strong> and reach out shortly to schedule your on-site consultation.
                </p>
              </div>

              <div className="max-w-md mx-auto bg-white p-5 rounded-xl border border-stone-200 text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Selected Scope:</span>
                  <span className="font-semibold text-stone-800">{projectTypes.find(p => p.id === formData.projectType)?.title}</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500">Size Category:</span>
                  <span className="font-semibold text-stone-800">{sizeRanges.find(s => s.id === formData.sizeRange)?.label}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-500">Preliminary Target:</span>
                  <span className="font-bold text-[#B87333]">{getEstimatedRange()}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+17813991906"
                  className="bg-[#1E2D35] hover:bg-[#131E24] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3.5 rounded flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B87333]" />
                  <span>Call Renato Directly: (781) 399-1906</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setCurrentStep(1)
                  }}
                  className="text-xs text-stone-500 hover:text-stone-800 underline font-sans"
                >
                  Configure another project
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
