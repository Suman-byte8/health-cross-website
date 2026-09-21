import { Link } from 'react-router-dom'
import { Clock, Facebook, Heart, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import logo from '../assets/logo.webp'

const columns = [
  {
    title: 'About',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Clinical Team', to: '/#wellness' },
      { label: 'Subscription', to: '/subscription' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      'Doctor at Home',
      '24×7 Nursing',
      'Oxygen & CPAP',
      'Critical Care at Home',
      'Physiotherapy',
      'Diagnostics — ECG, X-Ray',
    ].map((label) => ({ label, to: '/services#services-grid' })),
  },
  {
    title: 'News & Media',
    links: [
      { label: 'Media Coverage', to: '/#media-coverage' },
      { label: 'Video Testimonials', to: '/#testimonials' },
      { label: 'Google Reviews', to: '/#google-reviews' },
      { label: 'Medical Equipment', to: '/#medical-equipment' },
      { label: 'Blog', to: '/blogs' },
    ],
  },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/HealthCrossOrganization' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/heal_thcross?igsh=MThobWJieTh3ZHcyZw==' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919732443744' },
]

const columnClass = 'lg:border-l lg:border-white/15 lg:pl-8'

export default function Footer() {
  return (
    <footer className="bg-[#052e26] text-white">
      <div className="mx-auto max-w-[1180px] px-4 pt-12 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1fr_1.1fr_1fr_1.3fr] lg:gap-x-8">
          {columns.map((column, index) => (
            <div key={column.title} className={index === 0 ? '' : columnClass}>
              <div className="text-base font-bold">{column.title}</div>
              <ul className="mt-4 space-y-3 text-[15px] font-light text-white/70">
                {column.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={`col-span-2 lg:col-span-1 ${columnClass}`}>
            <div className="text-base font-bold">Contact</div>
            <ul className="mt-4 space-y-3 text-[15px] font-light text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd699]" />
                <span>68/44 Jessore Road, Kolkata, West Bengal 700074</span>
              </li>
              <li className="flex flex-wrap items-center gap-x-3">
                <Phone className="h-4 w-4 text-[#ffd699]" />
                <a href="tel:+917439036203" className="transition hover:text-white">74390 36203</a>
                <span className="text-white/30">/</span>
                <a href="tel:+919732443744" className="transition hover:text-white">97324 43744</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#ffd699]" />
                <a href="mailto:care@healthcross.org" className="transition hover:text-white">care@healthcross.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#ffd699]" />
                <span>Open 24×7 • All 7 days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[760px]">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="Health Cross Organization"
                  className="h-14 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>
              <p className="mt-4 text-[13px] leading-6 text-white/55">
                Health Cross Organization provides expert home healthcare services in Kolkata, delivering compassionate and professional medical care right at your doorstep. Our services include elderly care at home, home nursing care, critical care support, palliative care, dementia care, and more — all tailored to individual patient needs.We focus on improving quality of life through personalized treatment plans, regular monitoring, and dedicated support. With our trusted home healthcare solutions in North Kolkata, patients receive comfort, independence, and peace of mind while recovering safely at home.
              </p>
            </div>

            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0d7055]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 Health Cross Organization. All rights reserved. •{' '}
            <a href="#" className="hover:text-white">Privacy</a> •{' '}
            <a href="#" className="hover:text-white">Terms</a>
          </span>
          <span className="flex items-center gap-1.5">
            Made By <Heart className="h-3 w-3 fill-red-400 text-red-400" />{' '}
            <a href="https://socialbuzzmedia.in" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Social Buzz Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
