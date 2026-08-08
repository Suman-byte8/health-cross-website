import { useEffect, useState } from 'react'
import {
    Activity,
    Airplay,
    Ambulance,
    ArrowRight,
    Award,
    BadgePercent,
    Bed,
    Brain,
    Check,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Droplets,
    ExternalLink,
    GraduationCap,
    Heart,
    HeartHandshake,
    HeartPulse,
    Headset,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    PersonStanding,
    Phone,
    Play,
    Scan,
    ShieldPlus,
    Star,
    Stethoscope,
    Syringe,
    TestTube,
    Wallet,
    Wind,
    Users,
} from 'lucide-react'

const heroWords = ['Care', 'Should', 'Feel', 'Close', 'to', 'Home.']

const benefits = [
    { icon: Phone, label: '24/7 Helpline', text: 'Urgent care coordination and emergency response.' },
    { icon: GraduationCap, label: 'Clinical Experts', text: 'MD, BAMS and licensed therapists with verified credentials.' },
    { icon: HeartPulse, label: 'Comprehensive Care', text: 'Doctor visits, diagnostics and rehab delivered at home.' },
]

const serviceCards = [
    {
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop',
        badge: 'Elder Care',
        title: 'Elder Care at Home',
        description: 'Daily assistance, medication support and companionship for seniors.',
        icon: Users,
    },
    {
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
        badge: 'Critical Care',
        title: 'Critical Care Setup',
        description: 'ICU-at-home with monitoring, ventilator support and specialist nurses.',
        icon: Activity,
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
        badge: 'Physiotherapy',
        title: 'Physiotherapy at Home',
        description: 'Rehab and mobility support tailored to recovery goals.',
        icon: PersonStanding,
    },
]

const aboutItems = [
    { label: 'Personalized Care Plans', description: 'Tailored to medical history, lifestyle and family preferences.' },
    { label: 'Experienced Professionals', description: 'Doctors, nurses and therapists with verified qualifications.' },
    { label: 'Reliable Support, Anytime', description: '24/7 helpline, WhatsApp coordination and rapid response.' },
    { label: 'Flexible Options', description: 'Hourly, daily, monthly and subscription plans.' },
    { label: 'Quality Coordination', description: 'One coordinator, regular updates and family counselling.' },
]

const plans = [
    {
        name: 'STANDARD',
        tag: 'Essential Care',
        price: '₹2,099',
        description: 'Billed monthly • Cancel anytime',
        features: ['2 doctor consultations / month', 'Basic nursing assistance', 'Physiotherapy assessment', 'Medicine reminders', 'WhatsApp support 9am–7pm'],
        action: 'Choose Standard',
        style: 'bg-white border border-sage',
        button: 'bg-white border border-forest text-forest',
    },
    {
        name: 'PREMIUM',
        tag: 'Comprehensive',
        price: '₹3,499',
        description: 'Best value • Dedicated coordinator',
        features: ['Unlimited GP consultations', '24×7 nursing coordination', '4 physiotherapy sessions / month', 'Priority diagnostics', 'Dedicated care coordinator'],
        action: 'Choose Premium',
        style: 'border-glow rounded-[24px] p-[1.5px]',
        button: 'bg-forest text-white',
    },
]

const stats = [
    { value: '8,000+', label: 'Patients served' },
    { value: '120+', label: 'Professionals' },
    { value: '15,000+', label: 'Home visits' },
    { value: '6+', label: 'Years excellence' },
]

