// Copy for the bottom-left "live" activity bar. The messages cycle in order;
// the "person" entry picks a random name/area from the lists below each time.
// The two text lines mirror the real totals in `statsData` (homeData.jsx) —
// keep them in sync if those figures change.
//
// NOTE: the names/areas in the "person" entry are illustrative placeholders —
// replace them with real, current examples (or remove the entry) before
// relying on them as social proof.
export const liveActivityMessages = [
  { type: "text", text: "We've served 10,000+ patients" },
  { type: "text", text: "1,500+ home visits and counting" },
  { type: "person" },
];

export const liveActivityNames = [
  "Sumitra Banerjee",
  "Arindam Ghosh",
  "Moumita Chatterjee",
  "Subhajit Mukherjee",
  "Rina Das",
  "Debashis Sen",
  "Tanushree Roy",
  "Partha Bhattacharya",
  "Ananya Dutta",
  "Sourav Saha",
  "Kaberi Mondal",
  "Tapan Chakraborty",
];

export const liveActivityAreas = [
  "Dum Dum",
  "Salt Lake",
  "Baguiati",
  "Lake Town",
  "Belgharia",
  "Barasat",
  "Jessore Road",
  "Shyambazar",
];
