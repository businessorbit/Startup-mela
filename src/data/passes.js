export const passes = [
  {
    id: 1,
    title: "General Entry Pass",
    basePrice: 50,
    price: "₹50",
    gstRate: 0.18,
    gstAmount: 9, // 50 * 0.18
    totalPrice: 59, // 50 + 9
    displayPrice: "₹59",
    oldPrice: null,
    features: [
      "Entry to Exhibitor Zone (Zone 1)",
      "Explore 100+ startup stalls",
      "Product demos & brand showcases",
      "Food Court access",
      "Vibrant festival experience"
    ],
    popular: false
  },
  {
    id: 2,
    title: "Arena Pass",
    basePrice: 0,
    price: "",
    gstRate: 0.18,
    gstAmount: 0,
    totalPrice: 0,
    displayPrice: "",
    oldPrice: null,
    features: [
      "Everything in the General Entry Pass",
      "Entry to Stage Side (Zone 2)",
      "Public viewing of Main Stage events"
    ],
    popular: true,
    comingSoon: true
  },
  {
    id: 3,
    title: "All-Access Conference Pass",
    basePrice: 2100,
    price: "₹2,100",
    gstRate: 0.18,
    gstAmount: 378, // 2100 * 0.18
    totalPrice: 2478, // 2100 + 378
    displayPrice: "₹2,478",
    oldPrice: null,
    features: [
      "Everything in the Arena Pass",
      "Exclusive entry to Conference Zone (Zone 3)",
      "Access to the Knowledge Hub (All expert sessions)"
    ],
    popular: false
  },
  {
    id: 4,
    title: "Startup Pitching Pass",
    basePrice: 3500,
    price: "₹3,500",
    gstRate: 0.18,
    gstAmount: 630, // 3500 * 0.18
    totalPrice: 4130, // 3500 + 630
    displayPrice: "₹4,130",
    oldPrice: null,
    features: [
      "Reserved entry to the Official Pitching Event",
      "Present your startup to Angel Investors",
      "High-stakes fundraising opportunity",
      "Choose if your ask < 20 lakhs"
    ],
    popular: false
  },
  {
    id: 5,
    title: "Startup Pitching Pass",
    basePrice: 9999,
    price: "₹9,999",
    gstRate: 0.18,
    gstAmount: 1799.82, // 9999 * 0.18
    totalPrice: 11798.82, // 9999 + 1799.82
    displayPrice: "₹11,799",
    oldPrice: null,
    features: [
      "Reserved entry to the Official Pitching Event",
      "Present your startup to VCs",
      "High-stakes fundraising opportunity",
      "Choose if your ask > 20 lakhs and you have received any grant or funding before"
    ],
    popular: false
  },
];