const serviceGrid = [
    { icon: Stethoscope, title: 'Doctor Visits at Home', desc: 'GP & specialist consultations' },
    { icon: HeartPulse, title: '24×7 Nursing Care', desc: 'Trained nurses, day & night' },
    { icon: Wind, title: 'Oxygen Support', desc: 'Concentrator & cylinder' },
    { icon: Airplay, title: 'CPAP / BiPAP', desc: 'Sleep and respiratory care' },
    { icon: Activity, title: 'Critical Care at Home', desc: 'ICU setup and monitoring' },
    { icon: Heart, title: 'ECG at Home', desc: '12-lead ECG in 30 minutes' },
    { icon: Scan, title: 'NCV / EMG', desc: 'Nerve conduction studies' },
    { icon: Brain, title: 'EEG at Home', desc: 'Portable EEG testing' },
    { icon: Droplets, title: 'Uro Care', desc: 'Catheter and urology support' },
    { icon: TestTube, title: 'Blood Collection', desc: 'Sample pickup and lab reports' },
    { icon: Bed, title: 'Hospital Bed Support', desc: 'Motorized beds on rent' },
    { icon: PersonStanding, title: 'Physiotherapy', desc: 'Rehab and mobility support' },
    { icon: Ambulance, title: 'Ambulance Service', desc: '24×7 emergency transport' },
    { icon: Scan, title: 'X-Ray at Home', desc: 'Digital X-Ray at doorstep' },
    { icon: Syringe, title: 'Injections & IV', desc: 'IM / IV at home from ₹199' },
    { icon: ShieldPlus, title: 'Vaccination at Home', desc: 'Verified vaccines' },
]

const team = [
    { name: 'Dr. Ashik Ikbal', role: 'MD', label: 'General Physician • Home Visits', image: 'https://i.pravatar.cc/200?img=12' },
    { name: 'Dr. Inayet Kabir', role: 'BAMS', label: 'Ayurvedic & Wellness Care', image: 'https://i.pravatar.cc/200?img=14' },
    { name: 'Dr. Selim Aktar', role: 'BAMS', label: 'Chronic Care & Lifestyle', image: 'https://i.pravatar.cc/200?img=68' },
    { name: 'Dr. Neha Sultana', role: 'MBBS', label: 'Women & Family Health', image: 'https://i.pravatar.cc/200?img=26' },
    { name: 'Dr. Neha Shabnam', role: 'BDS', label: 'Oral & General Wellness', image: 'https://i.pravatar.cc/200?img=29' },
]

const galleryItems = [
    'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586776802477-3680284edb4e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
]

