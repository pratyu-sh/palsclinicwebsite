export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Tell us what you'd like to change.",
    description: "Your goals come first.",
    detail:
      "Begin with a simple conversation about what bothers you, what you'd like to improve, and what matters most to you. There's no judgement — just listening.",
  },
  {
    number: "02",
    title: "Meet your dentist.",
    description: "A thorough, unhurried examination.",
    detail:
      "Dr. Arora conducts a comprehensive clinical assessment of your teeth, gums, bite, and overall oral health. You'll receive honest, clear answers to all your questions.",
  },
  {
    number: "03",
    title: "Understand your options.",
    description: "Clarity before commitment.",
    detail:
      "We walk you through every relevant treatment option, what each involves, realistic timelines, and associated costs. No pressure, no rush — informed decisions only.",
  },
  {
    number: "04",
    title: "Explore your personalised treatment plan.",
    description: "Designed around you.",
    detail:
      "Your treatment plan is built specifically for your situation. Where applicable, Digital Smile Design gives you a visual preview of your proposed outcome before we begin.",
  },
  {
    number: "05",
    title: "Move forward with confidence.",
    description: "You're in control.",
    detail:
      "Treatment begins when you're ready and comfortable. Our team supports you at every stage — before, during, and after — to ensure the best possible experience and outcome.",
  },
];
