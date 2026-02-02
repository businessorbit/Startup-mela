export const stalls = [
  {
    id: 1,
    title: "Student Special Stall",
    basePrice: 5499,
    price: "₹5,499",
    gstRate: 0.18, // 18% GST
    gstAmount: 990, // 5499 * 0.18 (rounded)
    totalPrice: 6489, // 5499 + 990
    displayPrice: "₹6,489",
    oldPrice: "₹23,600", // Original price with GST (20000 + 3600)
    originalBasePrice: 20000,
    discountNote: "Student ID Required",
    features: [
      "6 × 6 feet stall space",
      "1 table",
      "1 chair",
      "Power supply included",
      "2 All-Access Passes"
    ],
    bestFor: "Student entrepreneurs and college startups",
    popular: false
  },
  {
    id: 2,
    title: "4 × 4 ft Exhibition Stall",
    basePrice: 12000,
    price: "₹12,000",
    gstRate: 0.18, // 18% GST
    gstAmount: 2160, // 12000 * 0.18
    totalPrice: 14160, // 12000 + 2160
    displayPrice: "₹14,160",
    oldPrice: null,
    features: [
      "4 × 4 feet stall space",
      "Canopy provided",
      "1 table",
      "1 chair",
      "Power supply included"
    ],
    bestFor: "Early-stage startups, student founders, small brands",
    popular: false
  },
  {
    id: 2,
    title: "6 × 6 ft Exhibition Stall",
    basePrice: 25000,
    price: "₹25,000",
    gstRate: 0.18, // 18% GST
    gstAmount: 4500, // 25000 * 0.18
    totalPrice: 29500, // 25000 + 4500
    displayPrice: "₹29,500",
    oldPrice: null,
    features: [
      "6 × 6 feet stall space",
      "Canopy with fabrication",
      "1 table, 2 chairs",
      "1 LED screen",
      "1 promotional video on Instagram",
      "2 All-Access Passes",
      "Power supply included"
    ],
    bestFor: "Growing startups seeking higher visibility",
    popular: true
  },
  {
    id: 3,
    title: "8 × 8 ft Premium Exhibition Stall",
    basePrice: 35000,
    price: "₹35,000",
    gstRate: 0.18, // 18% GST
    gstAmount: 6300, // 35000 * 0.18
    totalPrice: 41300, // 35000 + 6300
    displayPrice: "₹41,300",
    oldPrice: null,
    features: [
      "8 × 8 feet stall space",
      "Canopy with fabrication",
      "2 tables, 2 chairs",
      "1 LED screen",
      "2 promotional videos on Instagram",
      "2 All-Access Passes",
      "Power supply included"
    ],
    bestFor: "Established startups and companies",
    popular: false
  }
];
