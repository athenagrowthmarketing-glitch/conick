import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF9F6] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-sm font-sans text-stone-700 space-y-6">
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-stone-500 font-mono">Last Updated: October 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">1. Introduction</h2>
          <p className="text-sm leading-relaxed">
            Conick Construction LLC ("we," "our," or "us"), located at 449 Haddon Trail, Woodruff, South Carolina 29688, respects your privacy and is committed to protecting the personal information you share with us through our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">2. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            When you request an estimate or contact us, we collect information you provide voluntarily, including your name, phone number, email address, property address or zip code, and project details. We use this information solely to evaluate your project scope and schedule an on-site consultation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">3. How We Use Your Information</h2>
          <ul className="text-sm list-disc pl-5 space-y-1.5 leading-relaxed">
            <li>To respond to your inquiries and schedule appointments.</li>
            <li>To provide preliminary cost estimates and formal project proposals.</li>
            <li>To communicate regarding on-site visits and ongoing construction projects.</li>
            <li>We do not sell, rent, or trade your personal information to third-party marketers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-[#11181C]">4. Contact Us</h2>
          <p className="text-sm leading-relaxed">
            If you have questions regarding this Privacy Policy, please contact us at: <br />
            <strong>Conick Construction LLC</strong><br />
            449 Haddon Trail, Woodruff, SC 29688<br />
            Phone: (781) 399-1906<br />
            Email: rconickconstruction@gmail.com
          </p>
        </section>
      </div>
    </div>
  )
}
