// Clinical team roster. Client requirement: NO doctor photographs anywhere —
// cards render an initials avatar instead. Names/specializations are exactly
// as supplied by the client; do not add degrees, hospitals, experience,
// awards or additional specialties without client confirmation.
//
// CMS note: this array is the future CMS "Doctors" collection in miniature —
// each object below should map to one CMS record (see fields listed in the
// CMS Integration Points documentation).
export const doctors = [
  { name: "Dr. Subhadip Gupta", specialization: "Neuro" },
  { name: "Dr. Indranil Basak", specialization: "Cardio" },
  { name: "Dr. Kity Sarkar", specialization: "Nephro" },
  { name: "Dr. Shahid Aziz", specialization: "Gastro" },
  { name: "Dr. Ashik Ikbal", specialization: "MD, Critical Care Expert" },
  { name: "Dr. Neha Shabnam", specialization: "Consultant Dentist" },
  { name: "Dr. Selim Akhter", specialization: "General Physician" },
  { name: "Dr. Inayat Kabir", specialization: "General Physician" },
  { name: "Dr. Priyadarshini Sannigrahi", specialization: "Paediatrician" },
];
