import { Link } from 'react-router-dom'
import {
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

import logo from '../assets/logo.webp'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Subscription', to: '/subscription' },
  { label: 'Clinical Team', to: '/#wellness' },
  { label: 'Blog', to: '/vlogs' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d7055] text-white/80">
      <div className="mx-auto max-w-[1180px] space-y-8 px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Health Cross Organization" className="h-16 w-auto"  style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p className="mt-4 max-w-[340px] text-sm leading-6 text-white/60">
              Health Cross Organization provides expert home healthcare services in Kolkata, delivering compassionate and professional medical care right at your doorstep. Our services include elderly care at home, home nursing care, critical care support, palliative care, dementia care, and more — all tailored to individual patient needs.We focus on improving quality of life through personalized treatment plans, regular monitoring, and dedicated support. With our trusted home healthcare solutions in North Kolkata, patients receive comfort, independence, and peace of mind while recovering safely at home.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/HealthCrossOrganization' },
                { icon: Instagram, href: 'https://www.instagram.com/heal_thcross?igsh=MThobWJieTh3ZHcyZw==' },
                { icon: MessageCircle, href: 'https://wa.me/919732443744' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {[
                'Doctor at Home',
                '24×7 Nursing',
                'Oxygen & CPAP',
                'Critical Care at Home',
                'Physiotherapy',
                'Diagnostics — ECG, X-Ray',
              ].map((label) => (
                <li key={label}>
                  <Link to="/services#services-grid" className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-emerald-300 mt-0.5 shrink-0" />
                <span>68/44 Jessore Road, Kolkata, West Bengal 700074</span>
              </li>
              <li className="flex flex-wrap items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-300" />
                <a href="tel:+917439036203" className="transition hover:text-emerald-300">
                  74390 36203
                </a>
                <span className="text-white/30">/</span>
                <a href="tel:+919732443744" className="transition hover:text-emerald-300">
                  97324 43744
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-emerald-300" />
                <a href="mailto:care@healthcross.org" className="transition hover:text-white">
                  care@healthcross.org
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="h-4 w-4 text-emerald-300" />
                <span>Open 24×7 • All 7 days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/40 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Health Cross Organization. All rights reserved. • <a href="#" className="hover:text-white">Privacy</a> • <a href="#" className="hover:text-white">Terms</a>
          </span>
          <span className="flex items-center gap-1.5">
            Made By <Heart className="h-3 w-3 text-red-400 fill-red-400" /> <a href="https://socialbuzzmedia.in" target="_blank" rel="noreferrer" className="transition hover:text-white">
  Social Buzz Media
</a>
          </span>
        </div>
      </div>
    </footer>
  )
}