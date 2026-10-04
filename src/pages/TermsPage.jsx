import React from 'react'

export default function TermsPage() {
  return (
    <div className="bg-[#FAF9F6] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-sm font-sans text-stone-700 space-y-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] mb-6">
          Terms of Service
        </h1>
        <p className="text-xs text-stone-500 font-mono">Last Updated: October 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">1. Website Content & Estimates</h2>
          <p className="text-sm leading-relaxed">
            All content, images, and online cost calculators provided on this website are for informational and preliminary planning purposes. Online estimates do not constitute a binding legal contract or formal guarantee of final pricing. Final pricing is established solely via an executed written contract following an on-site structural evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">2. Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            All real project photography, logos, branding, and written copy displayed on this website are the property of Conick Construction LLC and may not be reproduced or distributed without explicit written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">3. Governing Law</h2>
          <p className="text-sm leading-relaxed">
            These terms are governed by the laws of the State of South Carolina. Any disputes arising from the use of this website shall be handled under the jurisdiction of courts in Spartanburg County, South Carolina.
          </p>
        </section>
      </div>
    </div>
  )
}
