import {
  Activity,
  Ambulance,
  Airplay,
  Bed,
  Brain,
  Droplets,
  GraduationCap,
  Heart,
  HeartPulse,
  PersonStanding,
  Phone,
  Scan,
  Stethoscope,
  Syringe,
  TestTube,
  UserCog,
  Users,
  Wind,
} from "lucide-react";

export const heroWords = ["Care", "Should", "Feel", "Close", "to", "Home."];

export const benefitsData = [
  {
    icon: Phone,
    label: "24/7 Helpline",
    text: "Urgent care coordination and emergency response.",
  },
  {
    icon: GraduationCap,
    label: "Clinical Experts",
    text: "MD, BAMS and licensed therapists with verified credentials.",
  },
  {
    icon: HeartPulse,
    label: "Comprehensive Care",
    text: "Doctor visits, diagnostics and rehab delivered at home.",
  },
];

export const serviceCardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
    badge: "Elder Care",
    title: "Elder Care at Home",
    description:
      "Daily assistance, medication support and companionship for seniors.",
    icon: Users,
  },
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    badge: "Critical Care",
    title: "Critical Care Setup",
    description:
      "ICU-at-home with monitoring, ventilator support and specialist nurses.",
    icon: Activity,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    badge: "Physiotherapy",
    title: "Physiotherapy at Home",
    description: "Rehab and mobility support tailored to recovery goals.",
    icon: PersonStanding,
  },
];

export const aboutItemsData = [
  {
    label: "Personalized Care Plans",
    description:
      "Tailored to medical history, lifestyle and family preferences.",
  },
  {
    label: "Experienced Professionals",
    description: "Doctors, nurses and therapists with verified qualifications.",
  },
  {
    label: "Reliable Support, Anytime",
    description: "24/7 helpline, WhatsApp coordination and rapid response.",
  },
  {
    label: "Flexible Options",
    description: "Hourly, daily, monthly and subscription plans.",
  },
  {
    label: "Quality Coordination",
    description: "One coordinator, regular updates and family counselling.",
  },
];

export const plansData = [
  {
    name: "STANDARD",
    tag: "Essential Care",
    price: "₹2,099",
    description: "Billed monthly • Cancel anytime",
    features: [
      "Doctor home visit — general physician, monthly once",
      "Nursing visit for vitals & wellness — 4 times",
      "Unlimited telecommunication",
      "Free pharmacy delivery & lab sample pickup",
      "Nutritionist diet plan",
      "Dedicated clinical manager (on-call support)",
      "22% discount on medicine",
      "25% discount on lab tests",
    ],
    action: "Choose Standard",
  },
  {
    name: "PREMIUM",
    tag: "Comprehensive",
    price: "₹3,499",
    description: "Best value • Dedicated coordinator",
    features: [
      "Doctor home visit — general physician, monthly twice",
      "Nursing visit for vitals & wellness — 8 times",
      "Unlimited telecommunication",
      "Free pharmacy delivery & lab sample pickup",
      "Nutritionist diet plan",
      "Annual full body checkup (free annually)",
      "22% discount on medicine",
      "30% discount on lab tests",
      "Psychologist counselling online (if needed)",
      "Dedicated clinical manager support (on-call)",
    ],
    action: "Choose Premium",
    highlight: true,
  },
];

export const teamData = [
  {
    name: "Dr. Ashik Ikbal",
    role: "MD",
    label: "General Physician • Home Visits",
    image:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Inayet Kabir",
    role: "BAMS",
    label: "Ayurvedic & Wellness Care",
    image:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Selim Aktar",
    role: "BAMS",
    label: "Ayurvedic & Wellness Care",
    image:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Neha Sultana",
    image:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
  {
    name: "Dr. Neha Shabnam",
    image:
      "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg",
  },
];

export const statsData = [
  { value: "1,000+", label: "Patients served" },
  { value: "30+", label: "Professionals" },
  { value: "5,00+", label: "Home visits" },
  { value: "3+", label: "Years excellence" },
];

export const serviceGridData = [
  {
    icon: Stethoscope,
    title: "Doctor Home Visit",
    desc: "Medical consultation at your doorstep.",
  },
  {
    icon: HeartPulse,
    title: "24×7 Nursing Care",
    desc: "Round-the-clock professional nursing support.",
  },
  {
    icon: UserCog,
    title: "24×7 Medical Attendant",
    desc: "Continuous care by trained medical staff.",
  },
  {
    icon: Wind,
    title: "Portable Oxygen Support",
    desc: "Oxygen therapy anywhere, anytime.",
  },
  {
    icon: Airplay,
    title: "CPAP / BiPAP & Ventilation",
    desc: "Advanced breathing assistance for critical care.",
  },
  {
    icon: Activity,
    title: "24×7 Critical Care Technologist",
    desc: "Expert critical care monitoring round the clock.",
  },
  {
    icon: Heart,
    title: "ECG & Holter at Home",
    desc: "Convenient heart monitoring from your home.",
  },
  {
    icon: Scan,
    title: "NCV / EMG",
    desc: "Fast and accurate nerve and muscle testing at home.",
  },
  {
    icon: Brain,
    title: "EEG",
    desc: "Safe and accurate brain wave monitoring at home.",
  },
  {
    icon: Droplets,
    title: "Uroflowmetry",
    desc: "Quick and simple urinary flow testing at home.",
  },
  {
    icon: TestTube,
    title: "Home Blood Collection",
    desc: "Hassle-free blood tests done at your home.",
  },
  {
    icon: Bed,
    title: "Hospital Bed Support",
    desc: "Easy and reliable hospital bed setup at home.",
  },
  {
    icon: PersonStanding,
    title: "Physiotherapy",
    desc: "Expert therapy to improve mobility and recovery at home.",
  },
  {
    icon: Ambulance,
    title: "Ambulance Service",
    desc: "Quick and safe patient transport.",
  },
  {
    icon: Scan,
    title: "Portable X-Ray",
    desc: "Home X-ray service for quick and accurate diagnosis.",
  },
  {
    icon: Syringe,
    title: "Injection Pushing",
    desc: "Safe and sterile injections at home by professionals.",
  },
];
