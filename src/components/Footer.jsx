import {
  ArrowRight,
  Clock,
  Cross,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="mx-auto max-w-[1180px] space-y-8 px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-forest">
                <Cross className="h-5 w-5" />
              </span>
              <div>
                <div className="font-manrope text-lg font-semibold text-white">Health Cross</div>
                <div className="text-[10px] tracking-[0.14em] font-semibold text-mint">ORGANIZATION</div>
              </div>
            </div>
            <p className="mt-4 max-w-[340px] text-sm leading-6 text-white/60">
              Verified home healthcare across Kolkata — bringing doctors, nurses, diagnostics and compassionate support to your doorstep.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: MessageCircle, href: 'https://wa.me/919732443744' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
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
              {['Home', 'About Us', 'Subscription', 'Wellness', 'Contact', 'Blog'].map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase().replace(/\s+/g, '-')}`} className="transition hover:text-white">
                    {label}
                  </a>
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
                  <a href="#services-grid" className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-mint mt-0.5" />
                <span>Kolkata, West Bengal 700074</span>
              </li>
              <li className="flex flex-wrap items-center gap-3">
                <Phone className="h-4 w-4 text-mint" />
                <a href="tel:+917439036203" className="transition hover:text-mint">
                  74390 36203
                </a>
                <span className="text-white/30">/</span>
                <a href="tel:+919732443744" className="transition hover:text-mint">
                  97324 43744
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-mint" />
                <a href="mailto:care@healthcross.org" className="transition hover:text-white">
                  care@healthcross.org
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="h-4 w-4 text-mint" />
                <span>Open 24×7 • All 7 days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/40 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2024 Health Cross Organization. All rights reserved. • <a href="#" className="hover:text-white">Privacy</a> • <a href="#" className="hover:text-white">Terms</a>
          </span>
          <span className="flex items-center gap-1.5">
            Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> for Kolkata families
          </span>
        </div>
      </div>
    </footer>
  )
}
