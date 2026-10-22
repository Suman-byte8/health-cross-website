import serviceImg1 from '../assets/service_image_1.png'
import serviceImg2 from '../assets/service_image_2.png'
import serviceImg3 from '../assets/service_image_3.png'

import {
  Activity,
  Ambulance,
  Airplay,
  Bed,
  Brain,
  ClipboardList,
  Clock3,
  Droplets,
  GraduationCap,
  Heart,
  HeartHandshake,
  HeartPulse,
  PersonStanding,
  Phone,
  Scan,
  SlidersHorizontal,
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
    text: "MD physicians and licensed therapists with verified credentials.",
  },
  {
    icon: HeartPulse,
    label: "Comprehensive Care",
    text: "Doctor visits, diagnostics and rehab delivered at home.",
  },
];

export const serviceCardsData = [
  {
    image:serviceImg1,
    badge: "Elder Care",
    title: "Elder Care at Home",
    description:
      "Daily assistance, medication support and companionship for seniors.",
    icon: Users,
    highlights: ["Daily living assistance", "Medication support", "Companionship for seniors"],
  },
  {
    image:serviceImg2,
    badge: "Critical Care",
    title: "Critical Care Setup",
    description:
      "ICU-at-home with monitoring, ventilator support and specialist nurses.",
    icon: Activity,
    highlights: ["Continuous monitoring", "Ventilator support", "Specialist nurses"],
  },
  {
    image:serviceImg3,
    badge: "Physiotherapy",
    title: "Physiotherapy at Home",
    description: "Rehab and mobility support tailored to recovery goals.",
    icon: PersonStanding,
    highlights: ["Rehabilitation therapy", "Mobility support", "Tailored to recovery goals"],
  },
];

export const aboutItemsData = [
  {
    icon: ClipboardList,
    label: "Personalized Care Plans",
    description:
      "Tailored to medical history, lifestyle and family preferences.",
  },
  {
    icon: GraduationCap,
    label: "Experienced Professionals",
    description: "Doctors, nurses and therapists with verified qualifications.",
  },
  {
    icon: Clock3,
    label: "Reliable Support, Anytime",
    description: "24/7 helpline, WhatsApp coordination and rapid response.",
  },
  {
    icon: SlidersHorizontal,
    label: "Flexible Options",
    description: "Hourly, daily, monthly and subscription plans.",
  },
  {
    icon: HeartHandshake,
    label: "Quality Coordination",
    description: "One coordinator, regular updates and family counselling.",
  },
];

export const plansData = [
  {
    name: "ADVANCED",
    tag: "Enhanced Care",
    price: "₹3,999",
    description: "Billed monthly • Cancel anytime",
    features: [
      "Doctor home visit — 1 time",
      "Nursing help — 2 times",
      "On-call support, 24×7",
      "Diet plan by a professional nutritionist",
      "Free pharmacy & lab sample collection and delivery",
      "22% discount on medicine",
      "Up to 25% discount on lab tests",
      "Emergency ambulance support at no extra charge",
      "Emergency transport support to reach the nursing home",
    ],
    action: "Choose Advanced",
    caption: "For families who want round-the-clock backup on call",
  },
  {
    name: "ELITE",
    tag: "All-Inclusive Care",
    price: "₹6,999",
    description: "Includes a one-time full body checkup on sign-up",
    features: [
      "Doctor home visit — twice (1 general physician + 1 specialist)",
      "Dedicated care co-ordinator",
      "Dedicated, customizable nutrition plan",
      "Free pharmacy & lab sample collection and delivery",
      "25% discount on medicine",
      "Up to 32% discount on lab tests",
    ],
    action: "Choose Elite",
    highlight: true,
    caption: "Our most complete plan, with a dedicated co-ordinator",
  },
];

// Clinical team roster now lives in `src/data/doctors.jsx` (no photos, per
// client requirement) and is consumed by the Clinical Team section directly.

export const statsData = [
  { value: "10,000+", label: "Patients served" },
  { value: "70+", label: "Professionals" },
  { value: "1,500+", label: "Home visits" },
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
