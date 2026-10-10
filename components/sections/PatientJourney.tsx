"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { journeySteps } from "@/data/journey";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PatientJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="patient-journey"
      aria-label="Patient journey"
      style={{
        background: "var(--surface)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ marginBottom: "0.875rem" }}
          >
            Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-display-md"
            style={{ color: "var(--ink)", maxWidth: "560px" }}
          >
            From first consultation to confident smile.
          </motion.h2>
        </div>

        {/* Journey Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Steps Column */}
          <div className="lg:col-span-6 flex flex-col gap-1">
            {journeySteps.map((step, i) => (
              <motion.button
                key={step.number}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  padding: "1.125rem 1rem",
                  borderRadius: "var(--radius-md)",
                  background: activeStep === i ? "var(--background)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.25s ease",
                  position: "relative",
                  width: "100%",
                }}
              >
                {/* Number & timeline indicator */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        activeStep === i
                          ? "var(--primary)"
                          : i < activeStep
                          ? "var(--sage-light)"
                          : "var(--surface-warm)",
                      border: `2px solid ${
                        activeStep === i
                          ? "var(--primary)"
                          : i < activeStep
                          ? "var(--sage)"
                          : "var(--border)"
                      }`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color:
                          activeStep === i
                            ? "#fff"
                            : i < activeStep
                            ? "var(--teal)"
                            : "var(--ink-muted)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div
                      style={{
                        width: 2,
                        height: 28,
                        background:
                          i < activeStep ? "var(--sage)" : "var(--border)",
                        transition: "background 0.3s ease",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>

                {/* Step Title & Subtitle */}
                <div style={{ paddingTop: "0.25rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: activeStep === i ? "var(--teal)" : "var(--ink-muted)",
                      marginBottom: "0.25rem",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {step.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: activeStep === i ? "var(--ink)" : "var(--ink-soft)",
                      lineHeight: 1.3,
                      transition: "color 0.25s ease",
                    }}
                  >
                    {step.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail Card Panel */}
          <div className="lg:col-span-6 lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease }}
              >
                {/* Visual */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/10",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    background: "var(--surface-warm)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Image
                    src="/images/clinic-interior.jpg"
                    alt={journeySteps[activeStep].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(9,45,51,0.65) 0%, transparent 50%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "3rem",
                        color: "rgba(255,255,255,0.25)",
                        lineHeight: 1,
                      }}
                    >
                      {journeySteps[activeStep].number}
                    </span>
                  </div>
                </div>

                {/* Text Detail Box */}
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--background)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Step {journeySteps[activeStep].number} of 05
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      color: "var(--ink)",
                      marginBottom: "0.625rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {journeySteps[activeStep].title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--ink-soft)",
                      lineHeight: 1.7,
                    }}
                  >
                    {journeySteps[activeStep].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


