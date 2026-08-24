export const passes = [
  {
    id: 1,
    title: "Exhibition",
    basePrice: 0,
    price: "₹0",
    gstRate: 0.18,
    gstAmount: 0,
    totalPrice: 0,
    displayPrice: "₹0",
    comingSoon: false,
    features: [
      "Entry to Exhibitor Zone (Zone 1)",
      "Explore 400+ startup stalls",
      "Product demos & brand showcases",
      "Food Court access",
      "Entry to watch the theme modelling and fashion show",
    ],
    popular: false
  },
  {
    id: 2,
    title: "All-Access Conference Pass",
    basePrice: 199,
    // GST @ 18%: 199 * 0.18 = 35.82 → rounded to 36
    // Total: 199 + 36 = 235
    price: "₹199",
    gstRate: 0.18,
    gstAmount: 36,
    totalPrice: 235,
    displayPrice: "₹235",
    comingSoon: true, // Set to false when this pass goes on sale
    features: [
      "Everything in the Arena Pass",
      "Exclusive entry to Conference Zone (Zone 3)",
      "Access to the Knowledge Hub (All expert sessions)"
    ],
    popular: false
  },
  {
    id: 3,
    title: "Startup Pitching Pass",
    basePrice: 3500,
    // GST @ 18%: 3500 * 0.18 = 630
    // Total: 3500 + 630 = 4130
    price: "₹3,500",
    gstRate: 0.18,
    gstAmount: 630,
    totalPrice: 4130,
    displayPrice: "₹4,130",
    comingSoon: true, // Set to false when this pass goes on sale
    features: [
      "Reserved entry to the Official Pitching Event",
      "Present your startup to Angel Investors",
      "High-stakes fundraising opportunity",
      "Choose if your ask < 20 lakhs"
    ],
    popular: false
  },
];
