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
    title: "General Entry Pass",
    originalBasePrice: 50,
    discountPercent: 50,
    basePrice: 25, // 50% of 50
    price: "₹25",
    gstRate: 0.18,
    gstAmount: 4.5, // 25 * 0.18
    totalPrice: 29.5, // 25 + 4.5
    displayPrice: "₹30",
    oldPrice: "₹59", // Original total price
    savings: 29.5, // 59 - 29.5
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
    originalBasePrice: 0,
    discountPercent: 0,
    basePrice: 0,
    price: "",
    gstRate: 0.18,
    gstAmount: 0,
    totalPrice: 0,
    displayPrice: "",
    oldPrice: null,
    savings: 0,
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
    originalBasePrice: 2100,
    discountPercent: 50,
    basePrice: 1050, // 50% of 2100
    price: "₹1,050",
    gstRate: 0.18,
    gstAmount: 189, // 1050 * 0.18
    totalPrice: 1239, // 1050 + 189
    displayPrice: "₹1,239",
    oldPrice: "₹2,478", // Original total price
    savings: 1239, // 2478 - 1239
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
    originalBasePrice: 3500,
    discountPercent: 50,
    basePrice: 1750, // 50% of 3500
    price: "₹1,750",
    gstRate: 0.18,
    gstAmount: 315, // 1750 * 0.18
    totalPrice: 2065, // 1750 + 315
    displayPrice: "₹2,065",
    oldPrice: "₹4,130", // Original total price
    savings: 2065, // 4130 - 2065
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
    originalBasePrice: 9999,
    discountPercent: 50,
    basePrice: 4999.5, // 50% of 9999
    price: "₹4,999.50",
    gstRate: 0.18,
    gstAmount: 899.91, // 4999.5 * 0.18
    totalPrice: 5899.41, // 4999.5 + 899.91
    displayPrice: "₹5,899",
    oldPrice: "₹11,799", // Original total price
    savings: 5899.59, // 11798.82 - 5899.41
    features: [
      "Reserved entry to the Official Pitching Event",
      "Present your startup to VCs",
      "High-stakes fundraising opportunity",
      "Choose if your ask > 20 lakhs and you have received any grant or funding before"
    ],
    popular: false
  },
];