// Discount Configuration
export const DISCOUNT_CONFIG = {
  active: true,
  percentage: 50, // 50% off
  expiryDate: new Date('2026-01-25T23:59:59+05:30'), // January 25, 2026, 11:59:59 PM IST
};

// Helper function to check if discount is active
export const isDiscountActive = () => {
  if (!DISCOUNT_CONFIG.active) return false;
  const now = new Date();
  return now < DISCOUNT_CONFIG.expiryDate;
};

export const passes = [
  {
    id: 1,
    title: "Exhibition + Entertainment Pass",
    originalBasePrice: 50,
    discountPercent: 50,
    basePrice: isDiscountActive() ? 25 : 50,
    price: isDiscountActive() ? "₹25" : "₹50",
    gstRate: 0.18,
    gstAmount: isDiscountActive() ? 4.5 : 9,
    totalPrice: isDiscountActive() ? 29.5 : 59,
    displayPrice: isDiscountActive() ? "₹30" : "₹59",
    oldPrice: isDiscountActive() ? "₹59" : null,
    savings: isDiscountActive() ? 29.5 : 0,
    features: [
      "Entry to Exhibitor Zone (Zone 1)",
      "Explore 100+ startup stalls",
      "Product demos & brand showcases",
      "Food Court access",
      "Entry to the comedy show by Pranav Sharma",
      "Entry to the magic and mind reading show by Abhay Sharma",
      "Entry to watch the theme modelling and fashion show",
    ],
    popular: false
  },
  {
    id: 2,
    title: "All-Access Conference Pass",
    originalBasePrice: 199,
    discountPercent: 50,
    basePrice: isDiscountActive() ? 1050 : 199,
    price: isDiscountActive() ? "₹1,050" : "₹199",
    gstRate: 0.18,
    gstAmount: isDiscountActive() ? 189 : 36,
    totalPrice: isDiscountActive() ? 1239 : 235,
    displayPrice: isDiscountActive() ? "₹1,239" : "₹235",
    oldPrice: isDiscountActive() ? "₹2,478" : null,
    savings: isDiscountActive() ? 1239 : 0,
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
    originalBasePrice: 3500,
    discountPercent: 50,
    basePrice: isDiscountActive() ? 1750 : 3500,
    price: isDiscountActive() ? "₹1,750" : "₹3,500",
    gstRate: 0.18,
    gstAmount: isDiscountActive() ? 315 : 630,
    totalPrice: isDiscountActive() ? 2065 : 4130,
    displayPrice: isDiscountActive() ? "₹2,065" : "₹4,130",
    oldPrice: isDiscountActive() ? "₹4,130" : null,
    savings: isDiscountActive() ? 2065 : 0,
    features: [
      "Reserved entry to the Official Pitching Event",
      "Present your startup to Angel Investors",
      "High-stakes fundraising opportunity",
      "Choose if your ask < 20 lakhs"
    ],
    popular: false
  },
];
