import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, Check, ShieldCheck, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityZip: '',
    serviceInterest: 'Custom Deck Construction',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact' })
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
      projectType: formData.serviceInterest,
      notes: formData.message,
      message: `[Conick Direct Contact]\n• Service: ${formData.serviceInterest}\n• Location: ${formData.cityZip}\n• Message: ${formData.message}`,
      source: 'Conick Construction Website - Contact Page',
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
    <div className="bg-[#FAF9F6]">
      {/* Page Hero Header */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex flex-col justify-center text-white overflow-hidden border-b border-white/10 text-center">
        {/* Full-Bleed Panoramic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{ 
            backgroundImage: "url('/images/projects/deck-perimeter-white-rail.jpg')",
            backgroundPosition: 'center 45%'
          }}
        />

        {/* Cinematic Dark Gradient Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 bg-[#B87333]/25 border border-[#B87333]/50 text-[#E0A96D] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md mb-4 font-semibold">
            Direct Contractor Access
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-md mt-2 mb-5">
            Connect With Conick Construction.
          </h1>
          <p className="font-sans text-white/95 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow font-normal">
            Speak directly with Renato Batista about your deck or covered porch project in Woodruff, Greenville, Spartanburg, or Anderson.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold">
                Direct Communication
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#11181C] tracking-tight mt-1 mb-4">
                We Answer Our Calls and Respect Your Time.
              </h2>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                Whether you have an immediate building plan or are exploring ideas for next season, we look forward to reviewing your property and providing straightforward advice.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="tel:+17813991906" 
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-[#B87333]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E2D35] text-[#B87333] flex items-center justify-center shrink-0 group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#73828C] block">Direct Phone</span>
                  <span className="font-heading font-bold text-base text-[#11181C] group-hover:text-[#B87333] transition-colors">
                    (781) 399-1906
                  </span>
                  <span className="text-xs text-stone-500 block mt-0.5">Direct line to Renato Batista</span>
                </div>
              </a>

              <a 
                href="mailto:rconickconstruction@gmail.com" 
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:border-[#B87333]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E2D35] text-[#B87333] flex items-center justify-center shrink-0 group-hover:bg-[#B87333] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#73828C] block">Email Inquiries</span>
                  <span className="font-heading font-bold text-base text-[#11181C] group-hover:text-[#B87333] transition-colors">
                    rconickconstruction@gmail.com
                  </span>
                  <span className="text-xs text-stone-500 block mt-0.5">Send plans or photos anytime</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#1E2D35] text-[#B87333] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#73828C] block">Physical Office Base</span>
                  <span className="font-heading font-bold text-base text-[#11181C]">
                    449 Haddon Trail, Woodruff, SC 29688
                  </span>
                  <span className="text-xs text-stone-500 block mt-0.5">Serving Spartanburg, Greenville & Anderson</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-stone-100 rounded-xl border border-stone-200 text-xs text-[#4A5860] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B87333] shrink-0" />
              <span>Site consultations scheduled Monday – Saturday across Upstate South Carolina.</span>
            </div>
          </div>

          {/* Right Column: Contact Form (Connected to GHL Webhook) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-lg">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold block mb-1">
                Consultation Request
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#11181C] mb-6">
                Send a Message or Project Request
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
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
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
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
                        className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                    >
                      <option value="Custom Deck Construction">Custom Deck Construction (New Build)</option>
                      <option value="Covered Porch Addition">Covered Porch Addition</option>
                      <option value="Screened-In Porch">Screened-In Porch</option>
                      <option value="Deck Replacement / Re-Deck">Deck Replacement & Redecking</option>
                      <option value="Two-Story Outdoor Living Structure">Two-Story Outdoor Living Structure</option>
                      <option value="General Outdoor Carpentry Inquiry">General Outdoor Carpentry Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#11181C] mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, approximate dimensions, or timing..."
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-stone-300 rounded text-sm text-[#11181C] focus:outline-none focus:border-[#B87333]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-xs uppercase tracking-wider py-4 rounded shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-stone-500 font-sans">
                      Protected by Google reCAPTCHA (v3) · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-700">Privacy</a> · <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-700">Terms</a>
                    </span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl text-[#11181C]">
                    Message Sent Successfully!
                  </h4>
                  <p className="font-sans text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your request has been transmitted directly to Renato Batista. We will be in touch shortly to discuss your project.
                  </p>
                  <div className="pt-4">
                    <a
                      href="tel:+17813991906"
                      className="inline-flex items-center gap-2 bg-[#1E2D35] text-white text-xs font-heading font-bold uppercase tracking-wider px-6 py-3 rounded"
                    >
                      <Phone className="w-4 h-4 text-[#B87333]" />
                      <span>Call (781) 399-1906</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
