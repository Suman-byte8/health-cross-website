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
  {
    id: "gynaecology",
    label: "Gynaecology",
    aliases: ["gynecology", "gynecologist", "obstetrics", "infertility", "ivf"],
  },
];

export const doctors = [
  {
    name: "Dr. Priyanka Ghosh",
    specialty: "pulmonology",
    designation: "Pulmonologist",
    qualifications: ["MD Chest Medicine"],
  },
  {
    name: "Dr. Kohena Roy",
    specialty: "pulmonology",
    designation: "Pulmonologist",
    qualifications: ["MD Chest Medicine"],
  },
  {
    name: "Dr. Inayet Kabir",
    specialty: "general-medicine",
    specialtyLabel: "General Physician",
    designation: "Critical Care Clinical Coordinator",
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
    serviceArea: "Home Visit Expert",
  },
  {
    name: "Dr. Sumalay Kar",
    specialty: "general-medicine",
    designation: "Senior Consultant Physician",
    qualifications: [
      "M.B.B.S. (Cal)",
      "Post Graduate Diploma in Diabetic Management (Middlesex University)",
    ],
  },
  {
    name: "Dr. Sayantan Debnath",
    specialty: "general-medicine",
    specialtyLabel: "General Physician",
    designation: "General Physician",
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
  { name: "Dr. Anirban Palit", specialty: "nephrology", designation: "Nephrologist" },
  { name: "Dr. Shahid Aziz", specialty: "gastroenterology", designation: "Gastroenterologist" },
  { name: "Dr. Neha Shabnam", specialty: "dentistry", designation: "Consultant Dentist" },
  { name: "Dr. Priyadarshini Sannigrahi", specialty: "pediatrics", designation: "Pediatrician" },
  {
    name: "Dr. Khooshboo Agarwal",
    specialty: "gynaecology",
    designation: "Gynaecologist",
    qualifications: ["MBBS", "MS (O & G)", "Trained in Infertility & IVF"],
  },
];

// Non-clinical management staff. Shown in their own panel below the directory
// and deliberately kept out of the specialty filters (not a medical specialty).
export const managementTeam = [
  { name: "Biki Saha", role: "Executive Management" },
];
