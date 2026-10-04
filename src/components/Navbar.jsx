import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ArrowRight, ShieldCheck, Hammer } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#131E24] text-white/80 text-xs py-2 px-4 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 font-sans">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B87333] animate-pulse"></span>
            <span className="font-medium text-white/90">Upstate South Carolina's Outdoor Living Specialist</span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-white/60">Greenville, Spartanburg, Anderson & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+17813991906" 
              className="flex items-center gap-1.5 text-white/90 hover:text-[#B87333] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87333]" />
              <span className="font-semibold">(781) 399-1906</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/70 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" />
              Owner-Led Craft
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1E2D35]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
            : 'bg-[#1E2D35] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo Lockup (Horizontal, Bolivia Craft style) */}
            <Link to="/" className="flex items-center group py-0.5 shrink-0 mr-3 xl:mr-6">
              <img 
                src="/logo-conick-horizontal.png" 
                alt="Conick Construction LLC" 
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-7">
              <Link 
                to="/decks" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/decks' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                <span className="lg:hidden xl:inline">Custom </span>Decks
              </Link>
              <Link 
                to="/covered-porches" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/covered-porches' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                <span className="lg:hidden xl:inline">Covered </span>Porches
              </Link>
              <Link 
                to="/deck-replacement" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/deck-replacement' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                <span className="lg:hidden xl:inline">Deck </span>Replacement
              </Link>
              <Link 
                to="/projects" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/projects' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                <span className="lg:hidden xl:inline">Real </span>Projects
              </Link>
              <Link 
                to="/about" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/about' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                Our Story
              </Link>
              <Link 
                to="/reviews" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/reviews' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                Reviews
              </Link>
              <Link 
                to="/service-areas" 
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-[#B87333] whitespace-nowrap ${
                  location.pathname === '/service-areas' ? 'text-[#B87333] font-semibold' : 'text-white/90'
                }`}
              >
                <span className="lg:hidden xl:inline">Areas </span>Served
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a 
                href="#estimate" 
                className="bg-[#B87333] hover:bg-[#965B27] text-white text-xs font-heading font-bold uppercase tracking-wider px-4 xl:px-5 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a 
                href="#estimate" 
                className="bg-[#B87333] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider"
              >
                Estimate
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/90 hover:text-[#B87333] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-[#131E24] p-6 flex flex-col justify-between border-l border-white/10 shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/logo-conick-horizontal.png" alt="Conick Construction LLC" className="h-10 w-auto object-contain" />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6">
                <Link 
                  to="/decks" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Custom Decks</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/covered-porches" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Covered Porches</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/deck-replacement" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Deck Replacement</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/projects" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Real Projects</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/about" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Our Craft & Story</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/reviews" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Homeowner Reviews</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
                <Link 
                  to="/service-areas" 
                  className="text-base font-medium text-white/90 hover:text-[#B87333] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>Upstate SC Service Areas</span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a 
                href="#estimate" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#B87333] text-white py-3 rounded font-heading font-bold text-sm uppercase tracking-wider"
              >
                Request Free Estimate
              </a>
              <a 
                href="tel:+17813991906" 
                className="w-full text-center bg-white/10 hover:bg-white/15 text-white py-3 rounded font-sans font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#B87333]" />
                <span>Call (781) 399-1906</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
