import { useState } from 'react'
import logo from '../assets/logo.webp'
import {
  ChevronDown,
  HeartHandshake,
  Menu,
  MessageCircle,
  Phone,
  ShieldPlus,
  Stethoscope,
  X,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Subscription', href: '#subscription' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },
]

const serviceItems = [
  { label: 'Elder & Critical Care', href: '#care-services', icon: HeartHandshake },
  { label: 'All 16 Services', href: '#services-grid', icon: Stethoscope },
  { label: 'Subscription Plans', href: '#subscription', icon: ShieldPlus },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 lg:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Health Cross Organization" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-1 text-[13.5px] font-medium text-[#1a1a1a]/80 lg:flex">
          {navLinks.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full hover:bg-[#e5f3ef] transition relative group"
            >
              {item.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#0d7055] scale-x-0 group-hover:scale-x-100 transition origin-left" />
            </a>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-[#e5f3ef] transition">
              Services <ChevronDown className="h-4 w-4 transition group-hover:-rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl bg-white/95 border border-gray-200 p-2 shadow-xl opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-2">
              {serviceItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#1a1a1a] transition hover:bg-[#e5f3ef]"
                  >
                    <Icon className="h-4 w-4 text-[#0d7055]" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
          {navLinks.slice(4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-full hover:bg-[#e5f3ef] transition"
            >
              {item.label}
            </a>
          ))}
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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#e5f3ef]"
            >
              {item.label}
            </a>
          ))}
          <details className="group rounded-xl">
            <summary className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium hover:bg-[#e5f3ef] cursor-pointer">
              Services <ChevronDown className="h-4 w-4 transition group-open:-rotate-180" />
            </summary>
            <div className="space-y-1 px-4 py-2 text-sm text-[#1a1a1a]/80">
              {serviceItems.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-xl px-2 py-2 hover:bg-[#e5f3ef] transition">
                    <Icon className="h-4 w-4 text-[#0d7055]" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </details>
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