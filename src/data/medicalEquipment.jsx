import bipapCpap from "../assets/medical_equipment/Bipap_Cipap_Machine.webp";
import cardiacMonitor from "../assets/medical_equipment/Cardiac_Monitor_Parameter.webp";
import hospitalBed from "../assets/medical_equipment/Hospital_Bed.webp";
import oxygenConcentrator from "../assets/medical_equipment/Oxygen_Concentrator.webp";
import oxygenCylinder from "../assets/medical_equipment/Oxygen_Cyllinder.webp";

// Medical equipment gallery data.
//
// Images are the client-supplied files in src/assets/medical_equipment/.
// Name/category/description are derived from each filename and describe the
// equipment type in general terms only — no brand, model or numeric spec
// (flow rate, purity %, dimensions, etc.) is claimed here, since those
// haven't been confirmed for the units Health Cross actually uses.
//
// CMS note: see CMS Integration Points documentation for the future
// "Medical Equipment" collection shape.
export const medicalEquipment = [
  {
    name: "BiPAP / CPAP Machine",
    category: "Respiratory Support",
    description:
      "Non-invasive breathing support for patients with sleep apnoea or respiratory insufficiency, set up and monitored under clinical guidance at home.",
    image: bipapCpap,
  },
  {
    name: "Cardiac Monitor",
    category: "Monitoring",
    description:
      "Multi-parameter monitor tracking heart rate, oxygen saturation, blood pressure and temperature for patients who need close observation at home.",
    image: cardiacMonitor,
  },
  {
    name: "Hospital Bed",
    category: "Patient Care",
    description:
      "Adjustable hospital-grade bed for safe positioning, easier mobility and pressure-care during home-based recovery.",
    image: hospitalBed,
  },
  {
    name: "Oxygen Concentrator",
    category: "Respiratory Support",
    description:
      "Delivers a continuous, filtered supply of concentrated oxygen for patients with breathing difficulties.",
    image: oxygenConcentrator,
  },
  {
    name: "Oxygen Cylinder",
    category: "Respiratory Support",
    description:
      "Portable compressed-oxygen cylinder used for emergency response and continuous oxygen therapy during home care.",
    image: oxygenCylinder,
  },
];
