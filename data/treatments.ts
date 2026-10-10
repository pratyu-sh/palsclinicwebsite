export interface Treatment {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  highlight?: boolean;
}

export const treatments: Treatment[] = [
  {
    id: "digital-smile-design",
    category: "Signature",
    title: "Digital Smile Design",
    shortDesc:
      "See your future smile before treatment begins. Personalised digital planning mapped to your facial characteristics and goals.",
    longDesc:
      "Digital Smile Design uses digital analysis to plan your smile personalised to your face, teeth, and desired outcome — giving you a preview before treatment begins.",
    image: "/images/dsd-visual.jpg",
    highlight: true,
  },
  {
    id: "dental-implants",
    category: "Restorative",
    title: "Dental Implants",
    shortDesc:
      "Carefully planned tooth replacement that looks, feels, and functions like your natural teeth.",
    longDesc:
      "Dental implants are a long-term solution for missing teeth, surgically placed and restored to integrate with your natural bite.",
    image: "/images/treatment-implants.jpg",
    highlight: true,
  },
  {
    id: "full-mouth-rehabilitation",
    category: "Restorative",
    title: "Full-Mouth Rehabilitation",
    shortDesc:
      "Comprehensive restorative care designed to restore function, health, and aesthetics across your entire mouth.",
    longDesc:
      "Full-mouth rehabilitation combines multiple restorative and cosmetic procedures to completely rebuild a patient's bite and smile.",
    image: "/images/treatment-cosmetic.jpg",
    highlight: true,
  },
  {
    id: "cosmetic-dentistry",
    category: "Cosmetic",
    title: "Cosmetic Dentistry",
    shortDesc:
      "Aesthetic dental treatment personalised to the patient — from whitening to veneers and complete smile makeovers.",
    longDesc:
      "Cosmetic dentistry focuses on the appearance of your teeth and smile, using a range of techniques tailored to your goals.",
    image: "/images/treatment-cosmetic.jpg",
  },
  {
    id: "crowns-bridges",
    category: "Restorative",
    title: "Crowns & Bridges",
    shortDesc:
      "Restore both function and appearance for damaged or missing teeth using carefully crafted prosthetics.",
    longDesc:
      "Dental crowns and bridges restore teeth that are damaged, decayed, or missing — using high-quality materials matched to your natural teeth.",
    image: "/images/treatment-implants.jpg",
  },
  {
    id: "root-canal",
    category: "Endodontics",
    title: "Root Canal Treatment",
    shortDesc:
      "Pain-focused treatment designed to preserve your natural teeth and eliminate infection at the source.",
    longDesc:
      "Root canal treatment removes infected pulp from within a tooth, relieving pain and preventing extraction.",
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "aligners",
    category: "Orthodontics",
    title: "Aligners",
    shortDesc:
      "Discreet, removable orthodontic treatment that gradually straightens teeth with minimal impact on your daily life.",
    longDesc:
      "Clear aligners offer a near-invisible way to straighten teeth, using a series of custom-made, removable trays.",
    image: "/images/treatment-cosmetic.jpg",
  },
];
