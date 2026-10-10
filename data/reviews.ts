// NOTE: These reviews are representative based on verified public review themes
// for Dr. Arora's Multispeciality Dental Clinic on Google.
// Replace with actual exported Google reviews before production launch.

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  treatment?: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    rating: 5,
    date: "August 2026",
    text: "Exceptional experience. Dr. Arora explained every step of my implant treatment clearly and the results are outstanding. The clinic is immaculate and the team is genuinely caring. Couldn't be happier.",
    treatment: "Dental Implants",
    featured: true,
  },
  {
    id: "r2",
    name: "Rohit Mehta",
    rating: 5,
    date: "July 2026",
    text: "I was nervous about getting a root canal but the team made me feel completely at ease. The procedure was painless and done with great precision. Very professional clinic.",
    treatment: "Root Canal Treatment",
  },
  {
    id: "r3",
    name: "Sunita Rawat",
    rating: 5,
    date: "July 2026",
    text: "Best dental clinic in Dehradun by far. They use fresh instruments for each check-up which is reassuring. The quality of materials used for my crown was excellent and it looks completely natural.",
    treatment: "Crowns & Bridges",
  },
  {
    id: "r4",
    name: "Amit Gupta",
    rating: 5,
    date: "June 2026",
    text: "Had a filling and capping done here. The doctors are very attentive and thorough. The clinic maintains excellent hygiene standards. I've recommended this place to my entire family.",
    treatment: "Restorative",
  },
  {
    id: "r5",
    name: "Kavita Negi",
    rating: 5,
    date: "June 2026",
    text: "Dr. Arora is knowledgeable, calm, and takes time to understand exactly what you want. My smile makeover turned out better than I imagined. The digital planning beforehand was really helpful.",
    treatment: "Smile Makeover",
  },
  {
    id: "r6",
    name: "Deepak Joshi",
    rating: 5,
    date: "May 2026",
    text: "Came in for aligners and was very impressed with how thoroughly the treatment was planned. The staff is warm and the clinic environment is calming. Highly recommend.",
    treatment: "Aligners",
  },
  {
    id: "r7",
    name: "Ritu Bhandari",
    rating: 5,
    date: "May 2026",
    text: "Visited with severe tooth pain and was seen promptly. The team was compassionate and efficient. The treatment was very effective. The clinic is modern and well-equipped.",
    treatment: "Emergency Care",
  },
];
