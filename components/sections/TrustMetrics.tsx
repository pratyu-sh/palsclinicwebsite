"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clinic } from "@/data/clinic";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  { value: `${clinic.rating}`, unit: "/ 5", label: "Google Rating" },
  { value: `${clinic.reviewCount}+`, unit: "", label: "Google Reviews" },
  { value: "12+", unit: " Yrs", label: "Clinical Experience" },
  { value: "Modern", unit: "", label: "Digital Dental Care" },
];

export default function TrustMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      aria-label="Trust metrics"
      style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.75rem 1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2px",
                  marginBottom: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.625rem, 4vw, 2.5rem)",
                    color: "var(--primary)",
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >
                  {m.value}
                </span>
                {m.unit && (
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      fontWeight: 600,
                    }}
                  >
                    {m.unit}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
