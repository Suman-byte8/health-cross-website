// Clinical team roster for the specialist directory on the Home page
// (src/components/home/ClinicalTeamSection.jsx).
//
// Client requirements:
// - NO doctor photographs, initials, avatars or silhouettes anywhere. Cards
//   are typography-only.
// - Names, designations and qualifications are exactly as supplied. Do not
//   add hospitals, experience, awards, ratings or extra specialties without
//   client confirmation. Unknown fields are left out, never filled with
//   placeholders.
//
// Fields:
// - `name`           required, rendered verbatim.
// - `specialty`      id from `specialties` below. Drives the filter chips and
//                    the uppercase label on the card. `null` = not yet
//                    confirmed; the doctor then appears under "All
//                    Specialists" only, labelled "Clinical Team".
// - `specialtyLabel` optional override for the uppercase card label only
//                    (the doctor still sits under `specialty`'s filter chip).
// - `designation`    optional professional title shown under the name.
// - `qualifications` optional list, shown comma-separated under the title.
// - `hospital`       optional hospital affiliation, as supplied by the client.
// - `serviceArea`    optional home-visit note, as supplied by the client.
//
// CMS note: `doctors` is the future CMS "Doctors" collection in miniature,
// one object per CMS record.

// Order here is the order of the filter chips. A specialty with no doctors
// is hidden automatically. `aliases` are search-only keywords (never shown).
export const specialties = [
  { id: "general-medicine", label: "General Medicine & Critical Care" },
  { id: "pulmonology", label: "Pulmonology", aliases: ["chest medicine", "pulmonologist"] },
  { id: "neurology", label: "Neurology" },
  { id: "cardiology", label: "Cardiology" },
  { id: "nephrology", label: "Nephrology" },
  { id: "gastroenterology", label: "Gastroenterology" },
  { id: "dentistry", label: "Dentistry", aliases: ["dental"] },
  { id: "pediatrics", label: "Pediatrics", aliases: ["paediatrics", "paediatrician"] },
];

export const doctors = [
  {
    name: "Dr. Priyanka Ghosh",
    specialty: "pulmonology",
    designation: "Pulmonologist",
    qualifications: ["MD Chest Medicine"],
  },
  {
    name: "Dr. Rupam Paul",
    specialty: "general-medicine",
    specialtyLabel: "General Physician",
    designation: "General Physician",
    hospital: "Fortis Hospital",
    serviceArea: "Home Visit Expert",
  },
  {
    name: "Dr. Ashik Ikbal",
    specialty: "general-medicine",
    designation: "Critical Care Expert",
    qualifications: ["MBBS", "MD", "CCEBDM"],
  },
  {
    // Specialty designation not yet confirmed by the client. Set
    // `specialty: "general-medicine"` once it is.
    name: "Dr. Sayantan Debnath",
    specialty: null,
    qualifications: ["MBBS", "MD", "CCEBDM", "MRCP 1"],
  },
  {
    name: "Dr. Subhadip Gupta",
    specialty: "neurology",
    designation: "Neurologist",
    qualifications: ["DM (Neurology)"],
  },
  {
    name: "Dr. Indranil Basak",
    specialty: "cardiology",
    designation: "Cardiologist",
    qualifications: ["DM (Cardiology)"],
  },
  { name: "Dr. Kity Sarkar", specialty: "nephrology", designation: "Nephrologist" },
  { name: "Dr. Anirban Palik", specialty: "nephrology", designation: "Nephrologist" },
  { name: "Dr. Shahid Aziz", specialty: "gastroenterology", designation: "Gastroenterologist" },
  { name: "Dr. Neha Shabnam", specialty: "dentistry", designation: "Consultant Dentist" },
  { name: "Dr. Priyadarshini Sannigrahi", specialty: "pediatrics", designation: "Pediatrician" },
];

// Care-coordination staff. Shown in their own panel below the directory and
// deliberately kept out of the specialty filters (not a medical specialty).
export const careCoordinators = [
  { name: "Dr. Inayat Kabir", role: "Clinical Coordinator" },
  { name: "Biki Saha", role: "Critical Care Clinical Coordinator" },
];
