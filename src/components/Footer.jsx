import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#131E24] text-white/80 border-t border-white/10 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group mb-2">
              <img 
                src="/logo-conick-horizontal.png" 
                alt="Conick Construction LLC" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed pr-4">
              Premium custom decks, covered porches, and architectural outdoor living structures engineered for homes across Upstate South Carolina. Built with uncompromised structural integrity and owner-led craft.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1.5 font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>449 Haddon Trail, Woodruff, SC 29688</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B87333] shrink-0" />
                <a href="tel:+17813991906" className="hover:text-white transition-colors">
                  (781) 399-1906
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B87333] shrink-0" />
                <a href="mailto:rconickconstruction@gmail.com" className="hover:text-white transition-colors">
                  rconickconstruction@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link to="/decks" className="hover:text-[#B87333] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#B87333]" />
                  <span>Custom Deck Construction</span>
                </Link>
              </li>
              <li>
                <Link to="/covered-porches" className="hover:text-[#B87333] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#B87333]" />
                  <span>Covered Porches & Screen Rooms</span>
                </Link>
              </li>
              <li>
                <Link to="/deck-replacement" className="hover:text-[#B87333] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#B87333]" />
                  <span>Deck Replacement & Re-Decking</span>
                </Link>
              </li>
              <li>
                <Link to="/decks#composite" className="hover:text-[#B87333] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#B87333]" />
                  <span>Low-Maintenance Composite</span>
                </Link>
              </li>
              <li>
                <Link to="/decks#railings" className="hover:text-[#B87333] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#B87333]" />
                  <span>Architectural Railing Systems</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Upstate Service Areas
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/70">
              <li>• Woodruff, SC (Headquarters)</li>
              <li>• Greenville, SC & Simpsonville</li>
              <li>• Spartanburg, SC & Duncan</li>
              <li>• Anderson, SC & Surrounding</li>
              <li>• Greer, Mauldin & Travelers Rest</li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10">
              <Link 
                to="/service-areas" 
                className="text-xs font-heading font-bold text-[#B87333] hover:underline"
              >
                View Complete Regional Coverage &rarr;
              </Link>
            </div>
          </div>

          {/* Direct Consultation Box */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-2">
              Book Site Visit
            </h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Renato Batista meets homeowners on-site to inspect yard grades and discuss project scope.
            </p>
            <a
              href="#estimate"
              className="inline-block w-full text-center bg-[#B87333] hover:bg-[#965B27] text-white font-heading font-bold text-[11px] uppercase tracking-wider py-2.5 px-3 rounded transition-colors"
            >
              Get Free Estimate
            </a>
          </div>

        </div>

        {/* Legal & Athena Mandatory Credit Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <div>
            &copy; {currentYear} Conick Construction LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* MANDATORY ATHENA GROWTH MARKETING FOOTER CREDIT */}
          <div className="text-white/60">
            Developed by: <a href="https://athenagrowthmarketing.com" target="_blank" rel="noopener" className="text-white/80 hover:text-[#B87333] font-medium transition-colors">Athena Growth Marketing</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
