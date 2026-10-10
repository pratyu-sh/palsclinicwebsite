// ─── Clinic ───────────────────────────────────────────────────
export const clinic = {
  name: "Dr. Arora's Multispeciality Dental Clinic",
  shortName: "Dr. Arora's",
  tagline: "Modern Dentistry, Designed Around You",
  city: "Dehradun",
  state: "Uttarakhand",
  country: "India",
  phone: "+919716968922",
  phoneDisplay: "+91 97169 68922",
  whatsapp: "+919716968922",
  whatsappDisplay: "+91 97169 68922",
  whatsappMessage:
    "Hi, I found Dr. Arora%27s Multispeciality Dental Clinic on Google and would like to know more about your services.",
  email: "", // [CLINIC VERIFICATION REQUIRED]
  address: {
    line1: "12 Canal Road, Rajpur Road",
    line2: "Opposite NIEVD (Blind School), Jakhan",
    city: "Dehradun",
    state: "Uttarakhand",
    pincode: "248001",
    full: "12 Canal Road, Rajpur Road, opposite NIEVD (Blind School), Jakhan, Dehradun, Uttarakhand 248001",
  },
  rating: 4.9,
  reviewCount: 159,
  googleMapsUrl:
    "https://maps.google.com/?q=Dr+Arora+Multispeciality+Dental+Clinic+Rajpur+Road+Dehradun",
  googleReviewsUrl:
    "https://g.page/r/dr-aroras-multispeciality-dental-clinic/review",
  website: "dr-aroras.grexa.site",
  // [CLINIC VERIFICATION REQUIRED] — confirm operating hours
  hours: null as null | string,
  socialMedia: {
    instagram: "", // [CLINIC VERIFICATION REQUIRED]
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dr. Arora's Multispeciality Dental Clinic",
    image: "/images/clinic-interior.jpg",
    url: "https://dr-aroras.grexa.site",
    telephone: "+919716968922",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Canal Road, Rajpur Road, opposite NIEVD (Blind School), Jakhan",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3421,
      longitude: 78.0568,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "159",
    },
    openingHoursSpecification: [],
    hasMap: "https://maps.google.com/?q=Dr+Arora+Multispeciality+Dental+Clinic+Rajpur+Road+Dehradun",
  },
};
