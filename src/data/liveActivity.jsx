// Copy for the bottom-left "live" activity bar. The messages cycle in order;
// the "person" entry picks a random name/area from the lists below each time.
//
// NOTE: the "10 new patients today" line and the names are illustrative
// placeholders — replace them with real, current figures (or remove the
// entries) before relying on them as social proof.
export const liveActivityMessages = [
  { type: "text", text: "We have served 1000+ homes" },
  { type: "text", text: "We served 10 new patients today" },
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
