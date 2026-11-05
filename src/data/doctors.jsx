// Clinical team roster. Client requirement: NO doctor photographs anywhere —
// cards render an initials avatar instead. Names/degrees/roles are exactly
// as supplied by the client; do not add hospitals, experience, awards or
// additional specialties without client confirmation.
//
// Card layout (per client reference): role(s) shown above the name, then
// the name, then — only when a degree was supplied — a credential line
// below it in the standard "DEGREE (specialty)" form, e.g. "DM (Cardio)".
// `degree` and `abbr` are optional; `roles` is one or more lines shown
// above the name, e.g. a General Physician who is also a Critical Care
// Expert gets two lines. `roles` itself is optional — a doctor supplied
// with only a credentials list and no named specialty (see Dr. Sayantan
// Debnath below) shows no title line, just the name and credentials.
//
// `credentials` is an alternative to `degree`/`abbr`, for doctors whose
// qualifications were supplied as a free-form list rather than a single
// "DEGREE (specialty)" pair — each entry renders as its own line below
// the name, exactly as supplied.
//
// CMS note: this array is the future CMS "Doctors" collection in miniature —
// each object below should map to one CMS record (see fields listed in the
// CMS Integration Points documentation).
export const doctors = [
  { name: "Dr. Priyanka Ghosh", roles: ["General Physician", "Critical Care Expert"] },
  { name: "Dr. Subhadip Gupta", degree: "DM", abbr: "Neuro", roles: ["Neurologist"] },
  { name: "Dr. Neha Shabnam", roles: ["Consultant Dentist"] },
  { name: "Dr. Indranil Basak", degree: "DM", abbr: "Cardio", roles: ["Cardiologist"] },
  { name: "Dr. Kity Sarkar", roles: ["Nephrologist"] },
  { name: "Dr. Anirban Palik", roles: ["Nephrologist"] },
  { name: "Dr. Shahid Aziz", roles: ["Gastroenterologist"] },
  { name: "Dr. Ashik Ikbal", degree: "MD", abbr: "Critical Care", roles: ["Critical Care Expert"] },
  { name: "Dr. Priyadarshini Sannigrahi", roles: ["Paediatrician"] },
  { name: "Dr. Sayantan Debnath", credentials: ["MBBS, MD, CCEBDM", "MRCP 1"] },
];

// Care-coordination staff — shown in their own row on the Clinical Team
// section, separate from the doctors' grid above (different kind of role,
// not a medical specialty).
export const careCoordinators = [
  { name: "Dr. Inayat Kabir", role: "Clinical Co-ordinator" },
];
