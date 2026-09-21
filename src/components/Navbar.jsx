import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { Clock, Facebook, Instagram, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Subscription', to: '/subscription' },
  { label: 'Blog', to: '/vlogs' },
  { label: 'Contact', to: '/contact' },
]

// Points at the Clinical Team section on the Home page from anywhere in the
// site. It isn't a standalone route, so it can't share the active-state
// highlighting the other (page-based) nav links get via NavLink.
const clinicalTeamLink = { label: 'Clinical Team', to: '/#wellness' }

const navItemBase =
  'relative px-3 py-6 text-[13.5px] font-semibold transition after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-t-full after:transition'

const navItemClass = ({ isActive }) =>
  `${navItemBase} ${
    isActive
      ? 'text-[#0d7055] after:bg-[#0d7055]'
      : 'text-[#1a1a1a]/80 hover:text-[#0d7055] after:bg-transparent hover:after:bg-[#0d7055]/40'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Utility bar */}
      <div className="hidden bg-[#0d7055] text-xs text-white/90 lg:block">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#ffd699]" /> 68/44 Jessore Road, Kolkata 700074
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ffd699]" /> Open 24×7 • All 7 days
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+917439036203" className="flex items-center gap-1.5 font-semibold hover:text-white">
              <Phone className="h-3.5 w-3.5 text-[#ffd699]" /> 74390 36203
            </a>
            <span className="h-3 w-px bg-white/25" />
            <a href="https://www.facebook.com/HealthCrossOrganization" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/heal_thcross?igsh=MThobWJieTh3ZHcyZw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 lg:px-6">
          <Link to="/" className="flex items-center gap-3 py-2.5">
            <img src={logo} alt="Health Cross Organization" className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center lg:flex">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navItemClass}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to={clinicalTeamLink.to}
              className={`${navItemBase} text-[#1a1a1a]/80 after:bg-transparent hover:text-[#0d7055] hover:after:bg-[#0d7055]/40`}
            >
              {clinicalTeamLink.label}
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/919732443744"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0d7055] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a5243]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#0d7055] lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={`${mobileOpen ? 'block' : 'hidden'} border-b border-gray-200 bg-white lg:hidden`}>
        <div className="px-4 py-3">
          {[...navLinks, clinicalTeamLink].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block border-b border-gray-100 py-3 text-sm font-semibold transition ${
                  isActive && !item.to.includes('#') ? 'text-[#0d7055]' : 'text-[#1a1a1a]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/919732443744"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0d7055] px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href="tel:+917439036203"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#0d7055] px-4 py-3 text-sm font-semibold text-[#0d7055]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
