export const SITE_URL = "https://startupmela.com";
export const SITE_NAME = "Startup Mela";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Per-route SEO copy */
export const pageSEO = {
  home: {
    title: "Startup Mela 2027 | Chandigarh Startup Summit – 25–27 March",
    description:
      "Startup Mela 2027 — Chandigarh’s largest entrepreneurship summit at Parade Ground, Sector 17. Join 25–27 March for 400+ startup stalls, investor pitching, conference sessions & networking. Get your passes now.",
    path: "/",
    keywords:
      "Startup Mela 2027, Chandigarh startup event, entrepreneurship summit, startup exhibition Chandigarh, investor pitching",
  },
  event: {
    title: "Event Details & Brochure | Startup Mela 2027 Chandigarh",
    description:
      "Download and view the official Startup Mela 2027 event brochure — schedule highlights, zones, exhibition info and how to join Chandigarh’s premier startup summit.",
    path: "/event",
    keywords: "Startup Mela brochure, event details, Chandigarh startup fair 2027",
  },
  spotlight: {
    title: "Speakers, Investors & Artists | Startup Mela 2027 Spotlight",
    description:
      "Meet the Startup Mela 2027 spotlight — industry leaders, investors and entertainers shaping Chandigarh’s biggest entrepreneurship summit on 25–27 March.",
    path: "/spotlight",
    keywords: "Startup Mela speakers, investors, artists, Chandigarh summit lineup",
  },
  exhibitionStalls: {
    title: "Exhibition Stalls Booking | Startup Mela 2027 Chandigarh",
    description:
      "Book your exhibition stall at Startup Mela 2027, Parade Ground Sector 17, Chandigarh. Showcase your brand to thousands of founders, investors and visitors.",
    path: "/exhibition-stalls",
    keywords: "Startup Mela stalls, exhibition booth Chandigarh, startup exhibition booking",
  },
  sponsors: {
    title: "Sponsors & Partners | Startup Mela 2027 Chandigarh",
    description:
      "Partner with Startup Mela 2027 — Chandigarh’s flagship entrepreneurship summit. Explore sponsorship opportunities and connect with startups, investors and innovators.",
    path: "/sponsors",
    keywords: "Startup Mela sponsors, sponsorship Chandigarh, startup event partners",
  },
  workWithUs: {
    title: "Volunteer & Work With Us | Startup Mela 2027",
    description:
      "Join the Startup Mela 2027 team as a volunteer. Gain event experience, network with founders and help build Chandigarh’s largest entrepreneurship summit.",
    path: "/workwithus",
    keywords: "Startup Mela volunteer, work with us, event volunteering Chandigarh",
  },
  contact: {
    title: "Contact Startup Mela 2027 | Tickets, Stalls & Sponsorship",
    description:
      "Contact Startup Mela for ticketing, exhibition stalls, sponsorship or general queries. Reach us for Startup Mela 2027 at Parade Ground, Sector 17, Chandigarh.",
    path: "/contact",
    keywords: "contact Startup Mela, ticket enquiry, stall enquiry Chandigarh",
  },
  checkout: {
    title: "Checkout & Get Passes | Startup Mela 2027",
    description:
      "Complete your Startup Mela 2027 registration securely. Choose your pass or stall and confirm your spot at Chandigarh’s largest entrepreneurship summit.",
    path: "/checkout",
    keywords: "Startup Mela tickets, buy passes, checkout",
    noindex: true,
  },
  terms: {
    title: "Terms, Privacy & Refund Policy | Startup Mela",
    description:
      "Read Startup Mela terms of use, privacy policy and refund policy for tickets, stalls and platform services.",
    path: "/terms",
    keywords: "Startup Mela terms, privacy policy, refund policy",
  },
  admin: {
    title: "Admin | Startup Mela",
    description: "Startup Mela admin area.",
    path: "/admin",
    noindex: true,
  },
  privatePass: {
    title: "Private Pass | Startup Mela",
    description: "Private complimentary pass registration.",
    path: "/x9k2v7m4r1q8",
    noindex: true,
  },
};

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Event + Organization JSON-LD for rich results */
export function buildEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Startup Mela 2027",
    description:
      "Chandigarh’s largest entrepreneurship summit featuring startup exhibition, investor pitching, conference sessions and networking.",
    startDate: "2027-03-25",
    endDate: "2027-03-27",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [DEFAULT_OG_IMAGE, `${SITE_URL}/logo.png`],
    url: SITE_URL,
    location: {
      "@type": "Place",
      name: "Parade Ground, Sector 17",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Parade Ground, Sector 17",
        addressLocality: "Chandigarh",
        addressRegion: "Chandigarh",
        postalCode: "160017",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#passes`,
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "INR",
      validFrom: "2025-01-01",
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@startupmela.com",
      telephone: "+91-7743096565",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