export default function Home() {
    const [heroReady, setHeroReady] = useState(false)

    useEffect(() => {
        const timer = window.setTimeout(() => setHeroReady(true), 120)
        return () => window.clearTimeout(timer)
    }, [])

    return (
        <div className="bg-offwhite text-charcoal">
            <section id="home" className="pt-[88px] lg:pt-[94px] pb-10 lg:pb-6 overflow-hidden">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 rounded-full border border-sage bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-healthcare shadow-sm">
                                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                Home Healthcare • Kolkata • Since 2018
                            </div>
                            <h1 className="font-manrope font-bold text-[34px] sm:text-[44px] lg:text-[52px] leading-[0.95] tracking-[-0.03em] mt-5 text-charcoal">
                                {heroWords.map((word, index) => (
                                    <span
                                        key={word}
                                        className={`inline-block transition-all duration-500 ${heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                                            } ${word === 'Close' ? 'text-healthcare' : ''} ${word === 'Home.' ? 'font-serif italic font-normal text-healthcare' : ''}`}
                                        style={{ transitionDelay: `${index * 80}ms` }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                            </h1>
                            <p className="mt-4 max-w-[560px] text-[15.5px] leading-6 text-charcoal/70">
                                Compassionate clinical care delivered at your doorstep — from elder care and critical support to physiotherapy, diagnostics and doctor visits across Kolkata.
                            </p>
                            <p className="mt-2 text-[15px] italic text-healthcare">“Where healing meets home.”</p>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href="#services-grid" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,59,46,0.18)] transition hover:bg-[#123d30]">
                                    Explore More <ArrowRight className="h-4 w-4" />
                                </a>
                                <a href="https://wa.me/919732443744" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-7 py-3.5 text-sm font-semibold transition hover:bg-sage/40">
                                    <HeartHandshake className="h-4 w-4 text-healthcare" /> Talk to Care Team
                                </a>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-6 text-xs text-charcoal/60">
                                <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> Response in ~30 mins</span>
                                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Jessore Road, Kolkata</span>
                                <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-gold fill-gold" /> 4.8 Google Rating</span>
                            </div>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[33, 32, 31].map((id) => (
                                        <img key={id} src={`https://i.pravatar.cc/100?img=${id}`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                                    ))}
                                </div>
                                <p className="text-xs leading-tight text-charcoal/60">
                                    <span className="font-semibold text-charcoal">Trusted by 8,000+ families</span>
                                    <br />Across Kolkata & suburbs
                                </p>
                            </div>
                        </div>

                        <div className="relative lg:h-[520px]">
                            <div className="gradient-blob absolute top-6 right-0 h-[420px] w-[420px] rounded-full bg-mint opacity-45" />
                            <div className="gradient-blob absolute top-40 -left-6 h-[260px] w-[260px] rounded-full bg-[#F0E6CB] opacity-60" />
                            <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2.5 shadow-[0_20px_60px_rgba(11,59,46,0.12)]">
                                <div className="relative h-[360px] overflow-hidden rounded-[20px] sm:h-[440px] lg:h-[500px]">
                                    <img src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?q=80&w=900&auto=format&fit=crop" alt="Elderly care at home" className="h-full w-full object-cover" loading="eager" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
                                    <div className="absolute inset-x-4 top-4 flex justify-between gap-3">
                                        <div className="glass flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-lg">
                                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white"><Activity className="h-4 w-4" /></span>
                                            <div className="leading-tight">
                                                <div className="text-xs font-bold">24/7 Vital Monitoring</div>
                                                <div className="text-[11px] text-charcoal/60">Nurse on call</div>
                                            </div>
                                        </div>
                                        <div className="hidden items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow sm:flex">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available Now
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur">
                                        <div className="flex items-center gap-3">
                                            <img src="https://i.pravatar.cc/100?img=15" alt="" className="h-10 w-10 rounded-full object-cover" />
                                            <div>
                                                <div className="text-sm font-bold">Dr. Ashik Ikbal, MD</div>
                                                <div className="text-xs text-charcoal/60">Care Supervisor • Home Visits</div>
                                            </div>
                                        </div>
                                        <a href="tel:+917439036203" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white shadow">
                                            <Phone className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex absolute -bottom-2 -left-6 items-center gap-3 rounded-2xl bg-white/90 p-3.5 shadow-xl">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage text-healthcare">
                                    <Stethoscope className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold">Doctor at Home in 60 mins</div>
                                    <div className="text-[11px] text-charcoal/60">ECG • X-Ray • Blood Collection</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-forest py-3.5 text-white/90">
                <div className="mx-auto flex w-max gap-8 overflow-hidden px-4 text-[13px] font-medium tracking-wide marquee-track">
                    <div className="flex shrink-0 items-center gap-8 pr-8">
                        <BadgePercent className="h-4 w-4 text-mint" /> Adult Diapers from ₹499 / pack
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Wallet className="h-4 w-4 text-mint" /> Subscription Plans: Standard ₹2099/mo • Premium ₹3499/mo
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Syringe className="h-4 w-4 text-mint" /> Injectable at Home from ₹199
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <ShieldPlus className="h-4 w-4 text-mint" /> Vaccination at Home — Verified Pricing
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Ambulance className="h-4 w-4 text-mint" /> 24×7 Ambulance & Oxygen Support
                    </div>
                    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
                        <BadgePercent className="h-4 w-4 text-mint" /> Adult Diapers from ₹499 / pack
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Wallet className="h-4 w-4 text-mint" /> Subscription Plans: Standard ₹2099/mo • Premium ₹3499/mo
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Syringe className="h-4 w-4 text-mint" /> Injectable at Home from ₹199
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <ShieldPlus className="h-4 w-4 text-mint" /> Vaccination at Home — Verified Pricing
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        <Ambulance className="h-4 w-4 text-mint" /> 24×7 Ambulance & Oxygen Support
                    </div>
                </div>
            </div>

            <section className="py-8 lg:py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <article key={benefit.label} className="glass rounded-[20px] border border-sage bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(11,59,46,0.08)]" style={{ transitionDelay: `${index * 80}ms` }}>
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-white">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <h3 className="font-manrope text-base font-bold">{benefit.label}</h3>
                                            <p className="mt-1 text-sm leading-6 text-charcoal/65">{benefit.text}</p>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="care-services" className="py-8 lg:py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-healthcare">
                                <span className="h-[2px] w-6 bg-healthcare" /> CARE SERVICES
                            </div>
                            <h2 className="mt-2 text-[28px] font-manrope font-bold tracking-tight lg:text-[34px]">Care built around home</h2>
                        </div>
                        <a href="#services-grid" className="hidden rounded-full border border-forest/10 bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-sage sm:inline-flex">
                            Explore All Services <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
                        {serviceCards.map((card) => {
                            const BadgeIcon = card.icon
                            return (
                                <article key={card.title} className="group overflow-hidden rounded-[24px] border border-sage bg-white shadow-[0_8px_30px_rgba(11,59,46,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,59,46,0.1)]">
                                    <div className="relative h-[220px] overflow-hidden">
                                        <img src={card.image} alt={card.badge} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold backdrop-blur text-charcoal">
                                            <BadgeIcon className="h-3.5 w-3.5 text-healthcare" /> {card.badge}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-manrope text-[17px] font-bold">{card.title}</h3>
                                        <p className="mt-1.5 text-sm leading-5 text-charcoal/65">{card.description}</p>
                                        <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-healthcare transition group-hover:gap-3">
                                            Learn more <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-forest text-white"><ArrowRight className="h-3.5 w-3.5" /></span>
                                        </a>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="about" className="py-10 lg:py-14">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 bg-white rounded-[28px] border border-sage shadow-[0_10px_40px_rgba(11,59,46,0.06)] overflow-hidden">
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <div className="relative overflow-hidden rounded-[22px] h-[360px] lg:h-[460px]">
                                <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=900&auto=format&fit=crop" alt="Care team" className="h-full w-full object-cover" />
                                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white"><Award className="h-5 w-5" /></span>
                                        <div>
                                            <div className="text-sm font-bold">6+ Years Excellence</div>
                                            <div className="text-xs text-charcoal/60">Kolkata’s trusted home healthcare</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute hidden lg:block -right-6 top-16 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
                                <div className="text-xs font-bold tracking-[0.14em] text-healthcare flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Care Coordinator Assigned
                                </div>
                                <div className="mt-1 text-xs text-charcoal/60">Your single point of contact</div>
                            </div>
                        </div>
                        <div className="p-6 lg:p-10">
                            <div className="text-xs font-bold tracking-[0.14em] text-healthcare flex items-center gap-2">
                                <span className="h-6 w-[2px] bg-healthcare" /> ABOUT HEALTH CROSS
                            </div>
                            <h2 className="mt-3 text-[26px] font-manrope font-bold tracking-tight lg:text-[32px]">What Makes Us Different</h2>
                            <p className="mt-3 text-sm leading-6 text-charcoal/65">
                                At Health Cross Organization, care is not a service — it’s a relationship. We combine clinical rigor with human warmth to keep families together, safe and supported at home.
                            </p>
                            <ul className="mt-6 space-y-3.5">
                                {aboutItems.map((item, index) => (
                                    <li key={item.label} className="flex gap-3">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage text-healthcare">
                                            <Check className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <div className="font-semibold text-sm">{item.label}</div>
                                            <div className="text-sm leading-5 text-charcoal/60">{item.description}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href="#consultation" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f4a3a] transition">Book Consultation</a>
                                <a href="tel:+919732443744" className="rounded-full border border-forest/15 bg-white px-6 py-3 text-sm font-semibold text-charcoal hover:bg-sage transition">Talk to Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="subscription" className="py-8 lg:py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-healthcare">
                            <span className="h-[2px] w-6 bg-healthcare" /> SUBSCRIPTION PLANS <span className="h-[2px] w-6 bg-healthcare" />
                        </div>
                        <h2 className="mt-2 text-[28px] font-manrope font-bold lg:text-[36px]">Care that fits your life</h2>
                        <p className="mt-2 text-sm text-charcoal/60">Transparent, verified pricing. No hidden fees. Pause or upgrade anytime.</p>
                    </div>
                    <div className="mx-auto mt-8 grid gap-6 max-w-[860px] md:grid-cols-2">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`${plan.style} rounded-[24px] p-6 lg:p-7 shadow-[0_8px_30px_rgba(11,59,46,0.06)]`}>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-charcoal/50">{plan.name}</span>
                                    <span className="rounded-full bg-sage px-2.5 py-1 text-xs font-bold text-forest">{plan.tag}</span>
                                </div>
                                <div className="mt-3 flex items-baseline gap-1"><span className="text-3xl font-bold tracking-tight">{plan.price}</span><span className="text-sm text-charcoal/50">/mo</span></div>
                                <p className="mt-1 text-xs text-charcoal/50">{plan.description}</p>
                                <ul className="mt-6 space-y-3 text-sm">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-2.5">
                                            <CheckCircle2 className="h-4 w-4 text-healthcare" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="https://wa.me/919732443744" target="_blank" rel="noreferrer" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${plan.button}`}>
                                    {plan.action}
                                </a>
                                <p className="mt-2.5 text-center text-[11px] text-charcoal/40">
                                    {plan.name === 'STANDARD' ? 'Ideal for routine monitoring & seniors living independently' : 'Recommended for post-discharge & ongoing care needs'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="consultation" className="py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-healthcare">
                                <span className="h-[2px] w-6 bg-healthcare" /> REAL STORIES
                            </div>
                            <h2 className="mt-2 text-[24px] font-manrope font-bold lg:text-[30px]">Video Testimonials</h2>
                            <p className="mt-1 text-sm text-charcoal/60">Families share their experience — unscripted, verified.</p>
                        </div>
                        <div className="hidden items-center gap-2 sm:flex">
                            <button className="h-9 w-9 rounded-full bg-white border border-sage flex items-center justify-center hover:bg-sage transition"><ChevronLeft className="h-4 w-4" /></button>
                            <button className="h-9 w-9 rounded-full bg-forest text-white flex items-center justify-center hover:bg-[#0f4a3a] transition"><ChevronRight className="h-4 w-4" /></button>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory scroll-smooth">
                        {[
                            { image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop', title: 'Daughter of patient — Salt Lake', quote: 'Nursing care at home gave my father confidence after discharge.', length: '02:14' },
                            { image: 'https://images.unsplash.com/photo-1581056771107-24247ccdfca0?q=80&w=600&auto=format&fit=crop', title: 'Family — New Town', quote: 'Physiotherapy at home helped my mother walk again.', length: '01:48' },
                            { image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=600&auto=format&fit=crop', title: 'Son — Dum Dum', quote: 'Critical care setup at home saved us hospital transfers.', length: '02:05' },
                        ].map((item) => (
                            <article key={item.title} className="min-w-[280px] snap-start shrink-0 rounded-[20px] border border-sage bg-white shadow-sm transition hover:shadow-md hover:-translate-y-1">
                                <div className="relative h-[190px] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                                    <button className="absolute inset-0 flex items-center justify-center bg-forest/20 transition hover:bg-forest/30">
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                                            <Play className="h-5 w-5 text-forest" />
                                        </span>
                                    </button>
                                    <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-1 text-[11px] text-white">{item.length}</span>
                                </div>
                                <div className="p-4">
                                    <div className="text-sm font-semibold">{item.title}</div>
                                    <div className="mt-1 text-xs text-charcoal/60">{item.quote}</div>
                                    <div className="mt-2 flex gap-1 text-gold">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star key={index} className="h-3.5 w-3.5 fill-gold" />
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-3 text-center text-[11px] text-charcoal/40">Videos are representative; all testimonials are from verified Health Cross families with consent.</p>
                </div>
            </section>

            <section className="py-6">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="rounded-[24px] bg-gradient-to-br from-white to-sage/40 border border-sage p-6 lg:p-8 shadow-sm">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-center gap-5">
                                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white border border-sage shadow-sm">
                                    <div className="text-xl font-bold leading-none">4.8</div>
                                </div>
                                <div>
                                    <div className="font-manrope text-[17px] font-bold">Loved by families across Kolkata</div>
                                    <div className="mt-1 text-sm text-charcoal/60">Based on Google Reviews • Verified experiences only</div>
                                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                                        {['Professional', 'On-time', 'Compassionate'].map((tag) => (
                                            <span key={tag} className="rounded-full border border-sage bg-white px-2.5 py-1 font-medium">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href="https://www.google.com/search?q=health+cross+organization+reviews" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f4a3a] transition">
                                <img src="https://www.google.com/favicon.ico" alt="Google" className="h-4 w-4 rounded-full bg-white p-0.5" />
                                Check All Reviews <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="wellness" className="py-8 lg:py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-healthcare">OUR CLINICAL TEAM</div>
                        <h2 className="mt-2 text-[28px] font-manrope font-bold lg:text-[34px]">Doctors who come home</h2>
                        <p className="mt-2 text-sm text-charcoal/60">Verified qualifications only — no inflated titles.</p>
                    </div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-5">
                        {team.map((member, index) => (
                            <div key={member.name} className={`reveal rounded-[20px] border border-sage bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md ${index === 4 ? 'col-span-2 lg:col-span-1 max-w-[220px] mx-auto lg:max-w-none' : ''}`}>
                                <img src={member.image} alt={member.name} className="mx-auto mb-3 h-20 w-20 rounded-full border-4 border-sage object-cover" />
                                <div className="font-bold text-sm leading-tight">{member.name}</div>
                                <div className="mt-1 text-xs font-semibold text-healthcare">{member.role}</div>
                                <div className="mt-1 text-[11px] text-charcoal/60">{member.label}</div>
                                <div className="mt-3 flex justify-center gap-2 text-charcoal/40">
                                    <Linkedin className="h-4 w-4" />
                                    <Mail className="h-4 w-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-[0.14em] text-healthcare">GALLERY</div>
                            <h2 className="mt-2 text-[24px] font-manrope font-bold lg:text-[30px]">Care in action</h2>
                        </div>
                        <span className="hidden text-xs text-charcoal/50 sm:inline">Click to enlarge • ESC to close</span>
                    </div>
                    <div className="grid auto-rows-[160px] gap-3 lg:auto-rows-[200px] grid-cols-2 md:grid-cols-3">
                        {galleryItems.map((src, index) => (
                            <div key={src} className={`group relative overflow-hidden rounded-[18px] cursor-pointer ${index === 0 ? 'md:row-span-2' : ''}`}>
                                <img src={src} alt="Gallery" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="relative overflow-hidden rounded-[28px] bg-forest p-6 lg:p-10 text-white">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
                        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
                        <div className="grid gap-6 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-mint text-[30px] font-bold lg:text-[42px] tracking-tight leading-none">{stat.value}</div>
                                    <div className="mt-2 text-xs uppercase tracking-widest text-white/70 font-semibold">{stat.label}</div>
                                    <div className="mx-auto mt-3 h-[2px] w-8 bg-gold" />
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-center text-[11px] text-white/40">Figures based on internal records up to Dec 2024 • Verified on request.</p>
                    </div>
                </div>
            </section>

            <section id="services-grid" className="py-10">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-healthcare">16 HOME SERVICES</div>
                        <h2 className="mt-2 text-[28px] font-manrope font-bold lg:text-[34px]">Everything you need, at home</h2>
                        <p className="mt-2 text-sm text-charcoal/60">Tap “Contact Now” to check availability in your area — we respond within 30 minutes.</p>
                    </div>
                    <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {serviceGrid.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.title} className="reveal flex flex-col rounded-[18px] border border-sage bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(11,59,46,0.08)]">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sage text-healthcare">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="mt-3 font-manrope text-[13.5px] font-bold leading-tight">{item.title}</div>
                                    <div className="mt-1 text-xs text-charcoal/60 flex-1">{item.desc}</div>
                                    <a href="https://wa.me/919732443744" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-forest transition hover:gap-2">
                                        Contact Now <ArrowRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section id="contact" className="py-8">
                <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
                    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sage via-white to-[#FFF8E1] border border-sage p-8 lg:p-10">
                        <div className="gradient-blob absolute -top-10 -right-10 h-64 w-64 rounded-full bg-mint opacity-40" />
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-sage px-3 py-1 text-xs font-bold text-healthcare">
                                    <Heart className="h-3.5 w-3.5" /> Elderly Care Focus
                                </div>
                                <h2 className="mt-4 text-[28px] font-manrope font-bold lg:text-[36px] leading-tight tracking-tight">
                                    Care Should Feel <span className="font-serif italic font-normal text-healthcare">Close to Home.</span>
                                </h2>
                                <p className="mt-3 max-w-[520px] text-sm leading-6 text-charcoal/65">
                                    Whether it’s a doctor visit, nursing support or a full ICU setup — we bring hospital-quality care with the warmth of home.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a href="tel:+917439036203" className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0f4a3a] transition">
                                        <Phone className="h-4 w-4" /> Call Now — 74390 36203
                                    </a>
                                    <a href="https://wa.me/919732443744?text=Hello%20Health%20Cross,%20I%20need%20home%20healthcare%20support" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1eb855] transition">
                                        <MessageCircle className="h-4 w-4" /> WhatsApp Us
                                    </a>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-4 text-xs text-charcoal/60">
                                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> 68/44 Jessore Rd, Kolkata</span>
                                    <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> 24/7 Coordination</span>
                                </div>
                            </div>
                            <div className="rounded-[22px] border border-sage bg-white p-5 shadow-[0_12px_30px_rgba(11,59,46,0.08)]">
                                <div className="flex items-center gap-2 text-[15px] font-bold text-charcoal">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage text-healthcare"><Headset className="h-4 w-4" /></span>
                                    Request a Callback
                                </div>
                                <form className="mt-4 space-y-3" onSubmit={(event) => event.preventDefault()}>
                                    <input type="text" placeholder="Your name" className="w-full rounded-xl border border-sage bg-offwhite px-4 py-3 text-sm outline-none focus:border-healthcare focus:ring-2 focus:ring-sage transition" required />
                                    <input type="tel" placeholder="Phone number" className="w-full rounded-xl border border-sage bg-offwhite px-4 py-3 text-sm outline-none focus:border-healthcare focus:ring-2 focus:ring-sage transition" required />
                                    <select className="w-full rounded-xl border border-sage bg-offwhite px-4 py-3 text-sm outline-none focus:border-healthcare focus:ring-2 focus:ring-sage transition">
                                        {['Elder Care', 'Critical Care', 'Physiotherapy', 'Nursing', 'Doctor Visit', 'Diagnostics'].map((option) => (
                                            <option key={option}>{option}</option>
                                        ))}
                                    </select>
                                    <button className="w-full rounded-full bg-forest px-4 py-3 text-sm font-semibold text-white hover:bg-[#0f4a3a] transition">Request Callback</button>
                                    <p className="text-[11px] text-center text-charcoal/40">We respect privacy. No spam — only care coordination.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
