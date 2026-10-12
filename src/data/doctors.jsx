// Clinical team roster. Client requirement: NO doctor photographs anywhere —
// cards render an initials avatar instead. Names/degrees/roles are exactly
// as supplied by the client; do not add hospitals, experience, awards or
// additional specialties without client confirmation.
//
// `degree` is optional (shown as a small badge above the role). `roles` is
// one or more lines shown below it, e.g. a General Physician who is also a
// Critical Care Expert gets two lines.
//
// CMS note: this array is the future CMS "Doctors" collection in miniature —
// each object below should map to one CMS record (see fields listed in the
// CMS Integration Points documentation).
export const doctors = [
  { name: "Dr. Priyanka Ghosh", roles: ["General Physician", "Critical Care Expert"] },
  { name: "Dr. Subhadip Gupta", roles: ["Neurologist"] },
  { name: "Dr. Neha Shabnam", roles: ["Consultant Dentist"] },
  { name: "Dr. Indranil Basak", degree: "DM", roles: ["Cardiologist"] },
  { name: "Dr. Kity Sarkar", roles: ["Nephrologist"] },
  { name: "Dr. Anirban Palik", roles: ["Nephrologist"] },
  { name: "Dr. Shahid Aziz", roles: ["Gastroenterologist"] },
  { name: "Dr. Ashik Ikbal", degree: "MD", roles: ["Critical Care Expert"] },
  { name: "Dr. Priyadarshini Sannigrahi", roles: ["Paediatrician"] },
  { name: "Dr. Inayat Kabir", roles: ["Clinical Co-ordinator"] },
];
