"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scan, Layers, ShieldCheck, Heart } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Scan,
    number: "01",
    title: "Digital Planning",
    description:
      "Technology-assisted planning with Digital Smile Design — so you can see and evaluate your proposed outcome before treatment begins.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Implant & Restorative Expertise",
    description:
      "Specialist-led implant and full-mouth rehabilitation treatment, combining functional precision with aesthetic outcomes.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Modern Clinical Care",
    description:
      "A contemporary clinical environment with sterilised instruments for every procedure and a commitment to your safety and comfort.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Patient-Centred Experience",
    description:
      "Treatment explained clearly at every stage. No rush, no jargon — just honest guidance and a team that listens.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-us"
      aria-label="Why Dr. Arora's"
      style={{
        background: "var(--primary-dark)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        overflow: "hidden",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem", maxWidth: "680px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ color: "var(--accent)", marginBottom: "1rem" }}
          >
            Why Dr. Arora&apos;s
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-display-lg"
            style={{ color: "#fff" }}
          >
            Precision in treatment.{" "}
            <em style={{ color: "var(--sage)", fontStyle: "italic" }}>
              Personalisation in care.
            </em>
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                style={{
                  padding: "1.75rem",
                  background: "rgba(18, 63, 70, 0.45)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(199,166,106,0.15)",
                      border: "1px solid rgba(199,166,106,0.25)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      color: "var(--sage)",
                    }}
                  >
                    {pillar.number}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      color: "#fff",
                      marginBottom: "0.625rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.65,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
