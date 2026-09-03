import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'

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

const navItemClass = ({ isActive }) =>
  `px-3 py-2 rounded-full transition ${
    isActive ? 'bg-[#e5f3ef] text-[#0d7055] font-semibold' : 'hover:bg-[#e5f3ef]'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Health Cross Organization" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 text-[13.5px] font-medium text-[#1a1a1a]/80 lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navItemClass}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to={clinicalTeamLink.to}
            className="px-3 py-2 rounded-full hover:bg-[#e5f3ef] transition"
          >
            {clinicalTeamLink.label}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+917439036203"
            className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-[#0d7055]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055]">
              <Phone className="h-4 w-4" />
            </span>
            74390 36203
          </a>
          <a
            href="https://wa.me/919732443744"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0d7055] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0a5243]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7055] text-white lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`${mobileOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl`}>
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-[#e5f3ef] text-[#0d7055]' : 'text-[#1a1a1a] hover:bg-[#e5f3ef]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to={clinicalTeamLink.to}
            onClick={() => setMobileOpen(false)}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#e5f3ef]"
          >
            {clinicalTeamLink.label}
          </Link>
          <a
            href="https://wa.me/919732443744"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#0d7055] px-4 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href="tel:+917439036203"
            className="flex items-center justify-center gap-2 rounded-full border border-[#0d7055] px-4 py-3 text-sm font-semibold text-[#0d7055]"
          >
            <Phone className="h-4 w-4" /> Call 74390 36203
          </a>
        </div>
      </div>
    </header>
  )
}
