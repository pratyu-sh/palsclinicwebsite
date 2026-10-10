"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const intents = [
  {
    id: "smile",
    label: "I want to improve my smile",
    subLabel: "Digital Smile Design · Cosmetic Dentistry",
    href: "#digital-smile-design",
    color: "var(--teal)",
  },
  {
    id: "missing",
    label: "I have missing teeth",
    subLabel: "Dental Implants",
    href: "#treatments",
    color: "var(--primary)",
  },
  {
    id: "restore",
    label: "I need a complete smile restoration",
    subLabel: "Full-Mouth Rehabilitation",
    href: "#treatments",
    color: "var(--teal)",
  },
  {
    id: "damaged",
    label: "I have a damaged tooth",
    subLabel: "Crowns · Restorations",
    href: "#treatments",
    color: "var(--primary)",
  },
  {
    id: "pain",
    label: "I have tooth pain",
    subLabel: "Root Canal · Emergency Care",
    href: "#treatments",
    color: "var(--teal)",
  },
  {
    id: "straight",
    label: "I want straighter teeth",
    subLabel: "Aligners",
    href: "#treatments",
    color: "var(--primary)",
  },
  {
    id: "unsure",
    label: "I'm not sure — I need advice",
    subLabel: "Book a Free Consultation",
    href: "#book",
    color: "var(--accent-dark)",
    highlight: true,
  },
];

export default function PatientIntent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="patient-intent"
      aria-label="What would you like to improve?"
      style={{
        background: "var(--surface)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ marginBottom: "0.875rem" }}
          >
            Find Your Starting Point
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-display-md"
            style={{ color: "var(--ink)" }}
          >
            What would you like to improve?
          </motion.h2>
        </div>

        {/* Intent Grid / Mobile Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {intents.map((intent, i) => (
            <motion.a
              key={intent.id}
              href={intent.href}
              onClick={(e) => handleClick(e, intent.href)}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.375rem",
                background: intent.highlight ? "var(--primary)" : "var(--background)",
                borderRadius: "var(--radius-lg)",
                border: `1.5px solid ${intent.highlight ? "var(--primary)" : "var(--border)"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                textDecoration: "none",
                minHeight: 60, // 60px min touch height
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: intent.highlight ? "#fff" : "var(--ink)",
                    marginBottom: "0.2rem",
                    lineHeight: 1.35,
                  }}
                >
                  {intent.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: intent.highlight ? "rgba(255,255,255,0.75)" : "var(--ink-soft)",
                  }}
                >
                  {intent.subLabel}
                </p>
              </div>
              <ArrowRight
                size={18}
                style={{
                  color: intent.highlight ? "rgba(255,255,255,0.85)" : intent.color,
                  flexShrink: 0,
                  marginLeft: "0.875rem",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
